const express = require('express')
const app = express()
require('dotenv').config()
const db = require("./config/db")
const Handlebars = require('handlebars')
const path = require("path");
const hbsHelpers = require("./utils/helpers");
const Port = process.env.PORT || 5000
const exphbs  = require('express-handlebars')

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Set Static folder
app.use(express.static(path.join(process.cwd(),'public')))


//handlebars
app.engine('.hbs',exphbs.engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views',path.join(__dirname,'/views'))



//routes
app.use("/news",require("./routes/news"))
//test
app.get("/test",(req,res)=>{
    res.send("Server is running!!!")
})
app.get("/",(req,res)=>{
    res.render("home",{
        title: "Bosh sahifa",
        url: process.env.URL
    })
})
//server
app.listen(Port,()=>{
    console.log("Server running on port: "+ Port)
})