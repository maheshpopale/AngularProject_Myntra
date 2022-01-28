
const res = require('express/lib/response');
const db=require('../db/models');//index.js returns us db

const CategoryModel=db.Category;

exports.findAll=(req,res)=>{
    CategoryModel.findAll()
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.findByPK=(req,res)=>{
    const id=parseInt(req.params.id);
    CategoryModel.findByPk(id)
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

// exports.createCategory=(req,res)=>{};

// exports.updateCategory=(req,res)=>{};

// exports.delete=(req,res)=>{};
