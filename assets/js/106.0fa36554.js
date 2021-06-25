(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{410:function(t,e,r){"use strict";r.r(e);var n=r(22),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一、漏洞环境信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、漏洞环境信息"}},[t._v("#")]),t._v(" 一、漏洞环境信息")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("http://127.0.0.1:8080/xss/reflex?title=六月的雨\n")])])]),r("h4",{attrs:{id:"payload-http-127-0-0-1-8080-xss-reflex-title-六月的雨-script-alert-123-script"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#payload-http-127-0-0-1-8080-xss-reflex-title-六月的雨-script-alert-123-script"}},[t._v("#")]),t._v(" "),r("strong",[t._v("payload")]),t._v(" "),r("code",[t._v("http://127.0.0.1:8080/xss/reflex?title=六月的雨<script>alert(123)<\/script>")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/xss_payload.jpg",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"二、修复说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、修复说明"}},[t._v("#")]),t._v(" 二、修复说明")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/xss_fenxi.jpg",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"public-modelandview-reflex-requestparam-title-string-title-添加修复代码前后分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#public-modelandview-reflex-requestparam-title-string-title-添加修复代码前后分析"}},[t._v("#")]),t._v(" "),r("strong",[t._v('public ModelAndView reflex(@RequestParam("title") String title)添加修复代码前后分析')])]),t._v(" "),r("p",[r("strong",[t._v("XSS代码")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('\n@Controller\n@RequestMapping("/xss")\npublic class reflexController {\n\n    @Autowired\n    private reflexServiceImpl reflexServiceimpl;\n\n\n    @RequestMapping("/reflex")\n    public ModelAndView reflex(@RequestParam("title") String title){\n\n        article articleOne = reflexServiceimpl.getArticleBytitle(title);\n        ModelAndView index = new ModelAndView();\n        index.setViewName("../article.jsp");\n\n        //xss过滤,对于输出的地方过滤编码处理\n        index.addObject("keyword",charEncoding.charFilterESAPI(title));\n\n        if (articleOne!=null){\n            index.addObject("title", charEncoding.charFilterESAPI(articleOne.getTitle()));\n            index.addObject("author",charEncoding.charFilterESAPI(articleOne.getAuthor()));\n            index.addObject("ctime",charEncoding.charFilterESAPI(articleOne.getCtime()));\n            index.addObject("context",charEncoding.charFilterESAPI(articleOne.getContent()));\n        }else{\n            index.addObject("title", "");\n            index.addObject("author","");\n            index.addObject("ctime","");\n            index.addObject("context","");\n        }\n\n        return index;\n    }\n}\n')])])]),r("p",[r("strong",[t._v("XSS过滤函数-自定义过滤函数")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('static public String charFilter(String content){\n    String s = content.replaceAll("&", "&amp;");\n    String s1 = s.replaceAll("<", "&lt;");\n    String s2 = s1.replaceAll(">", "&gt;");\n    String s3 = s2.replaceAll("\\"", "&quot;");\n    String s4 = s3.replaceAll("\'", "&#x27;");\n    String s5 = s4.replaceAll("/", "&#x2F;");\n\n    return s5;\n}\n')])])]),r("p",[r("strong",[t._v("XSS过滤函数-ESAPI过滤函数")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    static public String charFilterESAPI(String content){\n    return ESAPI.encoder().encodeForHTML(content);\n}\n")])])]),r("h2",{attrs:{id:"三、小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、小结"}},[t._v("#")]),t._v(" 三、小结")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("成因：输出未编码")])]),t._v(" "),r("li",[r("p",[t._v("位置：Controller层")])]),t._v(" "),r("li",[r("p",[t._v("修复：输出编码")]),t._v(" "),r("ul",[r("li",[t._v("1.自行编写\v编码处理")])])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('    static public String charFilter(String content){\n        String s = content.replaceAll("&", "&amp;");\n        String s1 = s.replaceAll("<", "&lt;");\n        String s2 = s1.replaceAll(">", "&gt;");\n        String s3 = s2.replaceAll("\\"", "&quot;");\n        String s4 = s3.replaceAll("\'", "&#x27;");\n        String s5 = s4.replaceAll("/", "&#x2F;");\n        return s5;\n    }\n')])])]),r("ul",[r("li",[t._v("2.ESAPI编码处理")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("     static public String charFilterESAPI(String content){\n        return ESAPI.encoder().encodeForHTML(content);\n    }\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);