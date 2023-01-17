const mongoose = require('mongoose');
const Category = require("../Models/Categorys");


const addBook = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    created : {
        type : Date,
        default: Date.now()
    },
    bookpdf:{
        type:String,
        required:true
    },
    updated : {
        type : Date,
        default: Date.now()
    },
    category_id: {
        type: String, required: true
    },


})

module.exports = mongoose.model('Book',addBook);