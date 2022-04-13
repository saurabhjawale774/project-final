package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="orders")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	
//	 @NotEmpty(message ="itom count not null value")
	@Column
	private int itomCount;   //   product Array list size
	
//	 @NotEmpty(message ="Total amount Not supplied ")
	@Column
	private double totalAmt;   //   sum(amt);
	
//	 @NotEmpty(message ="Total amount Not supplied ")
	@Column
	private LocalDate order_date=LocalDate.now();  //  local date   convert sql Date formate????????
	
//	@Column  //  BY DEFAULT VALUE PENDING ???   @JsonProperty("department")
//	private Status status=Status.PENDING;
	
	 @NotEmpty(message ="status Not supplied ")
	@Column 
	private String status;
	
	/*  
	//  cart 1---> 1 orders
	@OneToOne //(mappedBy="orders")
	@JoinColumn(name="cartId",nullable = false)
	private Cart cart;
	*/
	
//	//  Orders 1 ---> 1 OrdersDetails
//	@OneToOne (cascade=CascadeType.ALL)
//	@JoinColumn(name="orderdetailsId",nullable = false)
//	private OrderDetails orderDetails;
	
	
	//  customer 1------> * Orders
	@ManyToOne
	@JoinColumn(name = "custId",nullable = false)//=> NOT NULL constraint
	private Customer customer;

	public Orders ()
	{
		System.out.println("Orders default cnstr");
	}

	//   For placed Order
	public Orders(Customer customer,List <Products> p) {
		super();
		System.out.println("Product list Object : "+p);
		this.customer = customer;
	}
	
	
	//  for Update Status
	public Orders(int ordersId, LocalDate order_date, String status,  Customer customer) {
		super();
		this.orderId = ordersId;
		this.order_date = order_date;
		this.status = status;
		this.customer = customer;
	}
	

	public double getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(double totalAmt) {
		this.totalAmt = totalAmt;
	}

	public int getOrdersId() {
		return orderId;
	}

	public void setOrdersId(int ordersId) {
		this.orderId = ordersId;
	}

	public int getItomCount() {
		return itomCount;
	}

	public void setItomCount(int itomCount) {
		this.itomCount = itomCount;
	}

	public LocalDate getOrder_date() {
		return order_date;
	}

	public void setOrder_date(LocalDate order_date) {
		this.order_date = order_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", itomCount=" + itomCount + ", totalAmt=" + totalAmt + ", order_date="
				+ order_date + ", status=" + status + ", customer=" + customer + "]";
	}

	
	
	
	
}
