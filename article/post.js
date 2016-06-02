/**
 * Created by zhubiao on 2015/12/3.
 */
'use strict'
var queryString = require("querystring");

module.exports = function(req){
    //接受请求的对象， 返回一个Promise对象， 这个对象是便于异步回调的一种链式写法， 第一个参数resolve是成功回调， 第二个reject是失败回调
    return new Promise(function(resolve,reject){
        let result ='';
        let jsonObj;
        //req这个请求，可以监听一个事件data, 有数据传导就会触发
        req.on("data",function(chuck){
            //回调的参数是个数据块chuck，需要一定的拼凑
            result += chuck;
        })

        //监听事件end : 当数据传导完之后， 会触发end事件
        req.on("end",function(){

            //对请求的字符串进行解析， 转为JSON对象
            jsonObj = queryString.parse(result);
            resolve(jsonObj);
        })
    })
}