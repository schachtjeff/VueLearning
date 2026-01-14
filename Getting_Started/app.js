const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    //Extract the input from the goal entered
    const enteredValue = inputEl.value;
    //Create new list item in the document
    const listItemEl = document.createElement('li');
    // Take the extracted value and enter it into the list.
    listItemEl.textContent = enteredValue;
    // Append the li item into the whole list.
    listEl.appendChild(listItemEl);
    // Clears the text box after every submission.
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);