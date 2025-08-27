import{o as E,a as B,u as C,b as v,p as _,r as T,j as a,q as N,t as h,T as F,v as n,S as m,aF as p,I as o,z as R,A as w,at as S,E as I,B as c,F as U,K as k,x,N as z,h as b,Q as g,w as L,aG as W,W as Q,y as A,d as f}from"./index-DqWJ4ltY.js";import{D as M}from"./DualDatePicker-DAywv7BZ.js";import{D as $}from"./down-ico-6F8xpGpd.js";const V=E(()=>{const P=B(),{orderStore:e}=C(),i=v(),j=_(i.search),l=async(t,s,d,y=void 0)=>{try{y&&e.refundClearParams();let r=e.tableBaseStore.searchParams;s&&(r.size=s),t&&(r.page=t),d&&(r.sort=d);const D=x(r),u=A(D);P(`${i.pathname}${u}`),await e.orderFetchTable(u,"refund")}catch(r){console.log(r)}};return T.useEffect(()=>(e.setCurrentParams(j,"refund").catch(t=>{console.log(t)}),()=>{e.orderStoreClear()}),[]),a.jsxs(a.Fragment,{children:[a.jsx(q,{children:a.jsx(N,{title:"환불 조회"})}),a.jsxs(h,{children:[a.jsxs(F,{children:[a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"검색어"}),a.jsxs("div",{className:"content",children:[a.jsx("div",{className:"select-type",children:a.jsx(m,{option:p,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:t=>{e.tableBaseStore.setParamsChange("selectWord","",!0),e.tableBaseStore.setParamsChange("selectType",t.value,!0)},value:p.find(t=>t.value===e.tableBaseStore.searchParams.selectSearch?.selectType)||null})}),a.jsx(o,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.selectSearch?.selectWord,onChange:t=>{const s=t.target.value;e.tableBaseStore.searchParams.selectSearch.selectType==="customer_phone_number"&&!w(s)||e.tableBaseStore.setParamsChange("selectWord",s,!0)},onFocus:()=>{if(e.tableBaseStore.searchParams.selectSearch.selectType==="customer_phone_number"){const t=R(e.tableBaseStore.searchParams.selectSearch.selectWord);e.tableBaseStore.setParamsChange("selectWord",t,!0)}}})]})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"기간 검색"}),a.jsxs("div",{className:"content",children:[a.jsx(M,{startDate:e.tableBaseStore.searchParams.from?new Date(e.tableBaseStore.searchParams.from):null,endDate:e.tableBaseStore.searchParams.to?new Date(e.tableBaseStore.searchParams.to):null,onStartDateChange:t=>e.tableBaseStore.setStartDate(t),onEndDateChange:t=>e.tableBaseStore.setEndDate(t),placeholderTextStart:"시작 날짜 선택",placeholderTextEnd:"종료 날짜 선택"}),a.jsx(O,{children:S.length>0&&S.map(t=>a.jsx("div",{className:`date-select-list ${e.getActiveDateKey()===t.value?"active":""}`,onClick:()=>e.setQuickDateSelect(t.value),children:t.label},t.value))})]})]}),a.jsxs(n,{children:[a.jsx("div",{className:"title",children:"환불상태"}),a.jsxs("div",{className:"content",children:[a.jsx(o,{labelFor:"refund_all",labelName:"전체",inputType:"radio",name:"refund_type_group",id:"refund_all",checked:e.tableBaseStore.searchParams.order_status==="all",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","all")}}),a.jsx(o,{labelFor:"REFUND_REQUESTED",labelName:"환불접수",inputType:"radio",name:"refund_type_group",id:"REFUND_REQUESTED",checked:e.tableBaseStore.searchParams.order_status==="REFUND_REQUESTED",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","REFUND_REQUESTED")}}),a.jsx(o,{labelFor:"REFUNDED",labelName:"환불완료",inputType:"radio",name:"refund_type_group",id:"REFUNDED",checked:e.tableBaseStore.searchParams.order_status==="REFUNDED",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","REFUNDED")}})]})]})]}),a.jsxs(I,{children:[a.jsx(c,{type:"solid",size:"xl",text:"초기화",icon:()=>a.jsx(U,{color:"#899854",size:16}),onClickFunc:async()=>{await l(1,10,void 0,!0)}}),a.jsx(c,{type:"fill",size:"xl",text:"검색",onClickFunc:async()=>{await l(1,void 0,void 0,!1)}})]})]}),a.jsxs(h,{children:[a.jsxs(k,{className:"bt",$gap:20,children:[a.jsx(c,{type:"fill",size:"m",text:"다운로드",round:!0,icon:()=>a.jsx("img",{src:$,alt:"다운로드"}),onClickFunc:async()=>{try{const t=x(e.tableBaseStore.searchParams),s=await e.getMemberListDown(t);s?.data?z(s.data,"환불주문"):b("warning","다운로드 데이터가 없습니다.")}catch(t){console.error("다운로드 실패",t),b("warning","다운로드 중 오류가 발생했습니다.")}}}),a.jsx(m,{option:g,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async t=>{await l(1,t.value,e.tableBaseStore.searchParams.sort,!1)},value:g.find(t=>t.value===e.tableBaseStore.searchParams.size)||null})]}),a.jsx(L,{data:e.orderList,columns:W,offset:e.tableBaseStore.searchParams.page,dataAllCount:e.orderListPageInfo?.total_elements}),e.orderListPageInfo&&e.orderListPageInfo.total_elements>10&&a.jsx(Q,{totalItems:e.orderListPageInfo.total_elements??0,itemCountPerPage:e.tableBaseStore.searchParams?.size,pageCount:5,currentPage:e.tableBaseStore.searchParams?.page,setPageIndex:async t=>{e.tableBaseStore.setParamsChange("page",t)},setPage:async t=>{await l(t,e.tableBaseStore.searchParams?.size,e.tableBaseStore.searchParams.sort,!1)}})]})]})}),q=f.div`
    display: flex;
    justify-content: space-between;
`,O=f.div`
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
`;export{V as default};
