import{o as F,d as n,u as D,c as $,a as z,r as E,j as e,q as S,t as c,Z as h,K as W,B as u,a5 as I,a0 as L,v as l,S as x,ad as j,ae as m,I as p,T as v,af as f,ag as b}from"./index-DqWJ4ltY.js";const k=F(()=>{const{productStore:t,ingredientStore:d}=D(),{id:C}=$(),g=t.formattedData||{},i=t.detailData||{},N=z();return E.useEffect(()=>{t.productDetailModalClear(),d.setCodeGroupItemList("code-group-items").then(),d.setCodeGroupCurrentParams("code-groups","").then(),t.nutrientsFetchTable("nutrients","?size=1000").then(),t.fetchProductDetail("products/",C).then(),i&&i.goods&&i.goods.length>0&&i.goods.forEach(s=>{t.goodsFetchTable("goods/",s.id,!1).then()}),i.nutrients&&i.nutrients.length>0&&(t.setTags(i),i.nutrients.forEach(s=>{t.nutrientsFetchTable("nutrients/",[s.id]).then(),t.nutrientSelectFunc({nutrient_id:s.id,is_representative:s.is_representative,amount:s.amount}),t.setContent(a=>({...a,[s.id]:s.amount}))})),i?.notices?.map(s=>{t.setNotice(s)}),i&&i.goods&&i.goods.length>0&&i.goods.forEach(s=>{t.goodsFetchTable("goods/",s.id,!1).then()})},[t.detailData?.nutrients?.length]),e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"마스터 상품 상세 조회"}),e.jsxs(c,{children:[e.jsxs(h,{className:"flex al-center jc-between",children:["기본정보",e.jsxs(W,{$gap:10,children:[e.jsx(u,{type:"fill",size:"m",round:!0,text:"목록",onClickFunc:()=>{N("/ingredient/master-product-list")}}),e.jsx(u,{type:"solid",size:"m",round:!0,text:"수정",onClickFunc:()=>{t.productDetailModalClear(),I().openModal({...L.MASTER_PRODUCT_DETAIL_MODAL(i,"modify",!0),closeFunc:s=>{s(),t.goodsDetailModalClear()}})}})]})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"상품명"}),e.jsx("div",{className:"content",children:e.jsx("p",{children:i.name})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"상품코드"}),e.jsx("div",{className:"content",children:e.jsx("p",{children:i.id})})]}),e.jsxs(l,{children:[e.jsxs("div",{className:"title",children:["알팩 ID",e.jsx(P,{children:"*"})]}),e.jsx("div",{className:"content",children:e.jsx("p",{children:i.alpack_item?.id})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"성분 선택"}),e.jsx("div",{className:"content",children:e.jsxs(w,{children:[e.jsxs(y,{$tag:t.tags.length>0,$width:"40px",children:[e.jsx(x,{placeholder:"선택",size:"m",type:"solid",round:!0,disabled:!0,onChange:()=>{}}),e.jsx(j,{children:t.tags&&t.tags.map(s=>e.jsx("div",{children:e.jsx(m,{tags:t.tags,groupId:s.value})},s.value))})]}),e.jsx("div",{children:t.tags&&t.tags.length>0?"선택 성분 함량 설정":""}),e.jsx(M,{$tag:t.tags.length>0,children:t.tags&&t.tags.map(s=>e.jsxs(A,{children:[e.jsx(p,{inputType:"text",disabled:!0,width:250,value:s.label}),e.jsx(p,{inputType:"text",width:100,value:t.content[s.value]||null,onChange:()=>{}})]},s.value))})]})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"대표 성분 선택"}),e.jsx("div",{className:"content",children:e.jsx(_,{children:e.jsx(x,{option:t.representativeOption?[t.representativeOption]:[],placeholder:"선택",size:"m",type:"solid",round:!0,disabled:!0,value:t.representativeOption,onChange:()=>{}})})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"알레르기 선택"}),e.jsx("div",{className:"content",children:e.jsx(w,{children:e.jsxs(y,{$tag:t.allergyTags.length>0,$width:"10px",children:[e.jsx(x,{placeholder:"선택",size:"m",type:"solid",round:!0,disabled:!0,value:d.allergy.find(s=>s.value===t.tableBaseStore.searchParams.allergy)||null,onChange:()=>{}}),e.jsx(j,{children:t.allergyTags&&t.allergyTags.map(s=>e.jsx("div",{children:e.jsx(m,{tags:t.allergyTags,groupId:s.value,removeFunc:t.removeAllergyTag})},s.value))})]})})})]}),d.list&&d.list.length>0&&d.list.map((s,a)=>e.jsxs(l,{children:[e.jsx("div",{className:"title","data-id":s.id,children:s.name}),e.jsx("div",{className:"content",children:g[s.name]?g[s.name].join(", "):""})]},a))]}),e.jsxs(c,{children:[e.jsx(h,{className:"flex al-center jc-between",children:"고시정보"}),e.jsxs(v,{children:[e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"소비 기한"}),e.jsx("div",{className:"content",children:e.jsx(p,{inputType:"text",placeholder:"0000-00-00 상태로 입력",width:300,value:i.use_by_date,onChange:()=>{}})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"고시정보"}),e.jsx("div",{className:"content",children:e.jsx(B,{children:t.noticeList&&t.noticeList.length>0?e.jsxs(T,{children:[e.jsx("thead",{children:e.jsx("tr",{children:f().map((s,a)=>e.jsx("th",{style:{width:s.width||"auto",minWidth:s.minWidth||"auto"},children:s.label||""},a))})}),e.jsx("tbody",{children:t.noticeList&&t.noticeList.length>0?t.noticeList.map((s,a)=>e.jsx("tr",{children:f().map((r,o)=>e.jsx("td",{children:r.render(a,s)},o))},a)):e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]})})]}):e.jsx(e.Fragment,{})})})]})]})]}),e.jsxs(c,{children:[e.jsxs(h,{className:"flex al-center jc-between",children:["상품연결",e.jsxs(O,{children:["현재 연결된 상품 개수 : ",i.goods?i.goods.length:0]})]}),e.jsx(v,{children:e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"일반 상품 연결"}),e.jsx("div",{className:"content",children:t.goods&&t.goods.length>0?e.jsxs(T,{children:[e.jsx("thead",{children:e.jsx("tr",{children:b().map((s,a)=>e.jsx("th",{style:{width:s.width||"auto",minWidth:s.minWidth||"auto"},children:s.label||""},a))})}),e.jsx("tbody",{children:t.goods&&t.goods.length>0&&t.goods.map((s,a)=>e.jsx("tr",{children:b().map((r,o)=>e.jsx("td",{children:r.render(a,s)},o))},a))})]}):e.jsx(e.Fragment,{})})]})})]})]})}),P=n.span`
    font-size: 16px;
    color: red;
`,_=n.div`
    flex-direction: column;
    display: flex;
    width: 100%;
`,y=n.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: ${t=>t.$tag?t.$width:"0"};
`,w=n.div`
    flex-direction: column;
    width: 100%;
`,M=n.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: ${t=>t.$tag?"10px":"0"};
    margin-top: ${t=>t.$tag?"10px":"0"};
    width: 80%;
`,A=n.div`
    display: flex;
    padding-bottom: 10px;
`;n.span`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    align-items: start;
`;n.span`
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    align-items: end;
`;n.span`
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    align-items: end;
    margin-top: 40px;
`;const B=n.div`
    flex-direction: column;
    width: 100%;
    gap: 10px;
`,T=n.table`
    margin-top: 10px;
    border-collapse: collapse; /* 테두리 겹침 제거 */

    input-wrapper {
        justify-content: center;
    }

    .row-line {
        line-height: 15px;
    }

    thead {
        th {
            font-weight: 500;
            font-size: 14px;
            background-color: #F9F9F9;
            padding: 16px 0;
            text-align: center;
            vertical-align: middle;
            white-space: pre-line;
            border: 2px solid #EDEFF0;
        }
    }

    tbody {
        width: 100%;

        tr {
            border-bottom: 1px solid #eee;
            width: 100%;
        }

        td {
            padding: 12px 10px;
            vertical-align: middle;
            color: #333;
            font-size: 14px;
            font-weight: 400;
            text-align: start;
            height: 50px;
            white-space: pre-line;
            line-height: 1.25;
            border: 2px solid #EDEFF0;
        }
    }
`,O=n.div`
    display: flex;
    align-items: end;
`,G=n.div`
    display: flex;
    gap: 10px;
`;n.div`
    display: flex;
    margin-bottom: 20px;
    align-items: end;
    gap: 5px;
`;export{G as ButtonContainer,k as default};
