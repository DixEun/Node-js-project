const express = require('express');
const cors= require('cors');
const router = express();
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

router.use(express.json({
    type: "*/*"
})) 

router.use(cors());
router.get('/', async(req,res)=>{
    rconsole.log("sucess");
})

router.post('/addtask', async (req,res) => {
console.log("sucess");
    var task= new Task();
    task.text= req.body.text;
    task.date= req.body.date;
    task.reminder= req.body.reminder;

   task.save ((err,doc) => {
        if(!err){
             res.status(200).send(doc);
        }
        else{
            res.status(500).send(err);
            console.log('error:'+err);
        }

   });
});
module.exports= router;