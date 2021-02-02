/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here 
const answer = document.getElementsByTagName("span");

// Display the BOM Information on the innerHTML of the elements

// location
answer[0].innerHTML = window.location.href;
answer[1].innerHTML = window.location.protocol;
answer[2].innerHTML = window.location.host;
answer[3].innerHTML = window.location.port;
answer[4].innerHTML = window.location.hostname;

// navigator
answer[5].innerHTML = window.navigator.appName;
answer[6].innerHTML = window.navigator.appVersion;
answer[7].innerHTML = window.navigator.platform;
answer[8].innerHTML = window.navigator.language;
answer[9].innerHTML = window.navigator.cookieEnabled;

// screen information
answer[10].innerHTML = window.screen.height;
answer[11].innerHTML = window.screen.width;
answer[12].innerHTML = window.screen.pixelDepth;

// beowziong history
answer[13].innerHTML = window.history.length;
answer[14].innerHTML = window.history.state;