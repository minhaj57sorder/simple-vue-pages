<template>
    <div class="sidebar">
        <ul>
            <li v-for="(item,index) in dashbordListing" :key="index">
                <router-link class="btn" :to="item.link">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Sidebar",
    data(){
        return{
            dashbordListing:[
                {name:'Profile',link:"#"},
                {name:'Post',link:"#"},
                {name:'Setting',link:"#"},
            ]
        }
    }
}
</script>
<style>
.sidebar ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.sidebar ul li{
    padding: 15px 0;
    background-color: #34475a;
    padding: 15px 0px;
}
.sidebar ul li a{
    padding: 15px 0;
    background-color: #34475a;
    text-decoration: none;
    color: white;
    padding: 20px 15px;
}
.sidebar ul li .btn{
  padding: 15px 2px 15px 25px;
}
.sidebar ul li .btn:hover{
  background-color: #34475a;
}
.sidebar ul li .btn:active{
  background-color: #48617a;
}
.sidebar ul li .router-link-active{
  color: #bee0ff;
}
</style>