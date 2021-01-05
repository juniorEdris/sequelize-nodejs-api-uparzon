const { urlencoded } = require("express")
const express = require("express")
const { Op } = require('sequelize')
const app = express()
const PORT = process.env.PORT || 4000
const {sequelize,Product,Catergories} = require('./models')


app.use(urlencoded({extended:true}))
app.use(express.json())

app.get('/api/uparzon_store/homeproducts',async (req,res)=>{
    try{
        const products = await Product.findAll({
            where:{
                status:1
            },
            limit:1,
        })
        const categories = await Catergories.findAll({
            where: {
                is_featured: 1,
                name: {
                    [Op.ne]:'Groceries',
                }
            }
        })
        return res.status(200).json({
            products,
            categories,
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
}).catch(() => {
    console.log('DB not connected');
})
