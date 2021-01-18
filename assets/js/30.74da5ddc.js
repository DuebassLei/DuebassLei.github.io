(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{679:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("MinIO")]),t._v("是世界上最快的对象存储服务器。在标准硬件上，读/写速度分别为"),e("code",[t._v("183 GB / s")]),t._v("和"),e("code",[t._v("171 GB / s")]),t._v("，对象存储可以作为主要存储层，用于"),e("code",[t._v("Spark，Presto，TensorFlow，H2O.ai")]),t._v("以及替代产品等各种工作负载用于"),e("code",[t._v("Hadoop HDFS")]),t._v("。")])]),t._v(" "),e("p",[e("code",[t._v("MinIO")]),t._v("是一种高性能的分布式对象存储系统。它是软件定义的，可在行业标准硬件上运行，并且在"),e("code",[t._v("Apache V2")]),t._v("许可下是"),e("code",[t._v("100％")]),t._v("开放源代码。")]),t._v(" "),e("h2",{attrs:{id:"docker部署minio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker部署minio"}},[t._v("#")]),t._v(" Docker部署MinIO")]),t._v(" "),e("ul",[e("li",[t._v("搜索"),e("code",[t._v("docker")]),t._v("仓库中"),e("code",[t._v("minio")]),t._v("相关的镜像")])]),t._v(" "),e("p",[e("code",[t._v("docker search minio")]),t._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200501113717817.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),e("ul",[e("li",[t._v("拉取镜像")])]),t._v(" "),e("p",[e("code",[t._v("Docker pull minio/minio")]),t._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200501114312915.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("ul",[e("li",[t._v("启动容器并设置环境变量")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 --name minio "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MINIO_ACCESS_KEY=youAccessKey"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MINIO_SECRET_KEY=youSecretKey"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v D:/docker/minio/data:/data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v D:/docker/minio/config:/root/.minio "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nminio/minio server /data\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("blockquote",[e("p",[e("code",[t._v("MINIO_ACCESS_KEY")]),t._v(" 是登录名\n"),e("code",[t._v("MINIO_SECRET_KEY")]),t._v(" 是密码")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200501114630963.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("ul",[e("li",[t._v("访问"),e("em",[t._v("Minio")]),t._v(" "),e("code",[t._v("http://127.0.0.1:9000")]),t._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200501114705310.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),e("li",[t._v("登录并新建BucketName\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020050111480385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM3OTAzODgy,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/XYYCKL/p/12066228.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker部署Minio"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);