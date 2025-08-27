import{o as y,u as N,c as b,r as j,j as e,q as w,t as o,_ as M,Z as d,B as l,h as r,w as m,ay as L,az as C,aA as O,T as D,v as s,l as x,a0 as g,$ as _,aB as P,W as A,d as c}from"./index-DqWJ4ltY.js";const S=y(()=>{const{orderStore:t,modalStore:p,memberStore:n,confirmStore:h}=N(),i=b(),[u,f]=j.useState(1);j.useEffect(()=>(t.getOrderDetailList(i.id,"memo").catch(a=>{console.log(a)}),()=>{t.orderStoreClear("detail"),n.memberDetailClear()}),[i]);const v=[{state:t.orderDetailData?.order_info.status,shippingAmount:t.orderDetailData?.order_info.shipping_amount,paymentAmount:t.orderDetailData?.order_info.total_payment_amount,deliveryCode:t.orderDetailData?.order_info.delivery_company,invoiceNumber:t.orderDetailData?.order_info.invoice_number}];return e.jsx(e.Fragment,{children:t.orderDetailData&&e.jsxs(I,{children:[e.jsx(w,{title:"주문 조회 상세"}),t.orderDetailData.order_info&&e.jsx(o,{children:e.jsxs("div",{className:"info-list flex al-center",children:[e.jsxs("div",{className:"item flex al-center",children:["주문 타입: ",t.orderDetailData.order_info.order_type]}),e.jsxs("div",{className:"item flex al-center",children:["주문 번호: ",t.orderDetailData.order_info.order_number]}),e.jsxs("div",{className:"item flex al-center",children:["주문 일시: ",M(t.orderDetailData.order_info.ordered_at).format("YYYY년 MM월 DD일 HH시 mm분")]})]})}),t.orderDetailData.ordered_goods&&t.orderDetailData.ordered_goods.length>0&&e.jsxs(o,{children:[e.jsxs(d,{className:"flex al-center jc-between",children:["상품 정보",e.jsxs("div",{className:"gap-5 flex al-center",children:[e.jsx(l,{type:"solid",size:"m",text:"환불 접수",round:!0,onClickFunc:async()=>{if(t.orderDetailData.order_info?.status==="환불접수"){r("warning","이미 환불 접수가 되어있습니다.");return}if(t.orderDetailData.order_info?.status==="환불완료"){r("warning","이미 환불완료 처리가 되어있습니다.");return}h.openConfirm({confirmText:"확인",text:"환불 접수 처리하시겟습니까?",cancelText:"취소",confirmFunc:async()=>{try{await t.setRefundReceipt(i.id)&&(r("success","환분 접수 처리 되었습니다."),await t.getOrderDetailList(i.id)),h.clear()}catch(a){console.log(a)}},cancelFunc:()=>h.clear()})}}),t.orderDetailData.order_info?.status!=="환불접수"&&t.orderDetailData.order_info?.status!=="환불완료"?e.jsx(l,{type:"fill",size:"m",text:"전체 저장",round:!0,disabled:!t.hasModifyData(),onClickFunc:async()=>{try{t.hasModifyData()?(await t.setDetailModifySave(i.id),await t.getOrderDetailList(i.id),t.removeGoodsModify(),t.removeProductDeliveryModify(),r("success","전체 상품이 저장되었습니다.")):r("warning","수정된 건이 없습니다.")}catch(a){await t.getOrderDetailList(i.id),t.removeGoodsModify(),t.removeProductDeliveryModify(),console.log(a)}}}):""]})]}),e.jsxs("div",{className:"content flex",children:[e.jsx(m,{data:t.orderDetailData.ordered_goods,columns:L,offset:1,dataAllCount:t.orderDetailData.ordered_goods.length}),e.jsx(m,{data:v,columns:C,offset:1})]})]}),e.jsxs(o,{children:[e.jsx(d,{children:"환불 정보"}),e.jsx("div",{className:"content",children:e.jsx(m,{data:t.orderDetailData.refunded_goods,store:t,columns:O,offset:1,dataAllCount:t.orderDetailData.refunded_goods.length})})]}),e.jsxs(o,{children:[t.orderDetailData.payment_info&&e.jsxs("div",{className:"list-item",children:[e.jsx(d,{children:"결제 정보"}),e.jsxs(D,{children:[e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"상품 판매금액"}),e.jsxs("div",{className:"content",children:[x(t.orderDetailData.payment_info.order_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"배송비"}),e.jsxs("div",{className:"content",children:[x(t.orderDetailData.payment_info.shipping_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"총 할인 금액"}),e.jsxs("div",{className:"content",children:[x(t.orderDetailData.payment_info.discount_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"실 결제 금액"}),e.jsxs("div",{className:"content",children:[x(t.orderDetailData.payment_info.payment_amount),"원"]})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"결제방법"}),e.jsx("div",{className:"content",children:t.orderDetailData.payment_info.payment_method})]})]})]}),t.orderDetailData.customer_info&&e.jsxs("div",{className:"list-item",children:[e.jsxs(d,{className:"flex al-center jc-between",children:["주문자 정보",e.jsx(l,{type:"fill",size:"s",text:"수정",round:!0,onClickFunc:async()=>{try{p.openModal({...g.DETAIL_LIST_MODIFY_MODAL(i.id,t.orderDetailData.customer_info,"order","주문자 정보 수정","order"),async confirmFunc(a){r("success","수정 완료되었습니다."),await t.getOrderDetailList(i.id),a()}})}catch(a){console.log(a)}}})]}),e.jsxs(D,{children:[e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"주문자 명"}),e.jsx("div",{className:"content",children:t.orderDetailData.customer_info.name})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"휴대폰 번호"}),e.jsx("div",{className:"content",children:_(t.orderDetailData.customer_info.phone_number)})]})]})]}),t.orderDetailData.shipping_info&&e.jsxs("div",{className:"list-item",children:[e.jsxs(d,{className:"flex al-center jc-between",children:["수령자 정보",e.jsx(l,{type:"fill",size:"s",text:"수정",round:!0,onClickFunc:async()=>{try{p.openModal({...g.DETAIL_LIST_MODIFY_MODAL(i.id,t.orderDetailData.shipping_info,"order","수령자 정보 수정","receiver"),async confirmFunc(a){r("success","수정 완료되었습니다."),await t.getOrderDetailList(i.id),a()}})}catch(a){console.log(a)}}})]}),e.jsxs(D,{children:[e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"수령자 명"}),e.jsx("div",{className:"content",children:t.orderDetailData.shipping_info.recipient_name})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"휴대폰 번호"}),e.jsx("div",{className:"content",children:_(t.orderDetailData.shipping_info.recipient_phone_number)})]}),e.jsxs(s,{children:[e.jsx("div",{className:"title",children:"주소"}),e.jsx("div",{className:"content",children:e.jsxs("div",{className:"address-inner",children:[e.jsx("div",{children:t.orderDetailData.shipping_info.address}),e.jsx("div",{children:t.orderDetailData.shipping_info.address_detail}),e.jsx("div",{children:t.orderDetailData.shipping_info.postal_code})]})})]})]})]})]}),e.jsxs(o,{children:[e.jsx(d,{children:"관리자 메모"}),e.jsx(m,{data:t.detailMemoList,columns:P,offset:u,dataAllCount:t.detailMemoListPageInfo?.total_elements}),t.detailMemoListPageInfo&&t.detailMemoListPageInfo?.total_elements>5&&e.jsx(A,{totalItems:t.detailMemoListPageInfo?.total_elements??0,itemCountPerPage:5,pageCount:5,currentPage:u,setPageIndex:f,setPage:async a=>{f(a),await t.getOrderMemo(t.orderDetailData.member_id,a)}})]}),e.jsx(o,{children:e.jsxs(T,{children:[e.jsx("div",{className:"title",children:"메모 작성"}),e.jsx("textarea",{id:"memo",value:n.memoContent,onChange:a=>{n.setMemo(a.target.value)},placeholder:"내용 입력",rows:5,cols:40}),e.jsx(l,{type:"fill",size:"s",text:"저장",onClickFunc:async()=>{try{if(!n.memoContent){r("warning","메모를 작성해 주세요.");return}await n.setWriteMemo(t.orderDetailData.member_id,"order",i.id)&&(r("success","메모가 작성 되었습니다."),await t.getOrderMemo(t.orderDetailData.member_id,1),f(1),n.setMemo(""))}catch(a){console.log(a)}}})]})})]})})}),I=c.div`
    .address-inner {
        line-height: 1.5;
    }

    .info-list {
        width: 100%;

        .item {
            width: 33.33%;
            border: 1px solid #1a1a1a;
            border-left: none;
            height: 50px;
            padding: 0 15px;

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
`,T=c.div`
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
`;c.div`
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
`;c.div`

`;c.div`
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
`;export{S as default};
