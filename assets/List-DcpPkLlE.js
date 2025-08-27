import{j as s,d as n,o as S,r as i,u as Q,q as Y,t as k,T as O,v as H,S as T,B as V,w as X,am as w}from"./index-_13rErVL.js";import{g as L}from"./index-C2ZIPAG0.js";const _="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dAxDQAgDAXRk4YEpCABB+AMCUiBDpAwkEA79yU3/g4F91KlglGWxiqhFI/xLij2tMuBjoH/wH2ZLRYch4nHGsIAAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABFSURBVHgB7cxBCQAgEETRAQtYwQY2soIRbLY2MoKuoCCedE+C++HdhgG0dzMHG2KOZQhLrA4BguJy0BXmbw7sdjARtB9r7A8O1z8BIi4AAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgB7cyxDQAgCETRG80RHMUNHMHRHMFR1IKCEBqoCOElv7wDSlznd0XbctCUgw6jwcYTTosquT1zHg5CkMawoAAAAABJRU5ErkJggg==",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgBtc0xDQAwCAXRk1YJlVIHlVBplVAphYEQQli55C0wfICnfnIVo3hMrBWOm9QxXveGAHZYHIOOQ+xZAAAAAElFTkSuQmCC",x=({name:d,onClick:u})=>{const l={first:_,prev:M,next:N,last:z};return s.jsx(D,{type:"button",onClick:u,children:s.jsx("img",{src:l[d],alt:d})})},D=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  margin-left: -1px;

  img {
    width: auto;
  }
`,te=S(()=>{const[d,u]=i.useState([]),[l,$]=i.useState(1),[m,h]=i.useState([]),{categoryStore:p}=Q(),[C,f]=i.useState(""),B=async a=>{let r=`/api/admin/categories/${l}`;a&&(r=`/api/admin/categories/${a}`);const t=await w.get(r);console.log("response",t),h(t.data.data.goods_list)},R=async()=>{let r=(await p.fetchAllCategories()).map(t=>({value:t.id,label:t.name}));u(r)};i.useEffect(()=>{R(),B()},[]),i.useEffect(()=>{},[m]);const c=async a=>{const r=[...p.tableBaseStore.checkedList];if(r.length===0)return;let t=[...m];const E=r.map(e=>t[e]);switch(a){case"fixed":{r.forEach(e=>{t[e].sort_order=0});break}case"first":{const e=r.map(o=>t[o]);t=t.filter((o,A)=>!r.includes(A)),t=[...e,...t];break}case"prev":r.forEach(e=>{e>0&&([t[e-1],t[e]]=[t[e],t[e-1]])});break;case"next":r.sort((e,o)=>o-e),r.forEach(e=>{e<t.length-1&&([t[e],t[e+1]]=[t[e+1],t[e]])});break;case"last":{const e=t.filter((o,A)=>r.includes(A));t=t.filter((o,A)=>!r.includes(A)),t=[...t,...e];break}case"value":{let e=Math.max(0,C-1);const o=r.map(g=>t[g]),A=t.filter((g,v)=>!r.includes(v)),I=A.filter(g=>g.sort_order===0).length;e+=I,t=[...A.slice(0,e),...o,...A.slice(e)];break}}let U=1;t=t.map(e=>{const o=E.some(A=>A.primary_name===e.primary_name);return e.sort_order===0&&!o?e:{...e,sort_order:U++}});const j=t.map(e=>({goods_id:e.goods_id,sort_order:e.sort_order}));console.log("editOrderBody",j);try{const e=await w.patch(`/api/admin/categories/${l}/goods/sort-orders`,j,{headers:{"Content-Type":"application/json"}});e&&(h(e.data.data.goods_list),f(""),p.tableBaseStore.setChecked([]))}catch(e){console.error("카테고리 순서 변경 실패",e)}};return s.jsxs(s.Fragment,{children:[s.jsx(G,{children:s.jsx(Y,{title:"상품 진열"})}),s.jsxs(k,{children:[s.jsxs(b,{children:[s.jsx(y,{children:"카테고리 선택"}),s.jsx(K,{children:s.jsx(O,{children:s.jsxs(H,{children:[s.jsx("div",{className:"title",children:"카테고리 선택"}),s.jsx("div",{className:"content",children:s.jsx(T,{option:d,size:"m",type:"solid",placeholder:"카테고리 선택",onChange:a=>B(a.value)})})]})})})]}),s.jsxs(b,{children:[s.jsx(y,{children:"진열 상품"}),s.jsxs(W,{children:[s.jsxs(F,{children:[s.jsxs(J,{children:[s.jsx(x,{name:"first",onClick:()=>c("first")}),s.jsx(x,{name:"prev",onClick:()=>c("prev")}),s.jsx(x,{name:"next",onClick:()=>c("next")}),s.jsx(x,{name:"last",onClick:()=>c("last")})]}),s.jsxs(q,{children:["선택한 상품을",s.jsx(Z,{type:"number",value:C,onChange:a=>f(a.target.value)}),"번 위치로",s.jsx(V,{type:"fill",size:"s",text:"이동",round:!0,onClickFunc:()=>{c("value")}})]})]}),s.jsx(X,{data:m,store:p,columns:L})]})]})]})]})}),G=n.div`
  display: flex;
  justify-content: space-between;
`,b=n.article`
  margin-top: 35px;
  &:first-child {
    margin-top: 0;
  }
`,y=n.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`,K=n.div``,F=n.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  font-size: 12px;
  border-top: 1px solid #dedcec;
  border-bottom: 1px solid #dedcec;
  background-color: #f3f2f9;
`,W=n.div``,q=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,J=n.div`
  display: flex;
  align-items: center;
`,Z=n.input`
  border: 1px solid #d1d1d1;
  width: 80px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  text-align: right;
`;export{te as default};
