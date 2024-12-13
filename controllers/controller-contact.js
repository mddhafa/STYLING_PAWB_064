const database = require('../configs/database');

const contact = (req, res) => {
    const { name, email, message, address } = req.body;
    const query = `INSERT INTO contact (name, email, message, address) VALUES (?, ?, ?, ?)`;
    database.query(query, [name, email, message, address], (err, result) => {
        if (err) { 
            return res.status(500).send({ message: "Error sending message", error: err });
        }
        res.redirect('/contact');
    });
};

const HalamanContact = (req, res) => {
    res.render('contact', {
        title : 'Contact',
        layout : 'layouts/main-layouts',
        shownav : true,
        showfooter : true
    });
};

module.exports = {
    HalamanContact,
    contact
};