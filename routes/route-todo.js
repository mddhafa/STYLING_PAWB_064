const express = require('express');
const router = express.Router();
const controllerauth = require('../controllers/controller-todo');
const {isAuth} = require('../middleware/middleware-auth');


router.get('/', isAuth, controllerauth.getTodo);
router.post('/', isAuth, controllerauth.addTodo);
router.put('/:id', isAuth, controllerauth.putTodo);
router.delete('/:id', isAuth, controllerauth.deleteTodo);

router.get('/', isAuth, (req, res) => {
    res.render('todo', {
        title: 'Todo',
        layout: 'layouts/main-layouts',
        shownav: true,
        showfooter: true
    });
});

module.exports = router;