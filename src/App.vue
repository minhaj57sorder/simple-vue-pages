<template>
  <Header />
  <div class="container">
   <router-view></router-view>
  </div>
  <div class="footer"> <p>copywrite &copy; 2022 </p></div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  methods:{
  }
}
</script>

<style>
body{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
}
.container{
  padding-bottom: 15px;
}
.footer{
  position: absolute;
  bottom:0;
  color: white;
  background-color: #2c3e50;
  width: 100%;
  text-align: center;
}
.footer p{
  padding: 5px;
  margin: 0;
}
</style>
