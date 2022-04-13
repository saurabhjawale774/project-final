package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IFProductRepo;
import com.app.pojos.Products;

@Service
@Transactional

public class ProductsService {

	@Autowired
	private IFProductRepo prodRepo;
	
	public List<Products> getProdctList()
	{
	System.out.println("in Get Product services");
		return prodRepo.findAll();
	}
	
	public void addprod(Products prod)
	{
		this.prodRepo.save(prod);
	}
	public Products getByIdProduct(int pid)
	{
		Products p=prodRepo.findById(pid).orElse(null);
		return p;
		
	}

	// delete product by id
	public void removeProduct(int p) {
		this.prodRepo.deleteById(p);
	
	}
}
