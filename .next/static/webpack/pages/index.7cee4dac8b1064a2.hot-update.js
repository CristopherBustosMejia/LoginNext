"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            method: \"GET\",\n            //body: JSON.stringify({ email, password }),\n            url: \"https://rickandmortyapi.com/api/character\"\n        });\n        if (res.data != null) {\n            console.log(res.data);\n            if (/*logged result*/ res.data != null) {\n                const options = {\n                    maxAge: 60 * 60 * 24 * 7,\n                    path: \"/\",\n                    httpOnly: true,\n                    secure: \"development\" === \"production\",\n                    sameSite: \"strict\"\n                };\n                const value = true;\n                const serializedCookie = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(\"Logged\", value, options);\n                document.cookie = serializedCookie;\n                console.log(\"Cookie set\");\n            }\n        //send to home\n        } else {\n            console.log(\"Error\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(document.cookie);\n        if (cookie[\"Logged\"] !== null && cookie[\"Logged\"] !== undefined) {\n            //send to home\n            console.log(\"Logged\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"Azh4nDFCECfuvkgNaiGV+xdRyGQ=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ2xCO0FBQ1M7QUFDSjtBQUU5QixTQUFTSyxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekMsTUFBTVUsZUFBZSxPQUFPQyxJQUFNO1FBQ2hDQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE1BQU0sTUFBTVgsaURBQUtBLENBQUM7WUFDdEJZLFFBQVE7WUFDUiw0Q0FBNEM7WUFDNUNDLEtBQU07UUFDUjtRQUNBLElBQUlGLElBQUlHLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSUcsSUFBSTtZQUNwQixJQUFHLGVBQWUsR0FBRUgsSUFBSUcsSUFBSSxJQUFJLElBQUksRUFBQztnQkFDbkMsTUFBTUcsVUFBVTtvQkFDZEMsUUFBUSxLQUFLLEtBQUssS0FBSztvQkFDdkJDLE1BQU07b0JBQ05DLFVBQVUsSUFBSTtvQkFDZEMsUUFBUUMsa0JBQXlCO29CQUNqQ0MsVUFBVTtnQkFDWjtnQkFDQSxNQUFNQyxRQUFRLElBQUk7Z0JBQ2xCLE1BQU1DLG1CQUFtQnhCLGlEQUFTQSxDQUFDLFVBQVV1QixPQUFPUDtnQkFDcERTLFNBQVNDLE1BQU0sR0FBR0Y7Z0JBQ2xCVixRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0QsY0FBYztRQUNoQixPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUNBakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU00QixTQUFTekIsNkNBQUtBLENBQUN3QixTQUFTQyxNQUFNO1FBQ3BDLElBQUlBLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJQSxNQUFNLENBQUMsU0FBUyxLQUFLQyxXQUFVO1lBQzlELGNBQWM7WUFDZGIsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUUsRUFBRTtJQUVKLHFCQUNFLDhEQUFDYTtRQUFLQyxVQUFVdEI7OzBCQUNkLDhEQUFDdUI7O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBUVQsT0FBT3BCO3dCQUFPOEIsVUFBVSxDQUFDekIsSUFBTUosU0FBU0ksRUFBRTBCLE1BQU0sQ0FBQ1gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUU1RSw4REFBQ087O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBV1QsT0FBT2xCO3dCQUFVNEIsVUFBVSxDQUFDekIsSUFBTUYsWUFBWUUsRUFBRTBCLE1BQU0sQ0FBQ1gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVyRiw4REFBQ1k7Z0JBQU9ILE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtHQXBEUzlCO0tBQUFBO0FBc0RULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ2Nvb2tpZSdcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY29va2llJ1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAvL2JvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJgXG4gICAgfSlcbiAgICBpZiAocmVzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgaWYoLypsb2dnZWQgcmVzdWx0Ki9yZXMuZGF0YSAhPSBudWxsKXtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsIC8vIDEgd2Vla1xuICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQ29va2llID0gc2VyaWFsaXplKCdMb2dnZWQnLCB2YWx1ZSwgb3B0aW9ucylcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gc2VyaWFsaXplZENvb2tpZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb29raWUgc2V0XCIpO1xuICAgICAgfVxuICAgICAgLy9zZW5kIHRvIGhvbWVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb29raWUgPSBwYXJzZShkb2N1bWVudC5jb29raWUpXG4gICAgaWYoIGNvb2tpZVsnTG9nZ2VkJ10gIT09IG51bGwgJiYgY29va2llWydMb2dnZWQnXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIC8vc2VuZCB0byBob21lXG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZFwiKTtcbiAgICB9XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWw6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJzZXJpYWxpemUiLCJwYXJzZSIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJtYXhBZ2UiLCJwYXRoIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJ2YWx1ZSIsInNlcmlhbGl6ZWRDb29raWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});