const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const bodyParser=require('body-parser');
const { nextTick } = require('process');
const { param } = require('express/lib/request');
const { randomInt } = require('crypto');
const corsOptions={
    origin:"http://localhost:4200",
    optionsSuccessStatus:200
};
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(corsOptions));

const CATEGORIES=[
    {categoryId:1,categoryName:'Casual Tshirts',categoryDescription:"Casual TShirts are available"},
    {categoryId:2,categoryName:'Polo Tshirts',categoryDescription:"Polo TShirts are available"},
    {categoryId:3,categoryName:'Soccer Tshirts',categoryDescription:"Soccer TShirts are available"},
    {categoryId:4,categoryName:'Cap Slives',categoryDescription:"Cap Sives TShirts are available"}
    
];
server.get('/',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send("Welcome");
});
server.get('/categories',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send(CATEGORIES);
});

//add category
server.post('/categories/add',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    const id=CATEGORIES.length+1;
   console.log(req.body);
   console.log(req.body.categorydescription);
   const category={categoryId:id,categoryName:req.body.categoryname,categoryDescription:req.body.categorydescription};
//    CATEGORIES.push(category);
res.send(JSON.stringify(category)+"New Category Added");
});



server.listen(port,()=>{
    console.log(`http://localhost:${port}Started`);
});