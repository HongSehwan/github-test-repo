import{r as l,j as o,aT as u,ah as g,d as s,aU as b}from"./index-DqWJ4ltY.js";const p=({selectedDate:e,onChange:n,placeholderText:t="날짜 선택",minDate:r=void 0,maxDate:i=void 0,className:d=""})=>{const[x,a]=l.useState(!!e);l.useEffect(()=>{a(!!e)},[e]);const h=c=>{a(!!c),n(c)};return o.jsx(m,{children:o.jsx(u,{selected:e??void 0,onChange:h,placeholderText:t,minDate:r,maxDate:i,dateFormat:"yyyy-MM-dd",className:d,customInput:o.jsx(f,{isDateSelected:x,placeholder:t})})})},f=g.forwardRef(({value:e,onClick:n,placeholder:t,isDateSelected:r},i)=>o.jsxs(D,{onClick:n,children:[o.jsx(j,{className:"calendar-icon",children:o.jsx(b,{})}),o.jsx(v,{ref:i,placeholder:t,value:e||"",readOnly:!0,hasIcon:!r})]})),D=s.div`
    position: relative;
    width: 185px;
    display: flex;
    align-items: center;
    border: 1px solid #DFDFDF;
    height: 40px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
`,j=s.div`
    font-size: 18px;
    color: #b0b0b0;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F4F4F4;
    border-right: 1px solid #DFDFDF;
    flex-shrink: 0;
`,v=s.input.withConfig({shouldForwardProp:e=>e!=="hasIcon"})`
    // width: 180px;
    // padding: 8px 12px;
    // padding-left: ${e=>e.hasIcon?"30px":"20px"};
    // border: none;
    // border-radius: 2px;
    // font-size: 14px;
    // color: #262626;
    // outline: none;
    // box-sizing: border-box;
    // height: 38px;
    width: 100%;
    padding: 8px 12px 8px 0;
    border: none;
    border-radius: 0;
    font-weight: 400;
    font-size: 14px;
    color: #262626;
    outline: none;
    box-sizing: border-box;
    height: 38px;
    text-align: center;
    cursor: pointer;
    
    &::placeholder {
        color: #b0b0b0;
    }

    &:focus {
        border-color: #44797b;
        box-shadow: 0 0 4px rgba(68, 121, 123, 0.5);
    }
`,m=s.div`
    display: flex;
`,F=({startDate:e,endDate:n,onStartDateChange:t,onEndDateChange:r,placeholderTextStart:i="시작 날짜",placeholderTextEnd:d="종료 날짜"})=>o.jsxs(y,{children:[o.jsx(p,{selectedDate:e,onChange:t,placeholderText:i}),o.jsx("div",{className:"divide",children:"~"}),o.jsx(p,{selectedDate:n,onChange:r,placeholderText:d,minDate:e||void 0})]}),y=s.div`
    display: flex;
    align-items: center;
    .divide{
        font-weight: 400;
        font-size: 14px;
        color: #666666;
        padding: 0 9px;
    }
`;export{F as D};
