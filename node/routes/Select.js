
var Select = require("../src/Sql").Select
var CreateTable = require("../src/Sql").CreateTable
var express = require('express');
var router = express.Router();

router.post('/', async function (req, res, next) {
    let message = req.body
    console.log(message)
    CreateTable()
    let Sresult=await Select(message)
    console.log(Sresult)
    res.status(200).send(
        Sresult
    )
});

module.exports = router;