(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CNkq:function(e,t,n){"use strict";var a=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),o=(0,a(n("8/g6")).default)(r.createElement(r.Fragment,null,r.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),r.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"QueryBuilder");t.default=o},VRlk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("q1tI"),i=n.n(a),r=n("R/WZ"),o=n("e9YP"),c=n.n(o),s=n("CNkq"),l=n.n(s),d=n("Bl7J"),m=n("vrFN"),u=n("tKIh"),f=n("Wbzz"),x=n("hlFM"),g=n("tRbT"),p=function(e){var t=e.prev,n=e.next,a=e.pt,r=e.pb;return i.a.createElement(x.a,{pt:a,pb:r},i.a.createElement(g.a,{container:!0,justify:"space-between"},i.a.createElement(g.a,{item:!0},!!t&&i.a.createElement(f.Link,{to:t.slug},"< Prev: ",t.title," ")),i.a.createElement(g.a,{item:!0},!!n&&i.a.createElement(f.Link,{to:n.slug},"Next: ",n.title," >"))))},v=Object(r.a)({subtitle:{color:"grey"},icon:{verticalAlign:"text-bottom",fontSize:"1rem"}});function h(e){var t=e.data,n=e.pageContext,a=v(),r=t.markdownRemark;return i.a.createElement(d.a,null,i.a.createElement(m.a,{title:r.frontmatter.title}),i.a.createElement("div",null,i.a.createElement("h1",null,r.frontmatter.title),i.a.createElement("p",{className:a.subtitle},i.a.createElement(c.a,{className:a.icon})," ",r.frontmatter.date.toLowerCase(),"    ",i.a.createElement(l.a,{className:a.icon})," ",r.timeToRead<=1?"1 min read":r.timeToRead+" mins read"),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),i.a.createElement(p,{prev:n.prev,next:n.next,pt:3,pb:4}),i.a.createElement(u.a,{py:3}),"/*",i.a.createElement(Disqus,{config:disqusConfig}),"*/")}},e9YP:function(e,t,n){"use strict";var a=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),o=(0,a(n("8/g6")).default)(r.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");t.default=o},tKIh:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("hlFM");t.a=function(e){var t=e.py;return i.a.createElement(r.a,{py:t,fontSize:"0.75rem"},i.a.createElement("b",null,"disclaimer:")," ginsterrific.com and the author give no guarantee and accept no responsibility or liability of the accuracy or the completeness of the materials and information contained. opinions are my own and do not necessarily reflect the views of my employer or any of my affiliations.")}},tRbT:function(e,t,n){"use strict";n("E9XD");var a=n("Ff2n"),i=n("wx14"),r=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=r.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,m=e.className,u=e.component,f=void 0===u?"div":u,x=e.container,g=void 0!==x&&x,p=e.direction,v=void 0===p?"row":p,h=e.item,b=void 0!==h&&h,w=e.justify,y=void 0===w?"flex-start":w,E=e.lg,j=void 0!==E&&E,C=e.md,S=void 0!==C&&C,z=e.sm,M=void 0!==z&&z,I=e.spacing,W=void 0===I?0:I,k=e.wrap,q=void 0===k?"wrap":k,N=e.xl,R=void 0!==N&&N,O=e.xs,T=void 0!==O&&O,H=e.zeroMinWidth,F=void 0!==H&&H,_=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(o.a)(d.root,m,g&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],b&&d.item,F&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==q&&d["wrap-xs-".concat(String(q))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==S&&d["grid-md-".concat(String(S))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(f,Object(i.a)({className:B,ref:t},_))})),u=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=u}}]);
//# sourceMappingURL=component---src-templates-article-js-65aa3da27bf03d158454.js.map