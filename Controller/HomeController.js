const Category = require("../Models/Categorys")

const loginView = (req,res,next) => {
    res.render('login')
}

const indexView = (req,res,next) => {
    res.render('home')
}
const categoryView = (req,res,next) => {
    res.render('category')
}
const bookView = async (req,res,next) => {
   const allCategory = await Category.find();
   console.log(allCategory)
    res.render('book',{data:allCategory})
}


module.exports = {
    indexView,
    categoryView,
    bookView,
    loginView
}