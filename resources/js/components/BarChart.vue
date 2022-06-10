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
  // mounted() {
  //   const totalsP = this.chartData.map(d => d.totalP);
  //   const totalsQ = this.chartData.map(d => d.totalQ);

  //   this.renderChart(
  //     {
  //       labels: totalsP,
  //       datasets: [{
  //         label: this.label,
  //         data: totalsQ
  //       }]
  //     },
  //     this.Options
  //   );
  // },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'april' ],
        datasets: [ { data: [40, 20, 12, 25] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>