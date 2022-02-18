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
</template>
<script>
    export default{
        name:'AddMaterial',
        data(){
            return{
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
                this.$emit('add-new',newp)
                console.log(this.matarials)
                this.pname=''
                this.pqty=''
                this.psupplier=''
            }
        }
        }
    }
</script>
<style scoped>
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