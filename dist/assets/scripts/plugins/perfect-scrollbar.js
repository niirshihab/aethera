/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).PerfectScrollbar=e()}(this,(function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function i(t){var e=document.createElement("div");return e.className=t,e}var r="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function l(t,e){if(!r)throw new Error("No element matching method supported");return r.call(t,e)}function n(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function o(t,e){return Array.prototype.filter.call(t.children,(function(t){return l(t,e)}))}var s="ps",a="ps__rtl",c={thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},h={focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}},u={x:null,y:null};function d(t,e){var i=t.element.classList,r=h.scrolling(e);i.contains(r)?clearTimeout(u[e]):i.add(r)}function f(t,e){u[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(h.scrolling(e))}),t.settings.scrollingThreshold)}var p=function(t){this.element=t,this.handlers={}},b={isEmpty:{configurable:!0}};p.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},p.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter((function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)}))},p.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},b.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(p.prototype,b);var g=function(){this.eventElements=[]};function v(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function m(t,e,i,r,l){var n;if(void 0===r&&(r=!0),void 0===l&&(l=!1),"top"===e)n=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");n=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,r,l){var n=i[0],o=i[1],s=i[2],a=i[3],c=i[4],h=i[5];void 0===r&&(r=!0);void 0===l&&(l=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start");u[s]>t[n]-t[o]-1&&(t.reach[a]="end");e&&(u.dispatchEvent(v("ps-scroll-"+a)),e<0?u.dispatchEvent(v("ps-scroll-"+c)):e>0&&u.dispatchEvent(v("ps-scroll-"+h)),r&&function(t,e){d(t,e),f(t,e)}(t,a));t.reach[a]&&(e||l)&&u.dispatchEvent(v("ps-"+a+"-reach-"+t.reach[a]))}(t,i,n,r,l)}function Y(t){return parseInt(t,10)||0}g.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new p(t),this.eventElements.push(e)),e},g.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},g.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},g.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},g.prototype.once=function(t,e,i){var r=this.eventElement(t),l=function(t){r.unbind(e,l),i(t)};r.bind(e,l)};var X={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function w(t){var i=t.element,r=Math.floor(i.scrollTop),l=i.getBoundingClientRect();t.containerWidth=Math.ceil(l.width),t.containerHeight=Math.ceil(l.height),t.contentWidth=i.scrollWidth,t.contentHeight=i.scrollHeight,i.contains(t.scrollbarXRail)||(o(i,c.rail("x")).forEach((function(t){return n(t)})),i.appendChild(t.scrollbarXRail)),i.contains(t.scrollbarYRail)||(o(i,c.rail("y")).forEach((function(t){return n(t)})),i.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=y(t,Y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=Y((t.negativeScrollAdjustment+i.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=y(t,Y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=Y(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,i){var r={width:i.railXWidth},l=Math.floor(t.scrollTop);i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:r.left=t.scrollLeft;i.isScrollbarXUsingBottom?r.bottom=i.scrollbarXBottom-l:r.top=i.scrollbarXTop+l;e(i.scrollbarXRail,r);var n={top:l,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?n.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth-9:n.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:n.left=i.scrollbarYLeft+t.scrollLeft;e(i.scrollbarYRail,n),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}(i,t),t.scrollbarXActive?i.classList.add(h.active("x")):(i.classList.remove(h.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,i.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?i.classList.add(h.active("y")):(i.classList.remove(h.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,i.scrollTop=0)}function y(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function W(t,e){var i=e[0],r=e[1],l=e[2],n=e[3],o=e[4],s=e[5],a=e[6],c=e[7],u=e[8],p=t.element,b=null,g=null,v=null;function m(e){e.touches&&e.touches[0]&&(e[l]=e.touches[0].pageY),p[a]=b+v*(e[l]-g),d(t,c),w(t),e.stopPropagation(),e.preventDefault()}function Y(){f(t,c),t[u].classList.remove(h.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}function X(e,o){b=p[a],o&&e.touches&&(e[l]=e.touches[0].pageY),g=e[l],v=(t[r]-t[i])/(t[n]-t[s]),o?t.event.bind(t.ownerDocument,"touchmove",m):(t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",Y),e.preventDefault()),t[u].classList.add(h.clicking),e.stopPropagation()}t.event.bind(t[o],"mousedown",(function(t){X(t)})),t.event.bind(t[o],"touchstart",(function(t){X(t,!0)}))}var L={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,w(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,w(t),e.stopPropagation()}))},"drag-thumb":function(t){W(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),W(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",(function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(l(e,":hover")||l(t.scrollbarX,":focus")||l(t.scrollbarY,":focus"))){var r,n=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else for(;n.shadowRoot;)n=n.shadowRoot.activeElement;if(l(r=n,"input,[contenteditable]")||l(r,"select,[contenteditable]")||l(r,"textarea,[contenteditable]")||l(r,"button,[contenteditable]"))return}var o=0,s=0;switch(i.which){case 37:o=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;break;case 38:s=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;break;case 39:o=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;break;case 40:s=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;break;case 32:s=i.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:s=t.containerHeight;break;case 34:s=-t.containerHeight;break;case 36:s=t.contentHeight;break;case 35:s=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==o||t.settings.suppressScrollY&&0!==s||(e.scrollTop-=s,e.scrollLeft+=o,w(t),function(i,r){var l=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===l&&r>0||l>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var n=e.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===n&&i<0||n>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(o,s)&&i.preventDefault())}}))},wheel:function(e){var i=e.element;function r(r){var l=function(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(r),n=l[0],o=l[1];if(!function(e,r,l){if(!X.isWebKit&&i.querySelector("select:focus"))return!0;if(!i.contains(e))return!1;for(var n=e;n&&n!==i;){if(n.classList.contains(c.consuming))return!0;var o=t(n);if(l&&o.overflowY.match(/(scroll|auto)/)){var s=n.scrollHeight-n.clientHeight;if(s>0&&(n.scrollTop>0&&l<0||n.scrollTop<s&&l>0))return!0}if(r&&o.overflowX.match(/(scroll|auto)/)){var a=n.scrollWidth-n.clientWidth;if(a>0&&(n.scrollLeft>0&&r<0||n.scrollLeft<a&&r>0))return!0}n=n.parentNode}return!1}(r.target,n,o)){var s=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(o?i.scrollTop-=o*e.settings.wheelSpeed:i.scrollTop+=n*e.settings.wheelSpeed,s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(n?i.scrollLeft+=n*e.settings.wheelSpeed:i.scrollLeft-=o*e.settings.wheelSpeed,s=!0):(i.scrollTop-=o*e.settings.wheelSpeed,i.scrollLeft+=n*e.settings.wheelSpeed),w(e),s=s||function(t,r){var l=Math.floor(i.scrollTop),n=0===i.scrollTop,o=l+i.offsetHeight===i.scrollHeight,s=0===i.scrollLeft,a=i.scrollLeft+i.offsetWidth===i.scrollWidth;return!(Math.abs(r)>Math.abs(t)?n||o:s||a)||!e.settings.wheelPropagation}(n,o),s&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}void 0!==window.onwheel?e.event.bind(i,"wheel",r):void 0!==window.onmousewheel&&e.event.bind(i,"mousewheel",r)},touch:function(e){if(X.supportsTouch||X.supportsIePointer){var i=e.element,r={},l=0,n={},o=null;X.supportsTouch?(e.event.bind(i,"touchstart",u),e.event.bind(i,"touchmove",d),e.event.bind(i,"touchend",f)):X.supportsIePointer&&(window.PointerEvent?(e.event.bind(i,"pointerdown",u),e.event.bind(i,"pointermove",d),e.event.bind(i,"pointerup",f)):window.MSPointerEvent&&(e.event.bind(i,"MSPointerDown",u),e.event.bind(i,"MSPointerMove",d),e.event.bind(i,"MSPointerUp",f)))}function s(t,r){i.scrollTop-=r,i.scrollLeft-=t,w(e)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function h(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(h(t)){var e=a(t);r.pageX=e.pageX,r.pageY=e.pageY,l=(new Date).getTime(),null!==o&&clearInterval(o)}}function d(o){if(h(o)){var u=a(o),d={pageX:u.pageX,pageY:u.pageY},f=d.pageX-r.pageX,p=d.pageY-r.pageY;if(function(e,r,l){if(!i.contains(e))return!1;for(var n=e;n&&n!==i;){if(n.classList.contains(c.consuming))return!0;var o=t(n);if(l&&o.overflowY.match(/(scroll|auto)/)){var s=n.scrollHeight-n.clientHeight;if(s>0&&(n.scrollTop>0&&l<0||n.scrollTop<s&&l>0))return!0}if(r&&o.overflowX.match(/(scroll|auto)/)){var a=n.scrollWidth-n.clientWidth;if(a>0&&(n.scrollLeft>0&&r<0||n.scrollLeft<a&&r>0))return!0}n=n.parentNode}return!1}(o.target,f,p))return;s(f,p),r=d;var b=(new Date).getTime(),g=b-l;g>0&&(n.x=f/g,n.y=p/g,l=b),function(t,r){var l=Math.floor(i.scrollTop),n=i.scrollLeft,o=Math.abs(t),s=Math.abs(r);if(s>o){if(r<0&&l===e.contentHeight-e.containerHeight||r>0&&0===l)return 0===window.scrollY&&r>0&&X.isChrome}else if(o>s&&(t<0&&n===e.contentWidth-e.containerWidth||t>0&&0===n))return!0;return!0}(f,p)&&o.preventDefault()}}function f(){e.settings.swipeEasing&&(clearInterval(o),o=setInterval((function(){e.isInitialized?clearInterval(o):n.x||n.y?Math.abs(n.x)<.01&&Math.abs(n.y)<.01?clearInterval(o):(s(30*n.x,30*n.y),n.x*=.8,n.y*=.8):clearInterval(o)}),10))}}},R=function(r,l){var n=this;if(void 0===l&&(l={}),"string"==typeof r&&(r=document.querySelector(r)),!r||!r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=r,r.classList.add(s),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},l)this.settings[o]=l[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var u,d,f=function(){return r.classList.add(h.focus)},p=function(){return r.classList.remove(h.focus)};this.isRtl="rtl"===t(r).direction,!0===this.isRtl&&r.classList.add(a),this.isNegativeScroll=(d=r.scrollLeft,r.scrollLeft=-1,u=r.scrollLeft<0,r.scrollLeft=d,u),this.negativeScrollAdjustment=this.isNegativeScroll?r.scrollWidth-r.clientWidth:0,this.event=new g,this.ownerDocument=r.ownerDocument||document,this.scrollbarXRail=i(c.rail("x")),r.appendChild(this.scrollbarXRail),this.scrollbarX=i(c.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",f),this.event.bind(this.scrollbarX,"blur",p),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var b=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(b.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=Y(b.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=Y(b.borderLeftWidth)+Y(b.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=Y(b.marginLeft)+Y(b.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(c.rail("y")),r.appendChild(this.scrollbarYRail),this.scrollbarY=i(c.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",f),this.event.bind(this.scrollbarY,"blur",p),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var v=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(v.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=Y(v.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var i=t(e);return Y(i.width)+Y(i.paddingLeft)+Y(i.paddingRight)+Y(i.borderLeftWidth)+Y(i.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=Y(v.borderTopWidth)+Y(v.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=Y(v.marginTop)+Y(v.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:r.scrollLeft<=0?"start":r.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:r.scrollTop<=0?"start":r.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return L[t](n)})),this.lastScrollTop=Math.floor(r.scrollTop),this.lastScrollLeft=r.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return n.onScroll(t)})),w(this)};return R.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=Y(t(this.scrollbarXRail).marginLeft)+Y(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=Y(t(this.scrollbarYRail).marginTop)+Y(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),w(this),m(this,"top",0,!1,!0),m(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},R.prototype.onScroll=function(t){this.isAlive&&(w(this),m(this,"top",this.element.scrollTop-this.lastScrollTop),m(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},R.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),n(this.scrollbarX),n(this.scrollbarY),n(this.scrollbarXRail),n(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},R.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")},R}));//# sourceMappingURL=perfect-scrollbar.js.map
