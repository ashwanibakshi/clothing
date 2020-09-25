const userModel = require('../models/userModel');
const bcrypt    = require('bcryptjs');

module.exports.userCntrl={
      getRegister:async (req,res)=>{
        try {
           res.json('register page');
        } catch (error) {
            console.log(error);
        }
      },
      postRegister:async (req,res)=>{
           try {
                var userr = new userModel({
                    username:req.body.username,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,10)
                });
                var response = await userr.save();
                if(response){
                    // res.render('',{data:response});
                    res.json(response);
                }
           } catch (error) {
               console.log(error);
           }
      },
     getLogin:(req,res)=>{
        try {
            res.json('login');
        } catch (error) {
            console.log(error);
        }
      },
      postLogin:async (req,res)=>{
        try {
            var response  = await  userModel.find({email:req.body.email});
            if(response){
                bcrypt.compare(req.body.password,response[0].password,(err,match)=>{
                    if(err){
                        console.log(err)
                    }
                    else if(match){
                        res.json('match');
                    }
                    else{
                        res.json('wrong email password');
                    }
              });
            }
        } catch (error) {
            console.log(error);
        }
      },
      getProfile:async (req,res)=>{
         try {
             var response = await userModel.find({email:req.body.email});
            if(response){
                res.json(response);
            }
         } catch (error) {
             console.log(error);
         }
      },
      postProfile:async (req,res)=>{
        try {
            var userr ={
               username:req.body.username,
               email:req.body.email
            }
            var response =  await userModel.updateOne({email:req.body.email},{$set:userr});
            if(response){
                res.json(response);
            }
        } catch (error) {
            console.log(error);
        }
      }
}
