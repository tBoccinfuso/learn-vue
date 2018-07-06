<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ displayTitle() }}</h1>
    <p>{{ }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      link: 'https://www.google.com'
    }
  },
  methods () {
    return {
      displayTitle: function() {
        return title;
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
