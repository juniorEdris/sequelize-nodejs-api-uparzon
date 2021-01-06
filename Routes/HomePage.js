const express = require("express")
const { Op } = require('sequelize')
const router = express.Router()
const {Banner,Product,Categories,Subcategories,Childcategory} = require('../models')


router.get('/api/uparzon_store/homeproducts',async (req,res)=>{
    try{     
        
                /*---------------------------------
            Categories
        -----------------------------------*/ 
        const categories = await Categories.findAll({
            where: {
                is_featured: 1,
                id: {
                    [Op.ne]:20,
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
            ALL THE CATEGORIES
        -----------------------------------*/ 
        /*---------------------------------
            Sub Categories
        -----------------------------------*/ 
        const subcategories = await Subcategories.findAll({
            where:{
                CategoryId:{
                    [Op.ne]:20,
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
           Child Categories
        -----------------------------------*/ 
        const childcategories = await Childcategory.findAll()
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
        
        /*---------------------------------
            Computer Products
        -----------------------------------*/ 
        const computers = await Product.findAll({
            where:{
                category_id:22
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
            slider,
            ourProducts,
            hotCollections,
            computers,
            categories,
            subcategories,
            childcategories
        })
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})


module.exports = router