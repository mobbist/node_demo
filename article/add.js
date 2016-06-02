'use strict'
var addPage = require("../views/addPage.js");
var post = require("./post.js");
//node核心库， 对请求的字符串进行处理， 转为JSON
var querystrings = require("querystring");
var database = require("../database.js");
var indexPage = require("../views/indexPage.js");
module.exports = function(req,res){
    if(req.method === "GET"){
        res.end(new addPage().render());
    }else{
        //这里不能直接处理，因为post方法在很多地方需要用到比如更新， 删除等 所以这个post方法需要抽出来单独处理

        //调用post方法会返回一个Promise对象， 该对象提供2个方法。 then 成功回调， catch 失败回调 ， then可以连续回调
        post(req).then(function(data){
            //data参数就是Promise对象的 resolve方法的参数
            var errors = {}
            //对数据进行判断


            if(data.title.length < 5){
                errors.title = "title NO 5"
            }
            if(data.body.length < 5){
                errors.body = "内容字节不小于5"
            }

            //判断是否有错误信息， 如果有则就带着错误信息返回。 没有就添加到数据库
            if(Object.keys(errors).length){
                res.end(new addPage(errors).render());
            }else{
                database.add(data);
                //跳转到首页
                res.end(new indexPage(database.getList()).render());
            }

            //如果要连续操作then，则下面一个then的回调参数就是上一个then的返回值


        }).catch(function(data){

        })
    }

}