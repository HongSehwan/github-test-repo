import{o as D,a as k,b as w,u as N,p as T,r as I,j as a,q as L,t as x,T as z,v as n,I as c,aJ as g,z as E,h as u,A,D as R,at as S,F,B as m,G as W,J as $,K as O,N as Q,x as P,y as j,P as q,S as B,aK as f,R as v,w as K,aO as M,X as U,d as C}from"./index-_13rErVL.js";import{D as J}from"./DualDatePicker-DBN1_Ua6.js";import{D as G}from"./down-ico-6F8xpGpd.js";const ae=D(()=>{const y=k(),b=w(),{subscribeStore:e}=N(),_=T(b.search),o=async(s,t,r,d=void 0)=>{try{d&&(e.clearParams(),e.tableBaseStore.setChecked());let l=e.tableBaseStore.searchParams;t&&(l.size=t),s&&(l.page=s),r&&(l.sort=r);const h=P(l),i=j(h);y(`${b.pathname}${i}`),await e.subscribeFetchTable(i)}catch(l){console.log(l)}};return I.useEffect(()=>(e.setCurrentParams(_).catch(s=>{console.log(s)}),()=>{e.subscribeStoreClear()}),[]),a.jsxs(H,{children:[a.jsx(L,{title:"구독 상품 조회"}),a.jsxs(x,{children:[a.jsxs(z,{children:[a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"구독 ID"}),a.jsx("div",{className:"content",children:a.jsx(c,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.subscription_number,onChange:s=>{e.tableBaseStore.setParamsChange("subscription_number",s.target.value)}})})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"회원 ID"}),a.jsx("div",{className:"content",children:a.jsx(c,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.user_id,onChange:s=>{e.tableBaseStore.setParamsChange("user_id",s.target.value)}})})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"팩 네임"}),a.jsx("div",{className:"content",children:a.jsx(c,{inputType:"text",placeholder:"입력해주세요",value:e.tableBaseStore.searchParams.pack_name,onChange:s=>{e.tableBaseStore.setParamsChange("pack_name",s.target.value)}})})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"구독 상태"}),a.jsxs("div",{className:"content",children:[a.jsx(c,{inputType:"checkbox",id:"list-all-check",labelName:"전체",checked:e.tableBaseStore.searchParams.status==="all",onChange:s=>{s.target.checked&&e.tableBaseStore.setParamsChange("status","all")}}),g.map((s,t)=>{const r=e.tableBaseStore.searchParams.status||"",l=(r==="all"?[]:r.split(",")).includes(s.value);return a.jsx("div",{children:a.jsx(c,{inputType:"checkbox",id:`list-check-${t}`,labelName:s.label,checked:l,onChange:h=>{const i=h.target.checked;e.tableBaseStore.setSearchCheckedSingle(i,s.value,g,"status");const p=e.tableBaseStore.searchParams.status||"";(p==="all"?[]:p.split(",").filter(Boolean)).length===0&&e.tableBaseStore.setParamsChange("status","all")}})},t)})]})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"주문자 휴대폰 번호"}),a.jsx("div",{className:"content",children:a.jsx(c,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.customer_phone_number,onChange:s=>{const t=s.target.value;R(t)&&e.tableBaseStore.setParamsChange("customer_phone_number",t)},onFocus:()=>{const s=A(e.tableBaseStore.searchParams.customer_phone_number);e.tableBaseStore.setParamsChange("customer_phone_number",s)},onBlur:s=>{const t=s.target.value,r=E(t);if(t.replace(/\D/g,"").length>11){u("warning","전화번호는 최소 11자 입니다."),e.tableBaseStore.setParamsChange("customer_phone_number","");return}e.tableBaseStore.setParamsChange("customer_phone_number",r)}})})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"다음 결제 예정일"}),a.jsxs("div",{className:"content",children:[a.jsx(J,{startDate:e.tableBaseStore.searchParams.from?new Date(e.tableBaseStore.searchParams.from):null,endDate:e.tableBaseStore.searchParams.to?new Date(e.tableBaseStore.searchParams.to):null,onStartDateChange:s=>e.tableBaseStore.setStartDate(s),onEndDateChange:s=>e.tableBaseStore.setEndDate(s),placeholderTextStart:"시작 날짜 선택",placeholderTextEnd:"종료 날짜 선택"}),a.jsx(V,{children:S.length>0&&S.map(s=>a.jsx("div",{className:`date-select-list ${e.getActiveDateKey()===s.value?"active":""}`,onClick:()=>e.setQuickDateSelect(s.value),children:s.label},s.value))})]})]})]}),a.jsxs(F,{children:[a.jsx(m,{type:"solid",size:"xl",text:"초기화",icon:()=>a.jsx(W,{color:"#899854",size:16}),onClickFunc:async()=>{await o(1,10,"subscribeAsc",!0)}}),a.jsx(m,{type:"fill",size:"xl",text:"검색",onClickFunc:async()=>{await o(1,void 0,e.tableBaseStore.searchParams.sort,!1)}})]})]}),a.jsxs(x,{children:[a.jsxs($,{children:[a.jsxs(O,{children:[a.jsxs("div",{className:"summary",children:["검색: ",a.jsx("span",{children:e.subscribeList.length??0}),"명"]}),a.jsx("span",{children:"/"}),a.jsxs("div",{className:"summary",children:["전체: ",a.jsx("span",{children:e.subscribeListPageInfo?.total_elements??0}),"명"]})]}),a.jsxs(Q,{$gap:10,children:[a.jsx(m,{type:"fill",size:"m",text:"다운로드",round:!0,icon:()=>a.jsx("img",{src:G,alt:"다운로드"}),onClickFunc:async()=>{try{const s=P(e.tableBaseStore.searchParams),t=j(s),r=await e.getSubscribeListDown(t);r?.data?(q(r.data,"구독 리스트"),e.tableBaseStore.setChecked()):u("warning","다운로드 데이터가 없습니다.")}catch(s){console.error("다운로드 실패",s),u("warning","다운로드 중 오류가 발생했습니다.")}}}),a.jsx(B,{option:f,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await o(e.tableBaseStore.searchParams.page,e.tableBaseStore.searchParams.size,s.value,!1)},value:f.find(s=>s.value===e.tableBaseStore.searchParams.sort)||null}),a.jsx(B,{option:v,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await o(1,s.value,e.tableBaseStore.searchParams.sort,!1)},value:v.find(s=>s.value===e.tableBaseStore.searchParams.size)||null})]})]}),a.jsx(K,{data:e.subscribeList,columns:M,offset:e.tableBaseStore.searchParams.page,dataAllCount:e.subscribeListPageInfo?.total_elements}),e.subscribeListPageInfo&&e.subscribeListPageInfo.total_elements>10&&a.jsx(U,{totalItems:e.subscribeListPageInfo.total_elements??0,itemCountPerPage:e.tableBaseStore.searchParams?.size,pageCount:5,currentPage:e.tableBaseStore.searchParams?.page,setPageIndex:async s=>{e.tableBaseStore.setParamsChange("page",s)},setPage:async s=>{await o(s,e.tableBaseStore.searchParams?.size,e.tableBaseStore.searchParams.sort,!1)}})]})]})}),H=C.div`
    .row-image-line {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #eee;

        &:last-child {
            border-bottom: none;
        }
    }
`,V=C.div`
    display: flex;
    align-items: center;

    .date-select-list {
        width: 80px;
        height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #eee;
        border-right: none;
        background-color: #fff;

        &:last-child {
            border-right: 1px solid #eee;
        }

        &.active {
            background-color: #333;
            color: #fff;
        }
    }
`;export{ae as default};
