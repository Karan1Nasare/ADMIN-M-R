"use strict";(self.webpackChunkmr_education_system=self.webpackChunkmr_education_system||[]).push([[679],{12599:(e,t,s)=>{s.d(t,{A:()=>o});var l=s(74600),i=s(65043),n=s(47196),a=s(75200),r=s(39991),d=s(70579);const o=e=>{let{file:t,setFile:s}=e;const[o,c]=(0,i.useState)(!1),[x,m]=(0,i.useState)(!1);return(0,d.jsx)("div",{className:"text-sm w-full font-medium text-center bg-[#0B1739] text-gray-500   p-7 rounded-md flex items-center justify-between",children:(0,d.jsxs)(l.A,{direction:"row",justifyContent:"space-between",sx:{width:"100%"},children:[(0,d.jsxs)(l.A,{direction:"row",alignItems:"center",spacing:5,sx:{flex:1},children:[(0,d.jsx)(l.A,{sx:{width:"120px",height:"120px"},children:(0,d.jsx)(r.A,{setFile:s,selectFile:o,removeFile:x,setRemoveSelection:m,setSelection:c,isRounded:!0})}),(0,d.jsxs)(l.A,{children:[(0,d.jsx)("p",{className:"text-lg  text-white text-left",children:"Upload Your Plan Image"}),(0,d.jsxs)("p",{className:"text-sm font-normal text-[#98A4AE]",children:["Allowed JPG, GIF or PNG. Max size of 800K"," "]})]})]}),(0,d.jsxs)(l.A,{direction:"row",justifyContent:"center",alignItems:"center",spacing:5,children:[(0,d.jsxs)("button",{onClick:e=>{e.stopPropagation(),c(!0)},className:"btn flex flex-row justify-center items-center gap-2 bg-white",type:"button",children:[(0,d.jsx)(n.vzv,{}),"Choose File"]}),t&&(0,d.jsxs)("button",{type:"button",onClick:e=>{e.stopPropagation(),m(!0)},className:"btn bg-[rgba(255,102,146,0.2)] flex flex-row justify-center items-center gap-2 text-red-900",children:[(0,d.jsx)(a.IXo,{className:"text-red-600 cursor-pointer"}),"Remove"]})]})]})})}},44223:(e,t,s)=>{s.d(t,{A:()=>f});var l=s(65043),i=s(45394),n=s(60184),a=s(47196),r=s(23217),d=s(66423),o=s(85865),c=s(70579);const x=e=>{let{heading:t,title:s,subTitle:l,previewImage:i,successNumber:n,description:a,isOpen:r,onClose:d}=e;return r?(0,c.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start",children:(0,c.jsxs)("div",{className:"bg-secondary__fill w-42.6 rounded-xl border border-gray-700 border-solid p-6",children:[(0,c.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,c.jsx)("h2",{className:"text-white text-lg",children:t}),(0,c.jsx)("button",{className:"text-white text-xl",onClick:d,"aria-label":"Close",children:"\xd7"})]}),(0,c.jsx)("div",{className:"border-b border-gray-700 mb-4"}),(0,c.jsx)("img",{className:"w-full rounded-xl mb-4",src:i,alt:"Preview Image"}),(0,c.jsx)("div",{className:"mb-4",children:(0,c.jsx)("div",{className:"justify-center w-12 text-center px-2 py-1 mt-5 text-sm font-semibold text-success bg-success whitespace-nowrap bg-green-500 bg-opacity-20 rounded-full inline-block",children:n})}),(0,c.jsxs)("div",{className:"text-white mb-5",children:[(0,c.jsx)("div",{children:(0,c.jsx)(o.A,{variant:"h5",className:"text-lg",children:s})}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)(o.A,{variant:"h6",className:"text-grey__primary__light ",children:l})})]}),(0,c.jsx)(o.A,{variant:"cardDescription",className:"text-white ",children:a})]})}):null};var m=s(2706),u=s(17392),h=s(74802),p=s(72196),j=s(98861);const b=e=>{let{isOpen:t,onClose:s}=e;if(!t)return null;const[i,n]=(0,l.useState)(p);return(0,c.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start",children:(0,c.jsxs)("div",{className:"flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill max-w-[673px] max-md:px-5",children:[(0,c.jsxs)("div",{className:"flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full",children:[(0,c.jsx)("div",{className:"flex-auto my-auto ",children:"Edit Announcement"}),(0,c.jsx)(u.A,{"aria-label":"close",onClick:s,sx:{color:"white"},children:(0,c.jsx)(h.A,{})})]}),(0,c.jsx)("div",{className:"shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full"}),(0,c.jsxs)("div",{className:"flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full",children:[(0,c.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,c.jsx)("img",{loading:"lazy",src:i,className:"object-cover w-full h-full opacity-50"})}),(0,c.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center",children:[(0,c.jsxs)("label",{htmlFor:"fileInput",className:"cursor-pointer",children:[(0,c.jsx)(d.In,{icon:"uil:image-upload",className:"text-white text-xl mb-1"}),(0,c.jsx)("input",{id:"fileInput",type:"file",hidden:!0,onChange:e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onloadend=()=>{n(e.result)},e.readAsDataURL(t)}}})]}),(0,c.jsx)("span",{className:"text-white text-lg cursor-pointer",onClick:()=>document.getElementById("fileInput").click(),children:"Change"})]})]}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-5 content-start mt-5 text-sm ",children:[(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("div",{className:"text-white",children:"Feature Name"}),(0,c.jsx)("input",{type:"text",className:"w-full px-3 py-3 mt-2 rounded border border-gray-700 border-solid bg-none leading-[143%] text-ellipsis text-stone-300  focus:outline-none focus:ring-2 focus:ring-primary bg-transparent",placeholder:"Select Feature Name"})]}),(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("div",{className:"text-white",children:"GST"}),(0,c.jsx)("input",{type:"text",placeholder:"Enter GST",className:"justify-center bg-transparent items-start px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-stone-300 max-md:pr-5"})]})]}),(0,c.jsx)("div",{className:"mt-5 text-sm text-white max-md:max-w-full",children:"Description"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)(j.A,{})}),(0,c.jsxs)("div",{className:"flex flex-wrap gap-5 content-start mt-5 text-sm",children:[(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("div",{className:"text-white",children:"Rate (Amount)"}),(0,c.jsx)("input",{placeholder:"Enter Rate",className:"justify-center bg-transparent items-start px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5"})]}),(0,c.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,c.jsx)("div",{className:"text-white",children:"Total Amount"}),(0,c.jsx)("input",{placeholder:"Enter Total Amount",className:"justify-center items-start bg-transparent px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5"})]})]}),(0,c.jsx)("button",{className:"justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5",children:"Update"})]})})},f=e=>{let{id:t,image:s,title:l,descriptionTitle:o,descriptionMetaData:u,isPreviewOpen:h,isEditOpen:p,openDelete:j,openEditDialog:f,closeEditDialog:g,openPreviewDialog:y,closePreviewDialog:w,confirmDeleteHandler:A,handleCloseDelete:v,openDeleteDialog:N,adminPage:C}=e;return(0,c.jsxs)("div",{className:"relative bg-secondary__fill h-68 w-34 mt-4 p-8 rounded-lg border border-grey__primary__light border-opacity-20",children:[(0,c.jsx)("img",{src:s,className:"w-full h-13",alt:"Feature Image"}),(0,c.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,c.jsxs)("div",{className:"flex items-start flex-col w-full",children:[(0,c.jsx)("div",{className:"text-white font-normal text-md",children:l}),(0,c.jsxs)("div",{className:"flex justify-between w-full",children:[(0,c.jsxs)("div",{className:"flex items-center w-full",children:[(0,c.jsx)("div",{className:"text-grey__primary__light text-sm",children:o}),(0,c.jsx)("div",{className:"text-xs rounded-xl border w-12 text-success border-none bg-success bg-opacity-50 px-1 py-1 ml-3 font-semibold",children:u})]}),(0,c.jsx)("div",{children:(null===C||void 0===C?void 0:C.show)&&(0,c.jsx)(r.A,{sx:{alignSelf:"end"},checked:null===C||void 0===C?void 0:C.Ischecked,onChange:()=>null===C||void 0===C?void 0:C.onChnageCardChekbox(t),icon:(0,c.jsx)(d.In,{icon:"ic:round-check-box-outline-blank",color:"white",fontSize:20}),checkedIcon:(0,c.jsx)(d.In,{icon:"ic:round-check-box",fontSize:20})})})]})]}),!(null!==C&&void 0!==C&&C.show)&&(0,c.jsxs)("div",{className:"text-white flex",children:[(0,c.jsx)(i.GNz,{className:"h-5 w-5 mr-4 cursor-pointer",onClick:y}),(0,c.jsx)(n.wwX,{className:"h-5 w-5 mr-4",onClick:f}),(0,c.jsx)(a.OXW,{className:"h-5 w-5 text-red-500",onClick:N})]})]}),(0,c.jsx)(x,{isOpen:h,onClose:w,heading:"Announcement",title:l,subTitle:o,previewImage:s,successNumber:u,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia veniam ut aut error. Fugiat accusamus ipsam, quisquam eius qui magni consequatur voluptatum ab deleniti repellat, facere, consectetur ut commodi iusto. Ab. "}),(0,c.jsx)(m.A,{fullMessage:"Are you sure want to Delete Feature ?",title:"Delete Feature",handleClose:v,deleteHandler:A,open:j}),(0,c.jsx)(b,{isOpen:p,onClose:g,heading:"Edit Announcement",title:l,previewImage:s})]})}},54679:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var l=s(36546),i=s(24056),n=s(65043),a=s(66423),r=s(24858),d=s(91424),o=s(68903),c=s(51787),x=s(17392),m=s(43559),u=s(3632),h=s(12599),p=s(15189),j=s(94335),b=s(97352),f=s(13429),g=s(70579);const y=e=>{let{setValue:t}=e;const[s,l]=(0,n.useState)(),[i,a]=(0,n.useState)(!1),[r,d]=(0,n.useState)(!1),[j,b]=(0,f.Pj)();return(0,n.useEffect)((()=>{s&&s.length>0?t("profilePicture",s[0]):t("profilePicture",null)}),[s]),(0,g.jsxs)("div",{className:"mt-3",children:[(0,g.jsx)(h.A,{file:s,setFile:l}),(0,g.jsx)("div",{className:"text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between",children:(0,g.jsxs)(o.Ay,{container:!0,spacing:4,children:[(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminName",label:"Admin Name*",placeholder:"Enter name",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminEmail",type:"email",label:"Email*",placeholder:"Enter Email",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminPhoneNumber",type:"number",label:"Admin Phone Number*",placeholder:"Enter Phone Number",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminGstNumber",type:"text",label:"GST Number",placeholder:"Enter GST Number",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:12,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminWebUrl",type:"text",label:"Website*",placeholder:"www.abcorg.com",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminState",type:"text",label:"State*",placeholder:"Gujarat",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminCity",type:"text",label:"City*",placeholder:"Gandhinagar",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminAddress",type:"text",label:"Admin Address*",placeholder:"814 Howard Street, 120065, India",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminPinCode",type:"text",label:"Pin code*",placeholder:"380058",fullWidth:!0,required:!0})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminPassword",type:i?"text":"password",label:"Password*",placeholder:"814 Howard Street, 120065, India",fullWidth:!0,required:!0,InputProps:{endAdornment:(0,g.jsx)(c.A,{position:"end",children:(0,g.jsx)(x.A,{"aria-label":"toggle password visibility",onClick:()=>a(!i),edge:"end",className:"text-white",children:i?(0,g.jsx)(m.A,{className:"text-white"}):(0,g.jsx)(u.A,{className:"text-white"})})})}})}),(0,g.jsx)(o.Ay,{item:!0,md:6,children:(0,g.jsx)(p.o3,{size:"small",name:"AdminCPassword",type:r?"text":"password",label:"Confirm Password*",placeholder:"Enter Confirm Password",fullWidth:!0,required:!0,InputProps:{endAdornment:(0,g.jsx)(c.A,{position:"end",children:(0,g.jsx)(x.A,{"aria-label":"toggle password visibility",onClick:()=>d(!r),edge:"end",className:"text-white",children:r?(0,g.jsx)(m.A,{className:"text-white"}):(0,g.jsx)(u.A,{className:"text-white"})})})}})})]})})]})},w=e=>{let{setValue:t}=e;return(0,g.jsxs)("div",{children:[(0,g.jsx)(d.A,{title:"Admin Personal Details",sx:{marginTop:"20px"}}),(0,g.jsx)(y,{setValue:t})]})};var A=s(57842),v=s(68275),N=s(12110);const C=()=>(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(N.A,{sx:{borderRadius:"12px",width:"100%",color:"black",backgroundColor:e=>e.color.secondary__fill,padding:"25px"},children:(0,g.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,g.jsxs)(o.Ay,{item:!0,md:6,xs:12,children:[(0,g.jsx)("p",{className:"text-left text-white mb-2",children:"Payment Type"}),(0,g.jsx)(p.tX,{size:"small",name:"payment_type",required:!0,options:[{label:"G Pay",value:"G-Pay"},{label:"Phonepe",value:"Phonepe"},{label:"Cheque",value:"Cheque"}]})]}),(0,g.jsxs)(o.Ay,{item:!0,md:6,xs:12,children:[(0,g.jsx)("p",{className:"text-left text-white mb-2",children:"Transaction Type"}),(0,g.jsx)(p.tX,{size:"small",name:"transaction_type",required:!0,options:[{label:"Cash",value:"Cash"},{label:"Online",value:"Online"}]})]}),(0,g.jsxs)(o.Ay,{item:!0,md:6,xs:12,children:[(0,g.jsx)("p",{className:"text-left text-white mb-2",children:"Transaction ID"}),(0,g.jsx)(p.o3,{size:"small",name:"transaction_ID",placeholder:"Transaction ID"})]})]})})});var k=s(55756),I=s(58200),_=s(75136);const S=e=>{let{values:t,setValue:s}=e;const{planData:l}=(0,I.A)(),i=(0,k.u)();return console.debug("theme",i),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(o.Ay,{container:!0,spacing:3,sx:{marginTop:"20px",paddingBottom:"50px"},children:l&&l.map(((e,l)=>(0,g.jsx)(o.Ay,{item:!0,md:4,lg:3,xs:6,children:(0,g.jsx)(_.A,{plan:e,showAddEditBtn:!1,children:(0,g.jsx)(j.A,{sx:{background:(null===t||void 0===t?void 0:t.plan)===(null===e||void 0===e?void 0:e.id)?i.color.deep_saffron:i.color.white,marginTop:"10px",width:"100%",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:(null===t||void 0===t?void 0:t.plan)===(null===e||void 0===e?void 0:e.id)?i.color.white:i.color.black},onClick:()=>{s("plan",null===e||void 0===e?void 0:e.id)},children:(0,g.jsx)(a.In,{icon:"mdi:tick",width:25})})})},l)))})})};var P=s(96446),z=s(69413),D=s(74605),T=s(23217),q=s(44223),E=s(72196);const F=Array.from({length:6},((e,t)=>({title:"Feature ".concat(t),descriptionTitle:"Total Amount:",descriptionMetaData:"600",image:E,id:t+1})));const W=function(e){let{selectedCard:t,setselectedCard:s}=e;const[l,i]=n.useState(!1),[r,d]=n.useState(!1),c=e=>{d(!1),i(!1),t.includes(e)?s(t.filter((t=>t!==e))):s([...t,e])};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N.A,{sx:{borderRadius:"12px",width:"100%",color:"black",backgroundColor:b.A.secondary__fill,padding:"30px"},children:(0,g.jsxs)(P.A,{sx:{display:"flex",gap:"20px"},children:[(0,g.jsx)(P.A,{sx:{px:"10px",py:"3px",bgcolor:b.A.secondary__fill__dark,border:"1px solid ".concat(b.A.blue__gray),borderRadius:"6px"},children:(0,g.jsx)(z.A,{children:(0,g.jsx)(D.A,{control:(0,g.jsx)(T.A,{checked:l,onChange:(e,t)=>{i(t),d(!1),t&&s(F.map((e=>e.id)))},icon:(0,g.jsx)(a.In,{icon:"ic:round-check-box-outline-blank",color:"white",fontSize:20}),checkedIcon:(0,g.jsx)(a.In,{icon:"ic:round-check-box",fontSize:20})}),label:"Select All"})})}),(0,g.jsx)(P.A,{sx:{px:"10px",py:"3px",bgcolor:b.A.secondary__fill__dark,border:"1px solid ".concat(b.A.blue__gray),borderRadius:"6px"},children:(0,g.jsx)(z.A,{children:(0,g.jsx)(D.A,{control:(0,g.jsx)(T.A,{onChange:(e,t)=>{d(t),t&&(i(!1),s([]))},checked:r,icon:(0,g.jsx)(a.In,{icon:"ic:round-check-box-outline-blank",color:"white",fontSize:20}),checkedIcon:(0,g.jsx)(a.In,{icon:"ic:round-check-box",fontSize:20})}),label:"Deselect All"})})}),(0,g.jsx)(P.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsxs)(P.A,{sx:{p:"10px",pr:"5px",color:"white"},children:[t.length," Selected"]})})]})}),(0,g.jsx)(o.Ay,{container:!0,spacing:2,children:F.map((e=>(0,g.jsx)(o.Ay,{item:!0,xs:12,md:6,lg:4,children:(0,g.jsx)(q.A,{title:e.title,image:e.image,descriptionMetaData:e.descriptionMetaData,descriptionTitle:e.descriptionTitle,id:e.id,adminPage:{show:!0,Ischecked:t.includes(e.id),onChnageCardChekbox:c}})},e.id)))})]})};s(95335);const G=function(){return(0,g.jsxs)(N.A,{sx:{borderRadius:"12px",width:"100%",color:"black",backgroundColor:b.A.secondary__fill,padding:"25px"},children:[(0,g.jsx)(d.A,{title:"Add Student",sx:{marginBottom:"20px"}}),(0,g.jsx)(P.A,{mt:2,children:(0,g.jsx)(p.o3,{name:"StudentCount",placeholder:"500",fullWidth:!0,required:!0,label:"Add Student Count*"})})]})},R=()=>(0,g.jsx)(G,{}),O=()=>{const[e,t]=(0,n.useState)("1"),[s,d]=(0,n.useState)({}),[o,c]=(0,n.useState)(),[x,m]=(0,n.useState)([]),u=(0,r.mN)(),{handleSubmit:h,setValue:b,watch:f,formState:{isSubmitting:y}}=u,N=f();return(0,g.jsxs)("div",{children:[(0,g.jsxs)(l.A,{value:e,onChange:(e,s)=>{t(s)},"aria-label":"icon position tabs example",variant:"scrollable",scrollButtons:!0,children:[(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"gg:profile",width:25}),iconPosition:"start",label:"Admin Details",sx:{gap:"15px"},value:"1"}),(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"flowbite:user-add-solid",width:25}),iconPosition:"start",label:"Add Student",sx:{gap:"15px"},value:"2"}),(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"oui:page-select",width:25}),iconPosition:"start",label:"Select Plan",sx:{gap:"15px"},value:"3"}),(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"pajamas:issue-type-feature",width:25}),iconPosition:"start",label:"Select Features",sx:{gap:"15px"},value:"4"}),(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"hugeicons:invoice-02",width:25}),iconPosition:"start",label:"Invoice",sx:{gap:"15px"},value:"5"}),(0,g.jsx)(i.A,{icon:(0,g.jsx)(a.In,{icon:"material-symbols:payments-sharp",width:25}),iconPosition:"start",label:"Billing",sx:{gap:"15px"},value:"6"})]}),(0,g.jsx)("div",{children:(0,g.jsxs)(p.Op,{methods:u,onSubmit:h((async s=>{d({[e]:!0}),t((e=>"".concat(parseInt(e,10)+1))),console.debug("onSubmit",s)})),children:[(k=e,{1:(0,g.jsx)(w,{setValue:b}),2:(0,g.jsx)(R,{}),3:(0,g.jsx)(S,{setValue:b,values:N}),4:(0,g.jsx)(W,{selectedCard:x,setselectedCard:m}),5:(0,g.jsx)(v.A,{}),6:(0,g.jsx)(C,{})}[k]),(0,g.jsxs)("div",{className:"flex  ".concat(1===e?"justify-end":"justify-between"),children:[1!==e&&(0,g.jsx)(j.A,{type:"button",variant:"contained",color:"primary",disabled:y,onClick:function(){t((e=>"".concat(e-1)))},sx:{mt:3,background:"white",color:"#000"},startIcon:(0,g.jsx)("img",{src:A.A,alt:"next",className:"rotate-180"}),children:"Pervious"}),(0,g.jsx)(j.A,{type:"submit",variant:"contained",color:"primary",disabled:y,sx:{mt:3,background:"white",color:"#000"},endIcon:(0,g.jsx)("img",{src:A.A,alt:"next"}),children:"Next"})]})]})})]});var k}}}]);
//# sourceMappingURL=679.304bf052.chunk.js.map