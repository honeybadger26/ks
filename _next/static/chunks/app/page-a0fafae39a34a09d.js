(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1278:function(e,t,r){Promise.resolve().then(r.bind(r,7340))},7340:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(7437),s=r(5523),a=r(313),i=r(3061),l=r(8005),o=r(547),c=r(9376),u=r(2265);let m="no-spinner px-3 py-1 text-center text-black h-12",d="".concat(m," w-24"),p=(e,t)=>{if(""===t)return{error:"".concat(e," is required")};let r=parseFloat(t);return r<=0?{error:"".concat(e," must be positive")}:Number.isInteger(r)?{value:r}:{error:"".concat(e," must be an integer")}};function b(){let e=(0,c.useRouter)(),[t,r]=(0,u.useState)(""),[b,h]=(0,u.useState)(""),[g,x]=(0,u.useState)(""),[f,v]=(0,u.useState)([]);return(0,u.useEffect)(()=>{let e=(0,o.k)();e&&(r("".concat(e.rows)),h("".concat(e.cols)),x("".concat(e.numBlocks)))},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("table",{className:"mb-5",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"text-center",children:"Rows"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{className:"text-center",children:"Cols"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("input",{className:d,type:"number",inputMode:"numeric",value:t,onChange:e=>r(e.target.value)})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"px-4",children:"X"})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{className:d,type:"number",inputMode:"numeric",value:b,onChange:e=>h(e.target.value)})})]})]})}),(0,n.jsx)("div",{className:"mx-auto mb-1",children:"Number of Blocks"}),(0,n.jsx)("input",{className:"".concat(m," mb-8 w-48"),type:"number",inputMode:"numeric",value:g,onChange:e=>x(e.target.value)}),f.length>0&&(0,n.jsx)("div",{className:"-mt-1 mb-8 text-center",children:f.map(e=>(0,n.jsx)(i.y,{children:e},e))}),(0,n.jsxs)(a.V,{children:[(0,n.jsx)(l.M,{}),(0,n.jsx)(s.z,{onClick:()=>{let r=p("Rows",t),n=p("Cols",b),s=p("Number of blocks",g),a=[r.error,n.error,s.error].filter(e=>!!e);if(a.length>0){v(a);return}(0,o.c)({rows:r.value,cols:n.value,numBlocks:s.value}),e.push("/blocks")},children:"Next"})]})]})}},3:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var n=r(7437),s=r(8667);let a=["bg-white","bg-red-600","bg-blue-600","bg-green-500","bg-fuchsia-500","bg-amber-300","bg-teal-300","bg-violet-600","bg-amber-900","bg-slate-500"],i=e=>{let{grid:t,onClick:r}=e,i=()=>{let e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4))},l=e=>0===e?"":a[(e-1)%a.length],o=(e,t,n)=>{if(r){var s;null==e||null===(s=e.dataTransfer)||void 0===s||s.setDragImage(new Image,0,0),r(t,n)}};return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)(s.default,{src:"https://bernardo-castilho.github.io/DragDropTouch/DragDropTouch.js"}),(0,n.jsx)("table",{children:(0,n.jsx)("tbody",{children:t.map((e,t)=>(0,n.jsx)("tr",{children:e.map((e,s)=>(0,n.jsx)("td",{draggable:!!r,className:"w-10 h-10 border-2 text-center ".concat(l(e)),onDragEnter:e=>o(e,t,s),onClick:i()?void 0:e=>o(e,t,s),onTouchStart:i()?e=>o(e,t,s):void 0},s))},t))})})]})}},5523:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var n=r(7437);let s=e=>{let{extraClass:t,padding:r,children:s,onClick:a}=e;return(0,n.jsx)("button",{className:"bg-blue-500 text-slate-100 ".concat(null!=r?r:"px-6 py-3"," ").concat(t),onClick:a,children:s})}},313:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7437);let s=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex gap-5 justify-center",children:t})}},3061:function(e,t,r){"use strict";r.d(t,{y:function(){return s}});var n=r(7437);let s=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"text-rose-500",children:t})}},8005:function(e,t,r){"use strict";r.d(t,{M:function(){return o}});var n=r(7437),s=r(2265),a=r(3),i=r(5523);let l=e=>{let{onClose:t}=e;return(0,n.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-80 z-10 flex min-h-full justify-center items-center sm:items-start sm:pt-16",children:(0,n.jsxs)("div",{className:"px-5 py-4 bg-slate-900 shadow-xl size-full sm:w-auto sm:max-w-lg max-h-screen sm:h-auto overflow-auto",children:[(0,n.jsx)(i.z,{padding:"px-4 pt-1 pb-2",extraClass:"ml-5 mb-5 float-right text-4xl flex items-start",onClick:t,children:"x"}),(0,n.jsx)("div",{className:"mb-5",children:"Solve puzzles for the board game Katamino."}),(0,n.jsx)("div",{className:"mb-5",children:"First, enter the dimensions of the board and the number of blocks to be placed. Then draw the shapes of the blocks that will be placed. Submit the puzzle and a solution will be printed if one exists."}),(0,n.jsx)("div",{className:"mb-5",children:"For example, using a 2 x 3 board and the following blocks..."}),(0,n.jsxs)("div",{className:"mb-7 w-full flex flex-row justify-around items-center",children:[(0,n.jsx)(a.$,{grid:[[1]]}),(0,n.jsx)(a.$,{grid:[[2],[2]]}),(0,n.jsx)(a.$,{grid:[[3,0],[3,3]]})]}),(0,n.jsx)("div",{className:"mb-5",children:"...will produce a solution such as:"}),(0,n.jsx)("div",{className:"mb-7 w-full flex flex-row justify-around items-center",children:(0,n.jsx)(a.$,{grid:[[2,3,1],[2,3,3]]})}),(0,n.jsx)("div",{className:"mb-5",children:"Note: There is always more than one solution (such as flipping the board vertically/horizontally), but only the first solution found will be shown."})]})})},o=()=>{let[e,t]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.z,{onClick:()=>t(!e),children:"Help"}),e&&(0,n.jsx)(l,{onClose:()=>t(!1)})]})}},2276:function(e,t,r){"use strict";r.d(t,{ND:function(){return i},rG:function(){return a},tX:function(){return s}});var n=r(8685);function s(){let e=localStorage.getItem(n.I);return e?JSON.parse(e):null}function a(e){let t=JSON.stringify(e);t!==localStorage.getItem(n.I)&&localStorage.setItem(n.I,t)}function i(e){a(Array.from(Array(e.numBlocks)).map(()=>Array.from(Array(e.rows)).map(()=>Array(e.cols).fill(0))))}},8685:function(e,t,r){"use strict";r.d(t,{I:function(){return s},p:function(){return n}});let n="puzzle",s="blocks"},547:function(e,t,r){"use strict";r.d(t,{c:function(){return i},k:function(){return a}});var n=r(2276),s=r(8685);function a(){let e=localStorage.getItem(s.p);return e?JSON.parse(e):null}function i(e){let t=JSON.stringify(e);t!==localStorage.getItem(s.p)&&(localStorage.setItem(s.p,t),localStorage.removeItem(s.I),(0,n.ND)(e))}}},function(e){e.O(0,[782,971,117,744],function(){return e(e.s=1278)}),_N_E=e.O()}]);