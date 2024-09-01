const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const Course = require('../models/Courses');
const path = require('path');
const cors = require('cors');
const env = require('dotenv')


router.use(cors({
    origin: process.env.MAINDOMAIN,
    methods: ['GET', 'POST'],
    credentials: true
  }));

// Rota raiz
router.get('/', (req, res) => {
  // Adicionar o diretorio da homepage aqui.
  res.sendFile(path.join(__dirname, '../frontend/pages/homepage.html'));
});
router.post('/dashboard', userController.dashboard);

// router.get('/courses', async (req, res) => {
//   try {
//       const courses = await Course.findAll();
//       res.json(courses);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });

router.post('/user/profile/update', userController.updateProfile);
router.get('/profile:username', userController.UserInfo); //127.0.0.1:200/api/profile?username=test

module.exports = router;