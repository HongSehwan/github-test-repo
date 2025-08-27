import{o as j,a as C,u as E,b as v,p as _,r as T,j as t,q as N,t as p,T as R,v as c,S as g,aF as S,I as n,z as w,h as i,A as F,D as I,at as b,F as U,B as d,G as k,N as z,x,P as L,R as f,w as W,aG as Q,X as A,y as M,d as P}from"./index-_13rErVL.js";import{D as $}from"./DualDatePicker-DBN1_Ua6.js";import{D as q}from"./down-ico-6F8xpGpd.js";const X=j(()=>{const D=C(),{orderStore:e}=E(),u=v(),y=_(u.search),l=async(a,s,o,h=void 0)=>{try{h&&e.refundClearParams();let r=e.tableBaseStore.searchParams;s&&(r.size=s),a&&(r.page=a),o&&(r.sort=o);const B=x(r),m=M(B);D(`${u.pathname}${m}`),await e.orderFetchTable(m,"refund")}catch(r){console.log(r)}};return T.useEffect(()=>(e.setCurrentParams(y,"refund").catch(a=>{console.log(a)}),()=>{e.orderStoreClear()}),[]),t.jsxs(t.Fragment,{children:[t.jsx(O,{children:t.jsx(N,{title:"환불 조회"})}),t.jsxs(p,{children:[t.jsxs(R,{children:[t.jsxs(c,{children:[t.jsx("div",{className:"title",children:"검색어"}),t.jsxs("div",{className:"content",children:[t.jsx("div",{className:"select-type",children:t.jsx(g,{option:S,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:a=>{e.tableBaseStore.setParamsChange("selectWord","",!0),e.tableBaseStore.setParamsChange("selectType",a.value,!0)},value:S.find(a=>a.value===e.tableBaseStore.searchParams.selectSearch?.selectType)||null})}),t.jsx(n,{inputType:"text",placeholder:"입력해주세요",width:"fill",value:e.tableBaseStore.searchParams.selectSearch?.selectWord,onChange:a=>{const s=a.target.value;e.tableBaseStore.searchParams.selectSearch.selectType==="customer_phone_number"&&!I(s)||e.tableBaseStore.setParamsChange("selectWord",s,!0)},onFocus:()=>{if(e.tableBaseStore.searchParams.selectSearch.selectType==="customer_phone_number"){const a=F(e.tableBaseStore.searchParams.selectSearch.selectWord);e.tableBaseStore.setParamsChange("selectWord",a,!0)}},onBlur:a=>{const s=a.target.value;if(e.tableBaseStore.searchParams.selectSearch.selectType==="phone"){const o=w(s);if(s.replace(/\D/g,"").length>11){i("warning","전화번호는 최소 11자 입니다."),memberStore.tableBaseStore.setParamsChange("selectWord","",!0);return}e.tableBaseStore.setParamsChange("selectWord",o,!0)}}})]})]}),t.jsxs(c,{children:[t.jsx("div",{className:"title",children:"기간 검색"}),t.jsxs("div",{className:"content",children:[t.jsx($,{startDate:e.tableBaseStore.searchParams.from?new Date(e.tableBaseStore.searchParams.from):null,endDate:e.tableBaseStore.searchParams.to?new Date(e.tableBaseStore.searchParams.to):null,onStartDateChange:a=>e.tableBaseStore.setStartDate(a),onEndDateChange:a=>e.tableBaseStore.setEndDate(a),placeholderTextStart:"시작 날짜 선택",placeholderTextEnd:"종료 날짜 선택"}),t.jsx(G,{children:b.length>0&&b.map(a=>t.jsx("div",{className:`date-select-list ${e.getActiveDateKey()===a.value?"active":""}`,onClick:()=>e.setQuickDateSelect(a.value),children:a.label},a.value))})]})]}),t.jsxs(c,{children:[t.jsx("div",{className:"title",children:"환불상태"}),t.jsxs("div",{className:"content",children:[t.jsx(n,{labelFor:"refund_all",labelName:"전체",inputType:"radio",name:"refund_type_group",id:"refund_all",checked:e.tableBaseStore.searchParams.order_status==="all",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","all")}}),t.jsx(n,{labelFor:"REFUND_REQUESTED",labelName:"환불접수",inputType:"radio",name:"refund_type_group",id:"REFUND_REQUESTED",checked:e.tableBaseStore.searchParams.order_status==="REFUND_REQUESTED",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","REFUND_REQUESTED")}}),t.jsx(n,{labelFor:"REFUNDED",labelName:"환불완료",inputType:"radio",name:"refund_type_group",id:"REFUNDED",checked:e.tableBaseStore.searchParams.order_status==="REFUNDED",onChange:()=>{e.tableBaseStore.setParamsChange("order_status","REFUNDED")}})]})]})]}),t.jsxs(U,{children:[t.jsx(d,{type:"solid",size:"xl",text:"초기화",icon:()=>t.jsx(k,{color:"#899854",size:16}),onClickFunc:async()=>{await l(1,10,void 0,!0)}}),t.jsx(d,{type:"fill",size:"xl",text:"검색",onClickFunc:async()=>{await l(1,void 0,void 0,!1)}})]})]}),t.jsxs(p,{children:[t.jsxs(z,{className:"bt",$gap:20,children:[t.jsx(d,{type:"fill",size:"m",text:"다운로드",round:!0,icon:()=>t.jsx("img",{src:q,alt:"다운로드"}),onClickFunc:async()=>{try{const a=x(e.tableBaseStore.searchParams),s=await e.getMemberListDown(a);s?.data?L(s.data,"환불주문"):i("warning","다운로드 데이터가 없습니다.")}catch(a){console.error("다운로드 실패",a),i("warning","다운로드 중 오류가 발생했습니다.")}}}),t.jsx(g,{option:f,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async a=>{await l(1,a.value,e.tableBaseStore.searchParams.sort,!1)},value:f.find(a=>a.value===e.tableBaseStore.searchParams.size)||null})]}),t.jsx(W,{data:e.orderList,columns:Q,offset:e.tableBaseStore.searchParams.page,dataAllCount:e.orderListPageInfo?.total_elements}),e.orderListPageInfo&&e.orderListPageInfo.total_elements>10&&t.jsx(A,{totalItems:e.orderListPageInfo.total_elements??0,itemCountPerPage:e.tableBaseStore.searchParams?.size,pageCount:5,currentPage:e.tableBaseStore.searchParams?.page,setPageIndex:async a=>{e.tableBaseStore.setParamsChange("page",a)},setPage:async a=>{await l(a,e.tableBaseStore.searchParams?.size,e.tableBaseStore.searchParams.sort,!1)}})]})]})}),O=P.div`
    display: flex;
    justify-content: space-between;
`,G=P.div`
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
`;export{X as default};
