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
    <BarChartVue class="bar"></BarChartVue>
    <!-- <PieChart></PieChart> -->
</template>

<script>
import BarChartVue from '../components/BarChart.vue';
// import PieChart from '../components/PieChart';
import axios from 'axios';

export default {
  components:{
    BarChartVue//,
    // PieChart
  }
  // data() {
  //   return  {
  //     arrProduct: [],
  //     arrQuantity: [],
  //     arrType: [],
  //   };
  // },
  // async created() {
  //   const data = (await axios.get('/api/groceries')).data.data;
  //   console.log(data);
    

  //   data.forEach(d => { 
  //     const {
  //       name,
  //       type,
  //       amount
  //     } = d;

  //     this.arrProduct.push({totalP: name});
  //     this.arrType.push({totalT: type});
  //     this.arrQuantity.push({totalQ: amount});
  //     console.log(this.arrProduct);
  //   })
  // }
}
</script>