/**
 * Created by zhubiao on 2015/12/2.
 */
"use strict";
var AbstractPage = require("./AbstractPage.js");
//ecma6 抽象类定义。 实际上并没有严格意义的抽象类， 只是借用了java的意思
class indexPage extends AbstractPage{
    //构造器
    constructor(articleList){
        //继承的话， 这里需要调用一个父类的构造函数
        super();
        this.list = articleList;
    }

    //这里就实现了抽象类的渲染方法
    _render(){
        //es6写法， map方法， 讲数据插入到列表中， 并且join组合在一起
        let list = this.list.map( (article,index) => `<li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p><a href="/del?id= ${index}">del</a></li> `).join("");
        return `
            <ul class="list-group">
                ${list}
            </ul>
        `

    }
}
module.exports = indexPage;

//在这里构造器定义数据， 渲染定义前端展示。  在渲染这里可以通过继承一个抽象模板， 重复的地方继承下来即可