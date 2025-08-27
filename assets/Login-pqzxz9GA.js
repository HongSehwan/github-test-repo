import{j as e,L as j,o as v,a as y,u as C,r,f as S,I as p,B as k,M as N,g as L,h as i,d as g}from"./index-_13rErVL.js";import{b as E,C as I}from"./index-CV644Cqw.js";const P=()=>e.jsx(e.Fragment,{children:e.jsx(j,{autoClose:1500,hideProgressBar:!0,closeButton:!1,pauseOnHover:!1,position:"bottom-center",limit:3,toastClassName:()=>"bg-black text-white pd-0 rounded-lg shadow-lg b-large text-sm w-80",bodyClassName:()=>"flex flex-col space-y-1 text-base"})}),z=v(()=>{let a=y();const{userStore:u}=C(),[s,h]=r.useState(""),[o,x]=r.useState("");let[l,m]=r.useState("password");S(["token"]);const f=t=>{h(t.target.value)},w=t=>{x(t.target.value)},d=async()=>{try{const t=b();if(!t)return;const n=await u.setUser(t);n.data.result==="SUCCESS"&&(localStorage.setItem("info",JSON.stringify(n.data.data)),L(n.data.data.access_token),a("/dashboard/list"))}catch(t){t.status===400&&i("warning",t.message)}},c=async t=>{t.key==="Enter"&&await d()},b=()=>{if(s===""){i("warning","아이디를 확인해 주세요.");return}if(o===""){i("warning","비밀번호를 확인해 주세요.");return}return{email:s,password:o}};return e.jsxs(F,{children:[e.jsxs(T,{children:[e.jsx("div",{className:"logo-area",children:e.jsx("img",{src:E,align:"로고"})}),e.jsxs("div",{className:"input-wrap-area m-n",children:[e.jsx("div",{className:"label",children:"ID"}),e.jsx(p,{inputType:"text",id:"login_id",label:"아이디",placeholder:"아이디를 입력해 주세요.",onChange:f,onKeyDown:c,value:s,width:"fill"})]}),e.jsxs("div",{className:"input-wrap-area",children:[e.jsx("div",{className:"label",children:"PW"}),e.jsx(p,{inputType:l,id:"login_password",label:"비밀번호",placeholder:"비밀번호를 입력해 주세요.",onChange:w,typeChange:l,setTypeChange:m,onEyes:"on",onKeyDown:c,mt:"20",width:"fill",value:o})]}),e.jsx("div",{className:"btn-wrap",children:e.jsx(k,{type:"fill",size:"l",text:"로그인",round:!0,brand:!0,full:!0,onClickFunc:d})})]}),e.jsx(I,{}),e.jsx(N,{}),e.jsx(P,{})]})}),F=g.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme:a})=>a.COLORS.main};
    overflow: hidden;
`,T=g.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 463px;
    height: 500px;
    background-color: #fff;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 60px;
    .logo-area{
        width: 155px;
        margin-bottom: 32px;
    }
    .btn-wrap{
        width: 100%;
        margin-top: 25px;
    }
    .input-wrap-area{
        margin-top: 20px;
        width: 100%;
        &.m-n{
            margin: 0;
        }
        .label{
            font-weight: 500;
            font-size: 16px;
            color: #666666;
            margin-bottom: 8px;
            position: relative;
            display: inline-block;
            &::after{
                content: "*";
                position: absolute;
                color: #246FF2;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                top: -5px;
                right: -10px;
            }
        }
    }
`;export{z as default};
