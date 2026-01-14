//VueJS - Desire Result
Vue.createApp({
    //Data object property
    data() {
        return {
            // Array of goals and extracted input from user.
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            // Adds the input to the array.
            this.goals.push(this.enteredValue);
            // Clears the text box after every submission.
            this.enteredValue = '';
        }
    }
// Need to mount to the div on the html
}).mount('#app');


// JavaScript Imperitive approach, step-by-step
/* const buttonEl = document.querySelector('button');
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

buttonEl.addEventListener('click', addGoal); */