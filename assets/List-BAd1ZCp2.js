import{l,j as a,m as x,n as y,o as v,u as j,a as S,p as _,r as C,q as g,t as c,T as w,v as B,S as d,w as P,x as f,y as T,d as L}from"./index-DqWJ4ltY.js";const h=[{value:"days_type",label:"일자별 요약"},{value:"months_type",label:"월별 요약"}],u=[{value:2025,label:"2025년"},{value:2024,label:"2024년"}],b=[{value:1,label:"1월"},{value:2,label:"2월"},{value:3,label:"3월"},{value:4,label:"4월"},{value:5,label:"5월"},{value:6,label:"6월"},{value:7,label:"7월"},{value:8,label:"8월"},{value:9,label:"9월"},{value:10,label:"10월"},{value:11,label:"11월"},{value:12,label:"12월"}],D=()=>[{label:"일자",width:"150px",render:(e,t)=>a.jsx("div",{children:y().tableBaseStore.searchParams.type==="days_type"?`${t.date} (${x(t.date)})`:`${t.date}`})},{label:"전체 주문",width:"150px",render:(e,t)=>t.total_orders},{label:"신규 주문",width:"150px",render:(e,t)=>t.new_orders},{label:"정기구독 주문",width:"150px",render:(e,t)=>t.subscription_orders},{label:"구독 해지",width:"150px",render:(e,t)=>t.subscription_cancelled},{label:"일시 중지",width:"150px",render:(e,t)=>t.subscription_paused},{label:"매출",width:"150px",render:(e,t)=>`${l(t.sales_amount)}원`},{label:"화원가입",width:"150px",render:(e,t)=>t.new_members}],$=v(()=>{const{dashBoardStore:e}=j(),t=S(),m=_(location.search),o=async(s,r)=>{try{switch(s){case"type":if(e.tableBaseStore.setParamsChange(s,r),r==="months_type")e.tableBaseStore.setParamsChange("month",null);else if(r==="days_type"&&!e.tableBaseStore.searchParams.month){const p=new Date;e.tableBaseStore.setParamsChange("month",p.getMonth()+1)}break;case"year":e.tableBaseStore.setParamsChange(s,r);break;case"month":e.tableBaseStore.setParamsChange(s,r);break}const n=f(e.tableBaseStore.searchParams),i=T(n);t(`${location.pathname}${i}`),await e.setDashBoardTable(i)}catch(n){console.log(n)}};return C.useEffect(()=>(e.setCurrentParams(m).catch(s=>{console.error("Error:",s)}),()=>{e.dashBoardStoreClear()}),[]),a.jsxs(a.Fragment,{children:[a.jsx(g,{title:"기간별 분석"}),a.jsx(c,{children:a.jsx(w,{children:a.jsxs(B,{children:[a.jsx("div",{className:"title",children:"검색어"}),a.jsxs("div",{className:"content",children:[a.jsx(d,{option:h,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await o("type",s.value)},value:h.find(s=>s.value===e.tableBaseStore.searchParams.type)||null}),a.jsx(d,{option:u,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await o("year",s.value)},value:u.find(s=>s.value===e.tableBaseStore.searchParams.year)||null}),e.tableBaseStore.searchParams.type==="days_type"&&a.jsx(d,{option:b,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async s=>{await o("month",s.value)},value:b.find(s=>s.value===e.tableBaseStore.searchParams.month)||null})]})]})})}),a.jsxs(c,{children:[a.jsx(P,{data:e.dashBoardList,columns:D}),a.jsx(E,{children:a.jsx("table",{children:a.jsx("tbody",{children:a.jsxs("tr",{children:[a.jsx("td",{children:e.tableBaseStore.searchParams.type==="days_type"?e.tableBaseStore.searchParams.month+"월 합계":e.tableBaseStore.searchParams.year+"년 합계"}),a.jsxs("td",{children:[l(e.totalColumList.totalOrders)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.newOrders)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.subscriptionOrders)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.subscriptionCancelled)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.subscriptionPaused)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.salesAmount)," 건"]}),a.jsxs("td",{children:[l(e.totalColumList.newMembers)," 건"]})]})})})})]})]})}),E=L.div`
    table{
        width: 100%;
    }
    tbody {
        tr {
            border-bottom: 1px solid #eee;
        }

        td {
            width: 150px;
            min-width: auto;
            padding: 12px 0;
            vertical-align: middle;
            color: #333;
            font-size: 14px;
            font-weight: 400;
            border-bottom: 0;
            text-align: center;
            white-space: pre-line;
            height: 50px;
        }
    }
`;export{$ as default};
