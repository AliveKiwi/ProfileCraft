const { User } = require('../models/User')

const checkForAccess = function(req,res,next){
    const email = req.body.email
    User.findOne({email})
    .then(function(user){
        if(user.allowAccess){
            next()
        }
        else {
            res.status('401').send({ notice: 'Access Denied' })
        }

    })
    .catch(function (err) {
        res.status('401').send(err)
    })
}

const authenticateUser = function (req, res, next) {
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(function (user) {
            if (user.allowAccess) {
                req.user = user
                req.token = token
                next()
            } else {
                res.status('401').send({ notice: 'token not available' })
            }

        })
        .catch(function (err) {
            res.status('401').send(err)
        })
}

module.exports = { 
    checkForAccess,
    authenticateUser
}