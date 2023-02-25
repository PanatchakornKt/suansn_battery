(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(441);
;// CONCATENATED MODULE: ./components/layouts/NavBar.js






const NavBar = () => {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "bg-primary-nav px-2 sm:px-4 pt-3.5 py-3 fixed w-full z-20 top-0 left-0",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-wrap items-center justify-between mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/logo.png",
            className: "h-6 mr-3 sm:h-9 rounded-full",
            alt: "Logo"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-white self-center text-xl font-semibold whitespace-nowrap",
            children: "\u0E2A\u0E27\u0E19\u0E2A\u0E19 \u0E41\u0E1A\u0E15\u0E40\u0E15\u0E2D\u0E23\u0E35\u0E48"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex md:order-2 text-white",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          "data-collapse-toggle": "navbar-sticky",
          type: "button",
          className: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
          "aria-controls": "navbar-sticky",
          "aria-expanded": "false",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "sr-only",
            children: "Open main menu"
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "w-6 h-6",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
              clipRule: "evenodd"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
        id: "navbar-sticky",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-primary-nav md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-primary-nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "text-white",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              className: `block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`,
              "aria-current": "page",
              children: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "text-white",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products",
              className: `block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`,
              children: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "text-white",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/reviews",
              className: `block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-transparent md:p-0`,
              children: "\u0E23\u0E35\u0E27\u0E34\u0E27"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "text-white",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              className: `block py-2 pl-3 pr-4 text-white bg-primary-nav rounded md:bg-primary-nav md:p-0`,
              children: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var layouts_NavBar = (NavBar);
;// CONCATENATED MODULE: ./components/layouts/footer.js




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "mx-2 md:mx-16 p-2 bg-white sm:p-6 dark:bg-gray-900",
    children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "sm:flex sm:items-center sm:justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
        children: ["\xA9 2023 ", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://flowbite.com/",
          className: "hover:underline",
          children: "\u0E2A\u0E27\u0E19\u0E2A\u0E19 \u0E41\u0E1A\u0E15\u0E40\u0E15\u0E2D\u0E23\u0E35\u0E48 \u2122"
        }), ". All Rights Reserved."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.facebook.com/profile.php?id=100049134142229",
          target: "_blank",
          className: "text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            width: "200",
            height: "200",
            fill: "currentColor",
            viewBox: "0 0 16 16",
            id: "IconChangeColor",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
              id: "mainIconPathAttribute",
              fill: "blue"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://liff.line.me/1645278921-kWRPP32q/?accountId=585okmvs",
          target: "_blank",
          className: "text-gray-500 hover:text-gray-900 dark:hover:text-white  cursor-pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "200",
            height: "200",
            fill: "currentColor",
            className: "w-5 h-5",
            viewBox: "0 0 16 16",
            id: "IconChangeColor",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z",
              id: "mainIconPathAttribute",
              fill: "green"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#",
          className: "text-gray-500 hover:text-gray-900 dark:hover:text-white flex gap-4 items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "200",
            height: "200",
            fill: "currentColor",
            className: "w-5 h-5",
            viewBox: "0 0 16 16",
            id: "IconChangeColor",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              fillRule: "evenodd",
              d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
              id: "mainIconPathAttribute",
              fill: "#212121"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "085-319-1185"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layouts/Main.js







const MainLayout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "min-h-screen w-full bg-white font-prompt",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layouts_NavBar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "my-6",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    })
  });
};

/* harmony default export */ var Main = (MainLayout);
;// CONCATENATED MODULE: ./components/layouts/Default.js




const DefaultLayout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    })
  });
};

/* harmony default export */ var Default = (DefaultLayout);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MyApp extends app.default {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const Layout = Component.Layout || Default;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Main, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    });
  }

}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [791], function() { return __webpack_exec__(634); });
module.exports = __webpack_exports__;

})();