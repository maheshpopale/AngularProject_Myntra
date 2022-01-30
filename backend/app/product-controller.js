

const db=require('../db/models');

const ProductModel=db.Product;

exports.findAll=(req,res)=>{
    ProductModel.findAll()
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.findByPK=(req,res)=>{
    const id=parseInt(req.params.id);
    ProductModel.findByPk(id)
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.create = (req, resp) => {
    if(!req.body.productName){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newProduct={
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productPrie: req.body.productPrice,  
        productDescription: req.body.productDescription,
        image: req.body.image,
        createdAt:new Date(),
        updatedAt:new Date(),
        CategoryId:req.body.CategoryId,
        // password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
       
    }
    ProductModel.create(newProduct)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new customer data"
                })
             })
};



