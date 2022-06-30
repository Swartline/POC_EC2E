<template>
    <div>
        <h3 class="text-center">Edit grocery</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updategrocery">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="grocery.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="grocery.detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{grocery:{}}
              },
        created(){
            this.axios.get(`/api/groceries/${this.$route.params.id}`).then((res)=> 
                    {this.grocery = res.data;});
                 },
        methods:{
            updategrocery(){
                this.axios.patch(`/api/groceries/${this.$route.params.id}`, this.grocery).then((res)=> 
                {this.$router.push({name: 'home'});});
                           }
                 }
                } 
</script>