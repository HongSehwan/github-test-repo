import{o as K,u as j,j as t,d as g,a as E,b as w,r as l,C as N,H as C,c as z,O as L,M,L as Q,s as H,e as U}from"./index-_13rErVL.js";import{H as $,C as F}from"./index-CV644Cqw.js";const P=K(({className:i})=>{const{userStore:d}=j();return t.jsx(t.Fragment,{children:d.pending&&t.jsx(J,{children:t.jsxs("div",{className:"lds-ring",children:[t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{}),t.jsx("div",{})]})})})}),J=g.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    top: 0;
    left: 0;

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAYAAAArMezNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgBnZTbcYMwEEWRoABKSAlmePzTQaggTgVxKjCuIE4FoQO7AxcADC7BJVAAj9zVSJ6Ngg32fiBWd/do9RRN07x0Xbf2PK8IguDiPGk2Rw7DcBJCbPu+b0h0njDK4xzqk+M4tlr3SXwUbqDgqDzAFU+6rpuhVQ6JGu4vhPqo8GCgZPAzBab1ACw1AgVBXARH3A+alfFR7XuSJGcFpg851MlyVhjs6x60rmvSX1lBuzAMC+NL80OdJLLAtU6egm6hbzg0juOcxwg7qSzLnHb3GiBEjkF3FpRDvqMo2ticf2Cyqqr2aD5YRZ+oaI91f8O6Fiz0CGg2xZgEa/jBsdaQzwR2xolKsfntQ2B9lE4O2/VrkhAXKWV676beBGv4n8O/FDoLnoC3mH6w5E2ZBRs4PTCAH80FmLNfgf7bD72EfjMAAAAASUVORK5CYII=",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADVSURBVHgBnVHBDYJAEJzdi39bMFqABgrQEqxA6UBLoAQrEDuwAxsA+RuMdCANeOsdIkHDRWEel729ncnOHCVJtodgjT4gRJTE1zsgQ/QEC+SAntAiIdniHGcnAeZdyCDKPW884rJWKjBn0YXMzAtblgKz2Sg3VoK/BSCh5dQCFr4/ORobu59UM+N5k6hepvmYprehPLTJQ6ZwrG59N1vcvJi1ClK8bM+Dirdvp0AlkmtB+N3XomvfH7JwII4vEYFX1VRkfLeGzC4BpQYb6/n1ZWrrmnsCVihC0KIK4HQAAAAASUVORK5CYII=",Z=()=>{const i=E(),d=w(),{sideNavigation:u}=l.useContext(N),[A,h]=l.useState([]),[x,R]=l.useState([]),[B,I]=l.useState([]),p=e=>e.join("."),b=e=>{if(!e)return e;const s=e.indexOf("?");return s!==-1&&(e=e.slice(0,s)),e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),e},y=(e,s)=>{if(!e||!s)return!1;const n=b(e).split("/"),r=b(s).split("/");if(r.length<n.length)return!1;for(let a=0;a<n.length;a++)if(!n[a].startsWith(":")&&n[a]!==r[a])return!1;return!0},v=(e,s,n=[])=>{for(let r=0;r<e.length;r++){const a=e[r],f=[...n,r];if(a.link&&y(a.link,s))return f;if(a.children&&a.children.length){const o=v(a.children,s,f);if(o)return o}}return null},O=e=>{const s=[];for(let n=0;n<e.length;n++)s.push(p(e.slice(0,n+1)));return s};l.useEffect(()=>{const e=v(C,d.pathname)||[];if(R(e),I(O(e)),e.length){const s=[];for(let n=0;n<e.length-1;n++)s.push(p(e.slice(0,n+1)));h(s)}},[d.pathname]);const V=e=>{h(s=>{let n=!1;for(let r=0;r<s.length;r++)if(s[r]===e){n=!0;break}if(n){const r=[];for(let a=0;a<s.length;a++)s[a]!==e&&r.push(s[a]);return r}else return[...s,e]})},D=e=>i(e),S=(e,s=[],n=1)=>{const r=p(s),a=B.includes(r),f=e.display==="none"?{display:"none"}:{};let o=!1;if(e.children&&e.children.length){for(let c=0;c<e.children.length;c++)if(e.children[c].display!=="none"){o=!0;break}}const m=A.includes(r);return t.jsx("li",{style:f,className:`list ${n===1&&!o?"only":o?"parent":""} ${a?"active":""}`,children:t.jsxs("div",{className:`menu-wrap${m?" on":""}`,children:[t.jsxs("div",{className:`depth_${n} item ${a?"active":""}`,onClick:c=>{o?(c.stopPropagation(),V(r)):e.link&&D(e.link)},children:[o?t.jsx("div",{className:`arrow-area${m?" on":""}`,children:t.jsx("img",{src:n===1?Y:_,alt:n===1?"1 뎁스 화살표":"서브 뎁스 화살표"})}):null,t.jsx("span",{children:e.name})]}),o&&m&&t.jsx("ul",{className:`depth_${n+1} children open`,children:e.children.map((c,k)=>S(c,[...s,k],n+1))})]})},r)};return t.jsx(W,{className:u?"":"close",children:t.jsx(X,{children:t.jsx("ul",{children:C.map((e,s)=>S(e,[s],1))})})})},W=g.div`
    width: ${({theme:i})=>i.SIZE.SIDE_NAVI};
    position: fixed;
    top: ${({theme:i})=>i.SIZE.HEADER};
    left: 0;
    height: calc(100% - ${({theme:i})=>i.SIZE.HEADER});
    overflow: auto;
    background-color: ${({theme:i})=>i.COLORS.SIDE_NAV.primary};
    transition: all .3s ease-in-out;
    z-index: 300;
    &.close { 
        left: ${({theme:i})=>"-"+i.SIZE.SIDE_NAVI};
    }
`,X=g.div`
    white-space: nowrap;
    .list {
        &.only, &.parent{
            cursor: pointer;
            &.active{
                .depth_1{
                    position: relative;
                    background-color: rgba(0, 0, 0, 0.1);
                    &::after{
                        content: "";
                        width: 2px;
                        height: 100%;
                        top: 0;
                        left: 1px;
                        position: absolute;
                        background-color: ${({theme:i})=>i.COLORS.SIDE_NAV.active.primary};
                    }
                }
                .children{
                    .list{
                        &.active{
                            background-color: rgba(0, 0, 0, 0.4);
                            .item{
                                color: ${({theme:i})=>i.COLORS.SIDE_NAV.active.primary};
                            }
                        }
                    }
                }
            }
        }
    }
    .menu-wrap .arrow-area {
        width: 20px;
        height: 20px;
        padding: 5px;
        display: flex;
        transform: rotate(-90deg);
        transition: transform .15s ease;
        align-items: center;
        justify-content: center;
    }
    .menu-wrap .arrow-area.on { transform: rotate(0deg); }

    .item {
        height: 48px;
        display: flex;
        align-items: center;
        color: ${({theme:i})=>i.COLORS.SIDE_NAV.font.primary};
        font-weight: 700;
        font-size: ${({theme:i})=>i.SIZE.FONT.m};
    }
    .depth_1.item { padding: 0 24px; }
    .depth_2.item { padding: 0 64px; }
    .depth_3.item { padding: 0 84px; }
    .depth_4.item { padding: 0 104px; }
    .depth_5.item { padding: 0 124px; }

    .children {
        height: 0; overflow: hidden; transform: scaleY(0);
        transform-origin: top left;
        transition: transform .12s ease, height .12s ease;
    }
    .children.open {
        transform: scaleY(1); height: auto; overflow: visible;
    }
`,te=()=>{const{pathname:i}=w(),{sideNavigation:d}=l.useContext(N),{userStore:u}=j(),A=l.useRef(null),h=E(),x=z();return H(h),U(x),l.useEffect(()=>{A.current&&(A.current.scrollTop=0),u.updateBreadcrumbFromPath(i)},[i]),t.jsx(t.Fragment,{children:t.jsx(l.Suspense,{fallback:t.jsx("div",{}),children:t.jsxs(G,{ref:A,children:[t.jsx($,{}),t.jsx(Z,{}),t.jsx(T,{className:`${d?"":"navi-close"}`,children:t.jsx(L,{})}),t.jsx(M,{}),t.jsx(F,{}),t.jsx(P,{}),t.jsx(Q,{autoClose:1500,hideProgressBar:!0,closeButton:!1,pauseOnHover:!1,position:"bottom-center",limit:3,toastClassName:()=>"bg-black text-white pd-0 rounded-lg shadow-lg b-large text-sm w-80",bodyClassName:()=>"flex flex-col space-y-1 text-base"})]})})})},G=g.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
`,T=g.div`
    transition: all .3s ease-in-out;
    padding: 40px;
    width: calc(100% - ${({theme:i})=>i.SIZE.SIDE_NAVI});
    position: relative;
    min-height: calc(100% - 80px);
    margin-top: ${({theme:i})=>i.SIZE.HEADER};
    margin-left: ${({theme:i})=>i.SIZE.SIDE_NAVI};
    background-color: #eee;
    &.navi-close{
        width: 100%;
        margin-left: 0;
    }
`;export{te as default};
