(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{517:function(t,e,n){"use strict";n.r(e);var a=n(20),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp官网"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://download1.dcloud.net.cn/download/HBuilderX.3.3.13.20220314.full.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBuilderX App开发版 (317.3M)"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"环境安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[t._v("#")]),t._v(" 环境安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("npm install -g @vue/cli\n")])])]),n("h3",{attrs:{id:"创建uni-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建uni-app"}},[t._v("#")]),t._v(" 创建uni-app")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("cd Z:\\test\n// 使用Vue3/Vite版\n\t创建以 javascript 开发的工程（如命令行创建失败，请直接访问 gitee 下载模板）\nnpx degit dcloudio/uni-preset-vue#vite uni_app_stuly\n// 创建以 typescript 开发的工程  \nnpx degit dcloudio/uni-preset-vue#vite-ts uni_app_stuly -y\n")])])]),n("h3",{attrs:{id:"进入工程项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入工程项目"}},[t._v("#")]),t._v(" 进入工程项目")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("cd uni_app_stuly\n安装依赖\nnpm i\nnpm install parse-css-font\n运行\n\t# 运行到 h5   \n\tnpm run dev:h5  \n\t# 运行到 app   \n\tnpm run dev:app  \n\t# 运行到 微信小程序  \n\tnpm run dev:mp-weixin \n打包\n\t# 打包到 h5   \n\tnpm run build:h5  \n\t# 打包到 app   \n\tnpm run build:app  \n\t# 打包到 微信小程序  \n\tnpm run build:mp-weixin  \n")])])]),n("h3",{attrs:{id:"打包到-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包到-app"}},[t._v("#")]),t._v(" 打包到 app")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/ygzrsno/article/details/118327722",target:"_blank",rel:"noopener noreferrer"}},[t._v("uni-app打包成Android Apk 全程详解"),n("OutboundLink")],1),t._v("\n// 生成签名证书\n// 使用keytool -genkey命令生成证书：\nkeytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore\n// testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字\n// test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径\n// 36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期\n// 以上命令运行完成后就会生成证书，路径为“D:\\Java\\jdk-18\\bin\\test.keystore”。\n// 查看证书信息\n// 可以使用以下命令查看：\nkeytool -list -v -keystore test.keystore"),n("br"),t._v("\n// Enter keystore password: //输入密码，回车")]),t._v(" "),n("p",[t._v("注意：上述信息填写要规范，乱填有可能会影响应用上架应用市场。")]),t._v(" "),n("h3",{attrs:{id:"出现的错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#出现的错误"}},[t._v("#")]),t._v(" 出现的错误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("？could not find commit hash for vite\n@网络不好\n2.Error: Cannot find module 'Z:\\test\\uni_app_stuly\\node_modules\\parse-css-font\\dist\\index.js'. Please verify that the package.json has a valid \"main\" entry\n: npm install parse-css-font\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);