(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{341:function(e,t,r){"use strict";r.r(t);var n=r(22),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sql注入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql注入"}},[e._v("#")]),e._v(" SQL注入")]),e._v(" "),r("h2",{attrs:{id:"欣赏一段jdbc代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#欣赏一段jdbc代码"}},[e._v("#")]),e._v(" 欣赏一段JDBC代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('    public static void main(String[] args) throws SQLException {\n        Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mysql", "root", "123456");\n\n        Statement statement = connection.createStatement();\n\n        String username="root";\n\n        String sql = "select * from user where User=\'"+username+"\'";\n\n        System.out.println(sql);\n\n        ResultSet resultSet = statement.executeQuery(sql);\n\n        while (resultSet.next()){\n            System.out.println(resultSet.getString("host"));\n        }\n\n        resultSet.close();\n        statement.close();\n        connection.close();\n    }\n')])])]),r("h2",{attrs:{id:"分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[e._v("#")]),e._v(" 分析")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("这里的 String sql = \"select * from user where User='\"+username+\"'\"; \n存在sql的拼接,所以就存在SQL注入的风险,只要修改username的值就能任意操作SQL语句的执行。\n例如将username赋值于 username=\"' or 1=1#\",就能查询出所有的数据\n（select * from user where User='' or 1=1#';）\n如果是账号密码登录的话还能造成任意密码登录的安全漏洞。\n")])])]),r("h2",{attrs:{id:"解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("采用预编译的方式处理\n")])])]),r("h3",{attrs:{id:"_1-jdbc代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-jdbc代码"}},[e._v("#")]),e._v(" 1.JDBC代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public static void main(String[] args) throws SQLException {\n    Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mysql", "root", "123456");\n    \n    String sql = "select * from user where User=?";  //变量采用占位符处理\n    PreparedStatement preparedStatement = connection.prepareStatement(sql); \n    preparedStatement.setString(1,"root"); //在位置处设置值\n    \n    ResultSet resultSet = preparedStatement.executeQuery();\n    \n    while (resultSet.next()){\n        System.out.println(resultSet.getString("host"));\n    }\n\n    resultSet.close();\n    preparedStatement.close();\n    connection.close();\n}\n')])])]),r("h3",{attrs:{id:"_2-druid代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-druid代码"}},[e._v("#")]),e._v(" 2.druid代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public static void main(String[] args) throws Exception {\n    Properties properties = new Properties();\n    InputStream resourceAsStream = druidTest.class.getClassLoader().getResourceAsStream("db.properties");\n\n    properties.load(resourceAsStream);\n    DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);\n\n    Connection connection = dataSource.getConnection();\n\n    PreparedStatement preparedStatement = connection.prepareStatement("select * from user where Host=?");\n\n    preparedStatement.setString(1,"%");\n    ResultSet resultSet = preparedStatement.executeQuery();\n\n\n    while (resultSet.next()){\n        String host = resultSet.getString("User");\n        System.out.println(host);\n    }\n\n}\n')])])]),r("h3",{attrs:{id:"_3-spring-jdbctemplate代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-jdbctemplate代码"}},[e._v("#")]),e._v(" 3.spring-jdbctemplate代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public static void main(String[] args) throws SQLException {\n    DruidDataSource druidDataSource = new DruidDataSource();\n    druidDataSource.setUrl("jdbc:mysql://127.0.0.1:3306/mysql");\n    druidDataSource.setUsername("root");\n    druidDataSource.setPassword("123456");\n\n\n    JdbcTemplate jdbcTemplate = new JdbcTemplate(druidDataSource);\n    List<user> query = jdbcTemplate.query("select User,Host from user where User=?", new BeanPropertyRowMapper<user>(user.class),"root");\n    System.out.println(query);\n    for (user user : query) {\n        System.out.println(user.getHost());\n    }\n}\n\n')])])]),r("h3",{attrs:{id:"_4-esapi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-esapi"}},[e._v("#")]),e._v(" 4.ESAPI")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("String id =\"1 and 1=1 and '1'='1\";\nString query =\"SELECT user_id FROM user_data WHERE id = \" + ESAPI.encoder().encodeForSQL(new MySQLCodec(MySQLCodec.Mode.STANDARD),id);\n//mysql -> new MySQLCodec(MySQLCodec.Mode.STANDARD)\n//oracle -> new OracleCodec()\n\nSystem.out.println(query);   // SELECT user_id FROM user_data WHERE id = 1 and 1\\=1 and \\'1\\'\\=\\'1\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);