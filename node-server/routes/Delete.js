
var Delete = require("../src/Sql").Delete
var express = require('express');
var router = express.Router();

router.post('/', async function (req, res, next) {
    let message = req.body
    console.log(message)
    let Dresult=await Delete(message)
    res.status(200).send(
        Dresult
    )
});

module.exports = router;