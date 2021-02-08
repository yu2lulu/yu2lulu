(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{380:function(s,t,a){"use strict";a.r(t);var r=a(22),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[s._v("#")]),s._v(" 同源策略")]),s._v(" "),a("h2",{attrs:{id:"背景："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景："}},[s._v("#")]),s._v(" 背景：")]),s._v(" "),a("p",[s._v("前后端数据交互经常会碰到请求跨域，什么是跨域，以及有哪几种跨域方式,在xss和csrf的利用上理解同源和跨域是必要的。")]),s._v(" "),a("ol",[a("li",[s._v("什么是同源策略")]),s._v(" "),a("li",[s._v("常见跨域场景")]),s._v(" "),a("li",[s._v("同源策略限制内容")]),s._v(" "),a("li",[s._v("突破同源策略的方案")])]),s._v(" "),a("h2",{attrs:{id:"_1-什么是同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是同源策略"}},[s._v("#")]),s._v(" 1.什么是同源策略")]),s._v(" "),a("p",[s._v('同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSFR 等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。')]),s._v(" "),a("h2",{attrs:{id:"_2-常见跨域场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见跨域场景"}},[s._v("#")]),s._v(" 2.常见跨域场景")]),s._v(" "),a("p",[s._v("当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/websec/wiki/cors/cors.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/websec/wiki/cors/cors_2.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_3-同源策略的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-同源策略的限制"}},[s._v("#")]),s._v(" 3.同源策略的限制")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1.cookie/localstorage/indexeddb等存储性内容\n2.DOM节点\n3.ajax发送请求后被浏览器拦截（跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。）\n")])])]),a("h2",{attrs:{id:"_4-突破同源策略的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-突破同源策略的方案"}},[s._v("#")]),s._v(" 4.突破同源策略的方案")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("方案一:jsonp\n    利用 script 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP 请求一定需要对方的服务器做支持才可以。仅支持get方法\n方案二:3个标签允许跨域加载资源\n    <img src=XXX>\n    <link href=XXX>\n    <script src=XXX>\n")])])]),a("p",[a("img",{attrs:{src:"/websec/wiki/cors/cors_3.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);