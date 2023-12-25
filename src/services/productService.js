import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:7061/api/Products/getall")
    }
}