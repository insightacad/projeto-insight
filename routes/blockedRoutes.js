const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas da dashboard
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/admin.html'));
});
router.post('/', userController.dashboard);

router.get('/courses', userController.getCourses);

module.exports = router;