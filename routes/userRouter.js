const {Router} = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
     const {username, email, password} = req.body;
     console.log(req.body);
     try{
          bcrypt.hash(password, 5, async(err,hash) =>{
               if(err){
                    res.status(500).json({
                         message: "Error while hashing the password"
                    })
               }
               console.log(hash);
               const user = new UserModel({username,email,password:hash});
               await user.save();
               res.status(201).json({
                    message: "User Successfully Registered"
               })
          })
     }catch(error){
          res.status(500).json({
               message: "Error while registering the User"
          })
     }
})

userRouter.post("/login", async(req, res) =>{
     const {email,password} = req.body;
     try{
          const user = await UserModel.findOne({email});
          console.log(user);
          if(user){
               bcrypt.compare(user.password, password, function(err,result){
                    if(result){
                         const token = jwt .sign({userID: user._id, user: user.username},'myapp')
                         res.status(200).json({
                              message: `User logged in successfully`,token
                         });
                    }else{
                         res.status(401).json({
                              message: "Wrong Password"
                         })
                    }
               })
          }else{
               res.status(401).json({
                    message: "User not found, Please register first"
               })
          }
     }catch(error){
          res.status(500).json({
               message: "Error in logging in the user"
          })
     }
})


module.exports = userRouter;