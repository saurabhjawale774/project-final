import axios from "axios";
const base_url="http://localhost:9090/product/";   // call Tomcat server

class ProductServices{

    getProduct(){
        return axios.get(base_url+"getAllProducts");
    }
    getProductById(id){
        return axios.get(base_url+"getById/"+id);
    }
    deleteProduct(id){
        return axios.delete(base_url+"deleteProduct/"+id);
    }
    addProduct(prod){
        return axios.post(base_url+"addProduct",prod,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }
    updateP(prod){
        console.log("prod.pId")
        console.log(prod.pId)
        return axios.post(base_url+"updateProduct/"+prod.pId,prod,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

}
export default new ProductServices;