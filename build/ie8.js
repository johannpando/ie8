/*! (C) WebReflection Mit Style License */
(function(e){function y(e,t,n,r){for(var i,s=n.slice(),o=b(t,e),u=0,a=s.length;u<a;u++){handler=s[u],typeof handler=="object"&&typeof handler.handleEvent=="function"?handler.handleEvent(o):handler.call(e,o);if(o.stoppedImmediatePropagation)break}return i=!o.stoppedPropagation,r&&i&&e.parentNode?e.parentNode.dispatchEvent(o):!o.defaultPrevented}function b(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function w(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function E(e){return e.nodeType!==9&&document.documentElement.contains(e)}function S(e){!n&&v.test(document.readyState)&&(n=!n,document.detachEvent(r,S),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function x(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=e.Object,u=o.defineProperty||function(e,t,n){e[t]=n.value},a=o.defineProperties||function(e,t){for(var n in t)f.call(t,n)&&u(e,n,t[n])},f=o.prototype.hasOwnProperty,l=e.Element.prototype,c=e.Event.prototype,h=e.HTMLDocument.prototype,p=e.Window.prototype,d=/^[a-z]+$/,v=/loaded|complete/,m={},g=document.createElement("div");a(l,{textContent:{get:function(){return this.innerText},set:function(e){this.innerText=e}},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;t<n;t++)if(e[t].nodeType==1)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(e[t].nodeType==1)return e[t]}},previousElementSibling:{get:function(){var e=this.previousSibling;while(e&&e.nodeType!=1)e=e.previousSibling;return e}},nextElementSibling:{get:function(){var e=this.nextSibling;while(e&&e.nodeType!=1)e=e.nextSibling;return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=t[n].nodeType==1);return e}},addEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s]||u(r,s,{value:{}})[s],a=o[i]||(o[i]={}),l=a.h||(a.h=[]),c;if(!f.call(a,"w")){a.w=function(e){return e[s]||y(r,x(r,e),l,!1)};if(!f.call(m,i))if(d.test(e))try{c=document.createEventObject(),c[s]=!0,r.nodeType!=9&&r.parentNode==null&&g.appendChild(r),r.fireEvent(i,c),m[i]=!0}catch(c){m[i]=!1;while(g.hasChildNodes())g.removeChild(g.firstChild)}else m[i]=!1;(a.n=m[i])&&r.attachEvent(i,a.w)}w(l,t)<0&&l[n?"unshift":"push"](t)}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):y(t,e,i.h,!0):(u=t.parentNode)?u.dispatchEvent(e):!0,!e.defaultPrevented}},removeEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?w(a,t):-1;-1<f&&a.splice(f,1)}}}),a(XMLHttpRequest.prototype,{addEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s]||u(r,s,{value:{}})[s],a=o[i]||(o[i]={}),f=a.h||(a.h=[]);w(f,t)<0&&(r[i]||(r[i]=function(){var t=document.createEvent("Event");t.initEvent(e,!0,!0),r.dispatchEvent(t)}),f[n?"unshift":"push"](t))}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i;return o&&(i.n?t.fireEvent(n,e):y(t,e,i.h,!0))}},removeEventListener:{value:l.removeEventListener}}),a(c,{bubbles:{value:!0,writable:!0},cancelable:{value:!0,writable:!0},preventDefault:{value:function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}},stopPropagation:{value:function(){this.stoppedPropagation=!0,this.cancelBubble=!0}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}},initEvent:{value:function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}}}),a(h,{addEventListener:{value:function(n,s,o){var u=this;l.addEventListener.call(u,n,s,o),t&&n===i&&!v.test(u.readyState)&&(t=!1,u.attachEvent(r,S),e==top&&function a(e){try{u.documentElement.doScroll("left"),S()}catch(t){setTimeout(a,50)}}())}},dispatchEvent:{value:l.dispatchEvent},removeEventListener:{value:l.removeEventListener},createEvent:{value:function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t}}}),a(p,{getComputedStyle:{value:function(){function i(e){this._=e}var e=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,t=/^(top|right|bottom|left)$/,n=/\-([a-z])/g,r=function(e,t){return t.toUpperCase()};return i.prototype.getPropertyValue=function(i){var s=this._,o=s.style,u=s.currentStyle,a=s.runtimeStyle,f,l,c;return i=(i==="float"?"style-float":i).replace(n,r),f=u?u[i]:o[i],e.test(f)&&!t.test(i)&&(l=o.left,c=a&&a.left,c&&(a.left=u.left),o.left=i==="fontSize"?"1em":f,f=o.pixelLeft+"px",o.left=l,c&&(a.left=c)),f==null?f:f+""||"auto"},function(e,t){return new i(e)}}()},addEventListener:{value:function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return y(i,x(i,e),u,!1)}),u=i[o][s]||(i[o][s]=[]),w(u,n)<0&&u[r?"unshift":"push"](n)}},dispatchEvent:{value:function(t){var n=e["on"+t.type];return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}},removeEventListener:{value:function(t,n,r){var i="on"+t,u=(e[i]||o)[s],a=u?w(u,n):-1;-1<a&&u.splice(a,1)}}})})(this);