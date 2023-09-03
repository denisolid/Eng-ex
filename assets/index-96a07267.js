(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const S=document.querySelector(".js-open-menu"),_=document.querySelector(".js-close-menu"),v=document.querySelector("#mobile-menu"),a=document.querySelector("[data-menu-backdrop]"),q=document.querySelectorAll(".menu__nav-link");function A(){v.classList.add("is-open"),a.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function u(){v.classList.remove("is-open"),a.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}S.addEventListener("click",()=>{A()});_.addEventListener("click",()=>{u()});a.addEventListener("click",()=>{u()});q.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("href").substring(1),o=document.getElementById(t);o&&(o.scrollIntoView({behavior:"smooth"}),u())})});const f=document.querySelector(".menu-open__use");function L(e){e.matches?f.setAttribute("xlink:href","./sprite.svg#icon-menu"):f.setAttribute("xlink:href","./sprite.svg#icon-menu-mini")}const h=window.matchMedia("(min-width: 768px)");L(h);h.addEventListener("change",L);const l=document.querySelectorAll('input[name^="user-"]'),p=document.querySelector(".leave__feedback");p.addEventListener("input",()=>{const e={};l.forEach(t=>{e[t.name.split("-")[1]]=t.value})});l.forEach(e=>{e.addEventListener("blur",()=>{e.value.length>0&&(e.classList.remove("invalid"),e.classList.add("valid"))})});p.addEventListener("submit",e=>{e.preventDefault();let t=!0;if(l.forEach(o=>{o.value===""?(o.classList.add("invalid"),t=!1):(o.classList.remove("invalid"),o.value="",o.classList.remove("valid"))}),t){const o={};l.forEach(s=>{o[s.name.split("-")[1]]=s.value})}});const w=document.querySelector(".footer__link"),r=document.querySelector(".team__backdrop"),y=document.querySelector(".team__modal-close-btn");function M(e){e.preventDefault(),r.classList.remove("is-hidden"),document.body.classList.add("modal-open"),B()}function b(e){e.preventDefault(),e.code==="Escape"&&m()}function k(e){e.target.closest(".team__wrapper")||m()}function E(e){e.preventDefault(),m()}function B(){document.addEventListener("keydown",b),r.addEventListener("click",k),y.addEventListener("click",E)}function m(){document.removeEventListener("keydown",b),r.removeEventListener("click",k),y.removeEventListener("click",E),r.classList.add("is-hidden"),document.body.classList.remove("modal-open")}w.addEventListener("click",M);const I=document.querySelectorAll('a[href*="#"]'),T=document.querySelectorAll(".scroll-button");function g(e,t){e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}for(let e of I)e.addEventListener("click",function(t){const o=e.getAttribute("href").substr(1);g(t,o)});for(let e of T)e.addEventListener("click",function(t){const o=e.getAttribute("data-target");g(t,o)});document.addEventListener("scroll",C);let d=document.querySelector(".scroll__top");function C(){let e=document.documentElement.scrollHeight-document.documentElement.clientHeight,t=.1;document.documentElement.scrollTop/e>t?d.style.display="block":d.style.display="none"}d.addEventListener("click",D);function D(){window.scrollTo({top:0,behavior:"smooth"})}
