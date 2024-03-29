const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
    unique: true,
    lowercase: true,
  },
  mobile:{
    type:Number,
    required:true
  },
  password:{ 
    type:String,
    required:true,
    minlength:6
},
created:{
  type : Date,
  default: Date.now()
}
 
});

//Export Model with Name Of User
module.exports = mongoose.model('User',userSchema);