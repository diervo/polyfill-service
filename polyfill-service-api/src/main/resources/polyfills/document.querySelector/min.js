!function(){function e(e,n,o){var l,u,c=document.createElement("div"),i="qsa"+String(Math.random()).slice(3);return c.innerHTML="x<style>"+n+"{qsa:"+i+";}",l=r.appendChild(c.lastChild),u=t(e,n,o,i),r.removeChild(l),o?u[0]:u}function t(e,r,n,o){var l,u=/1|9/.test(e.nodeType),c=e.childNodes,i=[],a=-1;if(u&&e.currentStyle&&e.currentStyle.qsa===o&&i.push(e)&&n)return i;for(;l=c[++a];)if(i=i.concat(t(l,r,n,o)),n&&i.length)return i;return i}var r=document.getElementsByTagName("head")[0];Document.prototype.querySelector=Element.prototype.querySelector=function(t){return e(this,t,!0)},Document.prototype.querySelectorAll=Element.prototype.querySelectorAll=function(t){return e(this,t,!1)}}();