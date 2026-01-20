const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
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
    },
    setName(item) {
      this.name = item.target.value;
    }
  }
});

app.mount('#events');
