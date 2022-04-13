package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Products;

@Repository
public interface IFProductRepo extends JpaRepository<Products, Integer> {


}
