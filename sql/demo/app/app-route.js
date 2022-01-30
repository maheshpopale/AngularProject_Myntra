module.exports=(app)=>{



    const express=require('express');

    const ROUTER=express.Router();

    const CustomersController=require('./customer.controller');

    ROUTER.get('/customers',CustomersController.findAll);

    ROUTER.get('/customers/:id',CustomersController.findByPk);

    ROUTER.post('/customers/add',CustomersController.create);

    ROUTER.put('/customers/update/:id',CustomersController.update);

    ROUTER.delete('/customers/delete/:id',CustomersController.delete);

    ROUTER.post('/customers/login',CustomersController.findByEmail);



    app.use('/app',ROUTER);

}