import{_ as t}from"./chunks/theme.DUeVaHvB.js";import{_ as n,m as h,o as k,c as p,a as i,W as s,v as l,q as r}from"./chunks/framework.BeivUGqH.js";const f=JSON.parse(`{"title":"Quick Start","description":"","frontmatter":{"title":"Quick Start","lang":"en-US"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Full Import","slug":"full-import","link":"#full-import","children":[{"level":4,"title":"Volar support","slug":"volar-support","link":"#volar-support","children":[]}]},{"level":3,"title":"On-demand Import","slug":"on-demand-import","link":"#on-demand-import","children":[{"level":4,"title":"Auto import <el-tag type=\\"primary\\" style=\\"vertical-align: middle;\\" effect=\\"dark\\" size=\\"small\\">Recommend</el-tag>","slug":"auto-import-recommend","link":"#auto-import-recommend","children":[{"level":5,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":5,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]}]},{"level":4,"title":"Nuxt","slug":"nuxt","link":"#nuxt","children":[]}]},{"level":3,"title":"Manually import","slug":"manually-import","link":"#manually-import","children":[]}]},{"level":2,"title":"Starter Template","slug":"starter-template","link":"#starter-template","children":[]},{"level":2,"title":"Global Configuration","slug":"global-configuration","link":"#global-configuration","children":[]},{"level":2,"title":"Using Nuxt.js","slug":"using-nuxt-js","link":"#using-nuxt-js","children":[]},{"level":2,"title":"Let's Get Started","slug":"let-s-get-started","link":"#let-s-get-started","children":[]}],"relativePath":"en-US/guide/quickstart.md","filePath":"en-US/guide/quickstart.md","lastUpdated":1727515729000}`),E={name:"en-US/guide/quickstart.md"};function d(o,g,c,u,y,m){const e=h("el-tag"),a=t;return k(),p("div",null,[i("h1",{id:"quick-start",tabindex:"-1"},[s("Quick Start "),i("a",{class:"header-anchor vp-link",href:"#quick-start","aria-label":'Permalink to "Quick Start"'},"​")]),i("p",null,"This section describes how to use Element Plus in your project."),i("h2",{id:"usage",tabindex:"-1"},[s("Usage "),i("a",{class:"header-anchor vp-link",href:"#usage","aria-label":'Permalink to "Usage"'},"​")]),i("h3",{id:"full-import",tabindex:"-1"},[s("Full Import "),i("a",{class:"header-anchor vp-link",href:"#full-import","aria-label":'Permalink to "Full Import"'},"​")]),i("p",null,"If you don’t care about the bundle size so much, it’s more convenient to use full import."),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { createApp } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/dist/index.css'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," App "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './App.vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," app"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createApp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(App)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mount"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'#app'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])]),i("h4",{id:"volar-support",tabindex:"-1"},[s("Volar support "),i("a",{class:"header-anchor vp-link",href:"#volar-support","aria-label":'Permalink to "Volar support"'},"​")]),i("p",null,[s("If you use volar, please add the global component type definition to "),i("code",null,"compilerOptions.types"),s(" in "),i("code",null,"tsconfig.json"),s(".")]),i("div",{class:"language-json vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"json"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// tsconfig.json")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "compilerOptions"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "types"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"element-plus/global"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("h3",{id:"on-demand-import",tabindex:"-1"},[s("On-demand Import "),i("a",{class:"header-anchor vp-link",href:"#on-demand-import","aria-label":'Permalink to "On-demand Import"'},"​")]),i("p",null,"You need to use an additional plugin to import components you used."),i("h4",{id:"auto-import-recommend",tabindex:"-1"},[s("Auto import "),l(e,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:r(()=>[s("Recommend")]),_:1}),s(),i("a",{class:"header-anchor vp-link",href:"#auto-import-recommend","aria-label":'Permalink to "Auto import <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">Recommend</el-tag>"'},"​")]),i("p",null,[s("First you need to install "),i("code",null,"unplugin-vue-components"),s(" and "),i("code",null,"unplugin-auto-import"),s(".")]),i("div",{class:"language-shell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -D"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," unplugin-vue-components"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," unplugin-auto-import")])])])]),i("p",null,[s("Then add the code below into your "),i("code",null,"Vite"),s(" or "),i("code",null,"Webpack"),s(" config file.")]),i("h5",{id:"vite",tabindex:"-1"},[s("Vite "),i("a",{class:"header-anchor vp-link",href:"#vite","aria-label":'Permalink to "Vite"'},"​")]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// vite.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," AutoImport "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-auto-import/vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Components "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-vue-components/vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElementPlusResolver } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-vue-components/resolvers'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    AutoImport"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Components"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h5",{id:"webpack",tabindex:"-1"},[s("Webpack "),i("a",{class:"header-anchor vp-link",href:"#webpack","aria-label":'Permalink to "Webpack"'},"​")]),i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// webpack.config.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," AutoImport"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-auto-import/webpack'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Components"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-vue-components/webpack'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," require"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'unplugin-vue-components/resolvers'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"module"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"exports"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    AutoImport"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Components"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      resolvers: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlusResolver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),i("p",null,[s("For more bundlers ("),i("a",{href:"https://rollupjs.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Rollup"),l(a,{class:"link-icon"})]),s(", "),i("a",{href:"https://cli.vuejs.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Vue CLI"),l(a,{class:"link-icon"})]),s(") and configs please reference "),i("a",{href:"https://github.com/antfu/unplugin-vue-components#installation",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-vue-components"),l(a,{class:"link-icon"})]),s(" and "),i("a",{href:"https://github.com/antfu/unplugin-auto-import#install",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-auto-import"),l(a,{class:"link-icon"})]),s(".")]),i("h4",{id:"nuxt",tabindex:"-1"},[s("Nuxt "),i("a",{class:"header-anchor vp-link",href:"#nuxt","aria-label":'Permalink to "Nuxt"'},"​")]),i("p",null,[s("For Nuxt users, you only need to install "),i("code",null,"@element-plus/nuxt"),s(".")]),i("div",{class:"language-shell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -D"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @element-plus/nuxt")])])])]),i("p",null,"Then add the code below into your config file."),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// nuxt.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineNuxtConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  modules: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'@element-plus/nuxt'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("p",null,[s("Refer to the "),i("a",{href:"https://github.com/element-plus/element-plus-nuxt#readme",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("docs"),l(a,{class:"link-icon"})]),s(" for how to configure it.")]),i("h3",{id:"manually-import",tabindex:"-1"},[s("Manually import "),i("a",{class:"header-anchor vp-link",href:"#manually-import","aria-label":'Permalink to "Manually import"'},"​")]),i("p",null,[s("Element Plus provides out of box "),i("a",{href:"https://webpack.js.org/guides/tree-shaking/",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Tree Shaking"),l(a,{class:"link-icon"})]),s(" functionalities based on ES Module.")]),i("p",null,[s("But you need install "),i("a",{href:"https://github.com/element-plus/unplugin-element-plus",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("unplugin-element-plus"),l(a,{class:"link-icon"})]),s(" for style import. And refer to the "),i("a",{href:"https://github.com/element-plus/unplugin-element-plus#readme",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("docs"),l(a,{class:"link-icon"})]),s(" for how to configure it.")]),i("blockquote",null,[i("p",null,"App.vue")]),i("div",{class:"language-html vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"html"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">I am ElButton</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElButton } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    components: { ElButton },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// vite.config.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vite'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'unplugin-element-plus/vite'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: ["),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ElementPlus"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),i("h2",{id:"starter-template",tabindex:"-1"},[s("Starter Template "),i("a",{class:"header-anchor vp-link",href:"#starter-template","aria-label":'Permalink to "Starter Template"'},"​")]),i("p",null,[s("We provide a "),i("a",{href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Vite Template"),l(a,{class:"link-icon"})]),s(".")]),i("p",null,[s("For Nuxt users we have a "),i("a",{href:"https://github.com/element-plus/element-plus-nuxt-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Nuxt Template"),l(a,{class:"link-icon"})]),s(".")]),i("p",null,[s("For Laravel users we have a "),i("a",{href:"https://github.com/element-plus/element-plus-in-laravel-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Laravel Template"),l(a,{class:"link-icon"})]),s(".")]),i("h2",{id:"global-configuration",tabindex:"-1"},[s("Global Configuration "),i("a",{class:"header-anchor vp-link",href:"#global-configuration","aria-label":'Permalink to "Global Configuration"'},"​")]),i("p",null,[s("When registering Element Plus, you can pass a global config object with "),i("code",null,"size"),s(" and "),i("code",null,"zIndex"),s(" to set the default "),i("code",null,"size"),s(" for form components, and "),i("code",null,"zIndex"),s(" for popup components, the default value for "),i("code",null,"zIndex"),s(" is "),i("code",null,"2000"),s(".")]),i("p",null,"Full import:"),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { createApp } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ElementPlus "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," App "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './App.vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," app"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," createApp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(App)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"app."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"use"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ElementPlus, { size: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'small'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", zIndex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," })")])])])]),i("p",null,"On-demand:"),i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"size"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"size"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"z-index"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"zIndex"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"app"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineComponent } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ElConfigProvider } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineComponent"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  components: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ElConfigProvider,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      zIndex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      size: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'small'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),i("h2",{id:"using-nuxt-js",tabindex:"-1"},[s("Using Nuxt.js "),i("a",{class:"header-anchor vp-link",href:"#using-nuxt-js","aria-label":'Permalink to "Using Nuxt.js"'},"​")]),i("p",null,[s("We can also use "),i("a",{href:"https://nuxt.com",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("Nuxt.js"),l(a,{class:"link-icon"})]),s(":")]),i("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},[i("iframe",{src:"https://glitch.com/edit/#!/element-plus-nuxt-starter?path=components%2FExamples.vue%3A1%3A0",alt:"nuxt-element-plus on glitch",style:{height:"100%",width:"100%",border:"0"}})]),i("h2",{id:"let-s-get-started",tabindex:"-1"},[s("Let's Get Started "),i("a",{class:"header-anchor vp-link",href:"#let-s-get-started","aria-label":`Permalink to "Let's Get Started"`},"​")]),i("p",null,[s("You can bootstrap your project from now on. For each components usage, please refer to "),i("a",{href:"https://element-plus.org/en-US/component/button.html",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("the individual component documentation"),l(a,{class:"link-icon"})]),s(".")])])}const b=n(E,[["render",d]]);export{f as __pageData,b as default};
