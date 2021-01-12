const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {User} = require('../models')


router.get('/',async(req,res)=>{
    try{
    await User.findAll()
    .then(data=>{
        res.status(200).json({
            data,
            status:1,
        })
    }).catch(err=>{
        res.status(500).json({
            status:0,
            message:'Query error',
            error:err,
        })
    })
    }catch(err){
        res.status(500).json({
            status:0,
            message:'Connection problem.',
            error:err,
        })
    }
})

module.exports = router