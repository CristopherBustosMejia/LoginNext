"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Login() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"GET\",\n            //body: JSON.stringify({ email, password }),\n            url: `https://rickandmortyapi.com/api/character`\n        });\n        if (res.data != null) {\n            console.log(res.data);\n            if (/*logged result*/ res.data != null) {\n                const options = {\n                    maxAge: 60 * 60 * 24 * 7,\n                    path: \"/\",\n                    httpOnly: true,\n                    secure: \"development\" === \"production\",\n                    sameSite: \"strict\"\n                };\n                const value = true;\n                const serializedCookie = (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)(\"Logged\", value, options);\n                document.cookie = serializedCookie;\n                console.log(\"Cookie set\");\n            }\n        //send to home\n        } else {\n            console.log(\"Error\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_3__.parse)(document.cookie);\n        if (cookie[\"Logged\"] !== null) {\n            //send to home\n            console.log(\"Logged\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2xCO0FBQ1M7QUFDSjtBQUU5QixTQUFTSyxRQUFRO0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVSxlQUFlLE9BQU9DLElBQU07UUFDaENBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsTUFBTSxNQUFNWCxpREFBS0EsQ0FBQztZQUN0QlksUUFBUTtZQUNSLDRDQUE0QztZQUM1Q0MsS0FBSyxDQUFDLHlDQUF5QyxDQUFDO1FBQ2xEO1FBQ0EsSUFBSUYsSUFBSUcsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNwQkMsUUFBUUMsR0FBRyxDQUFDTCxJQUFJRyxJQUFJO1lBQ3BCLElBQUcsZUFBZSxHQUFFSCxJQUFJRyxJQUFJLElBQUksSUFBSSxFQUFDO2dCQUNuQyxNQUFNRyxVQUFVO29CQUNkQyxRQUFRLEtBQUssS0FBSyxLQUFLO29CQUN2QkMsTUFBTTtvQkFDTkMsVUFBVSxJQUFJO29CQUNkQyxRQUFRQyxrQkFBeUI7b0JBQ2pDQyxVQUFVO2dCQUNaO2dCQUNBLE1BQU1DLFFBQVEsSUFBSTtnQkFDbEIsTUFBTUMsbUJBQW1CeEIsaURBQVNBLENBQUMsVUFBVXVCLE9BQU9QO2dCQUNwRFMsU0FBU0MsTUFBTSxHQUFHRjtnQkFDbEJWLFFBQVFDLEdBQUcsQ0FBQztZQUNkLENBQUM7UUFDRCxjQUFjO1FBQ2hCLE9BQU87WUFDTEQsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBQ0FqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTTRCLFNBQVN6Qiw2Q0FBS0EsQ0FBQ3dCLFNBQVNDLE1BQU07UUFDcEMsSUFBSUEsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDN0IsY0FBYztZQUNkWixRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRSxFQUFFO0lBRUoscUJBQ0UsOERBQUNZO1FBQUtDLFVBQVVyQjs7MEJBQ2QsOERBQUNzQjs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFRUixPQUFPcEI7d0JBQU82QixVQUFVLENBQUN4QixJQUFNSixTQUFTSSxFQUFFeUIsTUFBTSxDQUFDVixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRTVFLDhEQUFDTTs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXUixPQUFPbEI7d0JBQVUyQixVQUFVLENBQUN4QixJQUFNRixZQUFZRSxFQUFFeUIsTUFBTSxDQUFDVixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRXJGLDhEQUFDVztnQkFBT0gsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0FBRUEsaUVBQWU3QixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICdjb29raWUnXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nvb2tpZSdcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIHVybDogYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyYFxuICAgIH0pXG4gICAgaWYgKHJlcy5kYXRhICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIGlmKC8qbG9nZ2VkIHJlc3VsdCovcmVzLmRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcbiAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZENvb2tpZSA9IHNlcmlhbGl6ZSgnTG9nZ2VkJywgdmFsdWUsIG9wdGlvbnMpXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHNlcmlhbGl6ZWRDb29raWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29va2llIHNldFwiKTtcbiAgICAgIH1cbiAgICAgIC8vc2VuZCB0byBob21lXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29va2llID0gcGFyc2UoZG9jdW1lbnQuY29va2llKVxuICAgIGlmKCBjb29raWVbJ0xvZ2dlZCddICE9PSBudWxsKSB7XG4gICAgICAvL3NlbmQgdG8gaG9tZVxuICAgICAgY29uc29sZS5sb2coXCJMb2dnZWRcIik7XG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEVtYWlsOlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFBhc3N3b3JkOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwic2VyaWFsaXplIiwicGFyc2UiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibWF4QWdlIiwicGF0aCIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsInNhbWVTaXRlIiwidmFsdWUiLCJzZXJpYWxpemVkQ29va2llIiwiZG9jdW1lbnQiLCJjb29raWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();