const express = require("express");
const bcrypt = require("bcrypt");
const jwt    = require('jsonwebtoken');


const Users = require("../Models/Users");



exports.register = async (req, res) => {
  console.log(req.body);

  //Find Email From Database which already exist
	const emailExist = await Users.findOne({ email:req.body.email});

	//check if user already exist
	if (emailExist) return res.status(400).json({ 
			status:'fail',
			message:'Email Already Exist'
	});

  //hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const plaintext = req.body.password.toString();
  const hashPassword = await bcrypt.hash(plaintext, salt);

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    mobile: req.body.mobile,
  });

  try {
    const newUser = await user.save();
    res.status(200).json({
      status: "Success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.login = async(req,res) => { 

	//console.log(req.body);
    const user = await Users.findOne({email:req.body.email});
	//check email already exist
	if (!user) return res.status(400).json({ 
				status:'fail',
				message:'Email Not Found'
	});

    //compare password
    const checkPass = await bcrypt.compare(req.body.password,user.password);

    if(!checkPass) return res.status(400).json({ 
				status:'fail',
				message:'Password Not Match !'
	});


    const token = jwt.sign({ _id: user._id },process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIERS});
    //console.log(token);

    res.header('auth-token', token);

    res.status(200).json({
        success: 'success',
        token,
        user,
        message:'Logged In !'
    });

};
//end user login here


exports.loginapp = async(req,res) => { 

 console.log(req.body);

 const user = await Users.findOne({email:req.body.email});

 console.log(user);
  
 if(!user){
  console.log("not found")
 }

}