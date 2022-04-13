package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.Products;
import com.app.services.CustomerServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerList {

	@Autowired
	private CustomerServices customerServices;

	public CustomerList() {
		System.out.println("In customer list contr");
	}

	// add request handling method to send all cust to the caller(front end) :
	// getting resources : GET : /customer/customerList
	@GetMapping("/customerList")
	public List<Customer> getcustomerList() {
		System.out.println("in get all customer" + customerServices.getAllCustomer());
		return customerServices.getAllCustomer();
	}
	
	

	@PostMapping("/login")
	public @ResponseBody Customer login(@RequestBody Customer c) //@Param(value = "id") int id,@Param(value = "pwd") String pwd
	{
		System.out.println("Get CustEmail  :"+c.getEmail()+  " Get cust Pwd : "+c.getPassword());
		Customer customer1=this.customerServices.getCustomerByEmail(c.getEmail());
		Customer customer2=this.customerServices.getCustomerByPass(c.getPassword());
		
		System.out.println("Get Cust1 :"+customer1.getEmail());
		System.out.println("Get Cust2 :"+customer2.getEmail());
		if(customer1 != null && customer2 != null) 
		{
		   if(customer1.getEmail().equals(customer2.getEmail())) {
			   if(customer1.getPassword().equals(customer2.getPassword())) {
				System.out.println("check valid Cust :"+customer1);
				System.out.println("Customer Details :"+customer1.getName()+ "  "+customer1.getPassword());
				return customer2;  
			   }
		   }		
		}
		return null;
	}
	
	// Customer Get By Id Get : customer/getCustomert/id
	@GetMapping("/getCustomer/{custId}")
	public Customer getcustomerById(@PathVariable int custId) {
		System.out.println("in get cust by id " + custId);
		Customer c = customerServices.getCustomerById(custId);
		System.out.println("customer  --->" + c);
		return c;
	}

	// Customer Registration Post : /customer/addCustomer
	@PostMapping("/addCustomer")
	public String addCustomer(@RequestBody Customer customer) {
		System.out.println("In add --> " + customer);
		return this.customerServices.addCustomer(customer);
	}

	// CustomerDelete By Id Get : customer/getCustomert/id
	@DeleteMapping("/deleteCustomer/{custId}")
	public String deleteCustomer(@PathVariable int custId) {
		System.out.println("in get cust by id emps");
		return customerServices.removeCust(custId);
	}

	// Update Details customer Post : /custoemr/updateCustomer
	@PostMapping("/updateCustomer")
	public Customer updateCustomer(@RequestBody Customer cust) {
		System.out.println("Update 1 --->" + cust);
		Customer c = this.customerServices.getCustomerById(cust.getCustId());
		
		c.setName(cust.getName());
		c.setEmail(cust.getEmail());
		c.setPassword(cust.getPassword());
		c.setMobile_no(cust.getMobile_no());
		c.setAddr1(cust.getAddr1());
		c.setAddr2(cust.getAddr2());
		c.setCity(cust.getCity());
		c.setPincode(cust.getPincode());
		this.customerServices.addCustomer(c);
		System.out.println("Update 2 --->" + c);
		
		return c;
	}

	// Logout Customert
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		System.out.println("Logout Customert");
		session.invalidate();
		return "/Home"; // BAck to Home Page
	}
}
