const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const basicInfoSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        validate: {
            validator: function(value){
                return validator.isMobilePhone(value,'any')
            },
            message: function(){
                return 'Invalid Mobile Number'
            }
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
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }

}) 

const BasicInfo = mongoose.model('BasicInfo', basicInfoSchema)

module.exports = {
    BasicInfo
}