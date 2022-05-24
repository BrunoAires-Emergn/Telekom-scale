/*! For license information please see 37.8679079c.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-carousel.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_carousel",(function(){return Carousel}));__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-f2e5998d.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../components/dist/esm/status-note-d227f142.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Carousel=function(){function Carousel(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Carousel),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.h)(this,hostRef),this.vertical=!1,this.slidesArray=[],this.value=0,this.handleSlideChange=function(direction){var val=_this.value;"prev"===direction&&(_this.value=0===val?-100*(_this.slidesArray.length-1):val+100),"next"===direction&&(val===-100*(_this.slidesArray.length-1)?_this.value=0:_this.value=val-100)},this.setActiveSlide=function(index){_this.value=-100*index},this.setTransformValue=function(){return _this.vertical?"translateY("+_this.value+"%)":"translateX("+_this.value+"%)"},this.setActiveCssClass=function(index){return Math.abs(_this.value)/100===index?"carousel__indicator--active":""}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Carousel,[{key:"connectedCallback",value:function connectedCallback(){Object(_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_9__.a)({source:this.hostElement,type:"warn"})}},{key:"componentWillLoad",value:function componentWillLoad(){if(0===this.slidesArray.length)for(var children=this.hostElement.children,childIndex=0;childIndex<children.length;childIndex++)if(""===children[childIndex].slot)for(var slideIndex=0;slideIndex<children[childIndex].children.length;slideIndex++){var element=children[childIndex].children[slideIndex];this.slidesArray.push(element)}}},{key:"render",value:function render(){var _this2=this;return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.b,null,this.styles&&Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("style",null,this.styles),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{class:this.getCssClassMap()},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{class:"carousel__container"},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{class:"carousel__arrow carousel__arrow--left",onClick:function onClick(){return _this2.handleSlideChange("prev")}},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("slot",{name:"arrow-left"})),this.slidesArray.map((function(element){return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{class:"carousel__slide",style:{transform:_this2.setTransformValue()}},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{innerHTML:element.outerHTML}))})),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("div",{class:"carousel__arrow carousel__arrow--right",onClick:function onClick(){return _this2.handleSlideChange("next")}},Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("slot",{name:"arrow-right"}))),Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("ul",{class:"carousel__indicators"},Array.from(Array(this.slidesArray.length).keys()).map((function(index){return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.f)("li",{key:index,class:"carousel__indicator "+_this2.setActiveCssClass(index),onClick:function onClick(){return _this2.setActiveSlide(index)}})})))))}},{key:"getCssClassMap",value:function getCssClassMap(){return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_8__.a)("carousel",this.vertical&&"carousel--vertical")}},{key:"hostElement",get:function get(){return Object(_index_f2e5998d_js__WEBPACK_IMPORTED_MODULE_7__.e)(this)}}]),Carousel}();Carousel.style=".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:flex;padding:0;overflow:hidden;position:relative;box-sizing:border-box;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:flex;outline:none;z-index:99;position:absolute;transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);align-items:center;border-radius:50%;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:inline-flex;padding:0;z-index:2;position:absolute;transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:flex;transform:translateY(-50%);flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}"},"../components/dist/esm/status-note-d227f142.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}}}]);
//# sourceMappingURL=37.8679079c.iframe.bundle.js.map