const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const routes = require('./Routes/routes')

const port = 3000

//connect Mongodb using mongoose
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true},()=>console.log("connected mongoDb"))

//global middelware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// //All routes 
// app.post('/register', (req, res) => {
//   var data = req.body
//   console.log(req.body)
//   res.send()
// })


//Handled Route here
app.use('/api/mydepo/',routes);

app.listen(port, () => {
  console.log(`Example application listening on port ${port}`)
})