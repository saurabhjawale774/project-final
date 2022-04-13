import axios from "axios";
const base_url="http://localhost:9090/customer";   // call tomcat server

class CustomerServices{

    getCustomerList(){
        return axios.get(base_url+"/customerList");
    }

    postCustomer(customer){
        // axios.post(`${baseurl}/login`, user).then((response) => {
            console.log("customer post service");
        return axios.post(base_url+"/login",customer);
    }
    getCustomerById(id){
        return axios.get(base_url+"/getCustomer/"+id);
    }
    deleteCustomer(id){
        return axios.delete(base_url+"/deleteCustomer/"+id);
    }
    addCustomer(customer){
        return axios.post(base_url+"/addCustomer",customer,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }
    updateCustomer(customer){
        return axios.post(base_url+"/updateCustomer",customer,{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

}
export default new CustomerServices();