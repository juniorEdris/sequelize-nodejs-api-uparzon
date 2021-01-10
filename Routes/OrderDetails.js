const express = require('express')
const router = express.Router()
const {Order} = require('../models')

router.get('/',async (req,res)=>{
    try{
        const orders = await Order.findAll({
            where:{
                user_id:req.params.id
            }
        }).catch(err=>{
            console.log(err);
        })
        
        res.status(200).json({
            message:'Order data',
            orders,
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router