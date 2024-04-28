const {Router} = require('express');
const bookModel = require('../models/bookModel');
const auth = require("../middleware/auth.middleware");

const bookRouter = Router();


bookRouter.get("/",auth, async (req, res) => {
     const {title, author, status} = req.body;
     try{
          const books = await bookModel.find({title});
          res.status(200).json({
               message:"All Books",
               books,
          });
     }catch(error){
          res.status(500).json({
               message:"Error while getting all books",
               error,
          });
     }
});

bookRouter.post("/addbook",auth, async (req, res) => {
     const {title, author, status} = req.body;
     try{
          const book = new bookModel({title, author, status});
          await book.save();
          res.status(201).json({
               message:"Book added successfully",
          });
     }catch(error){
          res.status(500).json({
               message:"Error while adding a book",
          });
     }
});


module.exports = bookRouter;