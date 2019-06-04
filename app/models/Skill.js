const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise

const skillSchema = new Schema({
    skills: [{
        skill: {
            type: String
        },
        rating: {
            type: Number,
            min: 0
        }
    }],
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template'
    }

})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = {
    Skill
}