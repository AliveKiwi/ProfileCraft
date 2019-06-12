const express = require('express')
const _ = require('lodash')
const router = express.Router()
const {User} = require('../models/User')
const {checkForAccess, authenticateUser} = require('../middlewares/securityChecks')
// localhost:3000/user/

router.post('/register', function(req,res){
    let body = _.pick(req.body,['email','password'])
    const user = new User(body)
    user.save()
    .then(function (user) {
        res.send(user)
    })
    .catch(function (err) {
        res.send(err)
    })
})

router.post('/login', checkForAccess, function (req, res) {
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(function (user) {
            return user.generateToken()
        })
        .then(function (token) {
            // res.setHeader('x-auth', token).send({}) Use this with postman
            res.setHeader('x-auth', token)
            res.send({token}) //use this for react frontend to store token in localstorage
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.get('/account',authenticateUser, function(req, res){
    const { user } = req
    res.send(user)
})

router.delete('/logout',authenticateUser, function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user, { $pull: { tokens: { token } } })
        .then(function () {
            res.send({ notice: 'successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.delete('/logoutALL',authenticateUser, function (req, res){
    const { user } = req
    User.findByIdAndUpdate(user,{ "$set": { "tokens": [] }}  )
    .then(function () {
        res.send(user)
    })
    .catch(function (err) {
        res.send(err)
    })
})

module.exports = {
    userRouter: router
}