"use strict";
var indexPage = require("../views/indexPage.js");
var database = require("../database.js");
module.exports = function(req,res){
    //var articleList = [{title:"titleOne",body:"bodyOne"},{title:"titleTwo",body:"bodyTwo"}]
    var articleList = database.getList();
    res.end(new indexPage(articleList).render());
}



//视图的业务逻辑具体在这里进行分层实现了，但是HTML结构是复杂的， 这样展现简单的数据还行， 但是要展现复杂的html这样就不行了， 需要这样分离视图，创建一个views的文件夹