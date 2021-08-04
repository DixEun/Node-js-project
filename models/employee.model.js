const mongoose= require('mongoose');
var employeeSchema= new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    company:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    
    
});
mongoose.model('Employee',employeeSchema);