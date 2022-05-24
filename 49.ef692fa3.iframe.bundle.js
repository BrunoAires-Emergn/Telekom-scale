/*! For license information please see 49.ef692fa3.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-breadcrumb.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_breadcrumb",(function(){return Breadcrumb}));__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/index-f2e5998d.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-713f92a5.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Breadcrumb=function(){function Breadcrumb(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Breadcrumb),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.h)(this,hostRef),this.linksArray=[],this.separatorSlot=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Breadcrumb,[{key:"componentWillLoad",value:function componentWillLoad(){0===this.linksArray.length&&this.setLinksArray(),this.separatorSlot=this.hostElement.querySelector('[slot="separator"]')}},{key:"componentDidLoad",value:function componentDidLoad(){var _this=this,observer=new MutationObserver((function(){_this.setLinksArray()}));observer.observe(this.hostElement,{attributes:!1,childList:!0,subtree:!0}),this.mo=observer}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.mo&&this.mo.disconnect()}},{key:"setLinksArray",value:function setLinksArray(){this.linksArray=Array.from(this.hostElement.children).filter((function(element){return""===element.slot}))}},{key:"render",value:function render(){var _this2=this,isLast=function isLast(index){return index===_this2.linksArray.length-1};return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.b,null,this.styles&&Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("style",null,this.styles),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("nav",{"aria-label":"Breadcrumb",class:this.getCssClassMap(),part:"base"},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("ol",{class:"breadcrumb__list",part:"list"},this.linksArray.map((function(element,index){var separator=null!=_this2.separatorSlot?Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("span",{class:"breadcrumb__separator",part:"separator",innerHTML:_this2.separatorSlot.innerHTML}):Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("span",{class:"breadcrumb__separator",part:"separator"},_this2.separator||Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("scale-icon-navigation-right",{size:12}));return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("li",{class:"breadcrumb__list-item",part:"list-item"},element.href?Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("a",Object.assign({href:element.href,class:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)(isLast(index)&&"breadcrumb__current","breadcrumb__link"),part:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)(isLast(index)&&"current","link")},function getCurrentAttr(index){return!0===isLast(index)?{"aria-current":"page"}:void 0}(index)),element.textContent):Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.f)("span",{class:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)(isLast(index)&&"breadcrumb__current","breadcrumb__item"),part:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)(isLast(index)&&"current","item")},element.textContent),isLast(index)?null:separator)})))))}},{key:"getCssClassMap",value:function getCssClassMap(){return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)("breadcrumb")}},{key:"hostElement",get:function get(){return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_6__.e)(this)}}]),Breadcrumb}();Breadcrumb.style=":host{--spacing-left:calc(-1 * var(--telekom-spacing-unit-x2));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-ui-additional-regular);--spacing-y-item:var(--telekom-spacing-unit-x1);--spacing-x-item:var(--telekom-spacing-unit-x2);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--box-shadow-link-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:none;box-shadow:var(--box-shadow-link-focus)}.breadcrumb__current{color:var(--color-current)}"}}]);
//# sourceMappingURL=49.ef692fa3.iframe.bundle.js.map