const express = require('express');
const Blog = require('../Models/Blogs');


exports.viewBlog = async (req,res,next) => { 
   const blogs = await Blog.find();
   res.render("bloglist", { data: blogs });
}

exports.addBlog = (req,res,next) => { 
    res.render('blog');
}

exports.createBlog = async (req,res) => { 

    const blog = new Blog({
        title:req.body.title,
        description:req.body.blog_detail
    })

    try {
    const saveBlog = await blog.save();
    if(saveBlog){
        res.redirect('/view/bloglist');
    }

    } catch (error) {
        console.log(error);
    }


    
}

