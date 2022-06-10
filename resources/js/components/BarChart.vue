<template>
  <Bar v-if ='loaded' 
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { onMounted } from 'vue'
import useGroceries from '../services/GroceryServices'
import { Bar }  from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { data } from 'browserslist'
import axios from 'axios'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  extends: Bar,
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  // async mounted () {
  //   this.loaded = false

  //   try {
  //     const response = await fetch('/api/groceries')
  //     this.chartdata = userlist
  //     console.log(response)
  //     this.loaded = true
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, 
  async mounted() {
    this.loaded = false
    
      console.log(await axios.get('/api/groceries'))
      
      const {
        arrProduct,
        arrQuantity
      } = (await axios.get('/api/groceries')).data.data.reduce((acc,d) => {
            acc.arrProduct.push(d.name)
            acc.arrQuantity.push(d.amount)
            return acc;
        },{
            arrProduct: [],
            arrQuantity: [],
        });

      this.chartData = {
        labels: arrProduct,
        datasets: [ { data: arrQuantity } ]
      },
      this.chartOptions= {
        responsive: true
      }
      this.loaded = true
  }
}
</script>