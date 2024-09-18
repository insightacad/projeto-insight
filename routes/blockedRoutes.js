const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas da dashboard
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/admin.html'));
});

router.get('/api', userController.dashboard);

router.get('/api/courses', userController.getCourses);

module.exports = router;
