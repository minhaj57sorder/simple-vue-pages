<template>
  <div class="nav-header">
    <ul>
      <li v-for="navitem in navitems" :key="navitem.name">
        <router-link :to="navitem.link">
          {{navitem.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      navitems:[
        {name:"Home",link:'/'},
        {name:"Dashbord",link:'/dashbord'},
        {name:"About",link:'/About'},
      ]
    }
  },
  created(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-header{
  width: 100%;
  background-color:#2c3e50;
  color: white;
}
ul{
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  /* width: max-content; */
  display: flex;
  flex-direction: row;
}
ul li{
  padding: 15px;
}
ul li a{
  text-decoration: none;
  color: white;
  /* width: max-content; */
}
li:hover{
  background-color: #34475a;
}
li:active{
  background-color: #48617a;
}
</style>
