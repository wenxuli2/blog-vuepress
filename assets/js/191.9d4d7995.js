(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{668:function(s,e,t){"use strict";t.r(e);var a=t(20),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"构建步骤-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建步骤-linux"}},[s._v("#")]),s._v(" 构建步骤（Linux）")]),s._v(" "),t("p",[s._v("Follow the guidelines below for building "),t("strong",[s._v("Electron itself")]),s._v(" on Linux, for the purposes of creating custom Electron binaries. 为了将您的应用代码与预构建的 Electron 二进制文件打包并发布，请参阅 "),t("RouterLink",{attrs:{to:"/《Electron中文文档》/tutorial/application-distribution.html"}},[s._v("应用程序发布")]),s._v(" 指南。")],1),s._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("At least 25GB disk space and 8GB RAM.")])]),s._v(" "),t("li",[t("p",[s._v("Python 2.7.x. Some distributions like CentOS 6.x still use Python 2.6.x so you may need to check your Python version with "),t("code",[s._v("python -V")]),s._v(".")]),s._v(" "),t("p",[s._v("Please also ensure that your system and Python version support at least TLS 1.2. For a quick test, run the following script:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ npx @electron/check-python-tls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("If the script returns that your configuration is using an outdated security protocol, use your system's package manager to update Python to the latest version in the 2.7.x branch. Alternatively, visit https://www.python.org/downloads/ for detailed instructions.")])]),s._v(" "),t("li",[t("p",[s._v("Node.js. There are various ways to install Node. You can download source code from "),t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs.org"),t("OutboundLink")],1),s._v(" and compile it. Doing so permits installing Node on your own home directory as a standard user. Or try repositories such as "),t("a",{attrs:{href:"https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories",target:"_blank",rel:"noopener noreferrer"}},[s._v("NodeSource"),t("OutboundLink")],1),s._v(".")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://clang.llvm.org/get_started.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("clang"),t("OutboundLink")],1),s._v(" 3.4 or later.")])]),s._v(" "),t("li",[t("p",[s._v("Development headers of GTK 3 and libnotify.")])])]),s._v(" "),t("p",[s._v("On Ubuntu, install the following libraries:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential clang libdbus-1-dev libgtk-3-dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       libnotify-dev libgnome-keyring-dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       libasound2-dev libcap-dev libcups2-dev libxtst-dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       libxss1 libnss3-dev gcc-multilib g++-multilib "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       gperf bison python-dbusmock openjdk-8-jre\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("On RHEL / CentOS, install the following libraries:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" clang dbus-devel gtk3-devel libnotify-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   libgnome-keyring-devel xorg-x11-server-utils libcap-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   cups-devel libXtst-devel alsa-lib-devel libXrandr-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   nss-devel python-dbusmock openjdk-8-jre\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("On Fedora, install the following libraries:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" clang dbus-devel gtk3-devel libnotify-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   libgnome-keyring-devel xorg-x11-server-utils libcap-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   cups-devel libXtst-devel alsa-lib-devel libXrandr-devel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   nss-devel python-dbusmock openjdk-8-jre\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("On Arch Linux / Manjaro, install the following libraries:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -Syu base-devel clang libdbus gtk2 libnotify "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   libgnome-keyring alsa-lib libcap libcups libxtst "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   libxss nss gcc-multilib "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gperf bison "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                   python2 python-dbusmock jdk8-openjdk\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("Other distributions may offer similar packages for installation via package managers such as pacman. Or one can compile from source code.")]),s._v(" "),t("h3",{attrs:{id:"cross-compilation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-compilation"}},[s._v("#")]),s._v(" Cross compilation")]),s._v(" "),t("p",[s._v("If you want to build for an "),t("code",[s._v("arm")]),s._v(" target you should also install the following dependencies:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libc6-dev-armhf-cross linux-libc-dev-armhf-cross "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       g++-arm-linux-gnueabihf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Similarly for "),t("code",[s._v("arm64")]),s._v(", install the following:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libc6-dev-arm64-cross linux-libc-dev-arm64-cross "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                       g++-aarch64-linux-gnu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("And to cross-compile for "),t("code",[s._v("arm")]),s._v(" or "),t("code",[s._v("ia32")]),s._v(" targets, you should pass the "),t("code",[s._v("target_cpu")]),s._v(" parameter to "),t("code",[s._v("gn gen")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ gn gen out/Testing --args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'import(...) target_cpu=\"arm\"'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),t("p",[s._v("See "),t("RouterLink",{attrs:{to:"/《Electron中文文档》/development/build-instructions-gn.html"}},[s._v("Build Instructions: GN")])],1),s._v(" "),t("h2",{attrs:{id:"故障排查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障排查"}},[s._v("#")]),s._v(" 故障排查")]),s._v(" "),t("h3",{attrs:{id:"error-while-loading-shared-libraries-libtinfo-so-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-while-loading-shared-libraries-libtinfo-so-5"}},[s._v("#")]),s._v(" Error While Loading Shared Libraries: libtinfo.so.5")]),s._v(" "),t("p",[s._v("Prebuilt "),t("code",[s._v("clang")]),s._v(" will try to link to "),t("code",[s._v("libtinfo.so.5")]),s._v(". Depending on the host architecture, symlink to appropriate "),t("code",[s._v("libncurses")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/lib/libncurses.so.5 /usr/lib/libtinfo.so.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"advanced-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-topics"}},[s._v("#")]),s._v(" Advanced topics")]),s._v(" "),t("p",[s._v("The default building configuration is targeted for major desktop Linux distributions. To build for a specific distribution or device, the following information may help you.")]),s._v(" "),t("h3",{attrs:{id:"using-system-clang-instead-of-downloaded-clang-binaries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-system-clang-instead-of-downloaded-clang-binaries"}},[s._v("#")]),s._v(" Using system "),t("code",[s._v("clang")]),s._v(" instead of downloaded "),t("code",[s._v("clang")]),s._v(" binaries")]),s._v(" "),t("p",[s._v("By default Electron is built with prebuilt "),t("a",{attrs:{href:"https://clang.llvm.org/get_started.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("clang")]),t("OutboundLink")],1),s._v(" binaries provided by the Chromium project. If for some reason you want to build with the "),t("code",[s._v("clang")]),s._v(" installed in your system, you can specify the "),t("code",[s._v("clang_base_path")]),s._v(" argument in the GN args.")]),s._v(" "),t("p",[s._v("For example if you installed "),t("code",[s._v("clang")]),s._v(" under "),t("code",[s._v("/usr/local/bin/clang")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ gn gen out/Testing --args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'import("//electron/build/args/testing.gn") clang_base_path = "/usr/local/bin"\'')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"using-compilers-other-than-clang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-compilers-other-than-clang"}},[s._v("#")]),s._v(" Using compilers other than "),t("code",[s._v("clang")])]),s._v(" "),t("p",[s._v("Building Electron with compilers other than "),t("code",[s._v("clang")]),s._v(" is not supported.")])])}),[],!1,null,null,null);e.default=n.exports}}]);