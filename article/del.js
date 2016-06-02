var url = require("url");
var qs = require("querystring");
var database = require("../database");

var list = require("./list.js");
module.exports = function(req,res){
    if(req.method === "GET"){
    	//获取del?后面的query
    	var query = url.parse(req.url).query;
    	//转为josn
    	var json = qs.parse(query);
    	database.del(json.id);
    	list(req,res);
    }else{
    }
}