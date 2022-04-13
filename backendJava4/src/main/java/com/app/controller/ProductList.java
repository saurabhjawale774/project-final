package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Products;
import com.app.services.ProductsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

//@Controller
@RequestMapping("/product")
public class ProductList {
	
	@Autowired
	private ProductsService prodService;	
	public ProductList()
	{
		System.out.println("In Product List Controller cnstr");
	}
	//  Get All Product List
	@GetMapping("/getAllProducts")
	public List<Products> getAllProduct()
	{
		System.out.println("In Product get by id Controller ");
		return prodService.getProdctList() ;
	}
	
	// Add product in list
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Products product)
	{
		this.prodService.addprod(product);
		return " Product Added";
	}

	//  Get Product By Id
	@GetMapping("/getById/{pId}")
	public Products getByIdProduct(@PathVariable int pId)
	{
		
//			int p=Integer.parseInt(pId);
			System.out.println("In Product get by id Controller ");
			Products p=prodService.getByIdProduct(pId) ;
			System.out.println(p);
			return p;
	}
	
	//   Update Product by Id 
	@PostMapping("/updateProduct/{pId}")
	public String updateProduct(@RequestBody Products product, @PathVariable int pId )
	{
		int id1=product.getpId();
		System.out.println("========>Product Id : "+id1);
		Products pr=this.prodService.getByIdProduct(pId);
		
		pr.setpId(product.getpId());
		pr.setName(product.getName());
	    pr.setCompany_name(product.getCompany_name());
	    pr.setExpire_days(product.getExpire_date());
	    pr.setMfg_date(product.getMfg_date());
	    pr.setMrp(product.getMrp());
	    pr.setQty(product.getQty());
	    pr.setRate(product.getRate());
	    pr.setUnit(product.getUnit());
	    pr.setWeight(product.getWeight());
	    
	    this.prodService.addprod(pr);
		return "Product Updated"+pr.getName();
	}
	
	@DeleteMapping("/deleteProduct/{pId}")
	public void deleteProduct(@PathVariable String pId)
	{
		if(pId != null) {
			int p=Integer.parseInt(pId);
			System.out.println("In Product delete Controller ");
			 prodService.removeProduct(p) ;
		}
		
	}

}
