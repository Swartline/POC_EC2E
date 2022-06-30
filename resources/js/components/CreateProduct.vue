<template>
    <div>
        <h3 class="text-center">Create grocery</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addgrocery">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="grocery.name">
                    </div>
                    <div class="form-group">
                        <label>Amount</label>
                        <input type="number" class="form-control" v-model="grocery.amount">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" v-model="grocery.price">
                    </div>
                     <div class="form-group">
                        <label>Type</label>
                        <select type="text" class="form-control" v-model="grocery.type">
                                <option value="Fruit">Fruit</option>
                                 <option value="Légume">Légume</option>
                            </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default{
        data(){
            return {
                grocery:
                {   
                    name: '',
                    amount: 0,
                    price: 1,
                    type: ''

                }
            }
        },
        methods:{
            addgrocery(){
                axios.post('/api/addGrocery', this.grocery).then(response =>(this.$router.push({name: 'Home'})))
                .catch(err=> console.log(err))
                .finally(()=> this.loadin=false)
                         }
                }
               } 
</script>