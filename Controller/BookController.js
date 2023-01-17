const express = require("express");
const Book = require("../Models/Books");



exports.bookList = async(req,res,next) => {
  const books = await Book.find();
  console.log(books)
  res.render('booklist',{data:books})
  
}



exports.addBook = async (req, res) => {

  const book = new Book({
    title: req.body.title,
    category_id:req.body.category,
    bookpdf:req.file.path
  });

  try {
    const saveBook = await book.save();
    res.status(200).json({
      status: "Success",
      data: {
        saveBook,
      },
      
    });
   
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getBooks = async(req,res) => { 

  try {
    const books = await Book.find();
    // res.status(200).json({
    //   data:books
    // })
   
    res.redirect('booklist');
    
  } catch (error) {
    res.status(400).json({
      status:"fail"
    })
  }

}
