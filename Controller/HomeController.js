const indexView = (req,res,next) => {
    res.render('home')
}
const categoryView = (req,res,next) => {
    res.render('category')
}
const bookView = (req,res,next) => {
    res.render('book')
}


module.exports = {
    indexView,
    categoryView,
    bookView
}