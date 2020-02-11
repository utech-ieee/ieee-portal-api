var express = require('express');
var router = express.Router();
let SkillCntrl = require('../controller/skill.controller');

router.post('/',SkillCntrl.submitSkillData);

module.exports = router;