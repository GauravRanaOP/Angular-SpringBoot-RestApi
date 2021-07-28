package com.example.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "Records")
public class Records {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long aid;
		
	@Column(name="First_Name")
	private String fname;                                                    //Domain Layer
		
	@Column(name="Last_Name")
	private String lname;
	
	@Column(name="Pincode")
	private Long pincode;
	
	@Column(name="DOB")
	private String DOB;
	
	@Column(name="DateOfJoining")
	private String DateOfJoining;
	
	
	public Records() {
		
	}

	public Records(String fname, String lname, Long pincode, String dOB, String dateOfJoining) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.pincode = pincode;
		DOB = dOB;
		DateOfJoining = dateOfJoining;
	}

	public Long getAid() {
		return aid;
	}

	public void setAid(Long aid) {
		this.aid = aid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		DOB = dOB;
	}

	public String getDateOfJoining() {
		return DateOfJoining;
	}

	public void setDateOfJoining(String dateOfJoining) {
		DateOfJoining = dateOfJoining;
	}

	@Override
	public String toString() {
		return "Records [aid=" + aid + ", fname=" + fname + ", lname=" + lname + ", pincode=" + pincode + ", DOB=" + DOB
				+ ", DateOfJoining=" + DateOfJoining + "]";
	}
	
	
	
}
