module.exports=(app)=>{
    const express=require('express');
    const ROUTER=express.Router();
    const CategoryController=require('./category-controller');

    ROUTER.get('/categories',CategoryController.findAll)

    ROUTER.get('/categories/:id',CategoryController.findByPK);


    // ROUTER.post('/persons/add',(req,res)=>{});
    // ROUTER.put('/persons/update/:id',(req,res)=>{

    // });
    // ROUTER.delete('/persons/delete/:id',(req,res)=>{

    // });
    app.use('/app',ROUTER);
}