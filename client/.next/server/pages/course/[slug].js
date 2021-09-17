(function() {
var exports = {};
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 4180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(6311);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./utils/utilities.js
var utilities = __webpack_require__(2130);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./components/cards/singleCourseJumbotron.js








const SingleCourseJumbotron = ({
  course,
  setVisible,
  setPreview,
  visible,
  preview,
  user,
  setLoading,
  loading,
  handlePaidEnrollement,
  handleFreeEnrollement,
  enrolled
}) => {
  var _course$lessons$, _course$lessons$$vide;

  const {
    name,
    description,
    instructor,
    lessons,
    updatedAt,
    image,
    price,
    category,
    paid
  } = course;
  const {
    0: playingx,
    1: setPlayingx
  } = (0,external_react_.useState)(false);
  const {
    0: playUrl,
    1: setPlayUrl
  } = (0,external_react_.useState)();

  const handlePlay = () => {
    setPlayUrl("");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container-fluid",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jumbotron p-4 pt-5 bg-primary square",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-7",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-light font-weight-bold",
              children: name
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "lead",
              children: [description && description.substring(0, 160), "..."]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Badge, {
              count: category,
              style: {
                backgroundColor: "#03a9f4"
              },
              className: "pb-4 mr-2"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["created by ", instructor]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["last updated ", new Date(updatedAt).toLocaleDateString()]
            }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-light",
              children: paid ? (0,utilities/* CurrencyFormater */.d)({
                amount: price,
                currency: "usd"
              }) : "free"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [course !== null && course !== void 0 && (_course$lessons$ = course.lessons[0]) !== null && _course$lessons$ !== void 0 && (_course$lessons$$vide = _course$lessons$.video) !== null && _course$lessons$$vide !== void 0 && _course$lessons$$vide.videoUrl ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: () => {
                setPreview(course.lessons[0].video.videoUrl);
                setVisible(!visible);
              },
              className: "react_video_player",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_player_default()), {
                style: {
                  maxWidth: "100%"
                },
                url: course.lessons[0].video,
                height: "225px",
                light: course === null || course === void 0 ? void 0 : course.image_preview,
                playing: false
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "tutorial_cover col-md-3 p-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: course === null || course === void 0 ? void 0 : course.image_preview,
                alt: name,
                className: "img",
                width: "300px",
                height: "150px"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {}), loading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {
                className: "h1 text-danger"
              })
            }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
              className: "mb-3",
              type: "danger",
              block: true,
              shape: "round",
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.SafetyOutlined, {}),
              size: "large",
              disabled: loading,
              onClick: handleFreeEnrollement,
              children: [user && !enrolled ? "enroll now" : user && enrolled ? "go to course" : "login to enroll", " "]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "show ernroll button"
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var singleCourseJumbotron = (SingleCourseJumbotron);
;// CONCATENATED MODULE: ./components/modals/previewModal.js






const ModalCoursePreview = ({
  course,
  preview,
  visible,
  setVisible,
  setPreview
}) => {
  const {
    0: stopPlaying,
    1: setStopPlaying
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "course_preview",
      visible: visible,
      onCancel: () => {
        setStopPlaying(false);
        setPreview(null);
        setVisible(false);
      },
      width: "720px",
      footer: null,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_player_default()), {
        url: preview,
        playing: stopPlaying,
        controls: true,
        width: "100%",
        height: "100%"
      })
    })
  });
};

/* harmony default export */ var previewModal = (ModalCoursePreview);
// EXTERNAL MODULE: external "antd/lib/list/Item"
var Item_ = __webpack_require__(3151);
var Item_default = /*#__PURE__*/__webpack_require__.n(Item_);
;// CONCATENATED MODULE: ./components/cards/lessonsList.js






const SingleCourseLessons = ({
  lessons,
  visible,
  preview,
  setVisible,
  setPreview
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container pt-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col lesson-list",
          children: [lessons && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
            children: [lessons.length, " lessons"]
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
            itemLayout: "horizental",
            dataSource: lessons,
            renderItem: (item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Item_default()), {
                className: "offset-md-2 border-bottom pl-2 pr-2 col-8",
                children: [/*#__PURE__*/jsx_runtime_.jsx((Item_default()).Meta, {
                  avatar: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Avatar, {
                    children: [" ", index + 1, " "]
                  }),
                  title: item.title
                }), (item === null || item === void 0 ? void 0 : item.free_preview) && /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-primary pointer",
                  onClick: () => {
                    setPreview(item.video.videoUrl);
                    setVisible(!visible);
                  },
                  children: "preview"
                })]
              });
            }
          })]
        })
      })
    })
  });
};

/* harmony default export */ var lessonsList = (SingleCourseLessons);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(2807);
;// CONCATENATED MODULE: ./pages/course/[slug].js














const SingleCourse = ({
  course
}) => {
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);
  const {
    0: preview,
    1: setPreview
  } = (0,external_react_.useState)("");
  const {
    0: enrolled,
    1: setEnrolled
  } = (0,external_react_.useState)(false);
  const {
    loading,
    setLoading
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const {
    slug
  } = router.query; //context

  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(context/* Context */._);

  const handlePaidEnrollement = async () => {};

  (0,external_react_.useEffect)(() => {
    const fetch_course_payement_status = async () => {
      const response = await external_axios_default().get(`/api/course/check-enrollement/${course._id}`);
      console.log(response);
      setEnrolled(response.data.ok);
    };

    if (state.user) {
      fetch_course_payement_status();
    }
  }, [state.user, course]);

  const handleFreeEnrollement = async () => {
    /* go to the course     */
    if (state.user && enrolled) {
      router.push(`/user/course/${course.slug}`);
    }

    try {
      const res = await external_axios_default().get(`/api/course/enroll-freecourse/${course._id}`);
      setEnrolled(true);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(singleCourseJumbotron, {
      course: course,
      setPreview: setPreview,
      preview: preview,
      setVisible: setVisible,
      visible: visible,
      user: state.user,
      setLoading: setLoading,
      loading: loading,
      handlePaidEnrollement: handlePaidEnrollement,
      handleFreeEnrollement: handleFreeEnrollement,
      enrolled: enrolled
    }), /*#__PURE__*/jsx_runtime_.jsx(previewModal, {
      course: course,
      setVisible: setVisible,
      preview: preview,
      visible: visible,
      setPreview: setPreview
    }), course.lessons && /*#__PURE__*/jsx_runtime_.jsx(lessonsList, {
      lessons: course.lessons,
      setPreview: setPreview,
      visible: visible,
      setVisible: setVisible
    })]
  });
};

async function getServerSideProps(context) {
  const {
    slug
  } = context.query;
  const {
    data
  } = await external_axios_default().get(`http://localhost:9090/api/course/${slug}`);
  return {
    props: {
      course: data
    }
  };
}
/* harmony default export */ var _slug_ = (SingleCourse);

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

/***/ 3151:
/***/ (function(module) {

"use strict";
module.exports = require("antd/lib/list/Item");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ 6311:
/***/ (function(module) {

"use strict";
module.exports = require("react-player");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [807], function() { return __webpack_exec__(4180); });
module.exports = __webpack_exports__;

})();