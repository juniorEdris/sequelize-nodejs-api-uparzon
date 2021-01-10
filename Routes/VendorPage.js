const express = require("express")
const paginate = require('express-paginate');
const router = express.Router()
const {Vendor} = require('../models')

router.use(paginate.middleware(22,50))

router.get('/',async (req,res,next)=>{
    try{
    const data = {}
    data.message = 'API is working'
        
    /*---------------------------------
        RANDOM SHOP PRODUCTS
    -----------------------------------*/ 
     await Vendor.findAndCountAll({
         limit: req.query.limit,
         offset: req.skip,
        })
        .then(res=>{
            const itemCount = res.count
            const pageCount = Math.ceil(itemCount / req.query.limit)
            data.vendors = res.rows
            data.legnth = data.vendors.length
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