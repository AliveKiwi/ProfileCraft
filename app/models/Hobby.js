const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const hobbySchema = new Schema({
    hobbies: {
        type: [String]
    },
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }
})

const Hobby = mongoose.model('Hobby', hobbySchema)

module.exports = {
    Hobby
}