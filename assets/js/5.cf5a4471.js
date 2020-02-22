(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,a,s){t.exports=s.p+"assets/img/environment_val_config.bb46df5a.png"},188:function(t,a,s){t.exports=s.p+"assets/img/environment_path_config.113e358c.png"},189:function(t,a,s){t.exports=s.p+"assets/img/mvn_v_success.4e5beb41.png"},241:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"maven的简单安装与配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的简单安装与配置","aria-hidden":"true"}},[t._v("#")]),t._v(" maven的简单安装与配置")]),t._v(" "),n("h2",{attrs:{id:"_1-下载maven包，解压"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载maven包，解压","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.下载maven包，解压")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("下载地址"),n("code",[t._v("http://maven.apache.org/download.cgi")])])]),t._v(" "),n("li",[n("p",[t._v("创建自己本地的maven仓库")])])]),t._v(" "),n("blockquote",[n("p",[t._v("我的目录：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("maven\n├─── apache-maven-3.5.4\n└─── repository\n")])])]),n("h2",{attrs:{id:"_2-配置maven环境变量（win10）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置maven环境变量（win10）","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.配置maven环境变量（win10）")]),t._v(" "),n("ul",[n("li",[t._v("新建"),n("code",[t._v("MAVEN_HOME")]),t._v("系统环境变量")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(187),alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("系统环境变量"),n("code",[t._v("path")]),t._v("添加"),n("code",[t._v("%MAVEN_HOME%\\bin")])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(188),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_3-验证环境变量是否添加成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证环境变量是否添加成功","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.验证环境变量是否添加成功")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("cmd")]),t._v("运行黑窗口，"),n("code",[t._v("mvn -v")]),t._v("，配置成功如下：")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(189),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_4-修改settings-xml配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改settings-xml配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.修改"),n("code",[t._v("settings.xml")]),t._v("配置文件")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("位置："),n("code",[t._v("maven/apache-maven-3.5.4/conf/settings.xml")])])]),t._v(" "),n("ul",[n("li",[t._v("添加本地仓库路径")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("E:/maven/repository"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("设置阿里云远程仓库")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alimaven"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aliyun maven"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/groups/public/"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("jdk指定版本")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("profile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jdk-1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activeByDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activeByDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t\t "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("jdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("jdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.source")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.compilerVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.compilerVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("profile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);