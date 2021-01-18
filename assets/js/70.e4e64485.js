(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{724:function(t,a,s){"use strict";s.r(a);var r=s(5),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"cordova打包vue移动端项目android"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cordova打包vue移动端项目android"}},[t._v("#")]),t._v(" Cordova打包Vue移动端项目Android")]),t._v(" "),s("h3",{attrs:{id:"环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("Cordova")]),t._v(" "),s("li",[t._v("Gradle")]),t._v(" "),s("li",[t._v("Android SDK")]),t._v(" "),s("li",[t._v("Java JDK")]),t._v(" "),s("li",[t._v("Node.js")])])]),t._v(" "),s("h3",{attrs:{id:"安装cordova"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装cordova"}},[t._v("#")]),t._v(" 安装Cordova")]),t._v(" "),s("p",[s("code",[t._v("npm install -g cordova")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020032311404728.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"安装android-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装android-sdk"}},[t._v("#")]),t._v(" 安装Android SDK")]),t._v(" "),s("p",[t._v("下载安装Android SDK "),s("a",{attrs:{href:"https://dl.google.com/android/installer_r24.4.1-windows.exe?utm_source=androiddevtools&utm_medium=website",target:"_blank",rel:"noopener noreferrer"}},[t._v("installer_r24.4.1-windows.exe"),s("OutboundLink")],1),t._v(",安装你所需要的Android API\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323113630159.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n配置Android SDK环境变量")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ANDROID_HOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\tC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\Users\\Gaolei\\AppData\\Local\\Android\\android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sdk\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323113805943.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"安装gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装gradle"}},[t._v("#")]),t._v(" 安装Gradle")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle官网安装下载"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下载后解压文件\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323114836935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n配置Gradle环境变量")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115054619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n查看已安装Gradle版本\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115140489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h2",{attrs:{id:"cordova创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cordova创建项目"}},[t._v("#")]),t._v(" Cordova创建项目")]),t._v(" "),s("p",[s("code",[t._v("cordova build portal-vue")]),t._v(" "),s("code",[t._v("cordova platform add android --save")])]),t._v(" "),s("p",[t._v("查看环境要求是否符合,如下图符合\n"),s("code",[t._v("cordova requirements")]),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115407462.png",alt:""}}),t._v("\n构建APP，并运行demo\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115521922.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115625750.png",alt:""}})]),t._v(" "),s("p",[t._v("原始默认生成项目的apk打包\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115741840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n默认效果\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323115849159.png",alt:""}}),t._v(" "),s("em",[s("strong",[t._v("接下来的步骤就是将vue项目整合到Cordova项目里面")])])]),t._v(" "),s("h2",{attrs:{id:"vue项目使用cordova打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue项目使用cordova打包"}},[t._v("#")]),t._v(" Vue项目使用Cordova打包")]),t._v(" "),s("h3",{attrs:{id:"创建一个的vue项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个的vue项目"}},[t._v("#")]),t._v(" 创建一个的Vue项目")]),t._v(" "),s("p",[t._v("在新建的gradle项目portal-vue下新建vue项目vdemo\n"),s("code",[t._v("vue create vdemo")]),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323143812695.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),s("p",[t._v("修改配置文件"),s("code",[t._v("vue.config.js")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  outputDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  assetsDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("打包vue项目，生成dist目录\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323142236151.png",alt:""}}),t._v("\n将dist目录下文件拷贝到"),s("code",[t._v("www/")]),t._v("路径下，替换原来下面的内容\n"),s("em",[s("strong",[t._v("打包成 "),s("code",[t._v("Apk")]),t._v("文件")])]),t._v(" "),s("code",[t._v("cordova build android")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323144451535.png",alt:""}}),t._v(" "),s("strong",[t._v("浏览器预览:")]),t._v(" "),s("a",{attrs:{href:"http://localhost:8000/android/www/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8000/android/www/index.html"),s("OutboundLink")],1),t._v(" "),s("code",[t._v("cordova serve android")]),t._v(" "),s("strong",[t._v("真机预览")]),t._v("直接将打包后的apk文件用安卓手机即可查看效果。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323144953727.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200323143527612.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n至此，一个简单的Vue项目通过Cordova打包成 Android APK了。")]),t._v(" "),s("h2",{attrs:{id:"github源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github源码"}},[t._v("#")]),t._v(" github源码")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/DuebassLei/cordova-vue-android.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Duebasslei/cordova-vue-android"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);