/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/button/index */ \"./src/button/index.js\");\n/* harmony import */ var _src_page_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/page/index */ \"./src/page/index.js\");\n\n\n\n\n//# sourceURL=webpack:///./demo/index.js?");

/***/ }),

/***/ "./src/button/button.js":
/*!******************************!*\
  !*** ./src/button/button.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass Button extends _utils__WEBPACK_IMPORTED_MODULE_0__[\"ObservableElement\"] {\n  static get observedAttributes() {\n    return ['variant'];\n  }\n\n  get variant() {\n    return this.getAttribute('variant') || 'primary';\n  }\n\n  render() {\n    return `\n      <button class=\"${Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"classnames\"])(\n        'pf-c-button',\n        `pf-m-${this.variant}`\n      )}\" type=\"button\">\n        ${this.childContent}\n      </button\n    `;\n  }\n}\n\ncustomElements.define('pf-button', Button);\n\n\n//# sourceURL=webpack:///./src/button/button.js?");

/***/ }),

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/button/button.js\");\n\n\n//# sourceURL=webpack:///./src/button/index.js?");

/***/ }),

/***/ "./src/page/index.js":
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page/page.js\");\n\n\n//# sourceURL=webpack:///./src/page/index.js?");

/***/ }),

/***/ "./src/page/page.js":
/*!**************************!*\
  !*** ./src/page/page.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass Page extends _utils__WEBPACK_IMPORTED_MODULE_0__[\"ObservableElement\"] {\n  static get boundAttributes() {\n    return ['showNavToggle', 'logo', 'topNav', 'toolbar', 'avatar', 'isNavOpen', 'sidebar'];\n  }\n\n  constructor() {\n    super();\n    this.onToggle = () => {\n      console.log('toggle');\n      this.setAttribute('isNavOpen', !this.isNavOpen);\n      this.innerHTML = this.render();\n    };\n  }\n\n  get isNavOpen() {\n    return this.getAttribute('isNavOpen') !== null\n      ? this.getAttribute('isNavOpen')\n      : true;\n  }\n\n  get showNavToggle() {\n    return this.getAttribute('showNavToggle') || true;\n  }\n\n  get logo() {\n    return this.getAttribute('logo') || 'PatternFly Vanilla';\n  }\n\n  get toolbar() {\n    return this.getAttribute('toolbar') || '';\n  }\n\n  get sidebar() {\n    return this.getAttribute('sidebar') || 'My sidebar';\n  }\n\n  connectedCallback() {\n    console.log('connected');\n    super.connectedCallback();\n    this.querySelector('#toggle-button').addEventListener('click', this.onToggle);\n  }\n\n  disconnectedCallback() {\n    console.log('disconnected');\n    super.disconnectedCallback();\n    this.querySelector('#toggle-button').removeEventListener('click', this.onToggle);\n  }\n\n  renderHeader() {\n    return `\n    <header role=\"banner\" class=\"pf-c-page__header\">\n      ${(this.showNavToggle || this.logo) ? `\n      <div class=\"pf-c-page__header-brand\">\n        ${this.showNavToggle ? `\n        <div class=\"pf-c-page__header-brand-toggle\">\n          <button id=\"toggle-button\" class=\"pf-c-button pf-m-primary\" type=\"button\">Toggle</button>\n        </div>\n        `: ''}\n        ${this.logo ? `\n        <a class=\"pf-c-page__header-brand-link\">${this.logo}</a>\n        `: ''}\n      </div>\n      `: ''}\n      ${this.topNav ? `\n      <div class=\"pf-c-page__header-nav\">${this.topNav}</div>\n      `: ''}\n      ${(this.toolbar || this.avatar) ? `\n      <div class=\"pf-c-page__header-tools\">\n        ${this.toolbar ? this.toolbar : ''}\n        ${this.avatar ? this.avatar : ''}\n      </div>\n      `: ''}\n    </header>\n  `;\n  }\n\n  renderSidebar() {\n    return `\n      <div id=\"page-sidebar\" class=\"${Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"classnames\"])(\n          'pf-c-page__sidebar',\n          this.isNavOpen && 'pf-m-expanded',\n          !this.isNavOpen && 'pf-m-collapsed'\n        )}\">\n        <div class=\"pf-c-page__sidebar-body\">${this.sidebar}</div>\n      </div>\n    `;\n  }\n\n  render() {\n    console.log('render', this.isNavOpen);\n    return `\n      <div class=\"pf-c-page\">\n        ${this.renderHeader()}\n        ${this.isNavOpen ? this.renderSidebar() : ''}\n        <main role=\"main\" class=\"pf-c-page__main\" tabindex=\"-1\">\n          ${this.childContent}\n        </main>\n      </div>\n    `;\n  }\n}\n\ncustomElements.define('pf-page', Page);\n\n\n//# sourceURL=webpack:///./src/page/page.js?");

/***/ }),

/***/ "./src/utils/classnames.js":
/*!*********************************!*\
  !*** ./src/utils/classnames.js ***!
  \*********************************/
/*! exports provided: classnames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classnames\", function() { return classnames; });\nfunction classnames(...args) {\n  if (!args) {\n    return '';\n  }\n\n  return args.filter(Boolean).join(' ');\n}\n\n//# sourceURL=webpack:///./src/utils/classnames.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: classnames, ObservableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classnames */ \"./src/utils/classnames.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"classnames\", function() { return _classnames__WEBPACK_IMPORTED_MODULE_0__[\"classnames\"]; });\n\n/* harmony import */ var _observableElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observableElement */ \"./src/utils/observableElement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObservableElement\", function() { return _observableElement__WEBPACK_IMPORTED_MODULE_1__[\"ObservableElement\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/observableElement.js":
/*!****************************************!*\
  !*** ./src/utils/observableElement.js ***!
  \****************************************/
/*! exports provided: ObservableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObservableElement\", function() { return ObservableElement; });\nclass ObservableElement extends HTMLElement {\n  constructor() {\n    super();\n    // // Check to see if observedAttributes are defined and has length\n    // if (this.constructor.observedAttributes && this.constructor.observedAttributes.length) {\n    //   // Loop through the observed attributes\n    //   this.constructor.observedAttributes.forEach(attribute => {\n    //     // Dynamically define the property getter/setter\n    //     Object.defineProperty(this, attribute, {\n    //       get() { return this.getAttribute(attribute); },\n    //       set(attrValue) { this.setAttribute(attribute, attrValue); }\n    //     });\n    //   });\n    // }\n    this.childContent = this.innerHTML;\n  }\n\n  connectedCallback() {\n    this.innerHTML = this.render();\n  }\n  \n  attributeChangedCallback() {\n    this.innerHTML = this.render();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/observableElement.js?");

/***/ })

/******/ });