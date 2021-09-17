exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 8545:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const UserNav = () => {
  const {
    0: currentPath,
    1: setCurrentPath
  } = useState("");
  useEffect(() => {
     false && 0;
  }, [ false && 0]);
  return /*#__PURE__*/_jsx("div", {
    className: "nav flex-column nav-pills",
    children: /*#__PURE__*/_jsx(Link, {
      href: "/user",
      children: /*#__PURE__*/_jsx("a", {
        href: "",
        className: `nav-link ${currentPath === '/user' && 'active'}`,
        children: "Dashboard"
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (UserNav)));

/***/ }),

/***/ 9981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ routes_InstructorRoute; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/navigation/userNavigation.js
var userNavigation = __webpack_require__(8545);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/navigation/instructorNavigation.js





const InstructorNavigation = () => {
  const {
    0: currentPath,
    1: setCurrentPath
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
     false && 0;
  }, [ false && 0]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "nav flex-column nav-pills",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/instructor",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: `nav-link ${currentPath === '/instructor' && 'active'}`,
        children: "Instructor Dashboard"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/instructor/course/create",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: `nav-link ${currentPath === '/instructor/course/create' && 'active'}`,
        children: "create course"
      })
    })]
  });
};

/* harmony default export */ var instructorNavigation = (InstructorNavigation);
;// CONCATENATED MODULE: ./components/routes/InstructorRoute.js









 // UINSTRUCTOR ROUTE PROTECTION
// HOC component to check whether the user is Instructor:
// The BACKEND need to check whether or not the user is instructor before serving the page with content
//The BACKEND WILL CHEKC for :
// --1. THE SESSION TOKEN whether or not the user has an active session
// --3. USER EXIST
//---2  USER has INSTRUCTOR Rights by fetchin

const InstructorRoute = ({
  children
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: hidden,
    1: setHidden
  } = (0,external_react_.useState)(true);
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(context/* Context */._);
  (0,external_react_.useEffect)(() => {
    const fetchConstructor = async () => {
      try {
        const {
          data
        } = await external_axios_default().get('/api/current-instructor');

        if (data.ok) {
          setHidden(false);
        }
      } catch (e) {
        setHidden(true);
        console.error(e);

        if (state.user) {
          router.push('/');
        } else {
          router.push('/login');
        }
      }
    };

    fetchConstructor();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: hidden ? /*#__PURE__*/jsx_runtime_.jsx(icons_.SyncOutlined, {
      spin: true,
      className: "d-flex justify-content-center text-center p-2"
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "nav-side col-md-2",
          children: /*#__PURE__*/jsx_runtime_.jsx(instructorNavigation, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "main-content col-md-10",
          children: children
        })]
      })
    })
  });
};

/* harmony default export */ var routes_InstructorRoute = (InstructorRoute);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;