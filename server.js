const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb+srv://singhyash3012:yash12345@coderyash.mg14k53.mongodb.net/myapp2?retryWrites=true&w=majority&appName=coderyash");



const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const reviewRouter = require("./routes/reviewRouter");

const app = express();

const PORT = 8080;



app.use(express.json());
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/review", reviewRouter);



app.get("/", (req, res) => {
     res.send("Hello Evaluation");
})

app.listen(PORT, async() => {
     try{
          await connection;
          console.log(`Server is running on PORT ${PORT} & DB is also connected`);
     }catch(error){
          console.log(error);
     }
})