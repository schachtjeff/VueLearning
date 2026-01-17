const app = Vue.createApp({
    //data is required and returns an object
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        }; 
    }
});

app.mount('#user-goal');