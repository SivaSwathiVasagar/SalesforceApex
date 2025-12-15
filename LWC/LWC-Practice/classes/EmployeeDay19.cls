/**
 * Author: 	svasagar
 * Date  : 	08/17/2025
 * Purpose: Created this cls for learning map, inputing list as value for map, and accessing EmpHelperDay19 cls.
 */
public class EmployeeDay19 {
    Public String dept;
    Public String loc;
    Public Integer empId;
    Public String name;
    Public Integer pay;
    Public String post;
    //Public Map<String,EmployeeDay19> empMap;
    
    public EmployeeDay19(String department,String location,Integer employeeId, String employeeName, Integer salary, String designation){
        dept = department;
        loc = location;
        empId = employeeId;
        name = employeeName;
        pay = salary;
        post = designation;
    }     
 }