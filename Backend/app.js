const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path  = require('path');
const cors = require("cors")
const mongoose = require('mongoose');
const db = "mongodb+srv://mohit-devda:mohittout@cluster0.l26d8.mongodb.net/website?retryWrites=true&w=majority"
mongoose.connect(db,{ useNewUrlParser: true}).then(()=>{
    console.log("coneected");
})
.catch(err=>{
    console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));

const userRoute = require("./route/userRoute.js");
const productRoute = require('./route/productRoute')


app.use('/user',userRoute);
app.use('/product', productRoute);

app.listen(3000, ()=>{
  console.log("server running at port no 3000");
})