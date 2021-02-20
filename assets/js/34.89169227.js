(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{339:function(a,s,t){"use strict";t.r(s);var e=t(22),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[a._v("#")]),a._v(" 反射")]),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("这种动态获取类的信息以及动态调用对象的方法的功能来自于Java语言的反射（Reflection）机制。\n\n* 优点：\n  * 可以调用私有方法,访问设置私有变量\n  * 可以让interger的ArrayList可以存取String类型的数据\n")])])]),t("h2",{attrs:{id:"获取class对象方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取class对象方式"}},[a._v("#")]),a._v(" 获取Class对象方式")]),a._v(" "),t("h6",{attrs:{id:"_1-使用class类的静态方法。例如"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用class类的静态方法。例如"}},[a._v("#")]),a._v(" 1.使用Class类的静态方法。例如:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> aClass = Class.forName("com.java.web.man");\n')])])]),t("h6",{attrs:{id:"_2-使用类的-class语法。如"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用类的-class语法。如"}},[a._v("#")]),a._v(" 2.使用类的.class语法。如:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Class<?> aClass = String.class;\n")])])]),t("h6",{attrs:{id:"_3-使用对象的getclass-方法。如："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用对象的getclass-方法。如："}},[a._v("#")]),a._v(" 3.使用对象的getClass()方法。如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('String str = "aa";  // Student s1 = new Student();\nClass<?> classType1 = str.getClass();  // Class<Student> sClass = s1.getClass();\n')])])]),t("h2",{attrs:{id:"获取方法对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取方法对象"}},[a._v("#")]),a._v(" 获取方法对象")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> personObj = Class.forName(objName);\n\nMethod eat = personObj.getMethod("eat");\nMethod[] methods = personObj.getMethods();\n\nMethod eat = personObj.getDeclaredField("eat");\nMethod[] methods = personObj.getDeclaredFields();\n\n')])])]),t("h2",{attrs:{id:"获取实例对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取实例对象"}},[a._v("#")]),a._v(" 获取实例对象")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> personObj = Class.forName(objName);\n\nField sex = personObj.getField("sex");  \nField[] fields = personObj.getFields();\n\npersonObj.getDeclaredField("name");\nField[] declaredFields = personObj.getDeclaredFields();\n')])])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[a._v("#")]),a._v(" 举例")]),a._v(" "),t("h3",{attrs:{id:"_1-生成对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成对象"}},[a._v("#")]),a._v(" 1.生成对象")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> aClass = Class.forName("com.java.web.man");\nConstructor<?> constructor = aClass.getConstructor(int.class,String.class);\nObject o = constructor.newInstance(10,"张三");  //o就是反射生成的对象实例\n')])])]),t("h3",{attrs:{id:"_2-获取方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取方法"}},[a._v("#")]),a._v(" 2.获取方法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> aClass = Class.forName("com.java.web.man");\nMethod[] methods = aClass.getMethods();\nfor (Method s:methods){\n    System.out.println(s);\n}\n\n输出:\npublic void com.java.web.man.eatfood()\npublic void com.java.web.man.playgame()\npublic void com.java.web.man.eat()\npublic java.lang.String com.java.web.Person.toString()\npublic java.lang.String com.java.web.Person.getName()\npublic void com.java.web.Person.setName(java.lang.String)\npublic int com.java.web.Person.getAge()\npublic void com.java.web.Person.setAge(int)\npublic final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException\npublic final native void java.lang.Object.wait(long) throws java.lang.InterruptedException\npublic final void java.lang.Object.wait() throws java.lang.InterruptedException\npublic boolean java.lang.Object.equals(java.lang.Object)\npublic native int java.lang.Object.hashCode()\npublic final native java.lang.Class java.lang.Object.getClass()\npublic final native void java.lang.Object.notify()\npublic final native void java.lang.Object.notifyAll()\n')])])]),t("h3",{attrs:{id:"_3-调用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-调用方法"}},[a._v("#")]),a._v(" 3.调用方法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Class<?> aClass = Class.forName("com.java.web.man");   \nConstructor<?> constructor = aClass.getConstructor(int.class,String.class);\nObject o = constructor.newInstance(10,"张三");\nMethod eat = aClass.getMethod("eat");\neat.invoke(o);  //等效于执行\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);