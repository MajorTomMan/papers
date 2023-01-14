var Insert= require("../src/Sql").Insert
var express = require('express');
var CreateTable= require("../src/Sql").CreateTable;
var router = express.Router();

router.post('/', async function (req, res, next) {
    let message = req.body
    console.log(message)
    let CTresult=await CreateTable()
    let Iresult=await Insert(message)
    res.status(200).send(
        {
            createTableInfo:CTresult,
            insertInfo:Iresult
        }
    )
});

module.exports = router;