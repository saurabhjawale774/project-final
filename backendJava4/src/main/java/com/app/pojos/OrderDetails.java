package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="orderdetails")
public class OrderDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderdetailsId;
	
	@Column(length = 50)
	private int custId;
	
	@Column(length = 50)
	private int orderId;
	
//	@NotEmpty(message ="product id not supplied ")
	@Column(length = 50)
	private int pId;
	
//	@NotEmpty(message ="product name must be supplied ")
	@Column(length = 50)
	private String name;
	
	@Column(length = 50)
	private String company_name;
	
//	@NotEmpty(message ="product weight must be supplied ")
	@Column
	private double weight;
	
//	@NotEmpty(message ="product unit must be supplied ")
	@Column(length = 10)
	private String unit;
	
	@Column
	private double mrp;
	
//	@NotEmpty(message ="product rate must be supplied ")
	@Column
	private double rate;
	
//	@NotEmpty(message ="product manufacturing date must be supplied ")
	@Column
	private LocalDate mfg_date;
	
//	@NotEmpty(message ="product expiry date must be supplied ")
	@Column
	private LocalDate expire_date;
	
//	@NotNull(message ="product quantity must be supplied ")
	@Column(name="quantity")
	private int qty;  //  for consumer only
	
	@Column (name ="amount")
	private double amt;
	
	
	//  Orders 1 ----> 1 ordersDetails
//	@OneToOne //(mappedBy="orderDetails")
//	@JoinColumn(name="ordersId",nullable = false)
//	private Orders orders;
	
	public OrderDetails()
	{
		System.out.println("OrderDetails default cnstr");
	}


	public OrderDetails(Integer custId, Integer orderId, Integer pId, String name, String company_name, double weight,
			String unit, double mrp, double rate, LocalDate mfg_date, LocalDate expire_date, int qty, double amt) {
		super();
		this.custId = custId;
		this.orderId = orderId;
		this.pId = pId;
		this.name = name;
		this.company_name = company_name;
		this.weight = weight;
		this.unit = unit;
		this.mrp = mrp;
		this.rate = rate;
		this.mfg_date = mfg_date;
		this.expire_date = expire_date;
		this.qty = qty;
		this.amt = amt;
	}


	@Override
	public String toString() {
		return "OrderDetails [custId=" + custId + ", orderId=" + orderId + ", pId=" + pId + ", name=" + name
				+ ", company_name=" + company_name + ", weight=" + weight + ", unit=" + unit + ", mrp=" + mrp
				+ ", rate=" + rate + ", mfg_date=" + mfg_date + ", expire_date=" + expire_date + ", qty=" + qty
				+ ", amt=" + amt + "]";
	}


	public int getCustId() {
		return custId;
	}


	public void setCustId(Integer custId) {
		this.custId = custId;
	}


	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}


	public int getpId() {
		return pId;
	}


	public void setpId(Integer pId) {
		this.pId = pId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCompany_name() {
		return company_name;
	}


	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}


	public double getWeight() {
		return weight;
	}


	public void setWeight(double weight) {
		this.weight = weight;
	}


	public String getUnit() {
		return unit;
	}


	public void setUnit(String unit) {
		this.unit = unit;
	}


	public double getMrp() {
		return mrp;
	}


	public void setMrp(double mrp) {
		this.mrp = mrp;
	}


	public double getRate() {
		return rate;
	}


	public void setRate(double rate) {
		this.rate = rate;
	}


	public LocalDate getMfg_date() {
		return mfg_date;
	}


	public void setMfg_date(LocalDate mfg_date) {
		this.mfg_date = mfg_date;
	}


	public LocalDate getExpire_date() {
		return expire_date;
	}


	public void setExpire_date(LocalDate expire_date) {
		this.expire_date = expire_date;
	}


	public int getQty() {
		return qty;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}


	public double getAmt() {
		return amt;
	}


	public void setAmt(double amt) {
		this.amt = amt;
	}
	
	
	 
}
