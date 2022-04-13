package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cart;
import com.app.pojos.Customer;

@Repository
@EnableJpaRepositories

public interface IFCartRepo extends JpaRepository<Cart, Integer> {
	
	

}
