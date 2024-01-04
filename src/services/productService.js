import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:5056/api/Products/getall")
    }
    getById(productId){
        return axios.get("http://localhost:5056/api/Products/getbyid?id="+ productId)
    }
}