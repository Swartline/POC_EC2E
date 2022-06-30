<template>
    <div class="border">
        <h1 class="left">
            Epicerie
        </h1>
        <h1 class="right">
            {{user}}
        </h1>
        <div style="clear: both;"></div>
    </div>
    <div>
        <button @click="redirectToRoute('Add')">add</button>
    </div>
    <div style="display: flex; justify-content: space-between;">
        <div class="bar-chart">
            <Bar
                :chart-options="chartOptions"
                :chart-data="barChartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
            />
        </div>
        <table>
        <tr>
            <th>
                Nom
            </th>
            <th>
                quantité
            </th>
            <th>
                Prix
            </th>
        </tr>
        <tr v-for="product in products ">
            <td>
                {{product.name}}
            </td>
            <td>
                {{product.amount}}
            </td>
            <td>
                {{product.unit_price}}
            </td>
        </tr>
    </table>
        <div class="pie-chart">
            <Pie
                :chart-options="chartOptions"
                :chart-data="pieChartData"
            />
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
    name: 'BarChart',
    components: { Bar, Pie},
    data() {
        return {
            user: "",
            chartId: 'bar-chart',
            datasetIdKey: 'label',
            width: 400,
            height: 400,
            cssClasses: '',
            styles: {},
            plugins: {},
            products: [],

            barChartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: []
            },
            pieChartData:{
                labels:  ['Fruits', 'Légumes'],
                datasets: []
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {
        this.user = "Charles Bruant"
      axios.get('/api/groceries').then(({data}) => {
          console.log(data)
          let amounts = []
          let labels = []
          let prices = []
          let fruitsNumber = 0
          let vegetablesNumber = 0

          this.products = data


            data.forEach(product => {
                labels.push(product.name)
                amounts.push(product.amount)
                prices.push(product.unit_price)
                if(product.type === 'Fruit'){
                    fruitsNumber += product.amount;
                }else{
                    vegetablesNumber += product.amount;
                }

            });
          this.pieChartData.datasets = [ {
                    label:'type',
                    backgroundColor: ['#29DE2A','#DE2946'],
                    data: [fruitsNumber, vegetablesNumber]
                }] 
          this.barChartData.labels = labels
          this.barChartData.datasets =
            [
                {
                    label:'quantité',
                    backgroundColor: '#2962DE',
                    data: amounts
                }, 
                {
                    label:'prix',
                    backgroundColor: '#f78539',
                    data: prices
                }
           ]
      })
    },
    methods: {
        redirectToRoute(name){
            this.$router.push({name: 'create'})
        }
    },
}
</script>

<style>
.bar-chart {
    height: 400px;
    width: 400px;
}
.pie-chart{
    height: 400px;
    width: 400px;
}
</style>
