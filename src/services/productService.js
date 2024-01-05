import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:7148/api/Products/getall")
    }
    getById(productId){
        return axios.get("https://localhost:7148/api/Products/getbyid?id="+ productId)
    }
}