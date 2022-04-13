package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.OrderDetails;
import com.app.pojos.Products;

@Repository
public interface IFOrderDetailsRepo extends JpaRepository<OrderDetails, Integer>{

	//  Get Order details by custId And OrderId-
	@Query("select d from OrderDetails d where d.orderId=?1")
	List<OrderDetails> getAllOdetails( int orderId);
	
}
