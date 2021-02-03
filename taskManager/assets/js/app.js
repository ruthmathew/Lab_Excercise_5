// Define UI Variables
const taskInput = document.querySelector("#task"); //the task input text field

const form = document.querySelector("#task-form"); //The form at the top

const filter = document.querySelector("#filter"); //the task filter text field

const taskList = document.querySelector(".collection"); //The ul

const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const reloadIcon = document.querySelector(".fa"); // the reload button at the top right of navigation


// Add new Task Function definition
function addNewTask(e) {
  const dateID = Date.now();
  if (taskInput.value == "") {
    // alert("Enter New Task"); removed
    taskInput.style.borderColor = "red";
    return; // Avoiding else statement
  }
  // Creat an li element when the user adds a task
  const li = document.createElement("li");
  // adding a class
  li.className = "collection-item";
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  const dateDiv = document.createElement("div");
  dateDiv.className = "dateDiv";
  dateDiv.style.display = "none";
  dateDiv.textContent = dateID;
  li.appendChild(dateDiv);
  // Append link to li
  li.appendChild(link);
  // Append to ul
  taskList.appendChild(li);
  taskInput.value = "";

  // alert("Add New Task ..."); removed
  e.preventDefault(); // Disable from submission
}

// Clear Task Function definition
function clearAllTasks() {
  // alert("Clear tasks ...") removed

  // This is the first way
  // taskList.innerHTML = "";

  // Second Way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filter tasks function definition
function filterTasks(e) {

/*  
//     Instruction for Handling the Search/filter 

//     1. Receive the user input from the text input 
//     2. Assign it to a variable so the us can reuse it 
//     3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
//     4. Iterate over the collection item Node List using forEach
//     5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
//     6 . If it contains , change the display content of the element as block , else none


//     */

  const itemList = document.querySelectorAll(".collection-item");
  if (filter.value == "") {
    itemList.forEach(function (member) {
      member.style.display = "block";
    });
  } else {
    const searchedItem = filter.value;
    itemList.forEach(function (member, index) {
      if (searchedItem == member.firstChild.textContent) {
        member.style.display = "block";
      } else {
        member.style.display = "none";
      }
    });
  }
}

// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ? ")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Reload Page Function [BOM Object Event]
function reloadPage() {
  // using the reload fun on location object
  location.reload();
}
// Add Event Listener [Form, clearBt and filter search input]
// form submit
form.addEventListener("submit", addNewTask);
// clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

// sorting button
$(".dropdown-trigger").dropdown();
const ascendingBtn = document.querySelector(".ascending-btn");
const descendingBtn = document.querySelector(".descending-btn");
const collectionSorted = document.querySelector(".collection-sorted");

// ascending sorting
function ascendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingArray = new Array();
  const currentTime = Date.now();
  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".dateDiv");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingArray[i] = [differenceTime, i];
  }
  orderingArray.sort();
  for (let i = 0; i < unorderedList.length; i++) {
    collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
  }
  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingArray[i][1]]);
  }
}

// descending sorting
function descendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingArray = new Array();
  const currentTime = Date.now();
  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".dateDiv");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingArray[i] = [differenceTime, i];
  }
  orderingArray.sort();
  orderingArray.reverse();
  for (let i = 0; i < unorderedList.length; i++) {
    collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
  }
  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingArray[i][1]]);
  }
}

ascendingBtn.addEventListener("click", ascendingSort);
descendingBtn.addEventListener("click", descendingSort);



