const express = require('express');
const router = express.Router();
const contact = require('../controllers/controller-contact');
const {isAuth} = require('../middleware/middleware-auth');


router.get('/', isAuth, contact.HalamanContact);
router.post('/', isAuth, contact.contact);

router.get('/', isAuth, (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/main-layouts',
        shownav: true,
        showfooter: true
    });
});

module.exports = router;