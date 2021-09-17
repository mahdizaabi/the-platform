exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 2807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ Context; },
/* harmony export */   "z": function() { return /* binding */ Provider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // initial state

const intialState = {
  user: null
}; // create context

const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(); // root reducer

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });

    default:
      return state;
  }
}; // context provider


const Provider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialState); // router

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("currentUser"))
    });
  }, []);
  /*  axios.interceptors.response.use(
        function (response) {
            // any status code that lie within the range of 2XX cause this function
            // to trigger
            return response;
        },
        function (error) {
            // any status codes that falls outside the range of 2xx cause this function
            // to trigger
            let res = error.response;
            if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                return new Promise((resolve, reject) => {
                    axios
                        .get("/api/logout")
                        .then((data) => {
                            console.log("/401 error > logout");
                            dispatch({ type: "LOGOUT" });
                            window.localStorage.removeItem("currentUser");
                            router.push("/login");
                        })
                        .catch((err) => {
                            console.log("AXIOS INTERCEPTORS ERR", err);
                            reject(error);
                        });
                });
            }
            return Promise.reject(error);
        }
    );  */

  /*    useEffect(() => {
          const getCsrfToken = async () => {
              try {
              const { data } = await axios.get("/api/csrf-token");
              console.log("CSRF-->", data);
              axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
              }catch(error) {
                  console.log(error)
              }
          };
          getCsrfToken();
      }, []);*/

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};



/***/ })

};
;