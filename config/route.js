const express = require('express');
const router = express.Router();

//Import the router

const {basicInfoRouter} = require('../app/controllers/BasicInfoController')
const {certificationRouter} = require('../app/controllers/CertificationController')
const {educationRouter} = require('../app/controllers/EducationController')
const {experienceRouter} = require('../app/controllers/ExperienceController')
const {hobbyRouter} = require('../app/controllers/HobbyController')
const {skillRouter} = require('../app/controllers/SkillController')
const {templateRouter} = require('../app/controllers/TemplateController')
const {userRouter} = require('../app/controllers/UserController')
const {userPersonalInfoRouter} = require('../app/controllers/UserPersonalInfoController')

//Link the router

// router.use('/basicInfo', basicInfoRouter)
// router.use('/certification', certificationRouter)
// router.use('/education', educationRouter)
// router.use('/experience', experienceRouter)
// router.use('/hobby', hobbyRouter)
// router.use('/skill', skillRouter)
// router.use('/template', templateRouter)
router.use('/user', userRouter)
// router.use('/userPersonalInfo', userPersonalInfoRouter)

module.exports = {
    routes: router
}