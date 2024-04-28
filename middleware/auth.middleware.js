const jwt = require('jsonwebtoken');

const auth = async(req,res,next)=>{
     const token = req.headers.authorization?.split(" ")[1];
     if(token){
          jwt.verify(token, 'myapp', function(err, decoded){
               console.log(decoded);
               req.body.userID = decoded.userID;
               req.body.username = decoded.user;
               next();
          });
     }else{
          res.status(401).json({
               message:"Token not Found, Please login first"
          })
     }
}

module.exports = auth;