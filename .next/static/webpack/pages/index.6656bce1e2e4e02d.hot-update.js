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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"./node_modules/cookie/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            method: \"GET\",\n            //body: JSON.stringify({ email, password }),\n            url: \"https://rickandmortyapi.com/api/character\"\n        });\n        if (res.data != null) {\n            console.log(res.data);\n            if (/*logged result*/ res.data != null) {\n                const options = {\n                    maxAge: 60 * 60 * 24 * 7,\n                    path: \"/\",\n                    httpOnly: true,\n                    secure: \"development\" === \"production\",\n                    sameSite: \"strict\"\n                };\n                const value = true;\n                const serializedCookie = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(\"Logged\", value, options);\n                document.cookie = serializedCookie;\n            }\n        //send to home\n        } else {\n            console.log(\"Error\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cookie.get(\"email\") !== undefined) {\n            //send to home\n            console.log(\"Logged\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\cris-\\\\Documents\\\\Visual Studio Code\\\\Next\\\\login\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"Azh4nDFCECfuvkgNaiGV+xdRyGQ=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ2xCO0FBQ1M7QUFFbEMsU0FBU0ksUUFBUTs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1TLGVBQWUsT0FBT0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1WLGlEQUFLQSxDQUFDO1lBQ3RCVyxRQUFRO1lBQ1IsNENBQTRDO1lBQzVDQyxLQUFNO1FBQ1I7UUFDQSxJQUFJRixJQUFJRyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUNMLElBQUlHLElBQUk7WUFDcEIsSUFBRyxlQUFlLEdBQUVILElBQUlHLElBQUksSUFBSSxJQUFJLEVBQUM7Z0JBQ25DLE1BQU1HLFVBQVU7b0JBQ2RDLFFBQVEsS0FBSyxLQUFLLEtBQUs7b0JBQ3ZCQyxNQUFNO29CQUNOQyxVQUFVLElBQUk7b0JBQ2RDLFFBQVFDLGtCQUF5QjtvQkFDakNDLFVBQVU7Z0JBQ1o7Z0JBQ0EsTUFBTUMsUUFBUSxJQUFJO2dCQUNsQixNQUFNQyxtQkFBbUJ2QixpREFBU0EsQ0FBQyxVQUFVc0IsT0FBT1A7Z0JBQ3BEUyxTQUFTQyxNQUFNLEdBQUdGO1lBQ3BCLENBQUM7UUFDRCxjQUFjO1FBQ2hCLE9BQU87WUFDTFYsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBQ0FoQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSTJCLE9BQU9DLEdBQUcsQ0FBQyxhQUFhQyxXQUFXO1lBQ3JDLGNBQWM7WUFDZGQsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUUsRUFBRTtJQUVKLHFCQUNFLDhEQUFDYztRQUFLQyxVQUFVdkI7OzBCQUNkLDhEQUFDd0I7O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBUVYsT0FBT3BCO3dCQUFPK0IsVUFBVSxDQUFDMUIsSUFBTUosU0FBU0ksRUFBRTJCLE1BQU0sQ0FBQ1osS0FBSzs7Ozs7Ozs7Ozs7OzBCQUU1RSw4REFBQ1E7O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBV1YsT0FBT2xCO3dCQUFVNkIsVUFBVSxDQUFDMUIsSUFBTUYsWUFBWUUsRUFBRTJCLE1BQU0sQ0FBQ1osS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVyRiw4REFBQ2E7Z0JBQU9ILE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtHQWxEUy9CO0tBQUFBO0FBb0RULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ2Nvb2tpZSdcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIHVybDogYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyYFxuICAgIH0pXG4gICAgaWYgKHJlcy5kYXRhICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIGlmKC8qbG9nZ2VkIHJlc3VsdCovcmVzLmRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcbiAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZENvb2tpZSA9IHNlcmlhbGl6ZSgnTG9nZ2VkJywgdmFsdWUsIG9wdGlvbnMpXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHNlcmlhbGl6ZWRDb29raWU7XG4gICAgICB9XG4gICAgICAvL3NlbmQgdG8gaG9tZVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCBjb29raWUuZ2V0KCdlbWFpbCcpICE9PSB1bmRlZmluZWQgKXtcbiAgICAgIC8vc2VuZCB0byBob21lXG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZFwiKTtcbiAgICB9XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWw6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJzZXJpYWxpemUiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibWF4QWdlIiwicGF0aCIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsInNhbWVTaXRlIiwidmFsdWUiLCJzZXJpYWxpemVkQ29va2llIiwiZG9jdW1lbnQiLCJjb29raWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});