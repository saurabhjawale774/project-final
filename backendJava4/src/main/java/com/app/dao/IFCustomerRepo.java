package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;

@Repository

public interface IFCustomerRepo extends JpaRepository<Customer, Integer> {

//	@Query(value = "SELECT c FROM customer c where c.name =:name")
//	Optional<Customer> findByName(String name);

//	@Query(value = "SELECT c FROM myproject.customer c where c.custId=?1")
//	public Customer findByCustIdAndPassword(int id);

	@Query("select u from Customer u where u.email=?1")
	public Customer findByEmail(String email);
	
	@Query("select u from Customer u where u.password=?1")
	public Customer findByPassword(String password);

}
