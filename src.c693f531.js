parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"E6ph":[function(require,module,exports) {
"use strict";function t(t,e){return d3.select(".graph").select("svg").append("g").attr("id","map-g").attr("width",t).attr("height",e)}function e(t,e){return d3.select(".graph").select("svg").append("g").attr("id","marker-g").attr("width",t).attr("height",e)}function r(t,e){d3.select("#map").select("svg").attr("width",t).attr("height",e)}function a(t){t.append("text").text("Achalandage et ponctualité des lignes de bus 9 et 22 de la couronne Nord de Montréal").attr("class","title").attr("fill","#000000").attr("font-family","myriad-pro").attr("font-size",28).attr("transform","translate(50, 50)"),t.append("text").text("Sous-titre").attr("class","title").attr("fill","#000000").attr("font-family","myriad-pro").attr("font-size",18).attr("transform","translate(50, 85)")}function n(){d3.select(".graph").append("div").attr("id","panel").style("width","215px").style("border","1px solid black").style("padding","10px").style("visibility","hidden")}function i(t){return d3.forceSimulation(t.features).alphaDecay(0).velocityDecay(.75).force("collision",d3.forceCollide(5).strength(1))}function o(t){t.on("tick",function(){d3.selectAll(".marker").attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y})})}function s(){return d3.geoMercator().center([-73.708879,45.579611]).scale(7e4)}function l(t){return d3.geoPath().projection(t)}function p(t,e){for(var r=[.1,.2,.25,.5,1,2,2.5,5,10,20,25,50,100,200,250,500,1e3,2e3,2500,5e3,1e4,2e4,25e3,5e4],a=(e[1]-e[0])/t,n=[],i=r[r.length-1],o=0;o<r.length;o++)if(n.push(Math.abs(r[o]-a)),o>0&&n[o]>n[o-1]){i=r[o-1];break}return i}function c(t,e){var r=p(t,e),a=[];for(e[0]<=0&&e[1]>=0?a.push(0):a.push(e[0]);a[a.length-1]<e[1]-r;)a.push(a[a.length-1]+r);for(;a[0]>e[0]+r;)a.unshift(a[0]-r);return a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMapG=t,exports.generateMarkerG=e,exports.setCanvasSize=r,exports.appendGraphLabels=a,exports.initPanelDiv=n,exports.getSimulation=i,exports.simulate=o,exports.getProjection=s,exports.getPath=l,exports.getClosestStep=p,exports.getSteps=c;
},{}],"hKSW":[function(require,module,exports) {
"use strict";function e(e,t,r,o){for(var n=e.findIndex(function(e){return e.ligne===t}),s=e[n].girouettes.findIndex(function(e){return e.girouette===r}),i=0;i<e[n].girouettes[s].voyages.length;i++)for(var u=0;u<e[n].girouettes[s].voyages[i].arrets.length;u++)e[n].girouettes[s].voyages[i].arrets[u][o]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawHeatmap=e;
},{}],"LFDw":[function(require,module,exports) {
"use strict";function e(e){for(var t=0;t<e.length;t++)e[t].jour_semaine=e[t].date.getDay(),6===e[t].jour_semaine?e[t].type_jour="fin de semaine":e[t].type_jour="semaine",isNaN(e[t].voyage)?e[t].ferie=!0:e[t].ferie=!1}function t(e,t,n,r,i,o){for(var u=0;u<e.length;u++)if(e[u].date>=n&&e[u].date<=r&&e[u].type_jour===i&&e[u].ferie===o){0===t.length&&t.push({ligne:e[u].ligne,girouettes:[]});var a=t.findIndex(function(t){return t.ligne===e[u].ligne});-1===a&&(t.push({ligne:e[u].ligne,girouettes:[]}),a=t.length-1);var s=t[a].girouettes.findIndex(function(t){return t.girouette===e[u].Girouette});-1===s&&(t[a].girouettes.push({girouette:e[u].Girouette,voyages:[]}),s=t[a].girouettes.length-1);var g=t[a].girouettes[s].voyages.findIndex(function(t){return t.voyage===e[u].voyage});-1===g&&(t[a].girouettes[s].voyages.push({voyage:e[u].voyage,arrets:[]}),g=t[a].girouettes[s].voyages.length-1);var l=t[a].girouettes[s].voyages[g].arrets.findIndex(function(t){return t.codeArret===e[u].arret_code});-1===l&&(t[a].girouettes[s].voyages[g].arrets.push({codeArret:e[u].arret_code,nomArret:e[u].arret_nom,minutesEcart:[],moyMinutesEcart:null,nClients:[],moyNClients:null,ponctualite:[],tauxPonctualite:null,minutesEcartClient:[],moyMinutesEcartClient:null}),l=t[a].girouettes[s].voyages[g].arrets.length-1),t[a].girouettes[s].voyages[g].arrets[l].minutesEcart.push(e[u].Minutes_ecart_planifie),t[a].girouettes[s].voyages[g].arrets[l].nClients.push(e[u].montants),t[a].girouettes[s].voyages[g].arrets[l].ponctualite.push(e[u].Etat_Ponctualite),t[a].girouettes[s].voyages[g].arrets[l].minutesEcartClient.push(e[u].Minutes_ecart_planifie*e[u].montants)}var c=function(e){return+(e.reduce(function(e,t){return e+t},0)/e.length).toFixed(2)};t.forEach(function(e){e.girouettes.forEach(function(e){e.voyages.forEach(function(e){e.arrets.forEach(function(e){var t;e.moyMinutesEcart=c(e.minutesEcart),e.moyNClients=c(e.nClients),e.moyMinutesEcartClient=c(e.minutesEcartClient),e.tauxPonctualite=(t=e.ponctualite).filter(function(e){return"Ponctuel"===e}).length/t.length})})})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDayType=e,exports.aggregateData=t;
},{}],"NMt1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateViz3=S,exports.generateDelayGraph=A,exports.generateTrafficGraph=q,exports.generateGroupedQuantileGraph=k;var t=r(require("./helper.js"));function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function r(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=e();if(r&&r.has(t))return r.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=a?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=t[i]}return n.default=t,r&&r.set(t,n),n}function n(t){return o(t)||i(t)||d(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return f(t)}function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=d(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function s(t,e){return p(t)||u(t,e)||d(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}}function p(t){if(Array.isArray(t))return t}var y={top:100,right:80,bottom:150,left:150},h=16,g=-45,x="black",v="lightgray",b=2,m=10,w=["#ffe4e4","#e4ffe4","#ffffe4"];function S(){var t=d3.select("#grouped-quantile-graph-container"),e=t.append("div").style("width","50%").style("height","100%").style("float","left"),r=t.append("div").style("width","50%").style("height","100%").style("float","right"),n={lines:["9","22"],directions:["Lafontaine","Montmorency","Côté","George VI"]};new ResizeObserver(function(){A(e,n)}).observe(e.node()),new ResizeObserver(function(){q(r,n)}).observe(r.node())}function A(t,e){e.quantileSets=[[10,20,30,40,50],[-5,25,40,50,70],[15,20,55,60,65],[40,50,60,70,90]],e.title="Retard Moyen";var r=s(k(t,e),2),n=r[0],a=r[1],i=t.node().getBoundingClientRect().width,o=t.node().getBoundingClientRect().height;n.append("defs").append("linearGradient").attr("id","late-grad").attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%").selectAll("stop").data([w[0],w[1]]).enter().append("stop").style("stop-color",function(t){return t}).attr("offset",function(t,e){return 100*e+"%"}),n.append("defs").append("linearGradient").attr("id","early-grad").attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%").selectAll("stop").data([w[1],w[2]]).enter().append("stop").style("stop-color",function(t){return t}).attr("offset",function(t,e){return 100*e+"%"}),n.insert("rect","#x-axis").attr("width",i-y.left-y.right).attr("x",y.left).attr("height",a(15)-y.top).attr("y",y.top).attr("fill",w[0]),n.insert("rect","#x-axis").attr("width",i-y.left-y.right).attr("x",y.left).attr("height",a(5)-a(15)).attr("y",a(15)).attr("fill","url(#late-grad)"),n.insert("rect","#x-axis").attr("width",i-y.left-y.right).attr("x",y.left).attr("height",a(-5)-a(5)).attr("y",a(5)).attr("fill","url(#early-grad)"),n.insert("rect","#x-axis").attr("width",i-y.left-y.right).attr("x",y.left).attr("height",o-y.bottom-a(-5)).attr("y",a(-5)).attr("fill",w[2]),n.select("#y-axis > .label").text("Minute")}function q(t,e){e.quantileSets=[[100,200,300,350,500],[50,200,250,600,650],[200,350,400,600,700],[450,500,600,700,750]],e.title="Achalandage Moyen",s(k(t,e),1)[0].select("#y-axis > .label").text("Nombre de personnes\npar jour")}function k(e,r){e.html("");var a,i=e.node().getBoundingClientRect().width,o=e.node().getBoundingClientRect().height,s=(i-y.left-y.right)/7,c=e.append("svg").attr("width",i).attr("height",o),d=d3.scaleOrdinal().domain(r.lines).range([y.left+2*s,y.left+5*s]),f=[],u=l(r.lines);try{for(u.s();!(a=u.n()).done;){var p=a.value;f.push(d(p)-s/2),f.push(d(p)+s/2)}}catch(rt){u.e(rt)}finally{u.f()}var w,S=d3.scaleOrdinal().domain(n(r.directions)).range(f),A=Number.MIN_SAFE_INTEGER,q=Number.MAX_SAFE_INTEGER,k=l(r.quantileSets);try{for(k.s();!(w=k.n()).done;){var O,j=l(w.value);try{for(j.s();!(O=j.n()).done;){var z=O.value;A<z&&(A=z),q>z&&(q=z)}}catch(rt){j.e(rt)}finally{j.f()}}}catch(rt){k.e(rt)}finally{k.f()}var I=d3.scaleLinear().domain([q,A]).range([o-y.bottom-h,y.top]),M=c.append("g").attr("id","x-axis");M.append("path").attr("d",d3.line()([[y.left,o-y.bottom],[y.left+7*s,o-y.bottom]])).attr("stroke","black");var R,E=o-y.bottom+1.5*h,G=l(r.lines);try{for(G.s();!(R=G.n()).done;){var _=R.value;M.append("text").attr("x",d(_)).attr("y",E).attr("text-anchor","middle").text(_).style("font-size",h)}}catch(rt){G.e(rt)}finally{G.f()}for(var C=E+h,N=0;N<r.directions.length;N++){var P=S(r.directions[N]);M.append("text").attr("text-anchor","end").attr("transform","translate(".concat(P,", ").concat(C,") rotate(").concat(g,")")).text(r.directions[N]).style("font-size",h).attr("class","direction".concat(N," label"))}M.append("text").attr("x",i-y.right+h/2).attr("y",E).text("Ligne").style("font-size",h),M.append("text").attr("x",i-y.right+h/2).attr("y",C+h).text("Direction").style("font-size",h);var T=c.append("g").attr("id","y-axis");T.append("path").attr("d",d3.line()([[y.left,y.top],[y.left,o-y.bottom]])).attr("stroke","black");var B,D=l(t.getSteps(m,I.domain()));try{for(D.s();!(B=D.n()).done;){var L=B.value,F=I(L);T.append("text").attr("text-anchor","end").attr("x",y.left-h).attr("y",F+h/2).text(L).style("font-size",h),T.append("path").attr("d",d3.line()([[y.left-h/2,F],[y.left,F]])).attr("stroke",x).attr("stroke-width",b)}}catch(rt){D.e(rt)}finally{D.f()}T.append("text").attr("x",y.left-h/2).attr("y",y.top-h/2).attr("class","label").attr("text-anchor","end").text("Unité de données").style("font-size",h);for(var U=c.append("g").attr("id","candles"),V=0;V<r.quantileSets.length;V++){var W=S(r.directions[V]),Q=I(r.quantileSets[V][4]),X=I(r.quantileSets[V][3]),$=I(r.quantileSets[V][2]),H=I(r.quantileSets[V][1]),J=I(r.quantileSets[V][0]);U.append("path").attr("d",d3.line()([[W,Q],[W,J]])).attr("stroke",x).attr("stroke-width",b).attr("class","direction".concat(V)),U.append("rect").attr("width",s).attr("x",W-s/2).attr("height",H-X).attr("y",X).attr("fill",v).attr("stroke",x).attr("stroke-width",b).attr("class","direction".concat(V)),U.append("path").attr("d",d3.line()([[W-s/2,$],[W+s/2,$]])).attr("stroke",x).attr("stroke-width",b).attr("class","direction".concat(V));for(var K=0;K<r.quantileSets[V].length;K++){var Y=U.append("g").attr("class","direction".concat(V," quantile")).style("visibility","hidden");Y.append("text").attr("x",S(r.directions[V])+(V%2==0?-1:1)*(s/2+h/2)).attr("y",I(r.quantileSets[V][K])).attr("text-anchor",V%2==0?"end":"start").text(r.quantileSets[V][K]).style("font-size",h).attr("id","quantile-text-".concat(V,"-").concat(K));var Z=Y.node().getBoundingClientRect();Y.insert("rect","#quantile-text-".concat(V,"-").concat(K)).attr("width",Z.width).attr("x",Z.x).attr("height",Z.height).attr("y",Z.y).attr("fill","white")}}for(var tt=function(t){U.append("rect").attr("width",s).attr("x",S(r.directions[t])-s/2).attr("height",I.range()[0]-I.range()[1]+h).attr("y",y.top).attr("fill","transparent").on("mouseover",function(){d3.selectAll(".direction".concat(t)).attr("stroke-width",2*b),d3.selectAll(".direction".concat(t,".label")).style("font-size",1.5*h),d3.selectAll(".direction".concat(t,".quantile")).style("visibility","visible")}).on("mouseout",function(){d3.selectAll(".direction".concat(t)).attr("stroke-width",b),d3.selectAll(".direction".concat(t,".label")).style("font-size",h),d3.selectAll(".direction".concat(t,".quantile")).style("visibility","hidden")})},et=0;et<r.directions.length;et++)tt(et);return c.append("text").attr("x",(i-y.right-y.left)/2+y.left).attr("y",y.top-2*h).attr("text-anchor","middle").text(r.title).style("font-size",h),[c,I]}
},{"./helper.js":"E6ph"}],"Focm":[function(require,module,exports) {
"use strict";var e=i(require("./scripts/helper.js")),t=i(require("./scripts/heatmap.js")),r=i(require("./scripts/preprocess.js")),a=i(require("./scripts/grouped-quantile.js"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}!function(n){var i=800,o=625;e.setCanvasSize(i,o),e.generateMapG(i,o),e.generateMarkerG(i,o),e.appendGraphLabels(n.select(".main-svg")),e.initPanelDiv();var s=new Date("2021-09-01"),u=new Date("2021-12-01"),c="semaine",p=!1,f=[];n.csv("./donnees_L9_L22.csv").then(function(e){e.forEach(function(e){e.date=new Date(e.date+" 00:00:00"),e.ligne=+e.ligne,e.voyage=+e.voyage,e.arret_code=+e.arret_code,e.montants=+e.montants,e.Minutes_ecart_planifie=+e.Minutes_ecart_planifie,e.sequence_arret=+e.sequence_arret,e.arret_Latitude=+e.arret_Latitude,e.arret_Longitude=+e.arret_Longitude}),r.addDayType(e),r.aggregateData(e,f,s,u,c,p),console.log(f),t.drawHeatmap(f,9,"Lafontaine Via Gare  Saint-Jérôme","moyMinutesEcart")}),a.generateViz3()}(d3);
},{"./scripts/helper.js":"E6ph","./scripts/heatmap.js":"hKSW","./scripts/preprocess.js":"LFDw","./scripts/grouped-quantile.js":"NMt1"}]},{},["Focm"], null)
//# sourceMappingURL=/src.c693f531.js.map