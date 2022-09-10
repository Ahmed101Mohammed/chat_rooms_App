// main parts:
const input = document.querySelector('.container form input');
const button = document.querySelector('.container form .button');

// Add to local storage:
const addToLocal = ()=>{
    value = input.value;
    window.localStorage.setItem('userName',value); 
}

// add event listener:
button.addEventListener('click',addToLocal);