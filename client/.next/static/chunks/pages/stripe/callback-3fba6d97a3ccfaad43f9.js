(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{5592:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var a=e(7294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},r=e(76),s=function(t,n){return a.createElement(r.Z,Object.assign({},t,{ref:n,icon:c}))};s.displayName="SyncOutlined";var o=a.forwardRef(s)},3250:function(t,n,e){"use strict";e.r(n);var a=e(5893),c=e(5592),r=e(9669),s=e.n(r),o=e(7294),i=e(2807);n.default=function(){var t=(0,o.useContext)(i._),n=t.state.user,e=t.dispatch;return(0,o.useEffect)((function(){if(n)s().get("/api/makeInstructor").then((function(t){console.log(t.data),e({type:"LOGIN",payload:t.data}),window.localStorage.setItem("currentUser",JSON.stringify(t.data)),window.location.href="/user"})).catch((function(t){console.log(t.response.data),window.location.href="/user"}))}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.Z,{spin:!0,className:"d-flex justify-content-center display-1 text-danger p-3"})})}},1414:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stripe/callback",function(){return e(3250)}])}},function(t){t.O(0,[774,888,179],(function(){return n=1414,t(t.s=n);var n}));var n=t.O();_N_E=n}]);