package com.internship;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

import com.crud.Crud;
import com.google.gson.Gson;
import com.pojo.Pojo;

/**
 * Servlet implementation class Editdata
 */
public class Editdata extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Editdata() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		Pojo test=new Gson().fromJson(request.getReader(),Pojo.class);
	    Crud editdata=new Crud();
	    int r=0;
		try {
			r = editdata.updateData(test);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	      response.setContentType("application/json");
	      //int result=ps.executeUpdate();
	      
	        if(r>0)
	          {
	            response.setStatus(201);
	            Response succesResponse=new Response();
	            succesResponse.setStatus("edited");
	            succesResponse.setSuccess(true);
	            response.getWriter().write(new Gson().toJson(succesResponse));
	          }else {
	            response.setStatus(500);
	            Response failureResponse=new Response();
	            failureResponse.setStatus("edited failed");
	              failureResponse.setSuccess(false);
	            response.getWriter().write(new Gson().toJson(failureResponse));
	          }
	}

}