import{aB as o,aS as p,aT as u,aU as l,aV as c,aW as f,aX as d,aY as m,aZ as h,a_ as b,a$ as g,l as A,ay as P,b as v,B as y,b0 as w,b1 as C,b2 as R,ak as S}from"./chunks/framework.BeivUGqH.js";import{b0 as T}from"./chunks/theme.ThqEXQr2.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),_=A({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),R(),s.setup&&s.setup(),()=>S(s.Layout)}});async function E(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(_)}function V(){let e=o,a;return b(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&E().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{E as createApp};
