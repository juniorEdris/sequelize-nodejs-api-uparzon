const express = require("express")
const router = express.Router()
const {Product} = require('../models')



router.get('/api/uparzon_store/vendor_details/:id',async (req,res)=>{
    try{
       const details = await Product.findOne({
            where:{
                id:req.params.id,
            }
        }).catch(err=>{
            console.log(err)
        })
        
        /*---------------------------------
            Returning Data in JSON Fromat
        -----------------------------------*/ 
        res.status(200).json({
            message:'product details',
            details:details,
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router