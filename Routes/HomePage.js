const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {Banner,Product,Categories,Subcategories,Childcategory,Vendor,Vendor_delivery} = require('../models')


router.get('/',async (req,res)=>{
    try{     
        
        /*---------------------------------
            ALL THE CATEGORIES=> Categories,Subcategories,Childcategories
        -----------------------------------*/ 
        const categories = await Categories.findAll({
            where: {
                id: {
                    [Op.ne]:_.GROCERY_CATEGORY_ID,
                },
                status:1,
                
            },
            include: {
                model: Subcategories,
                include: {
                    model: Childcategory,
                }
            }
        })
        .then(data =>{
            return data
        })
        .catch(err=>{
            console.log(err)
        })


        /*---------------------------------
            ALL THE PAGE CONTENTS
        -----------------------------------*/
        /*---------------------------------
            Slider Banners
        -----------------------------------*/ 
        const slider = await Banner.findAll()
        .then(data=>data)
        .catch(err=>err)
        
        /*---------------------------------
           Vendors 
        -----------------------------------*/ 
        const vendors = await Vendor.findAll({
            limit:15,
        }).catch(err=>{
            console.log(err)
        })

        /*---------------------------------
            Our Products 
        -----------------------------------*/ 
        const ourProducts = await Product.findAll({
            where:{
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
            limit:15,
            include: {
                model: Vendor,
                include:{
                    model:Vendor_delivery,
                } 
            }
        }).catch(err=>{
            console.log(err)
        })

        /*---------------------------------
            Featured Products
        -----------------------------------*/ 

        const featuredProducts = await Product.findAll({
            where:{
                [Op.and]:[
                    {is_verified:1},
                    {status:1},
                    {
                        [Op.and]:[{category_id:{[Op.ne]:_.GROCERY_CATEGORY_ID}},{category_id:{[Op.ne]:_.MEDICAL_CATEGORY_ID}}]
                    },
                    {featured:1},
                    {'$Vendor.status$':2},
                    {'$Vendor.Vendor_delivery.status$':1},
                ],
            },
            limit:15,
            include:{
                    model: Vendor,
                    include:{
                        model:Vendor_delivery,
                    } 
            },
            
        })
        .then(data =>{
            return data
        })
        .catch(err=>{
            console.log(err)
        })
        
        /*---------------------------------
            Computer Products
        -----------------------------------*/ 
        const computers = await Product.findAll({
            where:{
                [Op.and]:[
                    {is_verified:1},
                    {status:1},
                    {category_id:_.COMPUTER_CATEGORY_ID},
                    {'$Vendor.status$':2},
                    {'$Vendor.Vendor_delivery.status$':1},
                ],
            },
            limit:15,
            include:{
                model: Vendor,
                include:{
                    model:Vendor_delivery,
                } 
        },
            order: [['views', 'desc']]
        }).catch(err=>{
            console.log(err)
        })

        /*---------------------------------
            Hot Collection Products
        -----------------------------------*/ 
        const hotCollections = await Product.findAll({
            where:{
                [Op.and]:[
                    {is_verified:1},
                    {status:1},
                    {
                        [Op.and]:[{category_id:{[Op.ne]:_.GROCERY_CATEGORY_ID}},{category_id:{[Op.ne]:_.MEDICAL_CATEGORY_ID}}]
                    },
                    {hot:1},
                    {'$Vendor.status$':2},
                    {'$Vendor.Vendor_delivery.status$':1},
                ],
            },
            limit:45,
            include:{
                model: Vendor,
                include:{
                    model:Vendor_delivery,
                } 
        },
            order: [['views', 'desc']]
        }).catch(err=>{
            console.log(err)
        })


        /*---------------------------------
            Returning Data in JSON Fromat
        -----------------------------------*/ 
        return res.status(200).json({
            categories,
            slider,
            vendors,
            ourProducts,
            featuredProducts,
            hotCollections,
            computers,
        })
    }catch(err){
        return res.status(500).json(err)
    }
})


module.exports = router