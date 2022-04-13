package com.app.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Products;
import com.app.services.CartServices;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartServices cartService;

	List<Products> prodList = new ArrayList<>();;

	// Add in Cart
	@PostMapping("/addToCart")
	public void addTocart(@RequestBody Products p) {
		prodList.add(p);
	}

	//  Get All Product from Cart
	@GetMapping ("/getCart")
	public List<Products> getCartList()
	{
		return prodList;
	}
	
	

}
