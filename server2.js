/**
 * Created by zhubiao on 2015/11/13.
 */
var http = require("http");
//Nodeר�Ŵ���url��ģ��
var url = require("url");

var database = require("./database.js");
var art = {"name":"zbd","age":"25"}
http.createServer(function(requst,response){
    //���ﴦ��ͻ��˵�url��ַ������һ��url���󣬿��Կ���̨��ӡ��һ��
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

//���������˿��Դ����������url�����ˣ� �����ٿ�ʼ����һ�£���server��һ����תվһ���� ����·���ͻ��˷��ʵĴ�����������ĳ����ļ��У��뿴server3.js