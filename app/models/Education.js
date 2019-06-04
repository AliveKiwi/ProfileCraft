const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const educationSchema = new Schema({
    nameOfInstitute: {
        type: String
    },
    degree: {
        type: String
    },
    dateFrom: {
        type: Date
    },
    dateTo: {
        type: Date
    },
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }
})

const Education = mongoose.model('Education', educationSchema)

module.exports = {
    Education
}