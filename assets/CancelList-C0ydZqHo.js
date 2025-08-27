import{o as y,a as C,b as v,u as D,p as w,r as I,j as a,q as L,t as d,T,v as u,I as z,at as h,F as _,B as c,G as E,J as N,K as k,N as A,x as b,y as m,P as F,h as x,S as p,aM as S,R as g,w as R,aN as W,X as M,d as Q}from"./index-_13rErVL.js";import{D as $}from"./DualDatePicker-DBN1_Ua6.js";import{D as q}from"./down-ico-6F8xpGpd.js";const H=y(()=>{const P=C(),o=v(),{subscribeStore:e}=D(),f=w(o.search),r=async(s,n,l,j=void 0)=>{try{j&&e.clearParams("cancel");let t=e.tableBaseStore.searchParams;n&&(t.size=n),s&&(t.page=s),l&&(t.sort=l);const B=b(t),i=m(B);P(`${o.pathname}${i}`),await e.subscribeFetchTable(i,"cancel")}catch(t){console.log(t)}};return I.useEffect(()=>(e.setCurrentParams(f,"cancel").catch(s=>{console.log(s)}),()=>{e.subscribeStoreClear()}),[]),a.jsxs(a.Fragment,{children:[a.jsx(L,{title:"구독 해지 조회"}),a.jsxs(d,{children:[a.jsxs(T,{children:[a.jsxs(u,{children:[a.jsx("div",{className:"title",children:"구독 ID"}),a.jsx("div",{className:"content",children:a.jsx(z,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.subscription_number,onChange:s=>{e.tableBaseStore.setParamsChange("subscription_number",s.target.value)}})})]}),a.jsxs(u,{children:[a.jsx("div",{className:"title",children:"구독해지 일"}),a.jsxs("div",{className:"content",children:[a.jsx($,{startDate:e.tableBaseStore.searchParams.from?new Date(e.tableBaseStore.searchParams.from):null,endDate:e.tableBaseStore.searchParams.to?new Date(e.tableBaseStore.searchParams.to):null,onStartDateChange:s=>e.tableBaseStore.setStartDate(s),onEndDateChange:s=>e.tableBaseStore.setEndDate(s),placeholderTextStart:"시작 날짜 선택",placeholderTextEnd:"종료 날짜 선택"}),a.jsx(O,{children:h.length>0&&h.map(s=>a.jsx("div",{className:`date-select-list ${e.getActiveDateKey()===s.value?"active":""}`,onClick:()=>e.setQuickDateSelect(s.value),children:s.label},s.value))})]})]})]}),a.jsxs(_,{children:[a.jsx(c,{type:"solid",size:"xl",text:"초기화",icon:()=>a.jsx(E,{color:"#899854",size:16}),onClickFunc:async()=>{await r(1,10,"canceledAt",!0)}}),a.jsx(c,{type:"fill",size:"xl",text:"검색",onClickFunc:async()=>{await r(1,void 0,e.tableBaseStore.searchParams.sort,!1)}})]})]}),a.jsxs(d,{children:[a.jsxs(N,{children:[a.jsxs(k,{children:[a.jsxs("div",{className:"summary",children:["검색: ",a.jsx("span",{children:e.subscribeList.length??0}),"명"]}),a.jsx("span",{children:"/"}),a.jsxs("div",{className:"summary",children:["전체: ",a.jsx("span",{children:e.subscribeListPageInfo?.total_elements??0}),"명"]})]}),a.jsxs(A,{$gap:20,children:[a.jsx(c,{type:"fill",size:"m",text:"다운로드",round:!0,icon:()=>a.jsx("img",{src:q,alt:"다운로드"}),onClickFunc:async()=>{try{const s=b(e.tableBaseStore.searchParams),n=m(s),l=await e.getSubscribeListDown(n,"cancel");l?.data?(F(l.data,"구독 리스트"),e.tableBaseStore.setChecked()):x("warning","다운로드 데이터가 없습니다.")}catch(s){console.error("다운로드 실패",s),x("warning","다운로드 중 오류가 발생했습니다.")}}}),a.jsx(p,{option:S,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await r(e.tableBaseStore.searchParams.page,e.tableBaseStore.searchParams.size,s.value,!1)},value:S.find(s=>s.value===e.tableBaseStore.searchParams.sort)||null}),a.jsx(p,{option:g,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await r(1,s.value,e.tableBaseStore.searchParams.sort,!1)},value:g.find(s=>s.value===e.tableBaseStore.searchParams.size)||null})]})]}),a.jsx(R,{data:e.subscribeList,store:e,columns:W,offset:e.tableBaseStore.searchParams.page,dataAllCount:e.subscribeListPageInfo?.total_elements}),e.subscribeListPageInfo&&e.subscribeListPageInfo.total_elements>10&&a.jsx(M,{totalItems:e.subscribeListPageInfo.total_elements??0,itemCountPerPage:e.tableBaseStore.searchParams?.size,pageCount:5,currentPage:e.tableBaseStore.searchParams?.page,setPageIndex:async s=>{e.tableBaseStore.setParamsChange("page",s)},setPage:async s=>{await r(s,e.tableBaseStore.searchParams?.size,e.tableBaseStore.searchParams.sort,!1)}})]})]})}),O=Q.div`
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
`;export{H as default};
