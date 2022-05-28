const express = require('express');
const routes = require("./controllers/routes");
const mongoose = require("mongoose");
const uri = require("./config/mongoURI");
const app= express();

app.use(express.urlencoded({extended:true}));
// view engine
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
//routes
app.use(routes);
//connect mongodb
mongoose.connect(uri,{useNewUrlParser:true}).then(()=>console.log("connected to DB"))


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log("server started at port:" + PORT));
