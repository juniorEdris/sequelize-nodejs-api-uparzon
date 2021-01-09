const express = require("express")
const {  } = require('../Constructors/AllVarriables')
const router = express.Router()
const {Product,Banner} = require('../models')



router.get('/api/uparzon_store/shop_page',async (req,res)=>{
try{
    /*---------------------------------
        CATEGORIES ARE FROM HOME API
    -----------------------------------*/ 
    /*---------------------------------
        RANDOM SHOP BANNER
    -----------------------------------*/ 
    const banners = await Banner.findAll({
        // order:random(),
        limit:1,
    })
    
    /*---------------------------------
        RANDOM SHOP PRODUCTS
    -----------------------------------*/ 
    const shopProducts = await Product.findAll({
        limit:20,
        // order:random(),
    })

    /*---------------------------------
        Returning Data in JSON Fromat
    -----------------------------------*/    
    return res.status(200).json({
        message:'API is on work',
        banners,
        shopProducts,
    })
}catch(err){
    return res.status(500).json(err)
}
})

module.exports = router