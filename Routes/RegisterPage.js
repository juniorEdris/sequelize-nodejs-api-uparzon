const express = require("express")
const router = express.Router()
const { Op } = require('sequelize')
const bcrypt = require('bcrypt');
const _ = require('../Constructors/AllVarriables')
const {User} = require('../models')


router.post('/',(req,res)=>{
    try{
        const user = {
            name:`${req.body.firstName} ${req.body.lastName}`,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,_.SALT_ROUNDS),
            phone:req.body.phone,
            gender:req.body.gender,
            birth_date:req.body.birth_date,
        }
        // Checking user with same email and number
        User.findOne({
            where:{             
                [Op.or]: [{ [Op.and]: [{ email:user.email }, { phone:user.phone }] },{email:user.email},{ phone:user.phone }],                
            }
        })
        .then(data=>{
            if(data){
                res.status(200).json({
                    message: 'Email or number is already exist.Try with another',
                })
            }else{
                User.create(user)
                .then(data=>{
                    res.status(200).json({
                        message:'User account created successfuly.',
                        data
                    })
                }).catch(err=>{
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                })
            }
        })

    }catch(err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        res.status(500).json({
            message:'API did not work.',
            error:err
        })
    }
})

module.exports = router