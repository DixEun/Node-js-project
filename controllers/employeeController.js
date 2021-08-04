const express = require('express');
const cors= require('cors');
const router = express();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');



router.use(express.json({
    type: "*/*"
})) 

router.use(cors());
router.get('/', (req,res)=> {
    console.log("jas");
    res.send('Employee');
});

router.post('/submit',async (req, res)=>{
    console.log(req.body);
    
    var employee= new Employee();
    employee.firstName= req.body.firstName;
    employee.lastName= req.body.lastName;
    employee.company= req.body.company;
    employee.email= req.body.email;
    employee.password= req.body.password;
    const email = req.body.email;
    const user = await Employee.findOne({email}).lean()

    if(!user){
        employee.save ((err,doc) => {
            if(!err){
                 res.status(200).send(doc);
            }
            else{
                res.status(500).send(err);
                console.log('error:'+err);
            }
        });
    }else{
        res.status(400).send("Email id alredy exists"); 
    }
   
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);
    const user = await Employee.findOne({email}).lean()

    console.log(user);

    
        if (!user) {
             res.status(400).json({ status: 'error', error: 'Invalid usermail / password' })
        }
    
        if (password == user.password) {
            res.status(200).json(user);
        }else{
            res.status(400).send("Invalid password");
        }
    });
    
    router.post('/changepassword', async (req, res) => {
        const {email,oldPassword ,newPassword} = req.body;
        const user = await Employee.findOne({email}).lean()
        
        if(oldPassword==user.password)
        {
        Employee.updateOne({password:user.password},{password:newPassword})
        .then((ans) => {
            console.log(ans);
            res.status(200).send("updated");
        }).then((err) => {
        console.log(err);
        })
        }
        }); 

   
    

router.get('/list', (req,res)=> {
    res.json('from list');
});
module.exports = router;
