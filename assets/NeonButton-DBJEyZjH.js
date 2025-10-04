import{r,j as e}from"./vendor-BkasD6Wj.js";const x=({text:a,icon:o,className:i="",...c})=>{const t=!!o,n=o,[s,l]=r.useState(!1);r.useEffect(()=>{l("ontouchstart"in window||navigator.maxTouchPoints>0)},[]);const u=`
    absolute overflow-hidden -z-1 w-full h-full flex items-center
    ${t?"right-0 pr-[1em] justify-end":"justify-center"}
  `,d=t?"background-icon flex transition-transform duration-500 ease-out text-neon-light":"background bg-neon-light w-[1em] h-[1em] rounded-full text-neon-light";return e.jsxs("button",{...c,className:`
        btn-neon backdrop-blur-xs cursor-pointer
        relative flex justify-center items-center
        w-fit h-fit py-[.5em] px-[1em]
        border-3 border-neon-light drop-shadow-2xl drop-shadow-neon-light/50
        transition-colors duration-500 delay-0
        font-64 text-neon-light uppercase
        will-change-auto
        ${s?"active:text-purple-light":"hover:text-purple-light hover:animate-none hover:transition-colors hover:duration-500 hover:delay-0"}
        ${t&&"has-icon pr-[3.5em]"}
        ${i}
        ${s?"touch-device":""}
      `,children:[e.jsx("div",{className:"text transition-transform duration-500 ease-out translate-y-0.5",children:a}),e.jsx("div",{className:u,"aria-hidden":"true",children:e.jsx("div",{className:d,children:n&&e.jsx(n,{color:"#65f5afdb",className:"h-6 w-6"})})}),e.jsx("div",{className:"sticky-element se-big"})]})};export{x as N};
