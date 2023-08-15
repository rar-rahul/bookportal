const express = require("express");
const Blog = require("../Models/Blogs");

exports.viewBlog = async (req, res, next) => {
  const blogs = await Blog.find();
  res.render("bloglist", { data: blogs });
};

exports.addBlog = (req, res, next) => {
  res.render("blog");
};

exports.createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.blog_detail,
  });

  try {
    const saveBlog = await blog.save();
    if (saveBlog) {
      res.redirect("/view/bloglist");
    }
  } catch (error) {
    console.log(error);
  }
};

//All blogs API related function

exports.getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    if (allBlogs)
      return res.status(200).json({
        status: "True",
        data: allBlogs,
      });
  } catch (error) {
    if (error)
      return res.status(400).json({
        status: "False",
        message: "something went wrong",
      });
  }
};


exports.getSingelBlog = async (req,res) => { 

    const { id } = req.params;
   
    try {
        const singelBlog = await Blog.findById(id);
        res.status(200).json({
            singelBlog,
            status:true
        })
   
    } catch (error) {
        res.status(401).json({
            message:"Something went wrong",
            status:false
        })
    }

 

}