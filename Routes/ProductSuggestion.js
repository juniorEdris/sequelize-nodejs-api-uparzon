const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {Product,Vendor,Vendor_delivery} = require('../models')

router.get('/:id',(req,res)=>{
    try{
        Product.findAll({
            where:{
                category_id:req.params.id,
                [Op.and]:[
                    {is_verified:1},
                    {status:1},
                    {
                        [Op.and]:[{category_id:{[Op.ne]:_.GROCERY_CATEGORY_ID}},{category_id:{[Op.ne]:_.MEDICAL_CATEGORY_ID}}]
                    },
                    {'$Vendor.status$':2},
                    {'$Vendor.Vendor_delivery.status$':1},
                ],
            },
            include: {
                model: Vendor,
                include:{
                    model:Vendor_delivery,
                } 
            }
        }).then(data=>res.status(200).json({
            message:'API Working',
            data
        })).catch(err=>{
            console.log(err);
            res.status(500).json({
                message:'Error accured',
                err,
            })
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            err
        })
    }
})

module.exports = router