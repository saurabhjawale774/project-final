package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.app.pojos.Customer;
import com.app.pojos.Orders;
import com.app.dao.IFOrdersRepo;



@Service
@Transactional
public class OrderServic {

	@Autowired
	private IFOrdersRepo orderRepo;

	//   get All Order List
	public List<Orders> getAllOrder() {
		List<Orders> list= this.orderRepo.findAll();
		return list;
	}


	//  get by id 
	public Orders getByid(int id) {
		Orders order=this.orderRepo.getByOId(id);
		return order;
	}

	//  Delete By Id
	public void deleteOrder(int id) {
		this.orderRepo.deleteById(id);
	}

	//  order save / placed
	public void placeOrder(Orders order) {
		this.orderRepo.save(order);
	}
	
	
	public Integer getMaxOrderId() 
	{
		
		try {
			return this.orderRepo.getMaxOrderID();
//			return 1;
		} catch(NullPointerException e) {
			System.out.println(e);
			return 0;
		}
	}
	//  get Orders by status   --->  Pending  Accept  Deliverd
	public List<Orders> OrderByStatus(String str) {
		List <Orders> l=this.orderRepo.getBystatus(str);
		return l;
	}

	//   Get Customer Orders
	public List<Orders> getCustIdOrders(Customer cid) {
		List <Orders> l=this.orderRepo.getOrderBycustId(cid);
		return l;
	}


	
	
	

}
