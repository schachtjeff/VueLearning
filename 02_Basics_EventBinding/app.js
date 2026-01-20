const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementer() {
      this.counter++;
    },
    decrementer() {
      this.counter--;
    }
  }
});

app.mount('#events');
