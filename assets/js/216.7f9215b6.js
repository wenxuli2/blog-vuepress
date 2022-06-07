(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{694:function(t,a,s){"use strict";s.r(a);var n=s(20),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"辅助功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#辅助功能"}},[t._v("#")]),t._v(" 辅助功能")]),t._v(" "),s("p",[t._v("为程序制作辅助功能是很重要的。在这里，我们很高兴地向你们介绍"),s("a",{attrs:{href:"https://electronjs.org/devtron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Devtron"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://electronjs.org/spectron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spectron"),s("OutboundLink")],1),t._v("。这两个新功能有机会使开发者们让他们的应用程序更加可用。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Electron 应用中有关辅助功能的开发和网站是相似的，因为两者最终使用的都是HTML. 然而, 对于Electron应用, 你不能使用在线的辅助功能审查者, 因为你的应用没有一个URL可以提供给审查者.")]),t._v(" "),s("p",[t._v("这些功能将会提供一些审查工具给你的Electron 应用。 您可以选择使用 Spectron 将审查添加到你的测试环境中，或在开发者工具（DevTools）中使用Devtron。 详见各工具的文档.")]),t._v(" "),s("h2",{attrs:{id:"spectron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spectron"}},[t._v("#")]),t._v(" Spectron")]),t._v(" "),s("p",[t._v("In the testing framework Spectron, you can now audit each window and "),s("code",[t._v("<webview>")]),t._v(" tag in your application. 例如：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("auditAccessibility")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("audit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("你可以从这里"),s("a",{attrs:{href:"https://github.com/electron/spectron#accessibility-testing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spectron文档"),s("OutboundLink")],1),t._v("阅读到更多有关于这个功能的信息。")]),t._v(" "),s("h2",{attrs:{id:"devtron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devtron"}},[t._v("#")]),t._v(" Devtron")]),t._v(" "),s("p",[t._v("In Devtron, there is an accessibility tab which will allow you to audit a page in your app, sort and filter the results.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/1305617/17156618/9f9bcd72-533f-11e6-880d-389115f40a2a.png",alt:"devtron 截图"}})]),t._v(" "),s("p",[t._v("这两种工具都使用了Google 为 Chrome 所构建的 "),s("a",{attrs:{href:"https://github.com/GoogleChrome/accessibility-developer-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 辅助功能开发工具 "),s("OutboundLink")],1),t._v(" 库。 您可以在 "),s("a",{attrs:{href:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules",target:"_blank",rel:"noopener noreferrer"}},[t._v(" repository's wiki "),s("OutboundLink")],1),t._v(" 上了解到更加详细的辅助功能审核规则。")]),t._v(" "),s("p",[t._v("如果你知道其他适用于Electron的辅助功能开发工具, 请通过pull request添加到本文档中.")]),t._v(" "),s("h2",{attrs:{id:"manually-enabling-accessibility-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-enabling-accessibility-features"}},[t._v("#")]),t._v(" Manually enabling accessibility features")]),t._v(" "),s("p",[t._v("当辅助技术存在时，Electron 应用程序将自动启用辅助功能（例如 Windows 上的 "),s("a",{attrs:{href:"https://www.freedomscientific.com/products/software/jaws/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAWS"),s("OutboundLink")],1),t._v(" 或 macOS 上的 "),s("a",{attrs:{href:"https://help.apple.com/voiceover/mac/10.15/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VoiceOver"),s("OutboundLink")],1),t._v("）。 有关详细信息, 请参阅 Chrome 的 "),s("a",{attrs:{href:"https://www.chromium.org/developers/design-documents/accessibility#TOC-How-Chrome-detects-the-presence-of-Assistive-Technology",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 辅助功能文档 "),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("You can also manually toggle these features either within your Electron application or by setting flags in third-party native software.")]),t._v(" "),s("h3",{attrs:{id:"使用-electron-的-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-electron-的-api"}},[t._v("#")]),t._v(" 使用 Electron 的 API")]),t._v(" "),s("p",[t._v("通过使用 "),s("RouterLink",{attrs:{to:"/《Electron中文文档》/api/app.html#appsetaccessibilitysupportenabledenabled-macos-windows"}},[s("code",[t._v("app.setAccessibilitySupportEnabled(enabled)")])]),t._v(" API，您可以在应用程序首选项中的手动向用户暴露Chrome的访问树。 请注意，用户的系统辅助工具优先于此设置并将覆盖它。")],1),t._v(" "),s("h3",{attrs:{id:"在第三方软件内"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在第三方软件内"}},[t._v("#")]),t._v(" 在第三方软件内")]),t._v(" "),s("h4",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),s("p",[t._v("On macOS, third-party assistive technology can toggle accessibility features inside Electron applications by setting the "),s("code",[t._v("AXManualAccessibility")]),t._v(" attribute programmatically:")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[t._v("CFStringRef kAXManualAccessibility "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CFSTR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AXManualAccessibility"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("enableAccessibility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("enable inElectronApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSRunningApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("app\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    AXUIElementRef appRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AXUIElementCreateApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("processIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    CFBooleanRef value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" kCFBooleanTrue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kCFBooleanFalse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AXUIElementSetAttributeValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kAXManualAccessibility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CFRelease")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);