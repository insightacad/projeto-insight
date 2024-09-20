const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas da dashboard
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/dashboard.html'));
});

router.get('/conteudos', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/courses.html'));
});

<<<<<<< HEAD
router.post('/api/user/enroll', userController.enrollUser);
router.get('/api/user/courses', userController.getUserCourses);
=======
router.get('/api/user/courses/', userController.getUserCourses);
>>>>>>> 3cd5ea284e984cbe7dfe16fd84e9ed06f9499120
router.get('/api', userController.dashboard);
router.get('/api/courses', userController.getCourses);

module.exports = router;
