(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{666:function(e,t,o){"use strict";o.r(t);var n=o(20),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"更新-appveyor-azure-镜像"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#更新-appveyor-azure-镜像"}},[e._v("#")]),e._v(" 更新 Appveyor Azure 镜像")]),e._v(" "),o("p",[e._v("Windows 上的 Electron CI 使用 AppVeyor, 后者则使用 Azure VM 镜像运行。  有时，由于 Chromium 要求发生变化，这些 VM 镜像需要更新。  为了更新，您将需要 "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell"),o("OutboundLink")],1),e._v(" 和 "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-1.8.0&viewFallbackFrom=azurermps-6.13.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure PowerShell 模块"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[e._v("Occasionally we need to update these images owing to changes in Chromium or other miscellaneous build requirement changes.")]),e._v(" "),o("p",[e._v("Example Use Case:\n* 我们需要安装"),o("code",[e._v("VS15.9")]),e._v("或者我们已安装好"),o("code",[e._v("VS15.7")]),e._v("；然后可能会请求我们去更新Azure镜像")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Identify the image you wish to modify.")]),e._v(" "),o("ul",[o("li",[e._v("在 "),o("a",{attrs:{href:"https://github.com/electron/electron/blob/main/appveyor.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("appveyor.yml"),o("OutboundLink")],1),e._v("文件中，镜像通过该文件来识别 "),o("em",[e._v("镜像")]),e._v(" 配置。\n"),o("ul",[o("li",[e._v("*“images”*该命名被对应用来定义云构建，例如："),o("a",{attrs:{href:"https://windows-ci.electronjs.org/build-clouds/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("libcc-20 cloud"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("找到你希望去修改构建在云端的镜像并且注意镜像的 "),o("strong",[e._v("VHD Blob Path")]),e._v("（标签），它是对应键值对的值\n"),o("ul",[o("li",[e._v("You will need this URI path to copy into a new image.")])])]),e._v(" "),o("li",[e._v("同时需要的的存储账号名，在AppVeyor中被标记为 "),o("strong",[e._v("Disk Storage Account Name")])])])]),e._v(" "),o("li",[o("p",[e._v("Get the Azure storage account key")]),e._v(" "),o("ul",[o("li",[e._v("Log into Azure using credentials stored in LastPass (under Azure Enterprise) and then find the storage account corresponding to the name found in AppVeyor.\n"),o("ul",[o("li",[e._v("Example, for "),o("code",[e._v("appveyorlibccbuilds")]),e._v(" "),o("strong",[e._v("Disk Storage Account Name")]),e._v(" you'd look for "),o("code",[e._v("appveyorlibccbuilds")]),e._v(" in the list of storage accounts @ Home < Storage Accounts\n"),o("ul",[o("li",[e._v("Click into it and look for "),o("code",[e._v("Access Keys")]),e._v(", and then you can use any of the keys present in the list.")])])])])])])]),e._v(" "),o("li",[o("p",[e._v("Get the full virtual machine image URI from Azure")]),e._v(" "),o("ul",[o("li",[e._v("Navigate to Home < Storage Accounts < "),o("code",[e._v("$ACCT_NAME")]),e._v(" < Blobs < Images\n"),o("ul",[o("li",[e._v("In the following list, look for the VHD path name you got from Appveyor and then click on it.\n"),o("ul",[o("li",[e._v("Copy the whole URL from the top of the subsequent window.")])])])])])])]),e._v(" "),o("li",[o("p",[e._v("Copy the image using the "),o("a",{attrs:{href:"https://github.com/appveyor/ci/blob/master/scripts/enterprise/copy-master-image-azure.ps1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Copy Master Image PowerShell script"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("It is essential to copy the VM because if you spin up a VM against an image that image cannot at the same time be used by AppVeyor.")]),e._v(" "),o("li",[e._v("Use the storage account name, key, and URI obtained from Azure to run this script.\n"),o("ul",[o("li",[e._v("See Step 3 for URI & when prompted, press enter to use same storage account as destination.")]),e._v(" "),o("li",[e._v("Use default destination container name "),o("code",[e._v("(images)")])]),e._v(" "),o("li",[e._v("Also, when naming the copy, use a name that indicates what the new image will contain (if that has changed) and date stamp.\n"),o("ul",[o("li",[e._v("Ex. "),o("code",[e._v("libcc-20core-vs2017-15.9-2019-04-15.vhd")])])])])])]),e._v(" "),o("li",[e._v("Go into Azure and get the URI for the newly created image as described in a previous step")])])]),e._v(" "),o("li",[o("p",[e._v("Spin up a new VM using the "),o("a",{attrs:{href:"https://github.com/appveyor/ci/blob/master/scripts/enterprise/create_master_vm_from_vhd.ps1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create Master VM from VHD PowerShell"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("From PowerShell, execute "),o("code",[e._v("ps1")]),e._v(" file with "),o("code",[e._v("./create_master_vm_from_vhd.ps1")])]),e._v(" "),o("li",[e._v("You will need the credential information available in the AppVeyor build cloud definition.\n"),o("ul",[o("li",[e._v("这包括：\n"),o("ul",[o("li",[e._v("客户端 ID")]),e._v(" "),o("li",[e._v("Client Secret")]),e._v(" "),o("li",[e._v("Tenant ID")]),e._v(" "),o("li",[e._v("Subscription ID")]),e._v(" "),o("li",[e._v("Resource Group")]),e._v(" "),o("li",[e._v("Virtual Network")])])])])]),e._v(" "),o("li",[e._v("You will also need to specify\n"),o("ul",[o("li",[e._v("Master VM name - just a unique name to identify the temporary VM")]),e._v(" "),o("li",[e._v("Master VM size - use "),o("code",[e._v("Standard_F32s_v2")])]),e._v(" "),o("li",[e._v("Master VHD URI - use URI obtained @ end of previous step")]),e._v(" "),o("li",[e._v("Location use "),o("code",[e._v("East US")])])])])])]),e._v(" "),o("li",[o("p",[e._v("Log back into Azure and find the VM you just created in Home < Virtual Machines < "),o("code",[e._v("$YOUR_NEW_VM")])]),e._v(" "),o("ul",[o("li",[e._v("You can download a RDP (Remote Desktop) file to access the VM.")])])]),e._v(" "),o("li",[o("p",[e._v("Using Microsoft Remote Desktop, click "),o("code",[e._v("Connect")]),e._v(" to connect to the VM.")]),e._v(" "),o("ul",[o("li",[e._v("Credentials for logging into the VM are found in LastPass under the "),o("code",[e._v("AppVeyor Enterprise master VM")]),e._v(" credentials.")])])]),e._v(" "),o("li",[o("p",[e._v("Modify the VM as required.")])]),e._v(" "),o("li",[o("p",[e._v("Shut down the VM and then delete it in Azure.")])]),e._v(" "),o("li",[o("p",[e._v("Add the new image to the Appveyor Cloud settings or modify an existing image to point to the new VHD.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);