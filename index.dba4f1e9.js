var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),r=0;o[r]&&o[r]!==t;)++r;return Boolean(o[r])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();var t=document.querySelector(".banner"),o=document.querySelectorAll(".slider"),r=document.querySelector(".previous"),n=document.querySelector(".next"),i=document.querySelector(".links"),c=i.getElementsByTagName("a"),a=t.getAttribute("data-height"),l=t.getAttribute("data-width"),s=t.getAttribute("data-slide-speed"),u=t.getAttribute("data-autoslide"),d=n.getAttribute("data-next-cursor"),m=r.getAttribute("data-previous-cursor"),y=c.length,h=1,v=h+1,f=y,g=3,p=t.querySelector("img:nth-of-type("+h+")"),S=t.querySelector("img:nth-of-type("+v+")"),b=t.querySelector("img:nth-of-type("+f+")"),q=t.querySelector("img:nth-of-type("+g+")");function L(e,t){if(t.length>1)for(var o=0;o<t.length;o++)Object.assign(t[o].style,e);else Object.assign(t.style,e)}document.body.style.margin="0",L({width:l,height:a+"px",margin:"0 auto",position:"relative"},t),L({position:"absolute",width:"50%",height:a+"px",top:"0"},[r,n]),L({cursor:y<=1?"default":m?"url("+m+"), auto":"w-resize",width:"50%",left:"0"},r),L({cursor:y<=1?"default":d?"url("+d+"), auto":"e-resize",right:"0"},n),L({"text-align":"center",position:"relative",top:"550px",left:"0",right:"0",margin:"auto",cursor:"default",width:30*c.length+"px"},i);for(var x=0;x<o.length;x++)L({width:l,height:a+"px",margin:"0 auto"},o[x]),L({position:"absolute",opacity:"0","object-fit":"cover"},o[x]);for(x=0;x<c.length;x++)L({color:"#000",display:"inline-block","text-decoration":"none",background:"#FFF","border-radius":"50%",height:"15px",width:"15px",margin:"10px 5px",transition:"all 0.5s"},c[x]);!function(){function e(e,t,o){L({transition:"opacity "+t+"ms",opacity:o},e)}function o(){for(var e=0;e<c.length;e++){var t=c[e].getAttribute("href");L({opacity:h==t?.8:.4},c[e])}}function i(){o(),v=h+1,f=h-1,h==y&&(v=1),1==h&&(f=y),p=t.querySelector("img:nth-of-type("+h+")"),S=t.querySelector("img:nth-of-type("+v+")"),b=t.querySelector("img:nth-of-type("+f+")"),q=t.querySelector("img:nth-of-type("+g+")")}function a(){clearInterval(A),A=setInterval(l,u)}function l(){var e=document.createEvent("HTMLEvents");e.initEvent("click",1,0),n.dispatchEvent(e)}for(var d=0;d<c.length;d++)c[d].onclick=function(){return a(),g=parseInt(this.getAttribute("href")),q=t.querySelector("img:nth-of-type("+g+")"),e(p,s,0),e(q,s,1),h=g,i(),!1};for(var m=[r,n],x=0;x<m.length;x++)y>1&&(m[x].onclick=function(t){"next"==t.target.getAttribute("class")?(e(p,s,0),e(S,s,1),h=v):(e(p,s,0),e(b,s,1),h=f),a(),i()});if(o(),e(p,s,1),y>1)var A=setInterval(l,u)}();
//# sourceMappingURL=index.dba4f1e9.js.map
