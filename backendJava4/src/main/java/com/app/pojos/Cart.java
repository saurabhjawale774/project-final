package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="cart")
@AllArgsConstructor
@Data
public class Cart{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cartId;
	
	
//	// cart 1--->  1 Orders
//	@OneToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="ordersId",nullable = false)
//	private Orders orders;
	
	//  cust  1---->  1 cart
	@OneToOne //(mappedBy="cart")
	@JoinColumn(name="customerId",nullable = false)
	private Customer customer;
	

	// Product * --->  1 Cart  i call u mam
	@OneToMany //(mappedBy="cart")
	private List<Products> products = new ArrayList<>();
		
		
	
	public Cart()
	{
		System.out.println("Caer default cnstr");
	}
	
	
	
}
