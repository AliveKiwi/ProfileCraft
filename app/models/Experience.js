const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const experienceSchema = new Schema({
    companyName: {
        type: String
    },
    position: {
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

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = {
    Experience
}