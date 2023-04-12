/* Requirements
1. When buttons are clicked they need to increase, reset, and decrease the counter
2. setup cick events for buttons
3. create variables for the counter and buttons
4. create logic to increase, decrease and reset counter depending on which button is clicked

*/
//setup variables
let counter = 0;
const increaseButton = document.getElementById('increase');
const resetButton = document.getElementById('reset');
const decreaseButton = document.getElementById('decrease');
let count_span = document.getElementById('count');

//Setup click events for increase, reset, and decrease buttons
increaseButton.addEventListener('click', function(){
    increase();
})

resetButton.addEventListener('click', function(){
    reset();
})

decreaseButton.addEventListener('click', function(){
    decrease();
})

// setup functions for each button to increase, decrease and reset counter
function increase(){
   counter++;
   count_span.innerHTML = counter;
}

function reset(){
    counter = 0;
    count_span.innerHTML = counter;
 }

 function decrease(){
    counter--;
    count_span.innerHTML = counter;
 }