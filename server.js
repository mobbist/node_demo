/**
 * Created by zhubiao on 2015/11/13.
 */
//����һ���������� ��Ҫʹ�õ� http ģ��
var http = require("http");

var database = require("./database.js");
var art = {"name":"zbd","age":"25"}
//����һ���ͻ��˷��ʵ�ʱ�򣬾ͻ���ø÷���������Ϊ�ص�����: ���������������ʱ����õģ� ���Ǵ��ڵȴ�״̬�� ���пͻ���ͨ���˿ڷ��ʵ�ʱ�� �ᱻ����
http.createServer(function(requst,response){
    //�ص���������2�������� һ��������ֻ������һ������Ӧ�������ݷ��ص��ͻ��ˣ�
    //���ȿ����ж������URL,��Ӧ��ͬ�Ĵ���
    switch(requst.url){
        //ͨ����ͬ�Ĵ��� ���Դ�����ɾ�Ĳ飬��¶���ͻ���
        case "/":
            //������Ӧ�����ݶ��Ƿ��ظ��ͻ��ˣ�
            //����ͷ����Ϣ��״̬�룬�ĵ�����
            response.writeHead(200,{"Content-Type":"text/plain"});
            //��Ӧ����֮ǰ�����һ������,�����ȡ�����������
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


//�������������ķ����ʵ�֣� ��ɾ�Ĳ顣  ��ʱ������ҵĲ�����   XXXX/add?name=mobb  ���޷������ˣ� ��Ҫ����һ��server�˽���� �뿴server2.js