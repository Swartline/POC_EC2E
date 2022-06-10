<template>
    <div class="border">
        <h1 class="left">
            Epicerie
        </h1>
        <h1 class="right"> 
            Charles haller    
        </h1>
        <div style="clear: both;"></div>
    </div>
    <BarChartVue/>
</template>

<script>
import { onMounted } from 'vue';
import useGroceries from '../services/GroceryServices';
import BarChartVue from '../components/BarChart.vue';

export default {
  components:{
    BarChartVue
  }
  // async created() {
  //   const data = (await axios.get('/api/groceries')).data.data;
  //   console.log(data);

  //   data.forEach(d => {
  //     const {
  //       name,
  //       type,
  //       amount
  //     } = d;

  //     this.arrProduct.push({total: name});
  //     this.arrType.push({total: type});
  //     this.arrQuantity.push({total: amount});
  //   })
  // }
}
</script>