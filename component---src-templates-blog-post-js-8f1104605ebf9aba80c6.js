(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,c){return n()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1810:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),c=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var o=r(2632);e.exports={MDXRenderer:o}},2632:function(e,t,r){var o=r(9100),n=r(1810),a=r(9713),c=r(7316),l=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),u=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,l),i=f(t),d=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:u},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return p.createElement(d,s({},a))}},8771:function(e,t,r){"use strict";var o=r(7294),n=r(1597),a=r(396);t.Z=function(){var e,t=null===(e=(0,n.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return o.createElement("div",{className:"bio"},o.createElement(a.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(1944)}),(null==t?void 0:t.name)&&o.createElement("p",null,"I'm Vincent, a web developer in San Diego. I eat a lot of pasta. My pronouns are he/him.",o.createElement("br",null),o.createElement("a",{href:"https://github.com/vcolavin"},"Here's my Github profile."),o.createElement("br",null),o.createElement("a",{href:"https://vcolavin.wordpress.com"},"Here's my old archived blog.")))}},4982:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1597),a=r(8771),c=r(2973),l=r(262),i=r(2102);t.default=function(e){var t,r=e.data,s=e.location,p=r.mdx,u=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=r.previous,d=r.next;return o.createElement(c.Z,{location:s,title:u},o.createElement(l.Z,{title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt}),o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h1",{itemProp:"headline"},p.frontmatter.title),o.createElement("p",null,p.frontmatter.date)),o.createElement(i.MDXRenderer,null,p.body)," ",o.createElement("hr",null),o.createElement("footer",null,o.createElement(a.Z,null))),o.createElement("nav",{className:"blog-post-nav"},o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,f&&o.createElement(n.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),o.createElement("li",null,d&&o.createElement(n.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))}},1944:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8c8b8","images":{"fallback":{"src":"/blog/static/3a442955dc078fc104f6bcbc21de434b/d24ee/profile-pic.jpg","srcSet":"/blog/static/3a442955dc078fc104f6bcbc21de434b/d24ee/profile-pic.jpg 50w,\\n/blog/static/3a442955dc078fc104f6bcbc21de434b/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/3a442955dc078fc104f6bcbc21de434b/d4bf4/profile-pic.avif 50w,\\n/blog/static/3a442955dc078fc104f6bcbc21de434b/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/3a442955dc078fc104f6bcbc21de434b/3faea/profile-pic.webp 50w,\\n/blog/static/3a442955dc078fc104f6bcbc21de434b/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8f1104605ebf9aba80c6.js.map