const express = require("express")
const bodyParser = require("body-parser")
const e = require("express")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs")

//It will store only one item. To solve the problem we will make array
//var itemName = ""
var items = ["Buy Food","Cook Food","Eat Food"]

app.get('/',(req,res)=>{

    var options = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    }
    
    var today = new Date()
   

    //When we get '/' for the first time, 'item' is not defined and
    //it's value can't be passed. So what we do is we send the data
    //in get request only so that it does not throw error of 
    //not being defined.
    const data = today.toLocaleDateString("en-US",options)
    res.render("list",{day:data,newListItems:items})

})

app.post('/',(req,res)=>{
    var itemName = req.body.newItem
    //This will throw error
    //res.render('list',{item:itemName})
    //To avoid error what we have to do is give to do res.redirect
    //It will agaim lead to calling of app.get('/') and value of item
    //will be present.
    items.push(itemName)
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})