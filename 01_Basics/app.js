const app = Vue.createApp({
    //data is required and returns an object
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        }; 
    },
    // Are callable to the program.
    methods: {
        //Must have parantheses
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }

        }
    }
});

app.mount('#user-goal');