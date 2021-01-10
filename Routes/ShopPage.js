const express = require("express")
const paginate = require('express-paginate');
const router = express.Router()
const {Product,Banner} = require('../models')

router.use(paginate.middleware(22,50))

router.get('/shop_page',async (req,res)=>{
    try{
        console.log('====================================');
        console.log(req.query.page);
        console.log('====================================');
    const data = {}
    data.message = 'API is working'
    /*---------------------------------
        RANDOM SHOP BANNER
    -----------------------------------*/ 
    data.banners = await Banner.findAll({
        limit:1,
    })
    
    /*---------------------------------
        RANDOM SHOP PRODUCTS
    -----------------------------------*/ 
     await Product.findAndCountAll({
         limit: req.query.limit,
         offset: req.skip,
        })
        .then(res=>{
            const itemCount = res.count
            const pageCount = Math.ceil(itemCount / req.query.limit)
            data.products = res.rows
            data.legnth = data.products.length
            data.pagescount = pageCount
            data.count = itemCount
            data.pages = paginate.getArrayPages(req)(3, pageCount, req.query.page)
        })
        .catch(err=>{
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        })

    /*---------------------------------
        Returning Data in JSON Fromat
    -----------------------------------*/    
    return res.status(200).json(data)
}catch(err){
    return res.status(500).json({err})
}
})

module.exports = router