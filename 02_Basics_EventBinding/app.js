const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementer(number) {
      //this.counter++;
      // Adding parameter number
      this.counter = this.counter + number
    },
    decrementer(number) {
      //this.counter--;
      // Adding parameter number
      this.counter = this.counter - number
    }
  }
});

app.mount('#events');
