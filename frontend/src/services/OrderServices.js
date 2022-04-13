import axios from "axios";
const base_url="http://localhost:9090/order/";   // call Tomcat server

class OrderServices{
   
    getorder(){
        return axios.get(base_url+"getAllOrders");
    }
    
    //   order by cust id  for only  cust
    getOrderByCustId(cid){
        console.log("Id in order by cust id : "+cid)
        return axios.get(base_url+"getByCustId/"+cid);
    }

    //  order by id
    getOrderById(id){
        return axios.get(base_url+"getById/"+id);
    }

    //  delete order   owner and cust by order id
    deleteOrder(id){
        return axios.delete(base_url+"deleteOrder/"+id);
    }

    //    add order  by customer 
    addorder(order){
        let cid=sessionStorage.getItem('logId');
        return axios.post(base_url+"addOrder/"+cid,order,{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    //   get order by status pending / completed / cancelled 
    getOrderByStatus(status){
        return axios.get(base_url+"getByStatus/"+status);
    }


    //  update status   --->  change by owner
    updateOrder(order){
        console.log("Order update method  : "+order.ordersId+"  "+order.totalAmt)
        return axios.post(base_url+"updateOrder/"+order.ordersId,order, {
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    CompleteOrder(oid){
        console.log("Order update method  : "+oid)
        return axios.post(base_url+"completeOrder/"+oid, {
            headers:{
                'Content-Type':'application/json'
            }
        });
    }
    
    getOrderDetail(oid){
       
        return axios.get(base_url+"getOrdedrDetails/"+oid);
    }

}
export default new OrderServices;