!function(e){function n(n){for(var r,i,s=n[0],l=n[1],p=n[2],u=0,f=[];u<s.length;u++)i=s[u],o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(n);f.length;)f.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var c=l;a.push([17,0]),t()}({15:function(e,n){e.exports="--app-element-card-image: {\n  height: 100px;\n}\n\niron-image {\n  display: block;\n  width: 100%;\n  --iron-image-width: 100%;\n  pointer-events: none;\n\n  @apply --app-element-card-image;\n}"},16:function(e,n){e.exports='<div class="paper-material" elevation="5">\n    <slot name="avatar"></slot>\n    <iron-image src="[[image]]"></iron-image>\n    <slot name="content">GG</slot>\n</div>\n'},17:function(e,n,t){"use strict";t.r(n);var r=t(5),o=(t(18),t(16)),a=t.n(o),i=t(15),s=t.n(i);class l extends r.PolymerElement{static get is(){return"codin-polymer-card"}static get template(){return Object(r.html)([`<style>${s.a}</style>${a.a}`])}static get properties(){return{image:{type:String,value:""}}}}window.customElements.define(l.is,l)}});