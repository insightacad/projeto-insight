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
router.get('/comunidades', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/community.html'));
});
router.get('/profile', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/profile.html'));
});
router.get('/settings', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/profile.html'));
});
//Api que retorna os cursos que a pessoa está 
router.get('/api/user/courses', userController.getUserCourses);
//api de dados do usuario
router.get('/api', userController.dashboard);
//Api que retorna os cursos do banco de dados
router.get('/api/courses', userController.getCourses);
//Api para setar o conteudo
router.post('/api/user/enroll', userController.enrollUser);

module.exports = router;
