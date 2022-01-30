const express = require('express');
const { USERS } = require('./users');
const cors = require('cors');
const { request } = require('express');
const server = express();
const port = 3000;
const users=USERS;
const CORS_OPTIONS=
{
  origin :"http://localhost:4200",
  optionsSuccessStatus: 200 
}

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(CORS_OPTIONS));

CUSTOMERS=[
  {customerId:1,fristName:"yga",lastName:"chaudhari",email:"abc@123",mobileNo:9876543210,address:"abc",PostalCode:123456,password:"abcs"}
];

server.get('/',(req,res)=>
{
 res.send("Welcome to Express")
})
server.get('/customers/',(req,res)=>{
  res.setHeader("Content-Type","application/json")
  res.send(CUSTOMERS);
});

server.post('/customers/add',(req,res)=>{
  res.setHeader("Content-Type","application/json")
  const id=CUSTOMERS.length+1;
  console.log(req.body);
  const coustomer={customerId:req.body.customerId,lastName:req.body.lastName,email:req.body.email,mobileNo:req.body.mobileNo,address:req.body.mobileNo,address:req.body.address,password:req.body.password};
  CUSTOMERS.push(coustomer);
  res.send(JSON.stringify(coustomer)+" added in user list");

});

server.listen(port,()=>{
  console.log("http://localhost:3000/customers started ");
});