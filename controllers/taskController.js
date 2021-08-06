const express = require('express');
const cors= require('cors');
const router = express();
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

// router.use(express.json({
//     type: "*/*"
// })) 

// router.use(cors());
// router.get('/', async(req,res)=>{
//     console.log("sucess");
// })

exports.addtask= async (req,res) => {
// console.log("sucess");
    var task= new Task();
    task.userId= req.body.userId
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
}

exports.list= async(req,res)=> {
    var userId = req.params.userIdd;
    const task = await Task.findById(userId).lean();
    if(task){
        res.status(200).send(task)
    }
    else{
        res.status(500).send({err: "No users found "});
        console.log(task)
                        // console.log('error:'+err);
    }
}
exports.deleteTask=async(req,res)=>{ 
    var id = req.params.id;
    // console.log(id);
    Task.deleteOne({"_id": id}).then((ans) => {
        console.log("Deleted")
        res.status(200).send("deleted");
         }).then((err) => {
           console.log(err);
           });
       } 
       exports.changeTask= async (req,res)=>{
        var id = req.params.id;
       const{reminder} = req.body;
        
        await Task.updateOne({"_id":id},{reminder:reminder})
         .then((ans) => {
        res.status(200).send("changed");
           }).then((err) => {
        console.log(err);
        });
    }
// module.exports= router;