import{o as y,u as w,c as b,a as E,r as h,j as e,q as R,t as d,_ as m,w as C,aC as _,T as p,v as s,l,N as F,B as f,h as c,S as u,aD as j,aE as D,d as r}from"./index-_13rErVL.js";const z=y(()=>{const{orderStore:t,confirmStore:n}=w(),i=b(),v=E(),[o,g]=h.useState(""),[x,N]=h.useState("");return h.useEffect(()=>(t.setOrderRefundDetail(i.id).catch(a=>{console.log(a)}),()=>{t.orderStoreClear("detail")}),[i]),e.jsx(e.Fragment,{children:t.orderDetailData&&e.jsxs(T,{children:[e.jsx(R,{title:"환불 상세 조회"}),e.jsx(d,{children:e.jsxs("div",{className:"info-list flex al-center",children:[e.jsxs("div",{className:"item first flex al-center",children:["주문 번호: ",t.orderDetailData.order_number]}),t.orderDetailData.status==="REFUNDED"?e.jsxs("div",{className:"item flex al-center",children:["사유: ",t.orderDetailData.cancel_reason]}):e.jsx("div",{className:"item flex al-center",children:"환불 접수 처리 중"})]})}),e.jsxs(d,{children:[e.jsx(m,{className:"flex al-center jc-between",children:"환불 상품"}),e.jsx("div",{className:"content flex",children:e.jsx(C,{data:t.orderDetailData.items,columns:_,offset:1,dataAllCount:t.orderDetailData?.items?.length})})]}),e.jsxs("div",{className:`${t.orderDetailData.status==="REFUNDED"?"":"flex gap-20"} `,children:[e.jsxs(d,{className:`${t.orderDetailData.status==="REFUNDED"?"":"w-half"}`,children:[e.jsx(m,{children:"결제 정보"}),e.jsx("div",{className:"content",children:e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"결제 정보"}),e.jsxs("div",{className:"content",children:[l(t.orderDetailData.order_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"배송 비"}),e.jsxs("div",{className:"content",children:[l(t.orderDetailData.shipping_fee),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"총 할인 금액"}),e.jsxs("div",{className:"content",children:[l(t.orderDetailData.discount_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"실 결제 금액"}),e.jsxs("div",{className:"content",children:[l(t.orderDetailData.payment_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"결제 방법"}),e.jsx("div",{className:"content",children:t.orderDetailData.payment_provider?t.orderDetailData.payment_provider:"-"})]})]})})]}),t.orderDetailData.status!=="REFUNDED"&&e.jsxs(d,{className:"w-half",children:[e.jsxs(m,{className:"flex al-center jc-between",children:["환불 금 및 방법 설정",e.jsxs(F,{className:"gap-5",children:[e.jsx(f,{type:"fill",size:"s",text:"환불 처리",round:!0,onClickFunc:async()=>{if(x===""){c("warning","환불 수단을 지정해 주세요.");return}if(o===""){c("warning","환불 사유를 지정해 주세요.");return}n.openConfirm({confirmText:"확인",text:"환불 처리 하시겟습니까?",cancelText:"취소",confirmFunc:async()=>{try{const a={cancel_reason:o.value,refund_method:x.value};await t.setOrderRefund(i.id,a)&&(await t.setOrderRefundDetail(i.id),c("success","환분 처리 완료되었습니다.")),n.clear()}catch(a){console.log(a)}},cancelFunc:()=>n.clear()})}}),e.jsx(f,{type:"solid",size:"s",text:"환불 취소",round:!0,onClickFunc:async()=>{n.openConfirm({confirmText:"확인",text:"환불 접수 취소 하시겟습니까?",cancelText:"취소",confirmFunc:async()=>{try{await t.setOrderRefundCancel(i.id)&&(v(-1),c("success","환불 취소가 완료되었습니다.")),n.clear()}catch(a){console.log(a)}},cancelFunc:()=>n.clear()})}})]})]}),e.jsx("div",{className:"content",children:e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"환불 금액"}),e.jsxs("div",{className:"content",children:[l(t.orderDetailData.payment_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"환불 수단"}),e.jsx("div",{className:"content",children:e.jsx("div",{className:"detail-select",children:e.jsx(u,{option:j,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async a=>{N(a)},value:j.find(a=>a.value===x.value)||null})})})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"환불 사유"}),e.jsx("div",{className:"content",children:e.jsx("div",{className:"detail-select",children:e.jsx(u,{option:D,size:"m",type:"solid",round:!0,placeholder:"선택",onChange:async a=>{g(a)},value:D.find(a=>a.value===o.value)||null})})})]})]})})]})]})]})})}),T=r.div`
    .detail-select {
        width: 150px;
    }

    .address-inner {
        line-height: 1.5;
    }

    .info-list {
        width: 100%;

        .item {
            width: 65%;
            border: 1px solid #1a1a1a;
            border-left: none;
            height: 50px;
            padding: 0 15px;

            &.first {
                width: 35%;
            }

            &:first-child {
                border-left: 1px solid #1a1a1a;
            }
        }
    }

    .goods-table-control {
        display: flex;
        justify-content: end;
        margin-bottom: 20px;
        gap: 10px;
    }

    .modify-content-wrap {
        min-height: 70px;

        .modify-area {
            height: 100%;
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 15px;

            .content {
                width: 100%;
                text-align: left;

                textarea {
                    width: 100%;
                    height: 100%;
                    resize: none;
                    outline: none;
                }
            }

            .memo-btn-wrap {
                display: flex;
                gap: 5px;
            }
        }
    }
`;r.div`
    height: 100px;
    display: flex;
    gap: 20px;

    .title {
        width: 100px;
        height: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid #ccc;
    }

    textarea {
        height: 100%;
        width: 100%;
        padding: 20px;
        resize: none;
        outline: none;
        border: 1px solid #ccc;
    }
`;r.div`
    display: flex;
    width: 100%;
    margin: 20px 0;

    .inner {
        height: 45px;
        width: calc(100% / 5);
        border: 1px solid #eee;
        border-left: none;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 15px;

        &:first-child {
            border-left: 1px solid #eee;
        }

        .cont {
            margin-left: 3px;
            color: red;
        }
    }
`;r.div`

`;r.div`
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
`;export{z as default};
