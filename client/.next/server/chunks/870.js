exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 2448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6799);
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  option
} = antd__WEBPACK_IMPORTED_MODULE_2__.Select;

const CourseCreationFrom = ({
  handleSubmit,
  handleImage,
  handleChange,
  course,
  setCourse,
  preview,
  setPreview,
  uploadButtonText,
  handleImageRemove,
  handleUploadImageClick
}) => {
  const childrens = () => {
    const options = [];

    for (let i = 9.99; i <= 99.9; i++) {
      options.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
        children: [" ", i.toFixed(2), " "]
      }, i.toFixed(2)));
    }

    return options;
  };
  /**********/
  //console.log("imaaage => ",course?.image?.imageUrl);


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "pt-3 pb-3",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: handleSubmit,
      encType: "multiparto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "form-group m  t-3 mt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          type: "text",
          name: "name",
          className: "form-control",
          placeholder: "Name of the course",
          value: course.name,
          onChange: handleChange,
          id: "course_name"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "form-group  mt-3 mt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
          style: {
            width: "100%"
          },
          name: "description",
          id: "course_description",
          cols: "8",
          rows: "8",
          value: course.description,
          onChange: handleChange,
          placeholder: "Course description"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "form-row d-flex flex-row mt-3 mt-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
              style: {
                width: '100%'
              },
              size: "large",
              value: course.paid,
              onChange: value => setCourse(_objectSpread(_objectSpread({}, course), {}, {
                paid: !course.paid
              })),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: true,
                children: "Paid course"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: false,
                children: "Free course"
              })]
            })
          })
        }), course.paid && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-2 offset-md-1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
              name: "prices_array",
              defaultValue: "$9.99",
              style: {
                width: "100%"
              },
              id: "prices_array",
              size: "large",
              onChange: v => setCourse(_objectSpread(_objectSpread({}, course), {}, {
                price: v
              })),
              children: childrens()
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "form-group mt-3 mt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
          type: "text",
          name: "category",
          className: "form-control",
          placeholder: "category",
          value: course.category,
          onChange: handleChange,
          id: "course_category"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "form-row mt-3 mt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row d-flex align-content-center justify-content-start",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-group col-md-2 col-5 mt-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
              style: {
                width: "100%"
              },
              className: "btn btn-outline-secondary btn-block text-left",
              children: [course.loading && !uploadButtonText ? 'Uploading' : !course.loading && !uploadButtonText ? "image Upload" : uploadButtonText, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "file",
                name: "image",
                onChange: handleImage,
                accept: "image/*" //value={course.image_preview ? course.image_preview : ""}
                ,
                hidden: true
              })]
            })
          }), preview && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-2 col-1 mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Badge, {
              className: "pointer",
              count: "X",
              onClick: handleImageRemove,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                width: 200,
                src: preview
              })
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row  mt-3 mt-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "primary",
            size: "large",
            shape: "round",
            onClick: handleSubmit,
            disabled: course.loading || course.uploading,
            className: "btn btn-primary",
            loading: course.loading,
            children: course.loading ? "file is uploading" : "save & continue"
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (CourseCreationFrom);

/***/ }),

/***/ 9870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9981);
/* harmony import */ var _components_forms_courseCreationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2448);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4609);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const CourseCreate = ({
  submitUrl
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    slug
  } = router.query;
  const {
    0: preview,
    1: setPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: uploadButtonText,
    1: setUploadButtonText
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: course,
    1: setCourse
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: '',
    description: '',
    category: '',
    price: '',
    uploading: '',
    paid: true,
    loading: false
  }); ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ///////////////////////////////////////////////

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const fetchCourse = async () => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`/api/course/${slug}`);
      console.log("==> respose with undefined", response);

      if (response.data) {
        console.log(response);
        setCourse(_objectSpread(_objectSpread({}, course), response.data));
        setPreview(response.data.image_preview);
      }
    };

    fetchCourse();
  }, [slug]); ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  const handleChange = e => {
    setCourse(_objectSpread(_objectSpread({}, course), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleUploadImageClick = async eventx => {
    let file = eventx.target.files[0];
    let imagePreview = window.URL.createObjectURL(file);
    const imageData = new FormData();
    imageData.append('imageFile', file); //setImageData(imageData);

    setCourse(_objectSpread(_objectSpread({}, course), {}, {
      loading: true
    }));

    if (imageData.entries().next().value[1] !== null) {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_6___default().post("/api/course/upload-image", imageData, {
          onUploadProgress: progressEvent => {
            console.log("Uploading : " + (progressEvent.loaded / progressEvent.total * 100).toString() + "%");
          }
        });
        setPreview(imagePreview);
        setCourse(_objectSpread(_objectSpread({}, course), {}, {
          loading: false
        }));
        setImage(data.imageUri);
        let imageName = file.name;

        if (imageName.length >= 10) {
          imageName = imageName.slice(0, 10) + "...";
        }

        setUploadButtonText(imageName);
        setImage(data.imageUri);
      } catch (error) {
        console.log(error.response.data);
        setCourse(_objectSpread(_objectSpread({}, course), {}, {
          loading: false
        }));
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(error.response.data);
      }
    }

    ;
  };

  const handleImage = async eventx => {
    let file = eventx.target.files[0];
    let imagePreview = window.URL.createObjectURL(file);
    const imageData = new FormData();
    imageData.append('imageFile', file); //setImageData(imageData);

    setCourse(_objectSpread(_objectSpread({}, course), {}, {
      loading: true
    }));

    if (imageData.entries().next().value[1] !== null) {
      try {
        react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default().imageFileResizer(file, 200, 150, "JPEG", 100, 0, async imageFile => {
          imageData.append('imageFile', imageFile);
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_6___default().post("/api/course/upload-image", imageData, {
            onUploadProgress: progressEvent => {
              console.log("Uploading : " + (progressEvent.loaded / progressEvent.total * 100).toString() + "%");
            }
          });
          setPreview(imagePreview);
          setCourse(_objectSpread(_objectSpread({}, course), {}, {
            loading: false
          }));
          setImage(data.imageUri);
          let imageName = file.name;

          if (imageName.length >= 10) {
            imageName = imageName.slice(0, 10) + "...";
          }

          setUploadButtonText(imageName);
          setImage(data.imageUri);
        }, 'file');
      } catch (error) {
        console.log(error.response.data);
        setCourse(_objectSpread(_objectSpread({}, course), {}, {
          loading: false
        }));
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)(error.response.data);
      }
    }
  };

  const handleSubmit = async e => {
    const url = submitUrl ? submitUrl : "/api/course";
    e.preventDefault();
    const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(url, _objectSpread(_objectSpread({}, course), {}, {
      image_preview: `https://basicstorage1414.blob.core.windows.net/test-container/${image}`
    }));
    router.push('/instructor');
    console.log(response);
  };

  const handleImageRemove = async () => {
    if (course.loading) {
      return;
    }

    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_6___default().post("/api/image/image-preview/delete", {
        blobName: image
      });
      setPreview("");
      setImage("");
    } catch (error) {
      console.log(error);
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("Ipage uplaoed has failed try later on!");
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "jumbotron text-center square p-5",
        children: " Create Course"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forms_courseCreationForm__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        handleChange: handleChange,
        handleImage: handleImage,
        handleSubmit: handleSubmit,
        course: course,
        setCourse: setCourse,
        preview: preview,
        setPreview: setPreview,
        uploadButtonText: uploadButtonText,
        handleImageRemove: handleImageRemove,
        handleUploadImageClick: handleUploadImageClick
      }), image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: `https://basicstorage1414.blob.core.windows.net/test-container/${image}`,
        alt: "rc"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CourseCreate);

/***/ })

};
;