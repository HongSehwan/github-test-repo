import{o as j,u as y,a as f,c as v,r as b,j as e,t as C,a6 as h,N,B as g,a5 as w,a0 as T,a8 as _,T as d,v as n,I as i,d as a}from"./index-_13rErVL.js";import{ButtonContainer as P}from"./MasterProductDetail-CrmwmKdC.js";const I=j(()=>{const{productStore:l,ingredientStore:x}=y(),u=f(),{id:m}=v(),s=l.goodsDetailData||{};return b.useEffect(()=>{l.tableBaseStore.setParamsChange("modal_is_bundle",!1),l.tableBaseStore.setParamsChange("modal_is_displayed",!0),l.tableBaseStore.setParamsChange("modal_is_sold",!0),l.fetchGoodsDetail("goods/",m,!1).then(),x.setCodeGroupItemList("code-group-items").then(),x.setCodeGroupCurrentParams("code-groups","").then(),l.setProductCurrentParams("products",{size:5}).then(),l.setSearchProduct("",0,1e4,"desc","&is_bundle=false")},[]),e.jsxs(C,{children:[e.jsxs(h,{children:[e.jsx(F,{children:"상품 상세 조회"}),e.jsx(N,{className:"pb",children:e.jsxs(P,{children:[e.jsx(g,{type:"fill",size:"l",text:"목록",onClickFunc:()=>{u("/ingredient/product-list")}}),e.jsx(g,{type:"fill",size:"l",text:"수정",onClickFunc:()=>{w().openModal({...T.PRODUCT_DETAIL_MODAL(s,"modify",!0),closeFunc:t=>{t(),_().goodsDetailModalClear()}})}})]})})]}),e.jsx(h,{children:e.jsxs(D,{children:[e.jsx($,{children:"카테고리 연결"}),e.jsx("span",{children:"카테고리가 등록되어 있어야 카테고리 연결이 가능 합니다."})]})}),e.jsxs(k,{children:[s.categories&&s.categories.length>0&&s.categories.map((t,c)=>e.jsx(B,{children:e.jsx("div",{children:t.name})},c)),s.categories?.length===0&&e.jsx(S,{children:e.jsxs("p",{children:["선택된 카테고리가 없습니다.",e.jsx("br",{}),"카테고리를 추가해주세요."]})})]}),e.jsx(p,{children:"상품 종류"}),e.jsx(d,{children:e.jsxs(n,{$width:"200px",children:[e.jsxs("div",{className:"title",children:["상품 종류",e.jsx(r,{children:"*"})]}),e.jsxs("div",{className:"content",children:[e.jsx(i,{inputType:"radio",labelFor:"detail-prd-single",labelName:"개별 상품",name:"detail-prd-type",id:"detail-prd-single",value:"개별 상품",onChange:t=>{},checked:s.is_bundle===!1}),e.jsx(i,{inputType:"radio",labelFor:"detail-prd-bundle",labelName:"조합 상품 (번들팩)",name:"detail-prd-type",id:"detail-prd-bundle",value:"조합 상품 (번들팩)",onChange:t=>{},checked:s.is_bundle===!0})]})]})}),e.jsx(p,{children:"노출 및 판매상태 설정"}),e.jsxs(d,{className:"grid",children:[e.jsxs(n,{$width:"200px",children:[e.jsxs("div",{className:"title",children:["상품 노출 상태",e.jsx(r,{children:"*"})]}),e.jsxs("div",{className:"content",children:[e.jsx(i,{labelFor:"detail-exposed",labelName:"노출함",inputType:"radio",id:"detail-exposed",name:"detail-exposure-status",value:"노출함",onChange:t=>{},checked:s.is_displayed===!0}),e.jsx(i,{labelFor:"detail-not-exposed",labelName:"노출안함",inputType:"radio",id:"detail-not-exposed",name:"detail-exposure-status",value:"노출안함",onChange:t=>{},checked:s.is_displayed===!1})]})]}),e.jsxs(n,{$width:"200px",children:[e.jsxs("div",{className:"title",children:["상품 판매 상태",e.jsx(r,{children:"*"})]}),e.jsxs("div",{className:"content",children:[e.jsx(i,{labelFor:"detail-type-sold",labelName:"판매함",inputType:"radio",id:"detail-type-sold",name:"detail-sale-type",value:"판매함",onChange:t=>{},checked:s.is_sold===!0}),e.jsx(i,{labelFor:"detail-type-not-sale",labelName:"판매안함",inputType:"radio",id:"detail-type-not-sale",name:"detail-ale-type",value:"판매안함",onChange:t=>{},checked:s.is_sold===!1})]})]})]}),e.jsx(p,{children:"기본정보"}),e.jsxs(d,{className:"grid",children:[e.jsxs(n,{$width:"200px",children:[e.jsx("div",{className:"title",children:"상품코드"}),e.jsx("div",{className:"content",children:e.jsx("p",{children:s.id})})]}),e.jsxs(n,{$width:"200px",children:[e.jsxs("div",{className:"title",children:["자체 상품 코드",e.jsx(r,{children:"*"})]}),e.jsx("div",{className:"content",children:e.jsx("p",{children:s.id})})]})]}),e.jsx(d,{children:e.jsxs(n,{$width:"200px",children:[e.jsx("div",{className:"title",children:"상품설명"}),e.jsx("div",{className:"content",children:e.jsxs(O,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"상품명 (리스트용)* (최대 25자)"}),e.jsxs(o,{children:[e.jsx(i,{inputType:"text",placeholder:"입력해주세요.",onChange:t=>{},readOnly:!0,height:36,value:s.primary_name||null,width:"fill",maxlength:25}),e.jsx("span",{children:`${s.primary_name?.length||0}/25`})]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"상품명 (상세페이지용) (최대 25자)"}),e.jsxs(o,{children:[e.jsx(i,{inputType:"text",placeholder:"입력해주세요.",onChange:t=>{},readOnly:!0,height:36,value:s.secondary_name||null,width:"fill",maxlength:25}),e.jsx("span",{children:`${s.secondary_name?.length||0}/25`})]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"서브타이틀* (권장 20자)"}),e.jsxs(o,{children:[e.jsx(i,{inputType:"text",placeholder:"입력해주세요.",onChange:t=>{},readOnly:!0,height:36,value:s.summary||null,width:"fill",maxlength:20}),e.jsx("span",{children:`${s.summary?.length||0}/20`})]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"태그 (최대 6자, 4개까지)"}),s.tags&&s.tags.length>0&&s.tags.slice(0,4).map((t,c)=>e.jsx(o,{children:e.jsx(i,{inputType:"text",placeholder:"입력해주세요.",onChange:z=>{},readOnly:!0,height:36,value:t.name||null,width:"fill",maxlength:20})},c))]})]})})]})})]})}),r=a.span`
    font-size: 16px;
    color: red;
`,o=a.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    gap: 10px;
`,D=a.div`
    display: flex;
    margin-bottom: 20px;
    align-items: end;
    gap: 5px;
`,F=a.span`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    align-items: start;
`,$=a.span`
    display: flex;
    font-size: 17px;
    font-weight: bold;
    align-items: end;
`,p=a.span`
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    align-items: end;
    margin-top: 40px;
`,k=a.div`
    height: 100px;
    border: 1px solid #bdc3c7;
    padding: 10px;
    margin: 10px 0 20px 0;
    align-items: center;
    overflow-y: auto;
`,B=a.div`
    display: flex;
    padding: 5px 10px;
    margin: 5px 0;
    background-color: #EDEFF0;
    border-radius: 5px;
    justify-content: space-between;

    & span {
        font-weight: bold;
        color: red;
    }
`;a.button`
    cursor: pointer;
`;const S=a.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
`,O=a.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 30px;
    margin-top: ${l=>l.$tag?"10px":"0"};
`;a.button`
    margin-right: 20px;
    margin-left: 5px;
`;a.div`
    margin-top: 10px;
    width: 50%;
`;export{I as default};
