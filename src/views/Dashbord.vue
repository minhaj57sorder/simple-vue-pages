<template>
    <div class="dashbord-container">
        <div class="sidebar-container">
            <Sidebar />
        </div>
        <div class="elements-container">
            <AddMaterial @add-new="registerNewMaterial" />
            <div class="table">
                <table>
                    <caption>List of all matarials</caption>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(matarial,index) in matarials" :key="index">
                            <td>{{9>index?"0":''}}{{index+1}}</td>
                            <td>{{matarial.name}}</td>
                            <td>{{matarial.qty}}</td>
                            <td>{{matarial.supplier}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import AddMaterial from '../components/AddMaterial.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
    name:'Dashbord',
    components:{
        AddMaterial,
        Sidebar,
    },
    data(){
        return{
            matarials:[
                {name:'Iron',qty:5,supplier:'BSRMS'},
                {name:'Copper',qty:10,supplier:'Paradise'},
                {name:'Color',qty:8,supplier:'Rainbow'},
            ]
        }
    },
    methods:{
        registerNewMaterial(data){
            this.matarials = [...this.matarials, data]
        }
    }
}
</script>

<style>
.dashbord-container{
    display: flex;
    flex-direction: row;
}
.sidebar-container{
    width: 150px;
    color: white;
    background-color: #34475a;
    min-height: calc(100vh - 78px);
}
.table table{
    width: 100%;
    background-color: #dddddd;
}
.table caption{
    padding: 15px;
    background-color: #00ffff;
}
.table thead{
    background-color: #faebd7;
}
.table tbody tr td{
    text-align: center;
    /* padding-left: 7px; */
}
.table tbody tr:nth-of-type(even){
    background-color: #f5eee4;
}
</style>