const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize, User,Product} = require('./models')


app.use(urlencoded({extended:true}))
app.use(express.json())


app.post('/user',async (req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).json({
            status: 1,
            message: "You are part of our store."
        })
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

app.get('/products',async (req,res)=>{
    try{
        const products = await Product.findAll({
            attributes:['id','name','price'],
            
        })
        return res.json(products)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

app.delete('/products/:id',async (req,res)=>{
    try{
        const products = await Product.destroy({
            where:{
                id:req.params.id
            }
        })
        return res.json(products)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

app.get('/users',async (req,res)=>{
    try{
        const users = await User.findAll()
        return res.json(users)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})
app.post('/addproduct',async (req,res)=>{
    try{
        const product = await Product.create(req.body)
        return res.status(200).json({
            status:1,
            message:"Product added to store."
        })
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