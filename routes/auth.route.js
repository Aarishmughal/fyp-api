const express = require('express');
const router = express.Router();

const { authController } = require('../controllers');

router.route('/tenant/signup').post(authController.signup);
router.route('/tenant/login').post(authController.login);

module.exports = router;
