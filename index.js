const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(express.json(), express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ code: 200, data: null, message: "Everything looking goodfddf." });
});

mongoose.connect(process.env.MONGO_URL)
    .then(data => {
        console.log('---connected-----');
    })
    .catch(err => {
        console.log('-------err-----', err);
    });
// await mongoose.connect('mongodb://localhost/emp_local');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listing on port ${port}`);
})