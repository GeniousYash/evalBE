const {Router} = require('express');
const reviewModel = require('../models/reviewModel');
const auth = require("../middleware/auth.middleware");

const reviewRouter = Router();


reviewRouter.get("/review",auth, async (req, res) => {
     const {user, rating} = req.body;
     try{
          const review = await reviewModel.find({user, rating});
          res.status(200).json({
               message:"Review of Book",
               review,
          });
     }catch(error){
          res.status(500).json({
               message:"Error while reviewing the books",
               error,
          });
     }
});



module.exports = reviewRouter;