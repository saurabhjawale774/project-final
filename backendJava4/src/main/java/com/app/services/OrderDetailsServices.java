package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IFOrderDetailsRepo;
import com.app.pojos.OrderDetails;
import com.app.pojos.Products;


@Service
@Transactional
public class OrderDetailsServices {
	
	@Autowired
	private IFOrderDetailsRepo orderDetailsRepo;

	public void addDetails(OrderDetails od) {
		orderDetailsRepo.save(od);
		System.out.println("Order DEtails Save");
		
	}

	public List<OrderDetails> getOrderDetails(int orderId) {
		List<OrderDetails>li=this.orderDetailsRepo.getAllOdetails(orderId);
		return li;
	}

}
