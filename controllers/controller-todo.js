const database = require('../configs/database');

const getTodo = (req, res) => {
    const query = `SELECT * FROM todos`;
    database.query(query, (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error getting todos", error: err });
        }
        res.render('todo', {
            title: 'Todo',
            layout: 'layouts/main-layouts',
            shownav: true,
            showfooter: true,
            todos: result
        });
    });
}

const addTodo = (req, res) => {
    const { NamaKegiatan, Deskripsi } = req.body;
    const query = `INSERT INTO todos (NamaKegiatan, Deskripsi) VALUES (?, ?)`;
    database.query(query, [NamaKegiatan, Deskripsi], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error adding todo", error: err });
        }
        res.redirect('/todo');
    });
}

const putTodo = (req, res) => {
    const { id } = req.params;
    const { NamaKegiatan, Deskripsi } = req.body;
    const query = `UPDATE todos SET NamaKegiatan = ?, Deskripsi = ? WHERE id = ?`;
    database.query(query, [NamaKegiatan, Deskripsi, id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error updating todo", error: err });
        }
        res.redirect('/todo');
    });
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM todos WHERE id = ?`;
    database.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: "Error deleting todo", error: err });
        }
        res.redirect('/todo');
    });
}

const HalamanTodo = (req, res) => {
    res.render('todo', {
        title: 'Todo',
        layout: 'layouts/main-layouts',
        shownav: true,
        showfooter: true
    });
};

module.exports = {
    getTodo
    , addTodo
    , putTodo
    , deleteTodo
    , HalamanTodo
};