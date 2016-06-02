"use strict";
var AbstractPage = require("./AbstractPage.js");

class addPage extends  AbstractPage{
    constructor(errors){
        super()
        this.errors = errors || {};
    }

    _render(){
        let title = this.errors.title || "";
        let body  = this.errors.body || "";
        return `
                <form action="/add"  method="post">
                  <div class="form-group">
                    <label for="exampleInputEmail1">标题</label>
                    <input type="text" class="form-control" name="title" id="exampleInputEmail1" placeholder="标题">
                    <p>${ title }</p>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">内容</label>
                    <textarea type="text" class="form-control" name="body" placeholder="内容"></textarea>
                    <p>${ body }</p>
                  </div>

                  <button type="submit" class="btn btn-default">添加</button>
                </form>
        `

    }
}

module.exports = addPage;