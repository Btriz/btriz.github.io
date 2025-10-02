import{j as i,a5 as p,r as u}from"./vendor-BCyGHQkV.js";import{u as m}from"./index-DK1xafpq.js";import{m as l}from"./framer-vendor-BuGnBr-Q.js";const c=t=>({initial:"initial",animate:"enter",exit:"exit",variants:t}),f=(t,e)=>({initial:{d:t},enter:{d:e,transition:o},exit:{d:t,transition:o}}),o={duration:.75,delay:.3,ease:[.76,0,0,.24]},h={initial:{top:"-300px"},enter:{top:"-100vh",transition:o,transitionEnd:{top:"100vh"}},exit:{top:"-300px",transition:o}},v={initial:{opacity:1},enter:{opacity:0,top:-100,transition:o,transitionEnd:{top:"48%"}},exit:{opacity:1,top:"40%",transition:{duration:.5,delay:.8,ease:[.33,1,.68,1]}}},$=({height:t,width:e})=>{const n=`
    M0 300
    Q${e/2} 0 ${e} 300
    L${e} ${t+300}
    Q${e/2} ${t+600} 0 ${t+300}
    L0 0 
  `,a=`
    M0 500
    Q${e/2} 0 ${e} 500
    L${e} ${t}
    Q${e/2} ${t} 0 ${t}
    L0 0 
  `;return i.jsx(l.svg,{className:"w-screen fixed left-0 pointer-events-none z-50 top-[-300px]",style:{height:"calc(100vh + 600px)"},...c(h),children:i.jsx(l.path,{...c(f(n,a))})})},E=({children:t,backgroundColor:e})=>{const{t:n}=p(),{nextRoute:a}=m(),[s,d]=u.useState({width:null,height:null}),x={"/":n("transition.welcome",{defaultValue:"Welcome"}),"/home":n("transition.home",{defaultValue:"Home"}),"/about":n("transition.about",{defaultValue:"About"}),"/projects":n("transition.projects",{defaultValue:"Projects"}),"/contact":n("transition.contact",{defaultValue:"Contact"})}[a];return u.useEffect(()=>{const r=()=>{d({width:window.innerWidth,height:window.innerHeight})};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),i.jsxs("div",{className:"relative w-full min-h-screen",style:{backgroundColor:e},children:[s.width==null&&i.jsx("div",{className:"fixed h-screen w-screen top-0 left-0 z-49 bg-black"}),i.jsx(l.p,{...c(v),className:`
        fixed left-1/2 top-[40%] -translate-x-1/2 z-51
        text-white text-2xl md:text-5xl font-shrikhand pointer-events-none
      `,children:x}),s.width!==null&&s.height!==null&&i.jsx($,{width:s.width,height:s.height}),i.jsx("div",{className:"relative z-10",children:t})]})};export{E as C};
