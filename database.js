/**
 * Created by zhubiao on 2015/11/13.
 */
//创建一个以fs为低层的数据库
//首先要引用fs文件系统模块
var fs = require("fs");

//数据磁盘文件地址
const dataPath = __dirname+"/data.json";

//创建一个存放数据的临时变量
var list;

//数据库一打开是空的显然是不行的， 一打开需要将数据读取到内存中
try {
    //读取文件有可能会失败，捕捉异常，读取成功数据以字符串形式返回，还需要转为json
    list = JSON.parse(fs.readFileSync(dataPath));

}catch(e){
    //读取失败， 就初始化list
    list = [];
}


module.exports = {
    //数据库的一些方法
    add: function(item){
        console.log(item);
        list.push(item);
        this.store();
    },
    del: function(index){
        list.splice(index,1);
    },
    updata : function(index,list){
        list.splice(index,1,list);
    },
    getList: function(){
        return list;
    },
    //数据持久化：将临时变量的数据写入到文件磁盘中
    store : function(callback){
        //这里需要将list字符串化
        fs.writeFile(dataPath,JSON.stringify(list),callback);
    }

}