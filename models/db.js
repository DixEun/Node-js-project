const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/dixon',{ useNewUrlParser: true },(err) =>{
    if (!err)
    {console.log('Mongo connected')}

    else {console.log('Error in db connection')}
});
require('./employee.model');