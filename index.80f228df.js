function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector("table"),n=r.querySelector("tbody"),o=e(r.querySelectorAll("thead")),l=e(n.querySelectorAll("trows"));o.addEventListener("click",function(t){var e=t.target.index,r=t.target.closest("th").textContent.toLowerCase(),o=[];n.querySelectorAll("tr").forEach(function(t){var r=t.cells[e];r&&o.push(r.textContent)}),l.sort(function(t,n){var o=t.cells[e].textContent,l=n.cells[e].textContent;switch(r){case"name":case"position":return String(o).localeCompare(String(l));case"age":return+o-+l;case"salary":return+o.replaceAll("$","").replaceAll(",","")-+l.replaceAll("$","").replaceAll(",","");default:return null}}),n.innerHTML="",l.forEach(function(t){n.appendChild(t)})});
//# sourceMappingURL=index.80f228df.js.map