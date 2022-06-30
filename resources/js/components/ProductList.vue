<template>
    <div>
        <h2 class="text-center">groceries List</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <!--<th>Actions</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="grocery in groceries" :key="grocery.id">
                    <td>{{grocery.id}}</td>
                    <td>{{grocery.name}}</td>
                    <td>{{grocery.detail}}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'edit', params: {id: grocery.id}}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deletegrocery(grocery.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
       data(){
          return{groceries:[]}
        },
       created(){
            this.axios.get('http://localhost:8000/api/groceries/').then(response => {
                this.groceries = response.data;
             });
        },
       methods:{
           deletegrocery(id){
                this.axios.delete('http://localhost:8000/api/groceries/${id}').then(response =>{
                    let i=this.groceries.map(data=>data.id).indexOf(id);
                    this.groceries.splice(i, 1)
                });
            }
        }
    } 
</script>