const db = require('../db/models');
    const customers = db.customers;
    //select * from people;
    exports.findAll = (req, resp) => {
        customers.findAll()
            .then((data) => { resp.json(data); })
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Something went"
                })
            })
            }
    exports.findByPk = (req, resp) => {
        const id=req.params.id;
  
       customers.findByPk(id)
            .then(data=>{resp.send(data)})
           .catch((err) => {
                resp.status(500).send({
                    message: err.message || ` Some error retriving Book data with id ${id}`
                })
            })
    } 
    exports.findByEmail=(req, resp) => {
        console.log("findByEmail called" );
        const email=req.body.email;
        console.log("email="+email);
        const password=req.body.password;
        console.log("password="+password);
       customers.findOne({ where: { email: email, password:password } })
            .then(data=>{
                console.log(data);
                resp.send(data)})
           .catch((err) => {
                resp.status(500).send({
                    message: err.message || ` Some error retriving Book data with id ${id}`
                })
            })
    } 
    exports.create = (req, resp) => {
        if(!req.body.firstName){
            resp.status(400).send({
                message: "Content can not be empty!"

            });

            return;

        }

        const newcustomers={

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.emailAdd,  
            phoneNo: req.body.phoneNo,
            address: req.body.address,
            postalCode:req.body.postalCode,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            createdAt:new Date(),

            updatedAt:new Date()

        }

        customers.create(newcustomers)

            .then(data=>{resp.send(data);})

            .catch((err) => {

                resp.status(500).send({

                    message: err.message || " Some error Creating new customer data"

                })

            })

    } 
    // router.post("/login", (req, res, next) => { 
    //     User.findOne({ email: req.body.email }).then(user => {

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
        
    //     });
                   
    //     }); 
    // });
    //update people set firstName=?, lastName=? where id=?

    exports.update = (req, resp) => {

        const id = req.params.id;

   

        customers.update(req.body, { where: { id: id } })

            .then(num => {

                if (num == 1) {

                resp.send({

                    message: `Book with id ${id} updated successfully.`

                });

                } else {

                resp.send({

                    message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`

                });

                }

            })

            .catch((err) => {

                resp.status(500).send({

                    message: err.message || " Some error retriving Book data"

                })

            })

    }

    //delete from Book where id=?

    exports.delete = (req, resp) => {

        const id = req.params.id;

        customers.destroy({ where: { id: id } })

            .then(num => {

                if (num == 1) {

                    resp.send({ message: `customers with id=${id} deleted successfully!` });

                } else {

                    resp.send({ message: `Cannot delete customers with id=${id}. Maybe customers was not found!` });

                }

            })

            .catch((err) => {

                resp.status(500).send({

                    message: err.message || " Could not delete customers with id=" + id

                })

            })

    }

