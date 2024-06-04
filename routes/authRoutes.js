const express = require('express');
const { register, verify } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/verify', verify);

module.exports = router;