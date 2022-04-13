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
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties({ "hibernateLazyInitializer" })
@Entity
@Table(name = "customer")
//@AllArgsConstructor

public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer custId;

	 @NotNull(message ="Name can't be blank")
	@Length(min = 4, max = 20, message = "Invalid  Name !!!!")
	@Column(length = 20)
	private String name;

	 @NotNull(message ="Enter Your Email ")
	@Column(length = 50)
	private String email;

	 @NotNull(message ="Enter Password")
	@Column(length = 600)
	private String password;

	 @NotNull(message ="Enter Your Mobile no ")
	@Column
	private long mobile_no;

	 @NotNull(message ="Enter Address ")
	@Column(name = "Address_line1", length = 500)
	private String addr1;

	@Column(name = "Address_line2", length = 500)
	private String addr2;

	@NotNull(message ="Enter City ")
	@Column(length = 30)
	private String city;

	@NotNull(message ="Enter pincode/zipcode ")
	@Column
	private int pincode;


	// customer 1 ----> * Orders
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true/* ,fetch = FetchType.EAGER */ )
	private List<Orders> orders = new ArrayList<>();

	public Customer() {
		System.out.println("Customer default cnstr");
	}

	public Customer(Integer custId, @Length(min = 4, max = 20, message = "Invalid  Name !!!!") String name,
			String email, String password, long mobile_no, String addr1, String addr2, String city, int pincode,
			List<Orders> orders) {
		super();
		this.custId = custId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		this.addr1 = addr1;
		this.addr2 = addr2;
		this.city = city;
		this.pincode = pincode;
		this.orders = orders;
	}
	
	

	public Customer(@Length(min = 4, max = 20, message = "Invalid  Name !!!!") String name, String email,
			String password, long mobile_no, String addr1, String addr2, String city, int pincode) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobile_no = mobile_no;
		this.addr1 = addr1;
		this.addr2 = addr2;
		this.city = city;
		this.pincode = pincode;
	}

	public Integer getCustId() {
		return custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getAddr1() {
		return addr1;
	}

	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}

	public String getAddr2() {
		return addr2;
	}

	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@JsonIgnore
	public List<Orders> getOrders() {
		return orders;
	}

	@JsonProperty
	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}

}
