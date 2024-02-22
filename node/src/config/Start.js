var mysql=require("mysql")
var config=require("./Config").config

const Pool = mysql.createPool(config);

module.exports=Pool