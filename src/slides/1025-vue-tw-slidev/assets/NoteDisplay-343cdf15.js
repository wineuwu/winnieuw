import{d,o as n,e as s,z as l,f as r,t as a,_ as c}from"./index-46c2b648.js";const u=["innerHTML"],m=["textContent"],v=["textContent"],f=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return(e,t)=>e.noteHtml?(n(),s("div",{key:0,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(n(),s("div",{key:1,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(n(),s("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,v)],2))}}),y=c(f,[["__file","/Users/winnie/slides/meetup_slidev/node_modules/.pnpm/@slidev+client@0.43.7_postcss@8.4.31_vite@4.4.11/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{y as N};
