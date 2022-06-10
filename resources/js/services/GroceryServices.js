
import { ref } from "vue";
import axios from 'axios'

export default function useGroceries() {
    const arrProduct= ref([]);
    const arrQuantity= ref([]);
    const arrType= ref([]);
    
    const getGrocery = async() => {

    // make a request to the laravel api to get all the Grocery
        let response = await axios.get('/api/groceries')
        const obj = response.data.data.reduce((acc,d) => {
            acc.arrProduct.push(d.name)
            acc.arrQuantity.push(d.amount)
            acc.arrType.push(d.type)
            return acc;
        },{
            arrProduct: [],
            arrQuantity: [],
            arrType: []
        });
       arrProduct.value = obj.arrProduct;
       arrQuantity.value = obj.arrQuantity;
       arrType.value = obj.arrType;

    }


    return {
        getGrocery,
        arrProduct,
        arrQuantity,
        arrType
    }
}