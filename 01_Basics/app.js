const app = Vue.createApp({
    //data is required and returns an object
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            //If your data comes in with html tags you can use the 'v-html' directive.
            //courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
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