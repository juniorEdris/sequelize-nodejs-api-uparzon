const express = require("express")
const paginate = require('express-paginate');
const { Op } = require('sequelize')
const router = express.Router()
const {Product,Banner,Vendor,Vendor_delivery} = require('../models')

router.use(paginate.middleware(22,50))

router.get('/',async (req,res)=>{
    try{

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
        where:{
            [Op.and]:[
                {is_verified:1},
                {status:1},
                {'$Vendor.status$':2},
                {'$Vendor.Vendor_delivery.status$':1},
            ],
        },
        include: {
            model: Vendor,
            include:{
                model:Vendor_delivery,
            } 
        },
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
    console.log(err)
    return res.status(500).json({err})
}
})

module.exports = router