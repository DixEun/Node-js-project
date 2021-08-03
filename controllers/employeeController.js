const express = require('express');
const cors= require('cors');
 router = express();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');


router.use(express.json({

    type: "*/*"
}))


router.use(cors());
router.get('/', (req,res)=> {
    console.log("dxn");
    res.send( 'Employee');
});

router.post('/submit', (req, res)=>{
insertRecord(req, res);
});

function insertRecord(req, res) {

    var employee= new Employee();
    employee.firstName= req.body.firstName;
    employee.lastName= req.body.lastName;
    employee.company= req.body.company;
    
    employee.save ((err,doc) => {
        if(!err)
    
        console.log('success');

        else{
            console.log('error:+err');
        }
    });
}

router.get('/list', (req,res)=> {
    res.json( 'from list');
});
module.exports = router;

