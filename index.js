'use strict';

const Express = require("express");
const app = Express.Router();

app.get("/", (req, res) => {
    res.status(200).send("¯\\_(ツ)_/¯");
});

app.get("/user", (req, res) => {
    res.status(200).send("User success!");
});

app.get("/user/:id", (req, res) => {
    res.status(200).send("User " + req.params.id + " found!");
});

app.all("*", (req, res) => {
    res.status(404).send("(╯°□°)╯︵ ┻━┻");
});

exports.funktion = function funktion(req, res) {
    app(req, res);
};
