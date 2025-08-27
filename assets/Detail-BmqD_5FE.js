import{o as g,d as i,u as D,r as x,a as v,c as M,j as e,q as w,t as n,l as h,Z as d,T as N,v as l,_ as y,$ as C,B as j,h as m,a0 as _,a1 as I,w as b,a2 as P,a3 as A,W as L}from"./index-DqWJ4ltY.js";const Y=g(()=>{const{memberStore:t,modalStore:p}=D(),[c,o]=x.useState(1),f=v(),a=M();return x.useEffect(()=>(t.setMemberDetailList(a.id,"with").catch(s=>{console.log(s)}),()=>{t.memberDetailClear()}),[a]),e.jsx(e.Fragment,{children:t.memberDetail&&e.jsxs(z,{children:[e.jsx(w,{title:"회원 조회 상세"}),e.jsxs(n,{children:[e.jsxs(T,{children:[t.memberDetail.name," ",e.jsxs("span",{children:["(memberId: ",t.memberDetail.id,")"]})]}),e.jsxs(W,{children:[e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"title",children:"총 주문 금액:"}),e.jsxs("div",{className:"cont",children:[h(t.memberDetail.total_order_amount),"원"]})]}),e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"title",children:"총 주문 수:"}),e.jsx("div",{className:"cont",children:h(t.memberDetail.total_order_count)})]})]})]}),e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(d,{className:"flex al-center jc-between",children:"상품 정보"}),e.jsxs(N,{className:"grid",children:[e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"이름"}),e.jsx("div",{className:"content",children:t.memberDetail.name?t.memberDetail.name:"-"})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"로그인 정보"}),e.jsx("div",{className:"content block",children:t.memberDetail.accounts&&t.memberDetail.accounts.length>0?t.memberDetail.accounts.map((s,u)=>e.jsx("div",{children:s.user_id},u)):"-"})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"회원 가입일"}),e.jsx("div",{className:"content",children:t.memberDetail.created_at?y(t.memberDetail.created_at).format("YYYY-MM-DD HH:mm:ss"):"-"})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"휴대폰 번호"}),e.jsx("div",{className:"content",children:t.memberDetail.phone?e.jsxs("div",{className:"flex al-center jc-between w-full",children:[e.jsx("span",{children:C(t.memberDetail.phone)}),e.jsx(j,{type:"fill",size:"s",text:"수정",round:!0,onClickFunc:async()=>{try{p.openModal({..._.DETAIL_LIST_MODIFY_MODAL(a.id,t.memberDetail,"member","회원 연락처 수정","memberPhone"),async confirmFunc(s){m("success","수정 완료되었습니다."),await t.setMemberDetailList(a.id),s()}})}catch(s){console.log(s)}}})]}):"-"})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"기본 배송지 주소"}),e.jsx("div",{className:"content",children:t.memberDetail.address?t.memberDetail.address:"-"})]}),e.jsxs(l,{children:[e.jsx("div",{className:"title",children:"이메일"}),e.jsx("div",{className:"content",children:t.memberDetail.email?t.memberDetail.email:"-"})]})]})]})}),e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(d,{className:"flex al-center jc-between",children:["주문 내역",e.jsxs("div",{className:"underline flex al-center add-view",onClick:()=>{f(`/order/list?page=1&size=10&sort=asc&provider=all&status=all&order_type=all&user_id=${a.id}`)},children:["더보기 ",e.jsx(I,{size:12})]})]}),e.jsx(b,{data:t.memberOrderDetail,columns:P,offset:1,dataAllCount:t.memberOrderDetail?.length})]})}),e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(d,{className:"flex al-center jc-between",children:"상담 내역"}),e.jsxs(k,{children:[e.jsx(b,{data:t.memberMemoDetail,columns:A,offset:c,dataAllCount:t.memberMemoDetailInfo?.total_elements}),t.memberMemoDetailInfo&&t.memberMemoDetailInfo?.total_elements>5&&e.jsx(L,{totalItems:t.memberMemoDetailInfo?.total_elements??0,itemCountPerPage:5,pageCount:5,currentPage:c,setPageIndex:o,setPage:async s=>{o(s),await t.getMeMemoDetailList(a.id,s)}})]})]})}),e.jsx(n,{children:e.jsx(r,{children:e.jsxs(O,{children:[e.jsx("div",{className:"title",children:"메모 작성"}),e.jsx("textarea",{id:"memo",value:t.memoContent,onChange:s=>{t.setMemo(s.target.value)},placeholder:"내용 입력",rows:5,cols:40}),e.jsx(j,{type:"fill",size:"s",text:"저장",onClickFunc:async()=>{try{if(!t.memoContent){m("warning","메모를 작성해 주세요.");return}await t.setWriteMemo(a.id,"member",void 0)&&(await t.getMeMemoDetailList(a.id,c),m("success","메모가 작성 되었습니다."),t.setMemo(""))}catch(s){console.log(s)}}})]})})})]})})}),T=i.div``,z=i.div`
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
`,r=i.div`
    .add-view {
        font-size: 14px;
    }
`,O=i.div`
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
`,W=i.div`
    display: flex;
    width: 100%;
    margin: 20px 0;

    .inner {
        height: 50px;
        width: calc(100% / 5);
        border: 1px solid #1a1a1a;
        border-left: none;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 15px;

        &:first-child {
            border-left: 1px solid #1a1a1a;
        }

        .cont {
            margin-left: 3px;
            color: red;
        }
    }
`,k=i.div`

`;i.div`
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
`;export{O as AdminMemoWriteArea,Y as default};
