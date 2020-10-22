var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get("/",function(req,res){
    res.render("index.ejs");
});

app.get("/index",function(req,res){
    res.render("index.ejs");
});

app.get("/Antibiotic",function(req,res){
    res.render("Antibiotic.ejs");
})

app.get("/Aboutus",function(req,res){
    res.render("Aboutus.ejs");
})

app.get("/Ayurvedic",function(req,res){
    res.render("Ayurvedic.ejs");
})

app.get("/cough",function(req,res){
    res.render("cough.ejs");
})

app.get("/Toilet",function(req,res){
    res.render("Toilet.ejs");
})

app.get("/Buynow",function(req,res){
    res.render("Buynow.ejs");
})

app.get("/contactUs",function(req,res){
    res.render("contactUs.ejs");
})

app.get("/skincaree",function(req,res){
    res.render("skincaree.ejs")
})


app.get("/Vitamins",function(req,res){
    res.render("Vitamins.ejs");
})


app.listen(3000,function(req,res){
    console.log("working");
});