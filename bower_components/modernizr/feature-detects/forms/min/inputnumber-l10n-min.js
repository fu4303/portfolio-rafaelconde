define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(e,t,n,r){e.addTest("localizednumber",function(){if(!e.inputtypes.number)return!1;if(!e.formvalidation)return!1;var i=t("div"),d,o=r(),u=function(){return n.insertBefore(o,n.firstElementChild||n.firstChild)}();i.innerHTML='<input type="number" value="1.0" step="0.1"/>';var a=i.childNodes[0];u.appendChild(i),a.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(l){}return d="number"===a.type&&1.1===a.valueAsNumber&&a.checkValidity(),u.removeChild(i),o.fake&&u.parentNode.removeChild(u),d})});