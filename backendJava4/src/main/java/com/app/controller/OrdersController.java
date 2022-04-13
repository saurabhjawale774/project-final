package com.app.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.OrderDetails;
import com.app.pojos.Orders;
import com.app.pojos.Products;
import com.app.services.CustomerServices;
import com.app.services.OrderDetailsServices;
import com.app.services.OrderServic;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@EnableAutoConfiguration
@RequestMapping("/order")
public class OrdersController {
	
	@Autowired
	private OrderServic orderService;
	@Autowired
	private CustomerServices customerServices;
	@Autowired
	private OrderDetailsServices oDetailServices;
	
	public OrdersController()
	{
	   System.out.println("Default contoller  orders");
	}
	
	@GetMapping("/getAllOrders")
	public List<Orders> getAllOrders()
	{
		System.out.println("Get All Product List from Order Table");
		List<Orders> list= this.orderService.getAllOrder();
		for(Orders o : list)
			System.out.println(" Order :"+o.getOrdersId()+"  "+o.getStatus()+" "+o.getCustomer());
		return list;
	}

	//  By Order Id  --->   Ok
	@GetMapping("/getById")
	public Orders getOrderById(@PathVariable int id)
	{
	      Orders list= this.orderService.getByid(id);
		return list;
	}
	
	@DeleteMapping("/deleteOrder")
	public void deleteOrderById(@PathVariable int id)
	{
	     this.orderService.deleteOrder(id);
	}
	
	//  Add Order ----->   OK
	@PostMapping("/addOrder/{cid}")
	public void addOrder(@RequestBody List<Products> order, @PathVariable("cid")int cid)
	{
//		System.out.print("inside addorder method"+order);
		System.out.println("========== cid="+cid+"=========");
	   double amt=0.0;
		for(Products p : order) {
			System.out.println(p);
			amt=amt+p.getAmt();
		}
		Customer customer= customerServices.getCustomerById(cid);
		Orders o=new Orders();
		o.setItomCount(order.size());
		o.setCustomer(customer);
		o.setOrder_date(LocalDate.now() );
		o.setStatus("PENDING");
		o.setTotalAmt(amt);
		try {
		orderService.placeOrder(o);
		}
		 catch(NullPointerException e) {
				System.out.println(e+"Order NOt Placed ");
				
		}
		int OId=orderService.getMaxOrderId();
		
		for(Products p : order) {
			OrderDetails od=new OrderDetails();
			System.out.println(p);
			od.setCustId(cid);
			od.setOrderId(OId);
			od.setAmt(p.getAmt());
			od.setCompany_name(p.getCompany_name());
			od.setExpire_date(p.getExpire_date());
			od.setMfg_date(p.getMfg_date());
			od.setMrp(p.getMrp());
			od.setRate(p.getRate());
			od.setName(p.getName());
			od.setpId(p.getpId());
			od.setQty(p.getQty());
			od.setWeight(p.getWeight());
			od.setUnit(p.getUnit());
			try {
				oDetailServices.addDetails(od);
				}
				 catch(NullPointerException e) {
						System.out.println(e+" Order NOt Placed ");
						
				}
		}
		
	    System.out.println("Order Placed"); 
	}

	
	//  get by status   --->   ok
	@GetMapping("/getByStatus/{status}")
	public List<Orders> getOrderByStatus(@PathVariable String status)
	{
		String str=status.toUpperCase();
		List<Orders> list= this.orderService.OrderByStatus(str);
		if(list !=null) {
			list.forEach((o)->System.out.println(o));
			for(Orders o : list)
				System.out.println(" Order :"+o.getOrdersId()+"  "+o.getStatus()+" "+o.getCustomer());
		return list;
		}
		else 
			return null;
			
	}
	
//  Update Order  Accept  ---->   Ok
	@PostMapping("/updateOrder/{oid}")
	public String updateOrder(@RequestBody Orders o, @PathVariable int oid)
	{
	     Orders old =this.orderService.getByid(oid);
	    System.out.println("before Update order1 : "+old.getStatus());
	    old.setStatus(o.getStatus());
	    System.out.println("After Update order2 : "+old.getStatus());
	     this.orderService.placeOrder(old);
	     
	    return " Update Successfully: "+old.getStatus()+"  "+old.getOrdersId();
	}
	
//  Order  completed  ---->   Ok
	@PostMapping("/completeOrder/{oid}")
	public String completedOrder(@PathVariable("oid") int oid)
	{
		
	     Orders old =this.orderService.getByid(oid);
	     String str="COMPLETED";
//	     old.setStatus(order.getStatus());
	     old.setStatus(str);
	     this.orderService.placeOrder(old);
	     
	    return " Update Successfully"+old.getStatus()+"  "+old.getOrdersId();
	}
	
	
//  Get By CustId  
	@GetMapping("/getByCustId/{cid}")
	public List<Orders> ordersByCustId(@PathVariable("cid") int cid) //
	{		
		System.out.println("in ordersByCustId Cust Id : "+cid);
		//int cid=2;
		Customer c=this.customerServices.getCustomerById(cid);
		List <Orders> li=orderService.getCustIdOrders(c);
		System.out.println("========= printing foe status check ========");
		li.forEach((i)->System.out.println(i));
		System.out.println("========= printing foe status check ========");
		return li;
	}
	
	@GetMapping("/getOrdedrDetails/{orderId}")
	public List<OrderDetails> getODetails(@PathVariable int orderId)
	{
		
		System.out.println("in getDetails -> orderId  Id : "+orderId);
		List<OrderDetails>list=this.oDetailServices.getOrderDetails(orderId);
		return list;
	}
}
