!function(){var e="readyState"in document.createElement("script"),r=this.opera&&"[object Opera]"===this.opera.toString(),t="function"==typeof Object.defineProperty,o=function(){for(var e=document.getElementsByTagName("script"),r=e.length;e[--r];)if("interactive"===e[r].readyState)return e[r];return null};if(!e)throw new Error('Cannot polyfill `document.currentScript` as your browser does not support the "readyState" DOM property of script elements. Please see https://github.com/Financial-Times/polyfill-service/issues/952 for more information.');if(r)throw new Error('Cannot polyfill `document.currentScript` as your Opera browser does not correctly support the "readyState" DOM property of script elements. Please see https://github.com/Financial-Times/polyfill-service/issues/952 for more information.');if(!t)throw new Error("Cannot polyfill `document.currentScript` as your browser does not support `Object.defineProperty`. Please see https://github.com/Financial-Times/polyfill-service/issues/952 for more information.");Object.defineProperty(document,"currentScript",{get:function(){return o()},configurable:!0})}();