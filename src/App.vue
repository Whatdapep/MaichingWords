<template>
  <div id="app" class="container-fluid bg-gray-100 text-center mx-auto" >
  <div class="box-content flex flex-1">
    <img class="m-auto" alt="Vue logo" src="./assets/logo.png">
    </div>
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Main
  }
}
</script>

<style>
</style>
