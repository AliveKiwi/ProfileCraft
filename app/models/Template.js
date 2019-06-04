const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const templateSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'        
    },
    basicInfo: {
        type: Schema.Types.ObjectId,
        ref: 'BasicInfo'
    },
    experience: [{
        type: Schema.Types.ObjectId,
        ref: 'Experience'
    }],
    education: [{
        type: Schema.Types.ObjectId,
        ref: 'Education'
    }],
    certification: [{
        type: Schema.Types.ObjectId,
        ref: 'Certification'
    }],
    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }],
    hobby: [{
        type: Schema.Types.ObjectId,
        ref: 'Hobby'
    }]
})

const Template = mongoose.model('Template', templateSchema)

module.exports = {
    Template
}