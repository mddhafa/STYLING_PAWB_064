const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller-auth');
const {isAuth} = require('../middleware/middleware-auth');

router.get('/register', controller.HalamanRegister);
router.post('/register', controller.register);

router.get('/login', controller.HalamanLogin);
router.post('/login', controller.loginUser); 

router.get('/logout', controller.logoutUser);

router.get('/', isAuth, (req, res) => {
    res.render('index', {
        title: 'Home',
        layout: 'layouts/main-layouts',
        shownav: true,
        showfooter: true
    });
});

module.exports = router;