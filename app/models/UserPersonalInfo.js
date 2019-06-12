const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const userPersonalInfoSchema = new Schema({
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
    mobile: { 
        type: Number,
        min:10,
        max:10,
        validate:{
            validator: function(value){
                return validator.isMobilePhone(value, 'any')
            },
            message: function(){
                return 'Invalid Mobile Number'
            }
        }
    },
    address: {
        lineOne: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number,
        }
    },
    email: {
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
    github: {
        type: String
    },
    linkedin: {
        type: String
    }
})

const UserPersonalInfo = mongoose.model('UserPersonalInfo', userPersonalInfoSchema)

module.exports = {
    UserPersonalInfo
}