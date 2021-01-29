var express = require("express");
var router = express.Router();

app.get('/detalle/:id', function (req, res) {
    res.send(req.params)
})