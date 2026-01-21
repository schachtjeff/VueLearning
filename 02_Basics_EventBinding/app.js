const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
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
    },
    //For the obvious form submission
    submitForm() {
      //Tells the page not to refresh after submission with the default on
      //event.preventDefault();
      alert('Form Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  }
});

app.mount('#events');
