(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(151),l=(a(158),a(155)),c=a(156),d=a(152),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return s.a.createElement(l.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(s.a.Component);t.default=u;var A="1433917054"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(153);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(163),i=a.n(r),n=a(164),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},153:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},154:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(151),l=a(152),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/blog/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,i),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=c},156:function(e,t,a){"use strict";var r=a(157),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(165),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"vcolavin",description:"Vincent's blog",author:"Vincent Colavin"}}}}},158:function(e,t,a){"use strict";a(159);var r=a(161),i=a(0),n=a.n(i),s=a(151),o=a(162),l=a.n(o),c=a(152);var d="2206724507";t.a=function(){return n.a.createElement(s.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social.github;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("div",null,n.a.createElement("p",null,"I'm a web developer and suicide crisis line volunteer who lives in Portland Oregon, and also I eat a lot of pasta. My pronouns are he/him.",n.a.createElement("br",null),n.a.createElement("a",{href:r},"Here's my Github profile.")," ",n.a.createElement("a",{href:"https://vcolavin.wordpress.com"},"Here's my archived blog."))))},data:r})}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var r=a(11),i=a(17),n=a(18),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCAQT/xAAXAQEAAwAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAH3zrzO+mUqTDYP/8QAGRABAQEBAQEAAAAAAAAAAAAAAQIAEgMQ/9oACAEBAAEFAms06HqUwm8zmfv/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAADAQEAAAAAAAAAAAAAAAAAETEgIf/aAAgBAQAGPwKnGMmv/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERMSFRcRD/2gAIAQEAAT8hzWWYo3buCHCZp0oKh8L35EMVH//aAAwDAQACAAMAAAAQmy8+/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAECAQE/ENKf/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBcRBR/9oACAEBAAE/EBAAaEuuCN5FUfqd+ZxnXT7lN5Lcax3ho1M1PtIHR18QkJnB5n//2Q==",width:50,height:50,src:"/blog/static/3a442955dc078fc104f6bcbc21de434b/7e494/profile-pic.jpg",srcSet:"/blog/static/3a442955dc078fc104f6bcbc21de434b/7e494/profile-pic.jpg 1x,\n/blog/static/3a442955dc078fc104f6bcbc21de434b/36cc2/profile-pic.jpg 1.5x,\n/blog/static/3a442955dc078fc104f6bcbc21de434b/0a3a6/profile-pic.jpg 2x,\n/blog/static/3a442955dc078fc104f6bcbc21de434b/75d16/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Vincent Colavin",social:{github:"https://github.com/vcolavin"}}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(34)),o=r(a(74)),l=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,v="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var R=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),R.base64&&c.default.createElement(g,(0,l.default)({src:R.base64},j)),R.tracedSVG&&c.default.createElement(g,(0,l.default)({src:R.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},R))}}))}if(h){var x=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete B.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},v&&c.default.createElement(y,{title:t,style:{backgroundColor:v,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),x.base64&&c.default.createElement(g,(0,l.default)({src:x.base64},j)),x.tracedSVG&&c.default.createElement(g,(0,l.default)({src:x.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(g,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=b;t.default=v}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-eaac2928dcd289caec58.js.map