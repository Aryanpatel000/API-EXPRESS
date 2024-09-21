const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require("cors")

class UserController {
    static getalluser = async (req, res) => {
        try {
            res.send('hello user')
        } catch (error) {
            console.log(error)
        }
    }

    static userinsert = async (req, res) => {
        try {
            const {name,email,password,image,role}=req.body
            const result = new UserModel({
                name:name,
                email:email,
                password:password,
                image:image,
                role:role,

            })
        
            const savetender = await result.save()
            res.status(200)
                .json({ status: "SUCCESS", message: "user Registration successfull" })
        } catch (error) {
            console.log(error)
        }
    }


    static logout = async (req, res) => {
        try {
            res.clearCookie('token')
            res.redirect('/api')
        } catch (err) {
            console.log(error);
        }
    }

    static login = (req, res) => {
        try {
            res.render('login', { msg: req.flash('success'), msg1: req.flash('error') })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserController