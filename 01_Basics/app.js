const app = Vue.createApp({
    //data is required and returns an object
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        }; 
    },
    // Are callable to the program.
    methods: {
        //Must have parantheses
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'I know Vue!';
            }

        }
    }
});

app.mount('#user-goal');