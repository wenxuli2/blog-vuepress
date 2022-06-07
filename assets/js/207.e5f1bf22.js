(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{685:function(s,t,a){"use strict";a.r(t);var e=a(20),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在调试器中设置-symbol-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在调试器中设置-symbol-服务器"}},[s._v("#")]),s._v(" 在调试器中设置 Symbol 服务器")]),s._v(" "),a("p",[s._v("调试 symbols 让你能更好的调试 sessions. 它们有可执行的动态库的函数信息，并且提供信息来获得干净的调用堆栈. 一个 Symbol 服务器允许调试器自动加载正确的 symbols, 二进制文件 和 资源文件，不用再去强制用户下载巨大的调试文件. 服务器函数类似 "),a("a",{attrs:{href:"https://support.microsoft.com/kb/311503",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microsoft's symbol server"),a("OutboundLink")],1),s._v("，所以这些文档是可以使用的。")]),s._v(" "),a("p",[s._v("注意，因为公众版本的 Electron 构建是最优化的，调试不一定一直简单. 调试器将不会给显示出所有变量内容，并且因为内联，尾调用，和其它编译器优化，执行路径会看起来很怪异. 唯一的解决办法是搭建一个不优化的本地构建.")]),s._v(" "),a("p",[s._v("Electron 使用的官方 symbol 服务器地址为 https://symbols.electronjs.org. 你不能直接访问这个路径，必须将其添加到你的调试工具的 symbol 路径上. 在下面的例子中，使用了一个本地缓存目录来避免重复从服务器获取 PDB. 在你的电脑上使用一个恰当的缓存目录来代替 "),a("code",[s._v("c:\\code\\symbols")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"在-windbg-中使用-symbol-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-windbg-中使用-symbol-服务器"}},[s._v("#")]),s._v(" 在 Windbg 中使用 Symbol 服务器")]),s._v(" "),a("p",[s._v("Windbg symbol 路径被配制为一个限制带星号字符的字符串. 要只使用 Electron 的 symbol 服务器, 将下列记录添加到你的 symbol 路径 ("),a("strong",[s._v("注意:")]),s._v(" 如果你愿意使用一个不同的地点来下载 symbols，你可以在你的电脑中使用任何可写的目录来代替 "),a("code",[s._v("c:\\code\\symbols")]),s._v("):")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("SRV*c:\\code\\symbols\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("symbols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("electronjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用 Windbg 菜单或通过输入 "),a("code",[s._v(".sympath")]),s._v(" 命令，在环境中设置一个 "),a("code",[s._v("_NT_SYMBOL_PATH")]),s._v(" 字符串. 如果你也想从微软的 symbol 服务器获得 symbols ，你应当首先将它们先列出来:")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("SRV*c:\\code\\symbols\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("msdl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com/download/symbols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("SRV*c:\\code\\symbols\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("symbols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("electronjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"在-visual-studio-中使用-symbol-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-visual-studio-中使用-symbol-服务器"}},[s._v("#")]),s._v(" 在 Visual Studio 中使用 symbol 服务器")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mdn.mozillademos.org/files/733/symbol-server-vc8express-menu.jpg",alt:"Tools -> Options"}}),s._v(" "),a("img",{attrs:{src:"https://mdn.mozillademos.org/files/2497/2005_options.gif",alt:"Symbols Settings"}})]),s._v(" "),a("h2",{attrs:{id:"故障排除-symbol-未加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障排除-symbol-未加载"}},[s._v("#")]),s._v(" 故障排除：symbol 未加载")]),s._v(" "),a("p",[s._v("在 Windbg 中输入下列命令，来打印出为什么 symbols 没有加载:")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("> "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("sym noisy\n> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("f electron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=o.exports}}]);