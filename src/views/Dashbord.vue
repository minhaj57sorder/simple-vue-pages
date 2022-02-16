<template>
    <div class="form">
        <form @submit="addNewProduct">
            <div>
                <label for="pname">Product Name :</label>
                <input name="pname" id="pname" v-model="pname" type="text" >
            </div>
            <div>
                <label for="pqty">Product Qty :</label>
                <input name="pqty" id="pqty" v-model="pqty" type="number" >
            </div>
            <div>
                <label for="psupplier">Product supplier :</label>
                <input name="psupplier" id="psupplier" v-model="psupplier" type="text" >
            </div>
            <div>
                <label></label>
                <button type="submit">Add new matarials</button>
            </div>
        </form>
    </div>
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
</template>

<script>
export default {
    name:'Dashbord',
    data(){
        return{
            matarials:[
                {name:'Iron',qty:5,supplier:'BSRMS'},
                {name:'Copper',qty:10,supplier:'Paradise'},
                {name:'Color',qty:8,supplier:'Rainbow'},
            ],
            pname:'',
            pqty:'',
            psupplier:'',
        }
    },
    methods:{
        addNewProduct(e){
            e.preventDefault()
            if(!this.pname){
                alert("Please enter product name")
            }else{
                const newp = {
                    name:this.pname,
                    qty: this.pqty,
                    supplier: this.psupplier
                }
                this.matarials = [...this.matarials,newp]
                console.log(this.matarials)
                this.pname=''
                this.pqty=''
                this.psupplier=''
            }
        }
    }
}
</script>

<style>
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
.form{
    padding:15px;
    max-width: 500px;
    text-align: center;
}
.form form div{
    display: flex;
    justify-content: space-between;
    padding: 5px;
}
.form form div label{
    width: 150px;
    padding:0px;
    /* font-size: 10px; */
    /* position: absolute; */
    top: -7px;
    transition:0.2s;
}
.form form div input{
    width: calc(100% - 200px);
    padding:5px;
    margin-bottom: 10px;
}
.form form div button{
    padding:5px;
    padding-left:15px;
    padding-right:15px;
    margin-bottom: 10px;
    background-color: #00910c;
    color: white;
    border-radius: 5px;
}
.form form div button:hover{
    background-color: #00860b;
}
.form form div button:focus{
    background-color: #006909;
}
input:focus{
    background: #cfffff;
}
</style>