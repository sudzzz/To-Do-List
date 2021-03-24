const express = require("express")
const bodyParser = require("body-parser")
const e = require("express")
const date = require(__dirname +"/date.js")

//Gives output "[FUnction : getDate]"
//console.log(date)

//Calls the function getDate() in app.js and prints the date
console.log(date)

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs")

//It will store only one item. To solve the problem we will make array
//var itemName = ""
const items = ["Buy Food","Cook Food","Eat Food"]
const workItems = []

app.get('/',(req,res)=>{

    //If 1 functiin in date.js
    //let data = date()
    
    //Now we have getDate and getDay
    //so we can write
    const data = date.getDate()
    const day = date.getDay()
    console.log(data)
    console.log(day)
    res.render("list",{listTitle:data,newListItems:items})

})

app.post('/',(req,res)=>{
    var itemName = req.body.newItem
    //This will throw error
    //res.render('list',{item:itemName})
    //To avoid error what we have to do is give to do res.redirect
    //It will agaim lead to calling of app.get('/') and value of item
    //will be present.
    if(req.body.list === "Work")
    {
        workItems.push(itemName)
        res.redirect("/work")
    }
    else{
        items.push(itemName)
        res.redirect("/")
    }
   
})

app.get('/work',(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItems})
})

app.post("/work",(req,res)=>{
    
    let item = req.body.newItem
    workItems.push(item)
    res.redirect("/work")
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})