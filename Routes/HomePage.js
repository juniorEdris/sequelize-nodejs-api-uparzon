const express = require("express")
const { Op } = require('sequelize')
const _ = require('../Constructors/AllVarriables')
const router = express.Router()
const {Banner,Product,Categories,Subcategories,Childcategory} = require('../models')


router.get('/home_page',async (req,res)=>{
    try{     
        
        /*---------------------------------
            ALL THE CATEGORIES=> Categories,Subcategories,Childcategories
        -----------------------------------*/ 
        const categories = await Categories.findAll({
            where: {
                id: {
                    [Op.ne]:_.GROCERY_CATEGORY_ID,
                },
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
            Our Products 
        -----------------------------------*/ 
        const ourProducts = await Product.findAll({
            where:{
                status:1
            },
            limit:15,
        }).catch(err=>{
            console.log(err)
        })

        const featuredProducts = await Product.findAll({
            where: {
                featured: 1,
            }
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
                category_id: _.COMPUTER_CATEGORY_ID
            },
            limit:15,
            order: [['views', 'desc']]
        }).catch(err=>{
            console.log(err)
        })

        /*---------------------------------
            Hot Collection Products
        -----------------------------------*/ 
        const hotCollections = await Product.findAll({
            where:{
                hot:1
            },
            limit:45,
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