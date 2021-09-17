exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 2221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2130);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__.Card;

const CourseCard = ({
  course
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/course/${course.slug}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: "shadow  mb-5 bg-white rounded",
        cover: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: course.image_preview,
          alt: course.name,
          style: {
            "height": "150px",
            "padding": "0px",
            "margin": "0px",
            "fontSize": "18px",
            "objectFit": "cover"
          },
          className: "p-1"
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          style: {
            "fontSize": "16px",
            "padding": "0px",
            "margin": "0px"
          },
          className: "font-weight-bold",
          children: course.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: ["by ", course === null || course === void 0 ? void 0 : course.instructor]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Badge, {
          count: course.category,
          style: {
            backgroundColor: "#03a9f4"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
          children: course.paid ? (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyFormater */ .d)({
            amount: course.price,
            currency: "usd"
          }) : "free"
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CourseCard);

/***/ }),

/***/ 2130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ CurrencyFormater; }
/* harmony export */ });
const CurrencyFormater = data => {
  return (data.amount * 100 / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency
  });
};

/***/ })

};
;