const app = Vue.createApp({
    //data is required and returns an object
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!'
        }; 
    }
});

app.mount('#user-goal');