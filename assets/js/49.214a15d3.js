(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{525:function(e,t,s){"use strict";s.r(t);var i=s(20),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("感觉hexo挺好玩的，但是我还是想要弄一个网站玩玩，记录一下搭建过程的血与泪。\n代表是云服务linux下的操作，PS: 代表是在本机powershell环境下的操作\n一.在云服务器上搭建git的服务器，具体见Git 服务器搭建\n二.下载安装ngnix，配置ngnix.conf\n三.新建项目，联系本机与服务器\n")])])]),s("p",[e._v("以下#的内容都是在su git的用户下进行\n# git init --bare /home/git/home-page.git\n# chown git:git -R /home/www/home-page\n# cd /home/git/home-page.git/hooks/\n# vim post-receive\n# 配置post-receive")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("su git\nmkdir /home/www/website-server\nchown git:git -R /home/www/website-server\ngit init --bare /home/git/website-server.git\ncd /home/git/website-server.git/hooks/\nvim post-receive\n# 配置post-receive\n!/bin/sh\ngit --work-tree=/home/www/website-server --git-dir=/home/git/website-server.git checkout -f\nchmod +x /home/git/website-server.git/hooks/post-receive\n")])])]),s("p",[e._v("改一下nginx.conf配置的root")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nvi /etc/nginx/nginx.conf\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("blockquote",[s("p",[e._v("PS:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("cd H:\ncd home-page\ngit clone git@180.76.152.38:/home/git/home-page.git\nNew-Item src/index.html\ngit add .\ngit push\n")])])]),s("h3",{attrs:{id:"suggest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suggest"}},[e._v("#")]),e._v(" suggest")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("搜索引擎智能提示API接口地址 各大搜索引擎下拉词API接口地址 百度 https://www.baidu.com/su?&wd=搜索词 google http://clients1.google.com/complete/search?hl=zh&output=toolbar&q=关键词 http://suggestqueries.google.com/complete/search?client=youtube&q=关键词&jsonp=window.google.ac.h https://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=word\n搜狗(sogou)\nApi地址：http://w.sugg.sogou.com/sugg/ajaj_json.jsp?key=设计&type=web\n")])])]),s("h3",{attrs:{id:"那些年遭遇的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那些年遭遇的坑"}},[e._v("#")]),e._v(" 那些年遭遇的坑")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1.error: failed to push some refs to '180.76.152.38:/home/git/website.git' git init --bare /home/git/home-page.git 一个新的裸库，但是最后push，死活push不上去 原因：请在su git，在git用户操作，不要再root用户下进行，又是linux该死的权限问题 2.网站资源都发生变化，但是网页还是没有变 Chrome 浏览器，按 Ctrl + Shift + R ，进行硬刷新（hard-refresh），可清空当前网页的缓存，重新打开当前页面\n")])])]),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("JS获取transform rotate旋转角度的度数，matrix解析")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);