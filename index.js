const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.status(200).send("¯\\_(ツ)_/¯");
});

app.get("/user", (req, res) => {
    res.status(200).send("User success!");
});

app.get("/user/:id", (req, res) => {
    res.status(200).send("User " + req.params.id + " found!");
});

app.post("/user/:id", (req, res) => {
    res.status(200).json({
        user: {
            id: req.params.id,
            name: req.body.name
        }
    });
})

app.all("*", (req, res) => {
    res.status(404).send("(╯°□°)╯︵ ┻━┻");
});

exports.funktion = function funktion(req, res) {
    app(req, res);
};
