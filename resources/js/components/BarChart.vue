<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Pomme', 'Clémentine', 'Abricot', 'Pastèque', 'Pomelo chinois', 'Endive', 'Navet', 'Concombre', 'chou', 'Carrote' ],
        datasets: [ { 
          backgroundColors: '#33FF5D',
          data: [15, 10, 2, 2, 20, 5, 6, 9, 10, 30] 
          } 
          ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<!-- <template>
  <div class="container">
    <Bar v-if="loaded" :chart-data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { groceries } = await fetch('/api/groceries')
      this.chartdata = groceries
      console.log(this.chartData)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script> -->