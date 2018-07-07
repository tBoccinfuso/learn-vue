import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  data: {
    title: 'Welcome to your Vue app!',
    linkMsg: ' , look a random link - ',
    link: 'https://www.google.ca',
    name: '',
    message: '',
    counter: 0,
    X: 0,
    Y: 0
  },
  computed: {
    halfCoords: function(){
      this.X = this.X / 2;
      this.Y = this.Y / 2;
    }
  },
  watch: {
    X: function(value){
      var vm = this;
      setTimeout(function(){
        vm.X = (vm.X / 2);
      },3000);
    },
    Y: function(value){
      var vm = this;
      setTimeout(function(){
        vm.Y = (vm.Y / 2);
      },3000);
    }
  },
  methods: {
    displayTitle: function(){       
      return this.title;
    },
    displayLink: function(){
      this.title = 'Hello ';
      return this.title + this.name +this.linkMsg;
    },
    clickEvent: function(){
      this.counter++;
      if(this.counter >= 10)
      this.counter = 0;
    },
    step: function(step){
      this.counter += step;
    },
    getLocation: function(event){
      this.X = event.clientX;
      this.Y = event.clientY;
    },
    submit: function(){
      alert('Thanks for submitting. Your message was: ' + this.message);
    }
  }
})
