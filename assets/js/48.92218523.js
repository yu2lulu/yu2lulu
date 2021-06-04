(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{353:function(e,n,t){"use strict";t.r(n);var r=t(22),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"springmvc-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-介绍"}},[e._v("#")]),e._v(" springMVC 介绍")]),e._v(" "),t("blockquote",[t("p",[e._v("SpringMVC 是一种基于 Java 的实现 MVC 设计模型的请求驱动类型的轻量级 Web 框架，属于SpringFrameWork\n的后续产品，已经融合在 Spring Web Flow 中。\nSpringMVC 已经成为目前最主流的MVC框架之一，并且随着Spring3.0 的发布，全面超越 Struts2，成为最优秀的\nMVC 框架。它通过一套注解，让一个简单的 Java 类成为处理请求的控制器，而无须实现任何接口。同时它还支持\nRESTful 编程风格的请求。")])]),e._v(" "),t("h2",{attrs:{id:"springmvc-idea快速入门步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-idea快速入门步骤"}},[e._v("#")]),e._v(" springMVC IDEA快速入门步骤")]),e._v(" "),t("ul",[t("li",[e._v("1.MAVEN和Tomcat安装环境配置(略)")]),e._v(" "),t("li",[e._v("2.新建MAVEN项目\n"),t("img",{attrs:{src:"/java/wiki/springmvc/IDEA%E5%88%9B%E5%BB%BA.jpg",alt:""}})]),e._v(" "),t("li",[e._v("3.pom文件添加依赖包")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  <dependencies>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-tx</artifactId>\n      <version>5.3.0</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-core</artifactId>\n      <version>5.3.0</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-aop</artifactId>\n      <version>5.3.0</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-beans</artifactId>\n      <version>5.3.0</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-web</artifactId>\n      <version>5.1.9.RELEASE</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-webmvc</artifactId>\n      <version>5.1.9.RELEASE</version>\n    </dependency>\n    <dependency>\n      <groupId>javax.servlet</groupId>\n      <artifactId>javax.servlet-api</artifactId>\n      <version>4.0.1</version>\n    </dependency>\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>8.0.13</version>\n    </dependency>\n    <dependency>\n      <groupId>com.alibaba</groupId>\n      <artifactId>druid</artifactId>\n      <version>1.2.2</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-jdbc</artifactId>\n      <version>5.3.0</version>\n    </dependency>\n  </dependencies>\n")])])]),t("ul",[t("li",[e._v("4.配置web.xml的ContextLoaderListener\n"),t("ul",[t("li",[e._v("4.1 添加src/main/resources/applicationContext.xml spring容器文件")]),e._v(" "),t("li",[e._v("4.2 web.xml配置spring监听器使得启动tomcat自动加载applicationContext.xml文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<context-param>\n  <param-name>contextConfigLocation</param-name>\n  <param-value>classpath:applicationContext.xml</param-value>\n</context-param>\n\n<listener>\n  \x3c!--默认会自动加载 默认变量contextConfigLocation 中的classpath:applicationContext.xml --\x3e\n  <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>  \n</listener>\n")])])])]),e._v(" "),t("li",[e._v("5.配置web.xml的DispatcherServlet\n"),t("ul",[t("li",[e._v("5.1 web.xml配置DispatcherServlet,加载spring-mvc配置文件")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  <servlet>\n    <servlet-name>DispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n      <param-name>contextConfigLocation</param-name>\n      \x3c!--加载springmvc配置文件--\x3e\n      <param-value>classpath:spring-mvc.xml</param-value>\n    </init-param>\n    \x3c!--启动tomcat自启动--\x3e\n    <load-on-startup>1</load-on-startup>\n  </servlet>\n\n  <servlet-mapping>\n    <servlet-name>DispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n  </servlet-mapping>\n")])])]),t("ul",[t("li",[e._v("5.2 添加src/main/resources/spring-mvc.xml springMVC的配置文件,这里只做注解扫描")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="\n       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd">\n    \n    <context:component-scan base-package="it.web.controller"/>\n\n</beans>\n')])])]),t("ul",[t("li",[t("p",[e._v("6.配置tomcat\n"),t("img",{attrs:{src:"/java/wiki/springmvc/tomcat%E9%85%8D%E7%BD%AE.jpg",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("7.controller测试代码")])])]),e._v(" "),t("h4",{attrs:{id:"src-main-java-it-web-controller-indexcontroller-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#src-main-java-it-web-controller-indexcontroller-java"}},[e._v("#")]),e._v(" src/main/java/it/web/controller/indexController.java")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Controller\npublic class indexController {\n    @RequestMapping("/index")\n    @ResponseBody\n    public String index(){\n        System.out.println("index Controller running");\n        return "hello world";\n    }\n}\n')])])]),t("h2",{attrs:{id:"springmvc-获得servletcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-获得servletcontext"}},[e._v("#")]),e._v(" springMVC 获得ServletContext")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();  \nServletContext servletContext = webApplicationContext.getServletContext();  \n")])])]),t("h2",{attrs:{id:"springmvc-请求参数处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-请求参数处理"}},[e._v("#")]),e._v(" springMVC 请求参数处理")]),e._v(" "),t("ul",[t("li",[e._v("请求参数和形参对应（如果请求参数和行参不一致则需要配合@RequestParam使用）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' 请求参数(GET)： http://host/?name=zhangsan&age=12\n        POST:  name=zhangsan&age=12\n\n    public String test(String name, int age){\n        System.out.println(name);\n        System.out.println(age);\n        return "";\n    }\n\n当请求参数和函数行参不一致时需要配合@RequestParam使用:\n    @RequestMapping("/test3")\n    @ResponseBody\n    public String test3(@RequestParam(value = "name",defaultValue = "abc") String username){\n        System.out.println(username);\n        return username;\n    }\n')])])]),t("ul",[t("li",[e._v("业务方法的POJO参数的属性名与请求参数的name一致（参数值会自动映射匹配,转换为java对象)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' 请求参数(GET)： http://host/?username=zhangsan&age=12&sex=女\n        POST:  username=zhangsan&age=12&sex=女\n\n    @RequestMapping("/userinfo")\n    @ResponseBody\n    public String getUSerinfo(Userinfo userinfo){\n\n        System.out.println(userinfo);\n        return "abbbbb";\n    }\n')])])]),t("ul",[t("li",[e._v("接受json格式数据(需pom.xml添加jackson依赖,并且配@RequestBody,参数会自动转换为对应的对象形式，List/Map都支持）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  请求数据：[{\n    "name": "zhangsan",\n        "sex": "男",\n        "age": 11,\n        "id": 1\n    },　......\n  ]\n\n    @RequestMapping("/index")\n    @ResponseBody\n    public String  getUsers(@RequestBody List<Userinfo> userinfos){  \n        System.out.println(userinfos);\n        return "abc";\n    }\n')])])]),t("ul",[t("li",[e._v("获取请求头")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @RequestMapping("/index")\n    @ResponseBody\n    public String getHeader(@RequestHeader(name = "User-Agent") String header){\n        System.out.println(header);\n        return header;\n    }\n')])])]),t("h4",{attrs:{id:"配置全局乱码过滤器-应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置全局乱码过滤器-应用"}},[e._v("#")]),e._v(" 配置全局乱码过滤器(应用)")]),e._v(" "),t("blockquote",[t("p",[e._v("当post请求时，数据会出现乱码，我们可以设置一个过滤器来进行编码的过滤。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!--配置全局过滤的filter--\x3e \n<filter> \n    <filter-name>CharacterEncodingFilter</filter-name> \n    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class> \n        <init-param> \n            <param-name>encoding</param-name> \n            <param-value>UTF-8</param-value> \n        </init-param> \n</filter> \n<filter-mapping> \n    <filter-name>CharacterEncodingFilter</filter-name> \n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n")])])]),t("h2",{attrs:{id:"springmvc-响应数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-响应数据"}},[e._v("#")]),e._v(" springMVC 响应数据")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("页面跳转")])]),e._v(" "),t("li",[t("p",[e._v("回写字符串")])])]),e._v(" "),t("blockquote",[t("p",[e._v("目前都是前后端分离的web架构，这里的跳转意义不大，暂时不详细归纳总结")])]),e._v(" "),t("blockquote",[t("p",[e._v("回显普通字符串")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @RequestMapping("/returnStr")  //url注解\n    @ResponseBody  //表示响应字符串回显而不是跳转\n    public String returnString(){\n        return "hello springMVC";  //这里的return表示回显字符串信息\n    }\n\n')])])]),t("blockquote",[t("p",[e._v("回显JSON字符串")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("1.pom.xml添加jackson的坐标(jackson-core/jackson-databind/jackson-annotations)")])]),e._v(" "),t("li",[t("p",[e._v("2.springmvc.xml中配置jackson处理响应数据\n"),t("code",[e._v("<mvc:annotation-driven/>")]),e._v('  //需额外配置mvc的：xmlns:mvc="http://www.springframework.org/schema/mvc" ......')])]),e._v(" "),t("li",[t("p",[e._v("3.测试")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @RequestMapping("/pojo")\n    @ResponseBody\n    public Userinfo test2(){\n        ServletContext servletContext = ContextLoader.getCurrentWebApplicationContext().getServletContext();\n        WebApplicationContext app = WebApplicationContextUtils.getWebApplicationContext(servletContext);\n        UserinfoDaoImpl bean = app.getBean(UserinfoDaoImpl.class);\n        Userinfo userinfoOne = bean.getUserinfoOne(1);\n        return userinfoOne;  //直接返回对象即可，列表，数组都可。\n    }\n')])])]),t("h2",{attrs:{id:"springmvc-拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-拦截器"}},[e._v("#")]),e._v(" springMVC 拦截器")]),e._v(" "),t("blockquote",[t("p",[e._v("这里以登陆拦截作为演示")])]),e._v(" "),t("p",[e._v("①创建拦截器类实现HandlerInterceptor接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class interceptorFirst implements HandlerInterceptor {\n    // preHandle方法是在controller方法执行之前被调用,return true表示往下执行控制器，return false表示拦截不往下执行\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        HttpSession session = request.getSession();\n        Object user = session.getAttribute("username");\n        if (user==null){ //未登陆成功\n            response.sendError(403,"当前未登陆请先完成登陆后操作");\n            return false;\n        }else{\n            return true;\n        }\n\n    }\n\n    //在响应视图前执行\n    @Override\n    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {\n\n    }\n\n    //响应数据之后被执行\n    @Override\n    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {\n\n    }\n}\n\n拦截器中的方法执行顺序是：preHandler-------目标资源----postHandle---- afterCompletion\n')])])]),t("p",[e._v("②配置拦截器(spring-mvc.xml)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    <mvc:interceptors>\n        <mvc:interceptor>\n            <mvc:mapping path="/**"/>  //拦截所有的路径,/** 固定写法2个*\n            <mvc:exclude-mapping path="/login/index"/>  //判处拦截的urlpath\n            <bean class="it.webapp.interceptor.interceptorFirst"/>  //拦截器类路径\n        </mvc:interceptor>\n    </mvc:interceptors>\n')])])]),t("p",[e._v("③测试拦截器的拦截效果(略)")]),e._v(" "),t("h2",{attrs:{id:"springmvc-异常处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-异常处理"}},[e._v("#")]),e._v(" springMVC 异常处理")]),e._v(" "),t("h2",{attrs:{id:"springmvc-文件上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-文件上传"}},[e._v("#")]),e._v(" springMVC 文件上传")]),e._v(" "),t("blockquote",[t("p",[e._v("步骤")]),e._v(" "),t("p",[e._v("1.导入pom.xml依赖坐标(commons-io/commons-fileupload)")]),e._v(" "),t("p",[e._v("2.配置spring-mvc.xml的multipartResolver上传文件属性控制")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    \x3c!-- id是固定值，不能修改 --\x3e\n    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">\n        <property name="defaultEncoding" value="UTF-8"/>\n    </bean>\n')])])]),t("blockquote",[t("p",[e._v("3.上传controller代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    @RequestMapping("/index")\n    @ResponseBody\n    public String FileUpload(MultipartFile file) throws IOException {\n        String originalFilename = file.getOriginalFilename();  //获取文件名称\n\n        file.transferTo(new File("/Users/jeffery.yu/Desktop/"+originalFilename));  //将文件保存到指定位置\n\n        return "上传成功!";\n\n    }\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);