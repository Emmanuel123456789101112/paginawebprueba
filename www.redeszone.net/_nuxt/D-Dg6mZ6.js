const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CFgtQW9Z.js","./oPhCY1eG.js","./entry.DFwSGy_I.css","./Ad.BZYh3QDH.css","./BGfelxWQ.js","./FloatingSites.BabZCRoH.css"])))=>i.map(i=>d[i]);
import{m as g,b as x,G as _,a as L,z,g as A,o as M,h as t,p as e,ai as S,k as a,aj as E,f as m,Q as w,ak as D,q as T,_ as l,I as b}from"./oPhCY1eG.js";import{u as C,_ as G}from"./CTL-rhZQ.js";import{_ as H}from"./DkAksV3r.js";import{_ as I}from"./ClLhWEFj.js";import{A as d}from"./BXA7Vo6b.js";import{s as P}from"./MzOL117u.js";import"./CM8DOhej.js";import"./x_rD_Ya3.js";const O=m(()=>l(()=>import("./CFgtQW9Z.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(s=>s.default||s)),R=m(()=>l(()=>import("./BGfelxWQ.js"),__vite__mapDeps([4,1,2,5]),import.meta.url).then(s=>s.default||s)),V={class:"main-wrapper"},$={class:"main-container"},j={class:"ad-skyscraper ad-skyscraper--left"},B={class:"ad-skyscraper__sticky-content"},N={class:"ad-leaderboard"},q={class:"main-container__inner"},F={class:"ad-skyscraper ad-skyscraper--right"},Q={class:"ad-skyscraper__sticky-content"},J={__name:"default",setup(s){const p=x(),u=_(()=>p.path==="/"),o=b("content",void 0),n=_(()=>o&&o.data&&o.data.adsTarget?o.data.adsTarget:"home=1");return L({script:[{children:`(function(){
                    try {
                        const cookieMatch = document.cookie.match(/(?:^|;)\\s*dark=(\\d)/);
                        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

                        if (cookieMatch) {
                            if (cookieMatch[1] === '1') {
                                document.documentElement.classList.add('dark');
                            }
                        } else if (prefersDark) {
                            document.documentElement.classList.add('dark');
                        }
                    } catch (e) {
                        console.error('[ColorScheme] detection error:', e);
                    }
                })();`,tagPosition:"head",type:"text/javascript"}]}),z(async()=>{const{loadAllScripts:r}=C();r(),P()}),(r,i)=>{const f=S,k=G,h=E,c=O,y=R,v=H;return M(),A("div",null,[t(f),t(k),e("div",V,[t(h,{isHome:a(u)},null,8,["isHome"]),e("div",$,[e("div",j,[e("div",B,[t(c,{class:"skyscraper","format-i-d":a(d).skyscraperLeft,target:a(n),device:"desktop"},null,8,["format-i-d","target"])])]),e("div",N,[t(c,{class:"leaderboard","format-i-d":a(d).leaderboard,target:a(n),device:"desktop"},null,8,["format-i-d","target"])]),e("main",q,[w(r.$slots,"default",{},void 0,!0)]),e("div",F,[e("div",Q,[t(c,{class:"skyscraper","format-i-d":a(d).skyscraperRight,target:a(n),device:"desktop"},null,8,["format-i-d","target"])])])]),t(D),t(I),t(v,null,{default:T(()=>[t(y)]),_:1}),i[0]||(i[0]=e("div",{id:"t-pixel"},null,-1))])])}}},at=g(J,[["__scopeId","data-v-136c6947"]]);export{at as default};
