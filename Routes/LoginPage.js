const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt');
const _ = require('../Constructors/AllVarriables')
const {User} = require('../models')

router.post('/',(req,res)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    User.findOne({
        where:{
            email:req.body.email,
        }
    }).then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){        
                res.status(200).json({
                    message:'user logged in',
                    user,
                })
            }else{
                res.status(200).json({
                    message:'password did not match',
                })
            }
        }else{
            res.status(200).json({
                message:'email not available',
            })
        }
    })
})


module.exports = router