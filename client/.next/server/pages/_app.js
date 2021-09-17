(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(2807);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "antd/lib/menu/SubMenu"
var SubMenu_namespaceObject = require("antd/lib/menu/SubMenu");;
var SubMenu_default = /*#__PURE__*/__webpack_require__.n(SubMenu_namespaceObject);
;// CONCATENATED MODULE: ./components/TopNavigation.js












const {
  Item,
  ItemGroup
} = external_antd_.Menu;

const TopNavigation = () => {
  const {
    0: currentPath,
    1: setCurrentPath
  } = (0,external_react_.useState)("");
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(context/* Context */._);
  const {
    user
  } = state;
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
     false && 0;
  }, [ false && 0]);

  const logout = async () => {
    try {
      dispatch({
        type: "LOGOUT"
      });
      window.localStorage.removeItem('currentUser');
      const {
        data
      } = await external_axios_default().get("/api/loogout");
      router.push('/login');
    } catch (e) {
      (0,external_react_toastify_.toast)(e.data);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
    theme: "dark",
    className: "",
    mode: "horizontal",
    selectedKeys: [currentPath],
    children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
      onClick: e => setCurrentPath(e.key),
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.AppstoreOutlined, {}),
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "type",
          children: "App"
        })
      })
    }, "/"), user && user.role && user.role.includes("ROLE_INSTRUCTOR") ? /*#__PURE__*/jsx_runtime_.jsx(Item, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CarryOutOutlined, {}),
      onClick: e => setCurrentPath(e.key),
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/instructor/course/create",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "type",
          children: "Create Course"
        })
      })
    }, "/instructor/course/create") : /*#__PURE__*/jsx_runtime_.jsx(Item, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.TeamOutlined, {}),
      onClick: e => setCurrentPath(e.key),
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/user/become-instructor",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "type",
          children: "Become instructor"
        })
      })
    }, "/user/become-instructor"), !user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
        onClick: e => setCurrentPath(e.key),
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LoginOutlined, {}),
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "type",
            children: "Login"
          })
        })
      }, "/login"), /*#__PURE__*/jsx_runtime_.jsx(Item, {
        onClick: e => setCurrentPath(e.key),
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserAddOutlined, {}),
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/register",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Register"
          })
        })
      }, "/register ")]
    }), user && user.role && user.role.includes("ROLE_INSTRUCTOR") && /*#__PURE__*/jsx_runtime_.jsx(Item, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CarryOutOutlined, {}),
      onClick: e => setCurrentPath(e.key),
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/instructor",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Instructor"
        })
      })
    }, "/instructor"), user && /*#__PURE__*/jsx_runtime_.jsx((SubMenu_default()), {
      style: {
        marginLeft: "auto",
        paddingRight: "24px"
      },
      theme: "dark",
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CoffeeOutlined, {}),
      title: user === null || user === void 0 ? void 0 : user.username,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemGroup, {
        theme: "dark",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
          theme: "dark",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/user",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Dashboard"
            })
          })
        }, "/user"), /*#__PURE__*/jsx_runtime_.jsx(Item, {
          theme: "dark",
          onClick: () => logout(),
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Logout"
            })
          })
        }, "/loggout")]
      })
    }, "submenu")]
  });
};

/* harmony default export */ var components_TopNavigation = (TopNavigation);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: external "react-alert-template-basic"
var external_react_alert_template_basic_namespaceObject = require("react-alert-template-basic");;
var external_react_alert_template_basic_default = /*#__PURE__*/__webpack_require__.n(external_react_alert_template_basic_namespaceObject);
// EXTERNAL MODULE: external "react-alert"
var external_react_alert_ = __webpack_require__(5065);
;// CONCATENATED MODULE: external "react-dom"
var external_react_dom_namespaceObject = require("react-dom");;
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const options = {
  // you can also just use 'bottom center'
  position: external_react_alert_.positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: external_react_alert_.transitions.SCALE
};

function MyApp({
  Component,
  pageProps
}) {
  console.log("_app is rendering now");
  return /*#__PURE__*/jsx_runtime_.jsx(context/* Provider */.z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_alert_.Provider, _objectSpread(_objectSpread({
      template: (external_react_alert_template_basic_default())
    }, options), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
        position: "top-center"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_TopNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    }))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 4722:
/***/ (function() {



/***/ }),

/***/ 8819:
/***/ (function() {



/***/ }),

/***/ 2372:
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5065:
/***/ (function(module) {

"use strict";
module.exports = require("react-alert");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,807], function() { return __webpack_exec__(5641); });
module.exports = __webpack_exports__;

})();