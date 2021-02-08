(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{349:function(s,a,e){"use strict";e.r(a);var t=e(22),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-路由模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-路由模块化"}},[s._v("#")]),s._v(" 1.路由模块化")]),s._v(" "),e("h4",{attrs:{id:"定义模块路由文件-route-admin-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义模块路由文件-route-admin-js"}},[s._v("#")]),s._v(" 定义模块路由文件 route/admin.js")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const express = require('express');\nconst admin = express.Router();\n\nadmin.get('/index',(req,res,next)=>{\n    res.send({\n        'admin':1\n    });\n})\n\nmodule.exports=admin\n")])])]),e("h4",{attrs:{id:"app-js中引用模块路由-app-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-js中引用模块路由-app-js"}},[s._v("#")]),s._v(" app.js中引用模块路由 app.js")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const express = require('express');\nconst app = express();\n\napp.use('/admin',require('./route/admin'));\napp.use('/home',require('./route/home'));\n......\n\n")])])]),e("h2",{attrs:{id:"_2-请求参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求参数"}},[s._v("#")]),s._v(" 2.请求参数")]),s._v(" "),e("h4",{attrs:{id:"获取请求头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取请求头"}},[s._v("#")]),s._v(" 获取请求头")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("req.headers\n")])])]),e("h4",{attrs:{id:"get参数获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get参数获取"}},[s._v("#")]),s._v(" GET参数获取")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("请求url:\nhttp://localhost:3000/index?\nusername=zhangsan&password=123\n\nvar { username,password } = req.query\n")])])]),e("h4",{attrs:{id:"post参数获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post参数获取"}},[s._v("#")]),s._v(" POST参数获取")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const bodyParser = require('body-parser');\napp.use(bodyParser.urlencode({extended:false}))\n\nvar { username,password } = req.body\n\n")])])]),e("h2",{attrs:{id:"_3-中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-中间件"}},[s._v("#")]),s._v(" 3.中间件")]),s._v(" "),e("h4",{attrs:{id:"_3-1-中间件的应用："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-中间件的应用："}},[s._v("#")]),s._v(" 3.1 中间件的应用：")]),s._v(" "),e("ul",[e("li",[s._v("1.路由保护[登录session校验]")]),s._v(" "),e("li",[s._v("2.维护公告")]),s._v(" "),e("li",[s._v("3.自定义404页面（将该中间件设置到最后面）")]),s._v(" "),e("li",[s._v("4.错误处理中间件")])]),s._v(" "),e("h6",{attrs:{id:"注意-可在模块路由中使用，也可以在app-js使用，模块中使用的表示针对模块生效-app-js中使用表示所有模块都会生效-需要放在路由的最前面，否则无法生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意-可在模块路由中使用，也可以在app-js使用，模块中使用的表示针对模块生效-app-js中使用表示所有模块都会生效-需要放在路由的最前面，否则无法生效"}},[s._v("#")]),s._v(" 注意:可在模块路由中使用，也可以在app.js使用，模块中使用的表示针对模块生效,app.js中使用表示所有模块都会生效,需要放在路由的最前面，否则无法生效")]),s._v(" "),e("h4",{attrs:{id:"_3-2-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用"}},[s._v("#")]),s._v(" 3.2 使用")]),s._v(" "),e("h5",{attrs:{id:"app-js使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-js使用"}},[s._v("#")]),s._v(" app.js使用")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("app.use((req,res,next)=>{\n    console.log(1111);\n    if(){\n\t\n\t}else{\n\t\tnext();\n\t}\n})\n")])])]),e("h5",{attrs:{id:"模块路由使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块路由使用"}},[s._v("#")]),s._v(" 模块路由使用")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const express = require('express');\nconst admin = express.Router();\n\nadmin.use((req,res,next)=>{\n    if(){\n\t\n\t}else{\n\t\tnext();\n\t}\n    \n})\n")])])]),e("h4",{attrs:{id:"错误处理中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误处理中间件"}},[s._v("#")]),s._v(" 错误处理中间件")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("app.use((error,req,res,next)=>{ ... })  \n//当程序出现异常时会调用该中间件\n1.如果函数是异步的api，例如fs。readFile等，需要在回调函数中使用next(error)来触发调用错误中间件\n2.如果是async/await的则需要通过try/catch捕获异常后在catch中使用next(error)触发异常中间件\n\n")])])]),e("h3",{attrs:{id:"中间件传递参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间件传递参数"}},[s._v("#")]),s._v(" 中间件传递参数")]),s._v(" "),e("h4",{attrs:{id:"_1-req-xxx-赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-req-xxx-赋值"}},[s._v("#")]),s._v(" 1.req.xxx 赋值")]),s._v(" "),e("h4",{attrs:{id:"_2-app-set-key-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-app-set-key-value"}},[s._v("#")]),s._v(" 2.app.set(key,value)")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("app.set('ssoHostname','xxxxx');\nvar value=app.settings.ssoHostname;\n")])])]),e("h2",{attrs:{id:"_4-响应数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-响应数据"}},[s._v("#")]),s._v(" 4.响应数据")]),s._v(" "),e("h4",{attrs:{id:"_4-1-设置响应头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-设置响应头"}},[s._v("#")]),s._v(" 4.1 设置响应头")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("res.append('fuck', 'you')\n\n注意点:需在res.send之前调用\n\n")])])]),e("h4",{attrs:{id:"_4-2-提供附件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-提供附件下载"}},[s._v("#")]),s._v(" 4.2 提供附件下载")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("admin.get('/download',function (req,res) {\n    res.download('files/1.txt','模板.txt',function (err) {\n        if(err){\n          console.log(err)\n       }else{\n         //res.send('ok')   \n       }\n    })\n})\n\n说明\npath:要下在的文件所在的路径,以项目为相对路径\nfilename：文件下载后的名字,浏览器显示的名字\nfn：回调函数\n")])])]),e("h4",{attrs:{id:"_4-3-设置状态码和响应体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-设置状态码和响应体"}},[s._v("#")]),s._v(" 4.3 设置状态码和响应体")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("res.status(200|404|500).send(json|string|array)\n")])])]),e("h4",{attrs:{id:"_4-4重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4重定向"}},[s._v("#")]),s._v(" 4.4重定向")]),s._v(" "),e("h6",{attrs:{id:"res-redirect-301-http-example-com"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#res-redirect-301-http-example-com"}},[s._v("#")]),s._v(" res.redirect(301, 'http://example.com')")]),s._v(" "),e("h2",{attrs:{id:"_5-session-session的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-session-session的支持"}},[s._v("#")]),s._v(" 5.session## session的支持")]),s._v(" "),e("h4",{attrs:{id:"_1-依赖express-session第三方模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖express-session第三方模块"}},[s._v("#")]),s._v(" 1.依赖express-session第三方模块")]),s._v(" "),e("h4",{attrs:{id:"_2-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码"}},[s._v("#")]),s._v(" 2.代码")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const session = require('express-session')\n//app.js中开启session的支持\napp.use(session({\n\tsecret:'secret key', //secretkey设置加密key\n\tsaveUninitialized:false, //false未设置时不设置cookie\n\tcookie:{\n\t\tmaxAge:24*60*60*&1000  //一天有效期\n\t}\n\t}))  //这一步后就会在req上添加session的值\n\n//setCookie动作\nreq.session.name='123'\n\n\n退出：\nreq.session.destroy(function(){\n\tres.clearCookie('connect.sid');\n\tres.redirect('/login')\n})\n")])])]),e("p",[e("img",{attrs:{src:"/nodejs/express-session.jpg",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"_6-开放静态资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-开放静态资源"}},[s._v("#")]),s._v(" 6.开放静态资源")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("app.use(express.static([static,]path.join(__dirname,'public')))\n//表示在该目录下的所有文件都可以直接访问\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);