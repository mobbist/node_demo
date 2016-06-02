/**
 * Created by zhubiao on 2015/12/3.
 */
'use strict'
var queryString = require("querystring");

module.exports = function(req){
    //��������Ķ��� ����һ��Promise���� ��������Ǳ����첽�ص���һ����ʽд���� ��һ������resolve�ǳɹ��ص��� �ڶ���reject��ʧ�ܻص�
    return new Promise(function(resolve,reject){
        let result ='';
        let jsonObj;
        //req������󣬿��Լ���һ���¼�data, �����ݴ����ͻᴥ��
        req.on("data",function(chuck){
            //�ص��Ĳ����Ǹ����ݿ�chuck����Ҫһ����ƴ��
            result += chuck;
        })

        //�����¼�end : �����ݴ�����֮�� �ᴥ��end�¼�
        req.on("end",function(){

            //��������ַ������н����� תΪJSON����
            jsonObj = queryString.parse(result);
            resolve(jsonObj);
        })
    })
}