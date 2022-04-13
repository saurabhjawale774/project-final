package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;
import com.app.pojos.Orders;

@Repository
//@EnableJpaRepositories
public interface IFOrdersRepo extends JpaRepository<Orders, Integer>{


	// get by status   ------>ok
	@Query("select o from Orders o where o.status=?1 order by o.order_date desc")
	List<Orders> getBystatus(String str);
	
	
	
//	
	//  ---> Ok
	@Query("select MAX(o.orderId) from Orders o")
	Integer getMaxOrderID();
	
	//  Get All Orders By cust Id     ----->   Ok
	@Query("select o from Orders o where o.customer=?1 order by o.orderId desc")
	List<Orders> getOrderBycustId(Customer cid);
	
	
	@Query("select o from Orders o where o.orderId=?1")
	Orders getByOId(int id);

}
