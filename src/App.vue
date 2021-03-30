<template>
  <div id="app">
    <!-- <my-button>click me</my-button> -->
    <my-dropdown @command="handleCommand">
      <my-button slot="default">click me</my-button>
      <my-dropdown-menu slot="dropdown">
        <my-dropdown-item key="0">option1</my-dropdown-item>
        <my-dropdown-item key="1">option2</my-dropdown-item>
      </my-dropdown-menu>
    </my-dropdown>
  </div>
</template>

<script>
//import Dropdown from './components/Dropdown.vue';
//import HelloWorld from "./components/Dropdown.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  methods: {
    handleCommand() {},
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
