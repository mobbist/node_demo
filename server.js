/**
 * Created by zhubiao on 2015/11/13.
 */
//创建一个服务器， 需要使用到 http 模块
var http = require("http");

var database = require("./database.js");
var art = {"name":"zbd","age":"25"}
//当有一个客户端访问的时候，就会调用该方法，参数为回调函数: 并不是启动服务的时候调用的， 而是处于等待状态， 当有客户端通过端口访问的时候， 会被调用
http.createServer(function(requst,response){
    //回调函数里有2个参数， 一个是请求（只读），一个是响应（将数据返回到客户端）
    //首先可以判断请求的URL,对应不同的处理
    switch(requst.url){
        //通过不同的处理， 可以处理增删改查，暴露给客户端
        case "/":
            //所有响应的内容都是返回给客户端，
            //返回头部信息：状态码，文档类型
            response.writeHead(200,{"Content-Type":"text/plain"});
            //响应结束之前的最后一次内容,这里获取数据里的数据
            response.write(JSON.stringify(database.getList()));
            response.end("over");
            break;
        case "/add":
            database.add(art);
            break;
        case "/updata":
            break;
        case "/del":
            break;
    }
}).listen("3000");


//这个是最最基础的服务端实现， 增删改查。  这时候如果我的参数是   XXXX/add?name=mobb  就无法处理了， 需要升级一下server端解决。 请看server2.js