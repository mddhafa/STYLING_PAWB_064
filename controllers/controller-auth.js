const database = require('../configs/database');

const register = (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    database.query(query, [username, password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error registering user", error: err });
        }
        res.redirect('/login');
    });
};

const HalamanRegister = (req, res) => {
    res.render('register', {
        title: 'Register',
        layout: 'layouts/main-layouts',
        shownav: false,
        showfooter: false
    });
};

const loginUser = (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    database.query(query, [username, password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error logging in", error: err });
        }
        if (result.length > 0) {
            req.session.user = result[0].id; // Set user ke sesi
            return res.redirect('/');
        } else {
            return res.status(404).send({ message: "User not found" });
        }
        
    });
};

const HalamanLogin = (req, res) => {
    res.render('login', {
        title: 'Login',
        layout: 'layouts/main-layouts',
        shownav: false,
        showfooter: false
    });
};

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send({ message: "Error logging out", error: err });
        }
        res.redirect('/login');
    });
};

module.exports = {
    register,
    HalamanRegister,
    loginUser,
    HalamanLogin,
    logoutUser
};
