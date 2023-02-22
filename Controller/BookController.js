const express = require("express");
const Book = require("../Models/Books");


exports.bookList = async (req, res, next) => {
  const books = await Book.find();
  res.render("booklist", { data: books });
};

exports.addBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    category_id: req.body.category,
    bookpdf: req.file.path,
  });

  try {
    const saveBook = await book.save();
    if(saveBook){
      res.redirect('/view/getBook')
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.redirect("booklist");
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.removeBook = async(req,res) => { 

  Book.findByIdAndDelete(req.params.id,(err,doc) => {
    if(!err){
     
      res.redirect('/view/getBook')
      
    }else{
      console.log('Error in book delete:'+err)
    }
  })



}
