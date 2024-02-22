
var express = require('express');
var router = express.Router();
var Update = require("../src/Sql").Update

router.post('/', async function (req, res, next) {
    let message = req.body
    console.log(message)
    let Uresult=await Update(message)
    res.status(200).send(
        Uresult
    )
});

module.exports = router;