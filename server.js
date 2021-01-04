const { urlencoded } = require("express")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize, User,Product} = require('./models')


app.use(urlencoded({extended:true}))
app.use(express.json())

app.get('/api/uparzon_store/homeproducts',async (req,res)=>{
    try{
        const homeproducts = await Product.findAll({
            where:{
                status:1
            },
            limit:10,
        })
        const users = await User.findAll()
        return res.status(200).json({
            products:homeproducts,
            users,
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