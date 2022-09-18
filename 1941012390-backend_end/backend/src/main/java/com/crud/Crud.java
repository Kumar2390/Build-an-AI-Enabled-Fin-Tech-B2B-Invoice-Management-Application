package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.util.ArrayList;

import com.pojo.Pojo;

import java.sql.SQLException;

public class Crud {
  public static Connection getConnection(){
     Connection conn=null;
     String url = "jdbc:mysql://localhost:3306/grey_goose";
     String uname = "root";
     String password = "Ashwini2390@";
     try {
    Class.forName("com.mysql.cj.jdbc.Driver");
     conn=DriverManager.getConnection(url,uname,password);
     }catch(ClassNotFoundException e) {
       e.printStackTrace();
       
     }catch(SQLException e) {
       e.printStackTrace();
     }
     return conn;
  }
  public ArrayList<Pojo> getData(){
    ArrayList<Pojo> allinvoice=new ArrayList<Pojo>();
    try {
      Connection conn=getConnection();
      String query="SELECT * FROM winter_internship LIMIT 0,100";
      //String query = "SELECT * FROM winter_internship ORDER BY sl_no DESC LIMIT 50;";
      PreparedStatement ps=conn.prepareStatement(query);
      ResultSet result=ps.executeQuery();
      while(result.next()) {
        
            Pojo invoice= new Pojo();
          
            invoice.setSl_no(result.getInt("sl_no"));
            invoice.setBusiness_code(result.getString("business_code"));
            invoice.setCust_number(result.getInt("cust_number"));
            invoice.setClear_date(result.getString("clear_date"));
            invoice.setBuisness_year(result.getString("buisness_year"));
            invoice.setDoc_id(result.getString("doc_id"));
            invoice.setPosting_date(result.getString("posting_date"));
            invoice.setDocument_create_date(result.getString("document_create_date"));
            invoice.setDue_in_date(result.getString("due_in_date"));
            invoice.setInvoice_currency(result.getString("invoice_currency"));
            invoice.setDocument_type(result.getString("document_type"));
            invoice.setPosting_id(result.getInt("posting_id"));
            invoice.setTotal_open_amount(result.getDouble("total_open_amount"));
            invoice.setBaseline_create_date(result.getString("baseline_create_date"));
            invoice.setCust_payment_terms(result.getString("cust_payment_terms"));
            invoice.setInvoice_id(result.getInt("invoice_id"));
            invoice.setAging_bucket(result.getString("aging_bucket"));
            
            
            allinvoice.add(invoice);
            //System.out.println( business_code+" "+cust_number);
              }
      conn.close();
    }catch(Exception e) {
      e.printStackTrace();
      System.out.println("Exception occur");
    }
    return allinvoice;
    
  }
  public int insertData(Pojo test) {
	  int result=0;
	  try {
	    
	  Connection conn=getConnection();
	  
	  String query="INSERT INTO winter_internship(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	  PreparedStatement ps=conn.prepareStatement(query);
	  
	  String Clear_date = test.getClear_date();
	  if(Clear_date.isEmpty()) {
	    Clear_date = "0000-00-00";
	  }
	//  Date Posting_date = Date.valueOf(test.getPosting_date());
	//  Date Document_create_date = Date.valueOf(test.getDocument_create_date());
	//  Date Due_in_date= Date.valueOf(test.getDue_in_date());
	//  Date Baseline_create_date = Date.valueOf(test.getBaseline_create_date());
	  
	    ps.setString(1, test.getBusiness_code());
	    ps.setInt(2, test.getCust_number());
	    ps.setString(3, Clear_date);
	      ps.setString(4, test.getBuisness_year());
	      ps.setString(5, test.getDoc_id());
	      ps.setString(6, test.getPosting_date());
	      ps.setString(7, test.getDocument_create_date());
	   //  ps.setString(8, test.getDocument_create_date1());
	      ps.setString(8, test.getDue_in_date());
	      ps.setString(9, test.getInvoice_currency());
	      ps.setString(10, test.getDocument_type());
	      ps.setInt(11, test.getPosting_id());
	     //ps.setString(13, test.getArea_business());
	      ps.setDouble(12, test.getTotal_open_amount());
	      ps.setString(13, test.getBaseline_create_date());
	      ps.setString(14, test.getCust_payment_terms());
	      ps.setInt(15, test.getInvoice_id());
	   //  ps.setInt(18, test.getIsOpen());
	   //  ps.setString(19, test.getAging_bucket());
//	     ps.setInt(20, test.getIs_deleted());
	    
	  
	    result=ps.executeUpdate();
	   
	   
	   
	}catch(Exception e) {
	  System.out.println(e);
	}
	  
	   return result;
	  
	}



	//updateuser


	public int updateData(Pojo test)throws SQLException{
	  int rowUpdated=0;
	  try {
	    Connection conn=getConnection();
	    String query="UPDATE winter_internship SET invoice_currency= ?, cust_payment_terms=? WHERE sl_no = ?";
	    PreparedStatement ps=conn.prepareStatement(query);
	    ps.setString(1, test.getInvoice_currency());
	    ps.setString(2,test.getCust_payment_terms());
	    ps.setInt(3, test.getSl_no());
	     rowUpdated=ps.executeUpdate();
	     conn.close();
	     
	  }catch(Exception e) {
	    e.printStackTrace();
	  }
	  
	  return rowUpdated;
	}

	//deleteuser

	public int deleteData(Pojo test)throws SQLException{
	  int rowDeleted=0;
	  try {
	    Connection conn=getConnection();
	    String query="DELETE FROM winter_internship WHERE sl_no=?";
	    PreparedStatement ps=conn.prepareStatement(query);
	    ps.setInt(1,test.getSl_no());
	    rowDeleted=ps.executeUpdate();
	    conn.close();
	  }catch(Exception e) {
	    e.printStackTrace();
	  }
	  return rowDeleted;
	}
	public ArrayList<Pojo> search(Pojo pj)throws SQLException{
	    ArrayList<Pojo> data = new ArrayList<Pojo>();
	      try {
	       Connection connect = getConnection();
	       String sql_query = "SELECT * FROM winter_internship WHERE cust_number=?";
	       //String sql_query = "SELECT FROM winter_internship WHERE cust_number=? OR doc_id=? OR invoice_id=? OR buisness_year=?";
	                PreparedStatement pst = connect.prepareStatement(sql_query);
	                pst.setInt(1, pj.getCust_number());
	                ResultSet resultSet = pst.executeQuery();
	                while(resultSet.next())
	                {
	                    Pojo p = new Pojo();

	                    p.setSl_no(resultSet.getInt("sl_no"));
	                    p.setBusiness_code(resultSet.getString("business_code"));
	                    p.setCust_number(resultSet.getInt("cust_number"));
	                    p.setClear_date(resultSet.getString("clear_date"));
	                    p.setBuisness_year(resultSet.getString("buisness_year"));
	                    p.setDoc_id(resultSet.getString("doc_id"));
	                    p.setPosting_date(resultSet.getString("posting_date"));
	                    p.setDocument_create_date(resultSet.getString("document_create_date"));
	                    p.setDue_in_date(resultSet.getString("due_in_date"));
	                    p.setInvoice_currency(resultSet.getString("invoice_currency"));
	                    p.setDocument_type(resultSet.getString("document_type"));
	                    p.setPosting_id(resultSet.getInt("posting_id"));
	                    p.setTotal_open_amount(resultSet.getDouble("total_open_amount"));
	                    p.setBaseline_create_date(resultSet.getString("baseline_create_date"));
	                    p.setCust_payment_terms(resultSet.getString("cust_payment_terms"));
	                    p.setInvoice_id(resultSet.getInt("invoice_id"));
	                    p.setAging_bucket(resultSet.getString("aging_bucket"));
	                    data.add(p);
	                }
	      } catch (Exception e) {
	              e.printStackTrace();
	              System.out.println("exception occur");
	          }
	      return data;
	}
	public ArrayList<Pojo> Advancesearch(Pojo pj)throws SQLException{
	    ArrayList<Pojo> data = new ArrayList<Pojo>();
	      try {
	       Connection connect = getConnection();
	       String sql_query = "SELECT * FROM winter_internship WHERE cust_number=? OR doc_id=? OR invoice_id=? OR buisness_year=?";
	                PreparedStatement pst = connect.prepareStatement(sql_query);
	                pst.setInt(1, pj.getCust_number());
	                pst.setString(2,pj.getDoc_id());
	                pst.setInt(3, pj.getInvoice_id());
	                pst.setString(4, pj.getBuisness_year());
	                ResultSet resultSet = pst.executeQuery();
	                while(resultSet.next())
	                {
	                    Pojo p = new Pojo();

	                    p.setSl_no(resultSet.getInt("sl_no"));
	                    p.setBusiness_code(resultSet.getString("business_code"));
	                    p.setCust_number(resultSet.getInt("cust_number"));
	                    p.setClear_date(resultSet.getString("clear_date"));
	                    p.setBuisness_year(resultSet.getString("buisness_year"));
	                    p.setDoc_id(resultSet.getString("doc_id"));
	                    p.setPosting_date(resultSet.getString("posting_date"));
	                    p.setDocument_create_date(resultSet.getString("document_create_date"));
	                    p.setDue_in_date(resultSet.getString("due_in_date"));
	                    p.setInvoice_currency(resultSet.getString("invoice_currency"));
	                    p.setDocument_type(resultSet.getString("document_type"));
	                    p.setPosting_id(resultSet.getInt("posting_id"));
	                    p.setTotal_open_amount(resultSet.getDouble("total_open_amount"));
	                    p.setBaseline_create_date(resultSet.getString("baseline_create_date"));
	                    p.setCust_payment_terms(resultSet.getString("cust_payment_terms"));
	                    p.setInvoice_id(resultSet.getInt("invoice_id"));
	                    p.setAging_bucket(resultSet.getString("aging_bucket"));
	                    data.add(p);
	                }
	      } catch (Exception e) {
	              e.printStackTrace();
	              System.out.println("exception occur");
	          }
	      return data;
	}
}
