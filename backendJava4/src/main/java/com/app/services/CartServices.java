package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IFCartRepo;

@Service
@Transactional
public class CartServices {
	
	@Autowired
	private IFCartRepo iFCartRepo;

}
