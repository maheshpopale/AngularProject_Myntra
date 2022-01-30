module.exports=(app)=>{
    const express=require('express');
    const ROUTER=express.Router();
    const CategoryController=require('./category-controller');
    const ProductController=require('./product-controller');
    ROUTER.get('/categories',CategoryController.findAll)

    ROUTER.get('/categories/:id',CategoryController.findByPK);

    ROUTER.post('/categories/add',CategoryController.create);

     ROUTER.put('/categories/update/:id',CategoryController.update);

     ROUTER.delete('/Categories/delete/:id',CategoryController.delete);
     
     ROUTER.get('/products',ProductController.findAll);

     ROUTER.post('/products/add',ProductController.create);

     ROUTER.get('/products',ProductController.findAll);
     
    app.use('/app',ROUTER);
}