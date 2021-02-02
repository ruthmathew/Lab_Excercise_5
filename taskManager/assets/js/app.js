$(".dropdown-trigger").dropdown();

// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button



// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

// Add New  Task Function definition 
function addNewTask(e) {

    if (taskInput.value === '') 
     {
        // alert('Enter New Task');
        taskInput.style.borderColor = "red";
        return;     //avoiding else statement

     }

     // create an li element
    const li = document.createElement('li');
    // add a class to the li
     li.className = "collection-item";
     // Apend text element from input
     li.appendChild(document.createTextNode(taskInput.value));
     // create an a element
     const link = document.createElement('a');
     // add inner html with an icon
     link.innerHTML = '<i class="fa fa-remove"></i>';
     // add a class
     link.className = 'delete-item secondary-content';
     // append a to li
     li.appendChild(link);
     // add li to ul
     taskList.appendChild(li);
     // Remove task event [event delegation]
   taskList.addEventListener('click', removeTask);



    e.preventDefault(); //disable form submission
}

// Clear Task Function definition 
function clearAllTasks() {

    
//  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


    alert("Clear tasks ....");

}

// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

    var input = filter.value;
    const search = document.querySelectorAll(".collection-item");
    search.forEach(element => {
        if ((element.textContent).indexOf(input) > -1){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }
    });

        

}

// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}

//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   
 
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}


