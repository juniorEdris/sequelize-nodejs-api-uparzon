const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {Vendor_delivery} = require('../models')


router.get('/',async (req,res)=>{
    try{
        console.log('try');
        await Vendor_delivery.findAll({
            where:{
                status:1
            }
        })
            .then(data=>{
                res.status(200).json({
                    status:1,
                    data,
                })
            }).catch(err=>res.status(500).res.json({
                message:'query error',
                err
            }))
    }catch(err){
        res.status(500).json({
            status:0,
            message:err,
        })
    }
})

module.exports = router