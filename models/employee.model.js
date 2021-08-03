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
    
    
});
mongoose.model('Employee',employeeSchema);