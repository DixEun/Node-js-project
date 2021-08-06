const mongoose= require('mongoose');
 var taskschema = new mongoose. Schema({
 userId:{
    type: String
       },
 text:{
     type : String
      },
 date:{
     type: String
      },
  reminder:{
      type: Boolean
  }    
 });
  
 mongoose.model('Task',taskschema);