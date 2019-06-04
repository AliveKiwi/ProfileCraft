const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise

const userSchema = new Schema({
    firstName:{
        type: String,
        minlength: 5,
        maxlength: 128,
        required: true
    },
    lastName:{
        type: String,
        minlength: 5,
        maxlength: 128,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value)
            },
            message: ()=>{
                return 'Invalid Email Format'
            }
        }        
    },
    password:{
        type: String,
        minlength: 5,
        maxlength: 128,
        required: true
    },
    rePassword:{
        type: String,
        minlength: 5,
        maxlength: 128,
        required: true,
        validate: { //not sure whether this will work or not/as of now just for testing
            validator: function(password, rePassword){
                return validator.equals(password, rePassword)
            },
            message: function(){
                return 'Password don\'t Match'
            }
        }
    },
    userRole: {
        type: String,
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    allowAccess : {
        type: Boolean,
        default: false
    },
    tokens: [{
        token:{
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }],
    template: [{
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }]
})

const User = mongoose.Model('User', userSchema)

module.exports = {
    User
}