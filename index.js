const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./Routes/routes");
const homeRoutes = require('./Routes/homeroutes')

const path = require("path");

const port = 3000;

//connect Mongodb using mongoose
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected mongoDb")
);

const cors = require('cors');
var app = express();

app.set("view engine", "ejs");

app.use(expressLayouts);
//global middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//Handled Route here
app.use("/api/mydepo/", routes);
app.use("/view/", homeRoutes);


app.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});
