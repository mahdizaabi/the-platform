(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{5873:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var t=s(7294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},c=s(76),a=function(e,n){return t.createElement(c.Z,Object.assign({},e,{ref:n,icon:r}))};a.displayName="CheckCircleOutlined";var i=t.forwardRef(a)},3218:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var t=s(7294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},c=s(76),a=function(e,n){return t.createElement(c.Z,Object.assign({},e,{ref:n,icon:r}))};a.displayName="CloseCircleOutlined";var i=t.forwardRef(a)},2221:function(e,n,s){"use strict";var t=s(5893),r=s(2537),c=s(9166),a=s(2130),i=s(1664);r.Z.Meta;n.Z=function(e){var n=e.course;return(0,t.jsx)(i.default,{href:"/course/".concat(n.slug),children:(0,t.jsx)("a",{children:(0,t.jsxs)(r.Z,{className:"shadow  mb-5 bg-white rounded",cover:(0,t.jsx)("img",{src:n.image_preview,alt:n.name,style:{height:"150px",padding:"0px",margin:"0px",fontSize:"18px",objectFit:"cover"},className:"p-1"}),children:[(0,t.jsx)("h2",{style:{fontSize:"16px",padding:"0px",margin:"0px"},className:"font-weight-bold",children:n.name}),(0,t.jsxs)("p",{children:["by ",null===n||void 0===n?void 0:n.instructor]}),(0,t.jsx)(c.Z,{count:n.category,style:{backgroundColor:"#03a9f4"}}),(0,t.jsx)("h5",{children:n.paid?(0,a.d)({amount:n.price,currency:"usd"}):"free"})]})})})}},8545:function(e,n,s){"use strict";s(5893),s(1664),s(7294)},9981:function(e,n,s){"use strict";s.d(n,{Z:function(){return p}});var t=s(5893),r=s(7757),c=s.n(r),a=s(2137),i=s(7294),l=s(9669),o=s.n(l),u=s(1163),d=(s(8545),s(5592)),h=s(2807),f=s(1664),x=function(){var e=(0,i.useState)(""),n=e[0],s=e[1];return(0,i.useEffect)((function(){s(window.location.pathname)}),[window.location.pathname]),(0,t.jsxs)("div",{className:"nav flex-column nav-pills",children:[(0,t.jsx)(f.default,{href:"/instructor",children:(0,t.jsx)("a",{className:"nav-link ".concat("/instructor"===n&&"active"),children:"Instructor Dashboard"})}),(0,t.jsx)(f.default,{href:"/instructor/course/create",children:(0,t.jsx)("a",{className:"nav-link ".concat("/instructor/course/create"===n&&"active"),children:"create course"})})]})},p=function(e){var n=e.children,s=(0,u.useRouter)(),r=(0,i.useState)(!0),l=r[0],f=r[1],p=(0,i.useContext)(h._),m=p.state;p.dispatch;return(0,i.useEffect)((function(){(function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/api/current-instructor");case 3:n=e.sent,n.data.ok&&f(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0),console.error(e.t0),m.user?s.push("/"):s.push("/login");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),(0,t.jsx)(t.Fragment,{children:l?(0,t.jsx)(d.Z,{spin:!0,className:"d-flex justify-content-center text-center p-2"}):(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"nav-side col-md-2",children:(0,t.jsx)(x,{})}),(0,t.jsx)("div",{className:"main-content col-md-10",children:n})]})})})}},4290:function(e,n,s){"use strict";s.r(n);var t=s(5893),r=s(7757),c=s.n(r),a=s(2137),i=s(9669),l=s.n(i),o=s(7294),u=s(9981),d=s(1511),h=s(9713),f=s(1664),x=s(5873),p=s(3218);s(2221);n.default=function(){var e=(0,o.useState)(),n=e[0],s=e[1];(0,o.useEffect)((function(){i()}),[]);var r={marginTop:"-15px",fontSize:"10px"},i=function(){var e=(0,a.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/instructor/courses");case 2:n=e.sent,t=n.data,console.log(t),s(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)("h1",{className:"jumbotron text-center square p-4",children:" Instructorc Dashboard"}),(0,t.jsx)("div",{className:"row instructor_courses",children:(0,t.jsx)("div",{className:"row",children:n&&n.map((function(e,n){return(0,t.jsxs)("div",{className:"shadow-sm p-3 bg-light rounded media mt-2 d-flex col-12 align-items-center flex-row pt-2",children:[(0,t.jsx)("div",{className:"align-self-start",children:(0,t.jsx)(d.Z,{src:e.image_preview?e.image_preview:"/course.png",size:80})}),(0,t.jsx)("div",{className:"media-body d-flex col-8 pl-5",children:(0,t.jsx)("div",{className:"row d-flex w-100",children:(0,t.jsxs)("div",{className:"d-flex pl-5",children:[(0,t.jsxs)("div",{className:"bodyticket col-8",children:[(0,t.jsx)(f.default,{href:"/instructor/course/view/".concat(e.slug),className:"pointer",children:(0,t.jsx)("a",{className:"h5 text-primary",children:(0,t.jsx)("h5",{children:e.name})})}),(0,t.jsx)("p",{children:null===e||void 0===e?void 0:e.description}),(0,t.jsxs)("p",{style:{},children:[e.lessons.length," Lessons"]}),e.lessons.length<5?(0,t.jsx)("p",{style:r,children:"At least 5 lessosn are required to publish a course"}):e.published?(0,t.jsx)("p",{style:r,children:'"your course is published"'}):(0,t.jsx)("p",{stye:r,children:"   you course is ready to be published"})]}),(0,t.jsx)("div",{className:"checkbox col-3 d-flex justify-content-center",children:(0,t.jsx)("div",{className:"col-md-2 mt-3 text-center",children:e.published?(0,t.jsx)(h.Z,{title:"published",children:(0,t.jsx)(x.Z,{className:"h5 pointer text-success"})}):(0,t.jsx)(h.Z,{title:"unpublished",children:(0,t.jsx)(p.Z,{className:"pointer h5 text-warning"})})})})]})})})]},n)}))})})]})})}},2130:function(e,n,s){"use strict";s.d(n,{d:function(){return t}});var t=function(e){return(100*e.amount/100).toLocaleString(e.currency,{style:"currency",currency:e.currency})}},5142:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instructor",function(){return s(4290)}])}},function(e){e.O(0,[576,391,537,774,888,179],(function(){return n=5142,e(e.s=n);var n}));var n=e.O();_N_E=n}]);