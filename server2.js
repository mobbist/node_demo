/**
 * Created by zhubiao on 2015/11/13.
 */
var http = require("http");
//Node专门处理url的模块
var url = require("url");

var database = require("./database.js");
var art = {"name":"zbd","age":"25"}
http.createServer(function(requst,response){
    //这里处理客户端的url地址，返回一个url对象，可以控制台打印看一下
    var result = url.parse(requst.url);
    var pathName = result.pathname;
    var query  = result.query;

    switch(requst.url){
        case "/":
            response.writeHead(200,{"Content-Type":"text/plain"});
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

//在这里服务端可以处理带参数的url这里了， 这里再开始精简一下，让server做一个中转站一样， 各个路径客户端访问的处理放在其他的程序文件中，请看server3.js