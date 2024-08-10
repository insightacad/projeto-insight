const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cors = require('cors');
const env = require('dotenv')

router.use(cors({
    origin: process.env.MAINDOMAIN,
    methods: ['GET', 'POST'],
    credentials: true
  }));

router.get('/', userController.dashboard);
router.post('/user/profile/update', userController.updateProfile);

module.exports = router;