/**
 * Created by zhubiao on 2015/12/2.
 */
"use strict";
//ecma6 抽象类定义。 实际上并没有严格意义的抽象类， 只是借用了java的意思
class AbstractPage{
    //构造器
    constructor(){

    }

    _render(){
        //所有继承AbstractPage类的都要实现_render方法， 否则会报错
        throw new Error("必须实现_render");
    }

    //抽象类这里渲染的重复的模板
    render(){
        return `
        <!DOCTYPE html>
        <html>
            <head>
            <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
                <link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                <div class="container">
                ${this._render()}
                </div>
            </body>
        </html>
        `
    }
}
module.exports = AbstractPage;

//在这里构造器定义数据， 渲染定义前端展示。  在渲染这里可以通过继承一个抽象模板， 重复的地方继承下来即可