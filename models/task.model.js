const mongoose= require('mongoose');
 var taskschema = new mongoose. Schema({
  
 text:{
     type : String
      },
 date:{
     type: Date
      },
  reminder:{
      type: Boolean
  }    
 });
  
 mongoose.model('Task',taskschema);