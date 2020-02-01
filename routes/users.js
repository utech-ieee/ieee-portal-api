var express = require('express');
var router = express.Router();
let UserCntrl = require('../controller/user.controller');

router.post('/',UserCntrl.submitUserData);
module.exports = router;
