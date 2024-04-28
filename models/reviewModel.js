const mongoose = require('mongoose');

reviewSchema = new mongoose.Schema({
     user: {type:String, required: true},
     book: {type:String, required:true},
     text: {type:String, required: true},
     rating: {type: Number, required:true, min:1, max:5},
},{
     versionKey:false
});

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel;