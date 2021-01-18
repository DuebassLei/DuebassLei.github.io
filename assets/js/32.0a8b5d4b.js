(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{683:function(s,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("家庭版不支持"),e("code",[s._v("Hyper-V")]),s._v("，"),e("code",[s._v("Docker Desktop")]),s._v("是无法直接安装的。但其实家庭版是可以通过脚本开启"),e("code",[s._v("Hyper-V")]),s._v("来安装"),e("code",[s._v("Docker Desktop")]),s._v("的。")]),s._v(" "),e("h2",{attrs:{id:"开启hyper-v"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启hyper-v"}},[s._v("#")]),s._v(" 开启Hyper-V")]),s._v(" "),e("p",[s._v("记事本新建"),e("code",[s._v("Start Hyper-V.txt")]),s._v("文件,保存后另存为"),e("code",[s._v("Start Hyper-V.cmd")]),s._v("文件，然后以管理员身份打开这个文件。提示是否重启，输入"),e("code",[s._v("Y")]),s._v("重启,完成就能使用功能完整的Hyper-V了")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%~dp0"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /b %SystemRoot%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("servicing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*Hyper-V*.mum "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hyper-v.txt\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /f %%i "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'findstr /i . hyper-v.txt 2^>nul'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" dism /online /norestart /add-package:"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%SystemRoot%\\servicing\\Packages\\%%i"')]),s._v("\n\ndel hyper-v.txt\n\nDism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f8415bedcc4d94?w=846&h=32&f=png&s=4222",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"家庭版伪装成专业版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#家庭版伪装成专业版"}},[s._v("#")]),s._v(" 家庭版伪装成专业版")]),s._v(" "),e("p",[e("code",[s._v("Docker Desktop")]),s._v("会在安装的时候检测系统版本，家庭版直接安装会显示安装失败。所以需要改下注册表绕过安装检测。")]),s._v(" "),e("p",[e("em",[e("strong",[s._v("管理员权限运行如下"),e("code",[s._v("cmd")]),s._v("命令")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('REG ADD "HKEY_LOCAL_MACHINE\\software\\Microsoft\\Windows NT\\CurrentVersion" /v EditionId /T REG_EXPAND_SZ /d Professional /F\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f841b4d38e7225?w=1640&h=209&f=png&s=27421",alt:""}}),s._v(" "),e("strong",[s._v("重启后此项注修改的注册表值会自动还原，但不影响docker运行")])]),s._v(" "),e("h2",{attrs:{id:"下载docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载docker"}},[s._v("#")]),s._v(" 下载Docker")]),s._v(" "),e("p",[s._v("在"),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网下载"),e("OutboundLink")],1),e("code",[s._v("docker-ce-desktop-windows")]),s._v("后直接安装，默认选项使用"),e("code",[s._v("linux container")]),s._v("即可,安装完成后桌面出现"),e("code",[s._v("docker")]),s._v("快捷方式图标，双击运行，等待一会出现"),e("code",[s._v("Docker is running")]),s._v("，成功启动容器。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f841f1e88b9c78?w=594&h=188&f=png&s=147315",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f841e9e9de0248?w=609&h=215&f=png&s=40875",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("至此，Window家庭版成功安装Docker")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f8422caf838752?w=727&h=611&f=png&s=90678",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("h3",{attrs:{id:"查看版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看版本"}},[s._v("#")]),s._v(" 查看版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f8421b8abeba70?w=1249&h=76&f=png&s=13784",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[s._v("#")]),s._v(" 下载镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f8424345f1c88b?w=1250&h=216&f=png&s=59454",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像"}},[s._v("#")]),s._v(" 查看镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/8/16f842536dbc5781?w=1244&h=136&f=png&s=35803",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);