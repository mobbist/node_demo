/**
 * Created by zhubiao on 2015/12/2.
 */
"use strict";
var AbstractPage = require("./AbstractPage.js");
//ecma6 �����ඨ�塣 ʵ���ϲ�û���ϸ�����ĳ����࣬ ֻ�ǽ�����java����˼
class indexPage extends AbstractPage{
    //������
    constructor(articleList){
        //�̳еĻ��� ������Ҫ����һ������Ĺ��캯��
        super();
        this.list = articleList;
    }

    //�����ʵ���˳��������Ⱦ����
    _render(){
        //es6д���� map������ �����ݲ��뵽�б��У� ����join�����һ��
        let list = this.list.map( (article,index) => `<li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p><a href="/del?id= ${index}">del</a></li> `).join("");
        return `
            <ul class="list-group">
                ${list}
            </ul>
        `

    }
}
module.exports = indexPage;

//�����ﹹ�����������ݣ� ��Ⱦ����ǰ��չʾ��  ����Ⱦ�������ͨ���̳�һ������ģ�壬 �ظ��ĵط��̳���������