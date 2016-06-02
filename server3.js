"use strict"; //ec6 严格模式，保证新语法不报错
/**
 * Created by zhubiao on 2015/11/13.
 */
var http = require("http");
var url = require("url");
//之前这里引用的数据库之类的全部放到相应程序文件中， server只是做一个中转站的工作，不负责处理业务逻辑
//建立一个管理路由分发的角色headle
var headle = {}
headle["/add"] = require("./article/add.js");
headle["/del"] = require("./article/del.js");
headle["/updata"] = require("./article/updata.js");
headle["/list"] = require("./article/list.js");

http.createServer(function(requst,response){
    response.writeHead("Content-Type","text/html");
    //服务端不再处理详细的业务逻辑， 只做中转站，简洁
    let pathname = url.parse(requst.url).pathname;
    //判断如果没有这个地址的话，返回404
    if(headle[pathname]){
        //将路由进行分发,将参数一并传入
        headle[pathname](requst,response);
    }else{
        response.end("页面不存在");
    }
}).listen("3000");



//到这里server的中转站的工作就已完成了