const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {Rating,Product,User,Subcategories,Childcategory,Vendor,Vendor_delivery} = require('../models')


router.get('/:id',async(req,res)=>{

        try{
            await Product.findOne({
                where:{
                    id:req.params.id
                },
                include:{
                    model: Rating,
                    include:{
                        model:User,
                    }
                }
            }).then(data=>{
                    res.status(200).json({
                        data,
                        message:'Here is the product details.'
                    })
                }).catch(err=>{
                    console.log(err);
                    res.status(500).json(err)
                })
        }catch(err){
            res.status(500).json(err)
        }
    })


module.exports = router