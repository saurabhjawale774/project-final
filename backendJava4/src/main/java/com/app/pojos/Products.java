package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.jsonschema.JsonSerializableSchema;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "products")
@AllArgsConstructor
@JsonSerializableSchema
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pId;
	
	@NotEmpty(message ="Product Name can't be blank")
	@Column(length = 50)
	private String name;
	
	@Column(length = 50)
	private String company_name;
	
	@NotNull(message = "weight must be supplied")
	@Column
	private double weight;
	
	@NotNull(message = "unit must be supplied")
	@Column(length = 10)
	private String unit;
	
	
	@Column
	private double mrp;
	
	@NotNull(message = "Rate must be supplied")
	@Column
	private double rate;
	
	@NotNull(message = "manufacturing date must be supplied")
	@Column
	private LocalDate mfg_date;
	
	@Column
	private LocalDate expire_date;
	
	@Column(name="quantity")
	private int qty=1;  //  for consumer only
	
	@Column (name ="amount")
	private double amt=1;

	//  Cart
    // Product * ---->  1 Cart
//	@ManyToOne      //  bi-directional 
//	private Cart cart;
	//  after comment this line   this relation is   uni directional ...create one extra table
	
	public Products()
	{
//		System.out.println("In Product Default cntsr");
	}

	public Products(@NotEmpty(message = "Product Name can't be blank") String name, String company_name,
			@NotNull(message = "weight must be supplied") double weight, String unit, double mrp,
			@NotNull(message = "Rate must be supplied") double rate) {
		super();
		this.name = name;
		this.company_name = company_name;
		this.weight = weight;
		this.unit = unit;
		this.mrp = mrp;
		this.rate = rate;
	}
	
	public Products(@NotEmpty(message = "Product Name can't be blank") String name, String company_name,
			@NotNull(message = "weight must be supplied") double weight, String unit, double mrp,
			@NotNull(message = "Rate must be supplied") double rate, LocalDate mfg_date, LocalDate expire_date) {
		super();
		this.name = name;
		this.company_name = company_name;
		this.weight = weight;
		this.unit = unit;
		this.mrp = mrp;
		this.rate = rate;
		this.mfg_date = mfg_date;
		this.expire_date = expire_date;
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

	public  LocalDate getExpire_date() {
		return expire_date;
	}

	public void setExpire_days(LocalDate expire_days) {
		this.expire_date = expire_days;
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

	@Override
	public String toString() {
		return "Products [pId=" + pId + ", name=" + name + ", company_name=" + company_name + ", weight=" + weight
				+ ", unit=" + unit + ", mrp=" + mrp + ", rate=" + rate + ", mfg_date=" + mfg_date + ", expire_date="
				+ expire_date + ", qty=" + qty + ", amt=" + amt + "]";
	}

	

	
	
		
}
