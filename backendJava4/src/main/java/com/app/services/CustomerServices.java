package com.app.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IFCustomerRepo;
import com.app.pojos.Customer;

@Service
@Transactional
public class CustomerServices {

	@Autowired
	private IFCustomerRepo customerRepo;

	// get All Customer
	public List<Customer> getAllCustomer() {
		return this.customerRepo.findAll();
	}

	// Get Customer By Id
	public Customer getCustomerById(int custId) {
		Customer c = this.customerRepo.getById(custId);
		System.out.println("In services  --> " + c);
		return c;
	}

	public String addCustomer(Customer cust) {
		this.customerRepo.save(cust);
		return "Registration Done" + cust.getName();
	}

	// Delete Customer By Id
	public String removeCust(int custId) {
		this.customerRepo.deleteById(custId);
		return "Custmor Removed";
	}

//	public Customer getCustomerByIdandPwd(int id,String pwd)
//	{
//		System.out.println("<------Customer getCustomerByIdandPwd(int id,String pwd)  ----->");
//		return this.customerRepo.findByCustIdAndPassword(id,pwd);
//	}

	// Get By
	public Customer getCustomerByEmail(String email) {
		Customer c=this.customerRepo.findByEmail(email);
		System.out.println("In services  --> " + c);
		return c;
	}

	public Customer getCustomerByPass(String password) {
		Customer c2=this.customerRepo.findByPassword(password);
		System.out.println("In services  --> " + c2);
		return c2;
		}

	// Get By Name
//	public Optional<Customer> getCustomerByName(String name) {
//		return this.customerRepo.findByName(name);
//	}
}
