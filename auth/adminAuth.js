const User = require('../models/userModel')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

module.exports = {
    isAdmin:(req,res,next)=>{
        if(req.session.isAdmin){
            next()
        }else{
            res.redirect('/admin/adminlogin')
        }
    },
    loginAuth:(req,res,next)=>{
        try {
            if(req.session.isAdmin){
                res.redirect('/admin')
            }else{
                next()
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    }
