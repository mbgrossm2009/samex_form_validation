// Javascript Exercise #3 (scripts/functions)
// ( It’s not a complement for the Space Agency Project, just exercises):
// 1 - Create an empty script called main_functions.js

// 2 - Create a function named ​findMin​​, this function takes 1 parameter that is the array of numbers and it should return the minimal value in that array. Use your own implementation.

let integers = [23,5,-4,52,0,-32];
let minNum = null;
let maxNum = null;

function findMin(integers) {
    for(i=0;i<integers.length;i++){
        if(integers[i] < minNum){
            minNum = integers[i];
        }
    }
    findMin(array);
}

// 3 - Create a function named ​findMax​​, this function takes 1 parameter that is the array of numbers and it should return the maximum value in that array. Use your own implementation or a native javascript implementation.


function findMax() {
    for(i=0;i<integers.length;i++){
        if(integers[i] > maxNum){
            maxNum = integers[i];
        }
    }
    findMax(integers);
}


// 3 - Create another function called ​gatherNames​​, this function takes 2 parameters, the first name and the second name of the person.
// For example:
// If you do : gatherNames (“Samex”,”LLC”); It should return : Samex LLC
function gatherNames(first_name, last_name){
    document.write(first_name + last_name)
}
// 4 - Create another functions called ​isUnderFifteen​​ and ​isOverOrEqualsFifteen​​ , each of these functions takes 1 parameter that is the age, and you should verify if the age passed as parameter is under, over or equals to 15. Return true or false.

function isUnderFifteen(age){
    if(age<15){
        return true
    }   
}
function isOverOrEqualsFifteen(age){
    if(age>=15) {
        return true
    }
}
// 5 - Create another function called ​verifyPassword​​, this functions takes 2 parameters and you should compare if they are equal or not. Return ​true​​ if they are equal ​false​​ otherwise.

function verifyPassword(password, confirm_password){
    if(password == confirm_password ){
        return true
    } else if  (password != confirm_password) {
     return false
    }   
}




//  6 - Build up an HTML page, which will hold a form that contains
// ● First Name and Last Name
// ● E-mail (you could use <input type=”email”> if you want)
// ● Age
// ● Password
// ● Confirm Password
// ● A button to submit the form
// The form should contain a call to one of the native HTML5 functions like :
// onmouseover, onclick, onmouseout,ondblclick ... and so on. Choose whatever you think is cooler for now.
// 7 - Import your main_functions.js
// 8 - Create a <script> tag at the end of your html file. Create a function called checkAll. This function will check all of your data that comes from the user. You must make usage of your functions that you create in main_function.js .
// Hint: Use document.getElementById(‘id_of_some_element’).value
// To get the value from the html element.
// After catching the element you must sent to your functions from main_function.js;
// Hint #2 : Use preventDefault function to prevent that the form complete its job of sending
// to a server if something goes wrong with the age or the password.
