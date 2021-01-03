const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize, User} = require('./models')


app.use(urlencoded({extended:true}))
app.use(express.json())

app.post('/user',async (req,res)=>{
    console.log(req.body);
    const {name,email,password} = req.body
    try{
        const user = await User.create({name,email,password})
        return res.json(user)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})


sequelize.authenticate().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Connected to database.`);
    })
})