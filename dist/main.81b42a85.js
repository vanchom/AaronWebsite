parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector(".navbar__menu-mobile").addEventListener("click",n),t=document.querySelector(".navbar__menu-list");function n(){t.classList.toggle("active")}var o=document.getElementById("extensionBox"),d=document.getElementById("extensionBoxBackground"),r=document.getElementById("kitchenBox"),u=document.getElementById("kitchenBoxBackground"),l=document.getElementById("bathroomBox"),m=document.getElementById("bathroomBoxBackground"),c=document.getElementById("loftBox"),i=document.getElementById("loftBoxBackground"),g=document.getElementById("paintingBox"),B=document.getElementById("paintingBoxBackground"),a=document.getElementById("groundworkBox"),s=document.getElementById("groundworkBoxBackground"),y=document.getElementById("extensionBox").addEventListener("mouseover",F),E=document.getElementById("extensionBox").addEventListener("mouseout",z),k=document.getElementById("extension-title"),x=document.getElementById("kitchenBox").addEventListener("mouseover",S),I=document.getElementById("kitchenBox").addEventListener("mouseout",z),L=document.getElementById("kitchen-title"),b=document.getElementById("bathroomBox").addEventListener("mouseover",K),v=document.getElementById("bathroomBox").addEventListener("mouseout",z),C=document.getElementById("bathroom-title"),f=document.getElementById("loftBox").addEventListener("mouseover",P),h=document.getElementById("loftBox").addEventListener("mouseout",z),H=document.getElementById("loft-title"),M=document.getElementById("paintingBox").addEventListener("mouseover",V),T=document.getElementById("paintingBox").addEventListener("mouseout",z),w=document.getElementById("painting-title"),p=document.getElementById("groundworkBox").addEventListener("mouseover",j),_=document.getElementById("groundworkBox").addEventListener("mouseout",z),q=document.getElementById("groundwork-title");function F(){k.innerHTML="Extension",k.style.backgroundColor="#B58147",d.classList.add("largeView")}function S(){L.innerHTML="Kitchen Fitting",L.style.backgroundColor="#B58147"}function K(){C.innerHTML="Bathroom Fitting",C.style.backgroundColor="#B58147"}function P(){H.innerHTML="Loft",H.style.backgroundColor="#B58147"}function V(){w.innerHTML="Painting",w.style.backgroundColor="#B58147"}function j(){q.innerHTML="Loft",q.style.backgroundColor="#B58147"}function z(){k.innerHTML=" ",k.style.backgroundColor="#345995",d.style.backgroundColor="#345995",L.innerHTML=" ",L.style.backgroundColor="#345995",u.style.backgroundColor="#345995",C.innerHTML=" ",C.style.backgroundColor="#345995",m.style.backgroundColor="#345995",H.innerHTML=" ",H.style.backgroundColor="#345995",i.style.backgroundColor="#345995",w.innerHTML=" ",w.style.backgroundColor="#345995",B.style.backgroundColor="#345995",q.innerHTML=" ",q.style.backgroundColor="#345995",s.style.backgroundColor="#345995"}
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.81b42a85.js.map