const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const expressEjsLayouts = require('express-ejs-layouts');
const Userauth = require('./routes/route-auth');
const todo = require('./routes/route-todo');
const contact = require('./routes/route-contact');
const session = require('express-session');
const path = require('path');


// Tambahkan middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.set('layout', 'layouts/main-layouts');

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


app.use("/", Userauth);
app.use('/todo', todo);
app.use('/contact', contact);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
