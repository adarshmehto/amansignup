const express = require("express")
const app = express()
const collection = require("./mongodb")

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('login.ejs')
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})

app.post('/signup',async (req,res)=>{
    const data = {
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany(data)

    res.render("home.ejs")
})

app.listen(3000,()=>{
    console.log('port is connected')
})