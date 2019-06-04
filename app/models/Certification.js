const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const certificationSchema = new Schema({
    title: {
        type: String
    },
    Description:{
        type: String
    },
    validFrom:{ 
        type: Date
    },
    validTo:{
        type: Date
    },
    isLifeLong:{
        type: Boolean
    },
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }
})

const Certification = mongoose.model('Certification', certificationSchema)

module.exports = {
    Certification
}