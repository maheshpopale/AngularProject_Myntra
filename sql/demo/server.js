const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const CORS_OPTIONS={origin:"http://localhost:4200"};
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors(CORS_OPTIONS));
const db=require('./db/models');
db.sequelize.sync();

//App Url "http://localhost:3000/app"
require('./app/app-route')(server);

//Main Url "http://localhost:3000/app"

server.get('/',(req,resp)=>{
    resp.send({message:"Welcome to express + postgres+ node"})
})
server.post('/login',(req, resp)=>{
    console.log(req.body);
//            User.findOne({ email: req.body.email }).then(user => {

//     if (!user) {
    
//     return res.status (401).json({ 
//         message: "Auth failed"
    
//     });
    
//     }
    
//     return password.compare(req.body.password, user.password);
    
//     })
    
//     .then(result => {
//          if (result){
//             return res.status(410).json({
//                 message:"auth failed"
//             })
//          }
    
//     })
    
//     .catch(err => { 
//         return res.status(401).json({
    
//     message: "Auth failed"
    
//     })
               
//     })
})

server.listen(port,()=>{
     console.log(`http://localhost:${port} started`);
})