const indexView = (req,res,next) => {
    res.render('home')
}
const categoryView = (req,res,next) => {
    res.render('category')
}

module.exports = {
    indexView,
    categoryView
}