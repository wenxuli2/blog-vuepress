(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{754:function(e,r,t){"use strict";t.r(r);var v=t(20),o=Object(v.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"web-embeds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-embeds"}},[e._v("#")]),e._v(" Web Embeds")]),e._v(" "),t("h2",{attrs:{id:"概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[e._v("#")]),e._v(" 概览")]),e._v(" "),t("p",[e._v("有三种方式可以让你在Electron的"),t("code",[e._v("BrowserWindow")]),e._v("里集成（第三方）web内容，"),t("code",[e._v("<iframe>")]),e._v(" 和, "),t("code",[e._v("<webview>")]),e._v(" 和 "),t("code",[e._v("BrowserViews")]),e._v(" 每个功能都略有不同，适用于不同的情况。 为了帮助您在这些选择之间进行选择，本指南将解释他们之间的差异和功能。")]),e._v(" "),t("h3",{attrs:{id:"iframes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iframes"}},[e._v("#")]),e._v(" Iframes")]),e._v(" "),t("p",[e._v("Iframe 在 Electron 中的行为与普通浏览器中类似。 在宿主页面的 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content Security Policy"),t("OutboundLink")],1),e._v(" 允许范围内，一个 "),t("code",[e._v("<iframe>")]),e._v(" 元素能在页面上显示外部网页。 要限制 "),t("code",[e._v("<iframe>")]),e._v(" 标签中站点的功能数量，建议 使用 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("sandbox")]),e._v(" 属性"),t("OutboundLink")],1),e._v(" 并且只允许您想要支持的功能。")]),e._v(" "),t("h3",{attrs:{id:"webview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webview"}},[e._v("#")]),e._v(" WebView")]),e._v(" "),t("blockquote",[t("p",[e._v("重要提示： "),t("RouterLink",{attrs:{to:"/《Electron中文文档》/api/webview-tag.html#warning"}},[e._v("我们不建议您使用 WebView")]),e._v("，因为这个标签会发生剧烈的结构变化，可能会影响您应用程序的稳定性。 考虑切换到其他选择，如 "),t("code",[e._v("iframe")]),e._v(" 和Electron的 "),t("code",[e._v("BrowserView")]),e._v("，或避免嵌入式内容 设计的架构。")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/《Electron中文文档》/api/webview-tag.html"}},[e._v("WebViews")]),e._v("基于 Chromium 的 WebView，不被 Electron 明确支持。 我们不能保证WebView API 在未来版本的 Electron 中仍然可用。 这就是为什么如果您想要使用"),t("code",[e._v("<webview>")]),e._v("标签，您需要在"),t("code",[e._v("BrowserWindow")]),e._v(" 的 "),t("code",[e._v("webPreferences")]),e._v(" 中设置 "),t("code",[e._v("webviewTag")]),e._v(" 为 "),t("code",[e._v("true")]),e._v("。")],1),e._v(" "),t("p",[e._v("WebView是一个自定义元素 ("),t("code",[e._v("<webview>")]),e._v(')，仅在 Electron 内工作。 它们以 "进程外 iframe" 实现。 这意味着所有与 '),t("code",[e._v("<webview>")]),e._v(" 的通信都是异步使用 IPC 进行的。 "),t("code",[e._v("<webview>")]),e._v("元素有许多自定义方法和事件，类似于"),t("code",[e._v("webContents")]),e._v("，使您能够更多地控制内容。")]),e._v(" "),t("p",[e._v("与 "),t("code",[e._v("<iframe>")]),e._v("，"),t("code",[e._v("<webview>")]),e._v(" 相比往往稍慢，但在加载和与第三方内容通信以及处理各种事件方面提供了更大的控制。")]),e._v(" "),t("h3",{attrs:{id:"browserview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#browserview"}},[e._v("#")]),e._v(" BrowserView")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/《Electron中文文档》/api/browser-view.html"}},[e._v("BrowserViews")]),e._v(" 不是 DOM 的一部分，而是由主进程创建和控制。 它们只是现有窗口之上的另一层 Web 内容。 这意味着它们与您自己的 "),t("code",[e._v("BrowserWindow")]),e._v(" 内容完全分离，并且它们的位置不受 DOM 或 CSS 的控制，而是通过在主进程中设置边界来控制其位置。 相反，它通过在主进程中设置界面来控制 。")],1),e._v(" "),t("p",[e._v("BrowserViews 提供对其内容的最大控制，因为它们实现 "),t("code",[e._v("webContents")]),e._v(" 的方式与 "),t("code",[e._v("BrowserWindow")]),e._v(" 实现内容的方式类似。 但是，由于 "),t("code",[e._v("BrowserViews")]),e._v(" 不是 DOM 的一部分，而是覆盖在它们之上，因此您必须手动管理它们的位置。")])])}),[],!1,null,null,null);r.default=o.exports}}]);