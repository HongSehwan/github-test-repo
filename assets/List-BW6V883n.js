import{j as s,d as n,o as S,r as l,u as Q,q as Y,t as k,T as H,v as O,S as T,B as M,w as V,am as j}from"./index-DqWJ4ltY.js";import{g as X}from"./index-RXHptADs.js";const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dAxDQAgDAXRk4YEpCABB+AMCUiBDpAwkEA79yU3/g4F91KlglGWxiqhFI/xLij2tMuBjoH/wH2ZLRYch4nHGsIAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABFSURBVHgB7cxBCQAgEETRAQtYwQY2soIRbLY2MoKuoCCedE+C++HdhgG0dzMHG2KOZQhLrA4BguJy0BXmbw7sdjARtB9r7A8O1z8BIi4AAAAASUVORK5CYII=",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgB7cyxDQAgCETRG80RHMUNHMHRHMFR1IKCEBqoCOElv7wDSlznd0XbctCUgw6jwcYTTosquT1zHg5CkMawoAAAAABJRU5ErkJggg==",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgBtc0xDQAwCAXRk1YJlVIHlVBplVAphYEQQli55C0wfICnfnIVo3hMrBWOm9QxXveGAHZYHIOOQ+xZAAAAAElFTkSuQmCC",x=({name:d,onClick:u})=>{const p={first:L,prev:N,next:_,last:D};return s.jsx(z,{type:"button",onClick:u,children:s.jsx("img",{src:p[d],alt:d})})},z=n.button`
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
`,te=S(()=>{const[d,u]=l.useState([]),[p,$]=l.useState(1),[h,m]=l.useState([]),{categoryStore:i}=Q(),[C,f]=l.useState(""),B=async o=>{let r=`/api/admin/categories/${p}`;o&&(r=`/api/admin/categories/${o}`);const t=await j.get(r);console.log("response",t),m(t.data.data.goods_list)},y=async()=>{let r=(await i.fetchAllCategories()).map(t=>({value:t.id,label:t.name}));u(r)};l.useEffect(()=>{y(),B()},[]);const c=async o=>{const r=[...i.tableBaseStore.checkedMap.category];if(r.length===0)return;let t=[...h];const R=r.map(e=>t[e]);switch(o){case"first":{const e=r.map(a=>t[a]);t=t.filter((a,A)=>!r.includes(A)),t=[...e,...t];break}case"prev":r.forEach(e=>{e>0&&([t[e-1],t[e]]=[t[e],t[e-1]])});break;case"next":r.sort((e,a)=>a-e),r.forEach(e=>{e<t.length-1&&([t[e],t[e+1]]=[t[e+1],t[e]])});break;case"last":{const e=t.filter((a,A)=>r.includes(A));t=t.filter((a,A)=>!r.includes(A)),t=[...t,...e];break}case"value":{let e=Math.max(0,C-1);const a=r.map(g=>t[g]),A=t.filter((g,v)=>!r.includes(v)),I=A.filter(g=>g.sort_order===0).length;e+=I,t=[...A.slice(0,e),...a,...A.slice(e)];break}}let E=1;t=t.map(e=>{const a=R.some(A=>A.primary_name===e.primary_name);return e.sort_order===0&&!a?e:{...e,sort_order:E++}});const U=t.map(e=>({goods_id:e.goods_id,sort_order:e.sort_order}));try{const e=await j.patch(`/api/admin/categories/${p}/goods/sort-orders`,U,{headers:{"Content-Type":"application/json"}});e&&(m(e.data.data.goods_list),f(""),i.tableBaseStore.setChecked([]))}catch(e){console.error("카테고리 순서 변경 실패",e)}i.tableBaseStore.setDeleteCheckedMap()};return s.jsxs(s.Fragment,{children:[s.jsx(G,{children:s.jsx(Y,{title:"상품 진열"})}),s.jsxs(k,{children:[s.jsxs(w,{children:[s.jsx(b,{children:"카테고리 선택"}),s.jsx(K,{children:s.jsx(H,{children:s.jsxs(O,{children:[s.jsx("div",{className:"title",children:"카테고리 선택"}),s.jsx("div",{className:"content",children:s.jsx("div",{className:"select-type",children:s.jsx(T,{option:d,size:"m",type:"solid",placeholder:"카테고리 선택",onChange:o=>B(o.value)})})})]})})})]}),s.jsxs(w,{children:[s.jsx(b,{children:"진열 상품"}),s.jsxs(W,{children:[s.jsxs(F,{children:[s.jsxs(J,{children:[s.jsx(x,{name:"first",onClick:()=>c("first")}),s.jsx(x,{name:"prev",onClick:()=>c("prev")}),s.jsx(x,{name:"next",onClick:()=>c("next")}),s.jsx(x,{name:"last",onClick:()=>c("last")})]}),s.jsxs(q,{children:["선택한 상품을",s.jsx(Z,{type:"number",value:C,onChange:o=>f(o.target.value)}),"번 위치로",s.jsx(M,{type:"fill",size:"s",text:"이동",round:!0,onClickFunc:()=>{c("value")}})]})]}),s.jsx(V,{data:h,store:i,columns:X,checkType:"category"})]})]})]})]})}),G=n.div`
  display: flex;
  justify-content: space-between;
`,w=n.article`
  margin-top: 35px;
  &:first-child {
    margin-top: 0;
  }
`,b=n.h2`
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
