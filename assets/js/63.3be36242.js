(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{369:function(e,n,s){"use strict";s.r(n);var t=s(22),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"插件代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件代码"}},[e._v("#")]),e._v(" 插件代码")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("from burp import IBurpExtender\nfrom burp import IHttpListener\nfrom burp import IHttpRequestResponse\nfrom burp import IResponseInfo\nfrom burp import IRequestInfo\nfrom burp import IHttpService\n\nimport re\nimport json\n# Class BurpExtender (Required) contaning all functions used to interact with Burp Suite API\n\nRE=[\n    '^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$', # SHENFENZHENG\n    '^[1]([3-9])[0-9]{9}$', # TELPHONE\n    '^([a-zA-z]|[0-9]){5,17}$', #PassportNumberReg\n    '^([A-Z]\\d{6,10}(\\(\\w{1}\\))?)$', # Hk card\n    '^\\d{8}|^[a-zA-Z0-9]{10}|^\\d{18}$', #TWCard\n    '(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)',  #isAccountCard\n\n]\n\nclass BurpExtender(IBurpExtender, IHttpListener):\n\n    # define registerExtenderCallbacks: From IBurpExtender Interface \n    def registerExtenderCallbacks(self, callbacks):\n\n        # keep a reference to our callbacks object (Burp Extensibility Feature)\n        self._callbacks = callbacks\n        # obtain an extension helpers object (Burp Extensibility Feature)\n        # http://portswigger.net/burp/extender/api/burp/IExtensionHelpers.html\n        self._helpers = callbacks.getHelpers()\n        # set our extension name that will display in Extender Tab\n        self._callbacks.setExtensionName(\"find JSON callback\")\n        # register ourselves as an HTTP listener\n        callbacks.registerHttpListener(self)\n\n    def returnjson(self,myjson):\n        try:\n            json_object = json.loads(myjson)\n        except ValueError,e:\n            return False\n        \n        return json_object\n\n\n    def reCheck(self,strs):\n        for pattern in RE:\n            if re.findall(pattern,strs):\n                return True\n        return False\n\n    # define processHttpMessage: From IHttpListener Interface \n    def processHttpMessage(self, toolFlag, messageIsRequest, messageInfo):\n        if toolFlag == 64 or toolFlag == 16 or toolFlag == 8 or toolFlag == 4:\n            # if not messageIsRequest:\n            response = messageInfo.getResponse()\n            if response!=None:\n                analyzedResponse = self._helpers.analyzeResponse(response) # returns IResponseInfo\n                response_StatusCode = analyzedResponse.getStatusCode()\n                response_headers = analyzedResponse.getHeaders()\n                response_bodys = response[analyzedResponse.getBodyOffset():].tostring()\n\n\n                resquest = messageInfo.getRequest()\n                analyzedRequest = self._helpers.analyzeResponse(resquest)\n                request_header = analyzedRequest.getHeaders()\n                request_bodys = resquest[analyzedRequest.getBodyOffset():].tostring()\n\n                if response_StatusCode==200:\n                    if len(response_bodys)!=0:\n                        jsonObj=self.returnjson(response_bodys)\n                        if jsonObj:\n                            if isinstance(jsonObj,list):  # instance of list\n                                for line in jsonObj:\n                                    for k,v in line.items():\n                                        try:\n                                            s=v.encode('utf8')\n                                        except Exception,e:\n                                            s=str(v)\n                                        if self.reCheck(s):\n                                            print 'found!!!!',request_header,s\n                            else:  # instance of dict\n                                for k,v in jsonObj.items():\n                                    try:\n                                        s=v.encode('utf8')\n                                    except Exception,e:\n                                        s=str(v)\n                                    if self.reCheck(s):\n                                        print 'found!!!!',request_header,s\n")])])]),s("h2",{attrs:{id:"展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展示"}},[e._v("#")]),e._v(" 展示")]),e._v(" "),s("p",[s("img",{attrs:{src:"/python/burpsuit.jpg",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"git仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git仓库"}},[e._v("#")]),e._v(" git仓库")]),e._v(" "),s("p",[e._v("(见:"),s("a",{attrs:{href:"https://github.com/yu2lulu/burpsuit_sensive",target:"_blank",rel:"noopener noreferrer"}},[e._v("burpsuit_sensive"),s("OutboundLink")],1),e._v(")")])])}),[],!1,null,null,null);n.default=r.exports}}]);