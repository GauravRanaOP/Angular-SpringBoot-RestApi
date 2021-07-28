package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Records;

@Repository
public interface RecordsRepository extends JpaRepository<Records, Long>{

    public List<Records> findByLname(String lname);
	
	public List<Records> findByFname(String fname);
	
	public List<Records> findByPincode(Long pincode);
}
