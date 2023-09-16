const User = require('../models/userModel')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

module.exports = {
    isAdmin:(req,res,next)=>{
        console.log('helo');
        console.log(req.session.adminLogin);
        if(req.session.adminLogin){
            console.log('yeasaa');
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
