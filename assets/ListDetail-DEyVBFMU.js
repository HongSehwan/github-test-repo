import{o as p,c as u,u as g,a as j,r as v,j as e,q as f,t as _,K as N,B as m,a4 as y,a5 as b,a0 as D,T as C,v as d,I as c,d as l}from"./index-DqWJ4ltY.js";const k=p(()=>{const{id:x}=u(),{ingredientStore:t}=g(),h=j(),n=t.detailData||{},o=t.formattedData||{};return v.useEffect(()=>{t.setCodeGroupItemList("code-group-items").then(),t.setCodeGroupCurrentParams("code-groups","").then(),t.fetchIngredientDetail("nutrients/",x).then(),t.tableBaseStore.setParamsChange("category",t.detailData.category)},[]),e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"성분 상세정보"}),e.jsxs(_,{children:[e.jsxs(N,{$gap:10,children:[e.jsx(m,{type:"fill",size:"m",round:!0,text:"목록",onClickFunc:()=>{h("/ingredient/list")}}),e.jsx(m,{type:"solid",size:"m",round:!0,text:"수정",onClickFunc:()=>{const i={},s={};n.code_group_items.forEach(a=>{i[a.code_group_name]?i[a.code_group_name]=i[a.code_group_name]+", "+a.name:i[a.code_group_name]=a.name}),y().itemList.forEach(a=>{s[a.code_group_name]?s[a.code_group_name].push({value:a.id,label:a.name}):s[a.code_group_name]=[{value:a.id,label:a.name}]}),b().openModal({...D.INGREDIENT_MODIFY_MODAL(n,"modify",i,s,!0),closeFunc:a=>{a()}})}})]}),e.jsxs(C,{children:[e.jsxs(d,{children:[e.jsxs("div",{className:"title",children:["성분명",e.jsx(r,{children:"*"})]}),e.jsx("div",{className:"content",children:e.jsx("div",{children:t.detailData.name})})]}),e.jsxs(d,{children:[e.jsxs("div",{className:"title fd-column",children:[e.jsxs("span",{children:["성분명",e.jsx(r,{children:"*"})]}),e.jsx("span",{children:"(소비자 노출용)"})]}),e.jsx("div",{className:"content",children:e.jsx("div",{children:n.display_name})})]}),e.jsxs(d,{children:[e.jsxs("div",{className:"title",children:["구분",e.jsx(r,{children:"*"})]}),e.jsxs("div",{className:"content",children:[e.jsx(c,{labelFor:"detail-material",labelName:"기능성원료",inputType:"radio",id:"detail-material",name:"detail-item-code",value:"기능성원료",onChange:()=>{},checked:t.detailData.category==="기능성원료"}),e.jsx(c,{labelFor:"detail-vitamin",labelName:"비타민",inputType:"radio",id:"detail-vitamin",name:"detail-item-code",value:"비타민",onChange:()=>{},checked:t.detailData.category==="비타민"}),e.jsx(c,{labelFor:"detail-mineral",labelName:"미네랄",inputType:"radio",id:"detail-mineral",name:"detail-item-code",value:"미네랄",onChange:()=>{},checked:t.detailData.category==="미네랄"})]})]}),e.jsxs(d,{children:[e.jsxs("div",{className:"title",children:["단위",e.jsx(r,{children:"*"})]}),e.jsx("div",{className:"content",children:e.jsx("div",{children:n.unit})})]}),n.daily_min_intake_amount&&e.jsxs(d,{children:[e.jsx("div",{className:"title",children:"일일최소섭취함량"}),e.jsx("div",{className:"content",children:e.jsx("div",{children:parseInt(n.daily_min_intake_amount)})})]}),t.list&&t.list.length>0&&t.list.map((i,s)=>e.jsxs(d,{children:[e.jsx("div",{className:"title","data-id":i.id,children:i.name}),e.jsx("div",{className:"content",children:e.jsx("div",{children:o[i.name]?o[i.name].join(", "):""})})]},s))]})]})]})});l.div`
    padding: 25px;
`;l.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 28px;
`;const r=l.span`
    font-size: 16px;
    color: red;
`;l.div`
    display: flex;
    border: 1px solid #ccc;
`;l.div`
    border-right: 1px solid #ccc;
    min-width: 300px;
    align-content: center;
    min-height: 50px;
    background-color: #f9f9f9;
    padding: 15px 20px;
    color: #333;
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
    text-align: left;
    width: 300px;
    align-items: center;
`;l.div`
    display: flex;
    min-height: 50px;
    padding: 8px 20px;
    align-items: center;
    white-space: nowrap;
`;export{k as default};
