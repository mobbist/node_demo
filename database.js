/**
 * Created by zhubiao on 2015/11/13.
 */
//����һ����fsΪ�Ͳ�����ݿ�
//����Ҫ����fs�ļ�ϵͳģ��
var fs = require("fs");

//���ݴ����ļ���ַ
const dataPath = __dirname+"/data.json";

//����һ��������ݵ���ʱ����
var list;

//���ݿ�һ���ǿյ���Ȼ�ǲ��еģ� һ����Ҫ�����ݶ�ȡ���ڴ���
try {
    //��ȡ�ļ��п��ܻ�ʧ�ܣ���׽�쳣����ȡ�ɹ��������ַ�����ʽ���أ�����ҪתΪjson
    list = JSON.parse(fs.readFileSync(dataPath));

}catch(e){
    //��ȡʧ�ܣ� �ͳ�ʼ��list
    list = [];
}


module.exports = {
    //���ݿ��һЩ����
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
    //���ݳ־û�������ʱ����������д�뵽�ļ�������
    store : function(callback){
        //������Ҫ��list�ַ�����
        fs.writeFile(dataPath,JSON.stringify(list),callback);
    }

}