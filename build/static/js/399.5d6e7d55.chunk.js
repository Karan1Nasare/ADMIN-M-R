"use strict";(self.webpackChunkmr_education_system=self.webpackChunkmr_education_system||[]).push([[399],{71399:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var l=t(74600),a=t(41985),i=t(91576),r=t(66423),d=t(65043),n=t(73216),c=t(94335),o=t(97352),x=t(62632),m=t(70579);const h=e=>{let{admin:s}=e;const t=(0,n.Zp)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("img",{className:"h-14 w-14 rounded-full",src:s.profileImage,alt:""}),(0,m.jsxs)("div",{className:"text-white ml-3 text-left",children:[(0,m.jsx)("h2",{className:"text-sm",children:s.name}),(0,m.jsx)("h2",{className:"text-xs",children:s.email}),(0,m.jsx)("h2",{className:"text-xs",children:s.phone})]})]}),(0,m.jsx)("span",{}),(0,m.jsx)(r.In,{icon:"mdi:eye",className:"text-white",width:25,onClick:()=>{t(x.A.Admins.view(null===s||void 0===s?void 0:s.id))}})]}),(0,m.jsxs)("div",{className:"flex mt-3 justify-between",children:[(0,m.jsxs)("div",{className:"text-left",children:[(0,m.jsx)("h2",{className:"text-grey__primary__light",children:"Active Org"}),(0,m.jsx)("h2",{className:"bg-tealGreen__opacity mt-2 text-xs h-5 text-center text-tealGreen rounded-full w-11 bg-opacity-25",children:s.activeOrgCount})]}),(0,m.jsxs)("div",{className:"text-right",children:[(0,m.jsx)("h2",{className:"text-grey__primary__light",children:"Website"}),(0,m.jsx)("h2",{className:"bg-success w-32 truncate rounded-full mt-2 h-5 px-2 text-xs text-center text-wrap text-success bg-opacity-25",children:s.website})]})]})]})};var g=t(93339),u=t(95335);const p=()=>{const[e,s]=(0,d.useState)(""),[t,p]=(0,d.useState)(1),j=(0,n.Zp)(),w=g.A.filter((s=>s.name.toLowerCase().includes(e.toLowerCase())||s.email.toLowerCase().includes(e.toLowerCase())||s.phone.toLowerCase().includes(e.toLowerCase()))),f=w.slice(6*(t-1),6*t),_=Math.ceil(w.length/6);return(0,m.jsxs)("div",{className:"w-full",style:{display:"flex",flexDirection:"column",overflowY:"hidden"},children:[(0,m.jsx)("div",{className:"w-max mb-6",children:(0,m.jsx)("h2",{className:"text-white text-[32px] font-normal font-['Helvetica'] text-left",children:"Admins"})}),(0,m.jsxs)("div",{className:"text-sm w-full p-7 font-medium text-center bg-secondary__fill text-gray-500 border-gray-700 border rounded-md flex flex-row items-center justify-between",children:[(0,m.jsxs)(l.A,{direction:"row",alignItems:"center",spacing:3,children:[(0,m.jsx)("div",{className:"bg-secondary__fill__dark",children:(0,m.jsx)(u.A,{sx:{minWidth:"300px",background:e=>e.color.secondary__fill},onChange:e=>{s(e.target.value),p(1)},placeholder:"Search Name, Inrollment, Standerd"})}),(0,m.jsx)("div",{className:"bg-secondary__fill__dark border border-gray-700 border-opacity-20 rounded w-11 p-2 h-11",children:(0,m.jsx)(r.In,{icon:"octicon:filter-16",className:"text-white",width:25})})]}),(0,m.jsx)(c.A,{sx:{padding:"8px 16px",background:o.A.white},startIcon:(0,m.jsx)(r.In,{icon:"gala:add"}),onClick:()=>j(x.A.Admins.addAdmin),children:"Add Admin"})]}),(0,m.jsxs)(l.A,{sx:{width:"100%",marginTop:"20px",paddingBottom:"150px"},justifyContent:"center",alignItems:"center",children:[(0,m.jsx)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto",children:f.map(((e,s)=>(0,m.jsx)("div",{className:"bg-secondary__fill rounded-md h-44 p-7 border border-gray-700",children:(0,m.jsx)(h,{admin:e},s)},e.id)))}),(0,m.jsx)(a.A,{count:_,page:t,onChange:(e,s)=>{p(s)},renderItem:e=>(0,m.jsx)(i.A,{...e}),sx:{mt:"25px","& .MuiPaginationItem-root":{color:"rgba(125, 143, 179, 1)","&.Mui-selected":{color:o.A.white},"&:hover":{backgroundColor:o.A.secondary__fill__dark,color:o.A.white}},"& .MuiPaginationItem-previousNext":{backgroundColor:o.A.white,color:o.A.black}}})]})]})}}}]);
//# sourceMappingURL=399.5d6e7d55.chunk.js.map