"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const r=n.p+"assets/images/Map-952e8da38c03cc38ab64a0861c8f71b2.png",o="data:image/png;base64,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",l=n.p+"assets/images/Contact-7c90ea7da1d10eb33ba881b7e7ef4b7d.png",s=n.p+"assets/images/footer-8ccf4460d7644989ddb9418b8d1ee81c.png",p={title:"Footer",id:"footer",description:"Footer Component in T&P Website",sidebar_label:"Footer"},c=void 0,d={unversionedId:"projects/tnp-website/frontend-components/footer",id:"projects/tnp-website/frontend-components/footer",title:"Footer",description:"Footer Component in T&P Website",source:"@site/docs/projects/tnp-website/frontend-components/footer.mdx",sourceDirName:"projects/tnp-website/frontend-components",slug:"/projects/tnp-website/frontend-components/footer",permalink:"/docs/projects/tnp-website/frontend-components/footer",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/frontend-components/footer.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1687183790,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"Footer",id:"footer",description:"Footer Component in T&P Website",sidebar_label:"Footer"},sidebar:"docs",previous:{title:"About Us",permalink:"/docs/projects/tnp-website/frontend-components/about-us"},next:{title:"What is TCET Linux",permalink:"/docs/projects/tcet-linux/about-tcet-linux"}},m={},h=[{value:"Map Component",id:"map-component",level:2},{value:"Navigation Component",id:"navigation-component",level:2},{value:"Contact &amp; Copyrights Component",id:"contact--copyrights-component",level:2}],u={toc:h},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The footer component is a section of a web page that is placed at the bottom and is separate from the main content area. It serves as a container for information that is relevant to the entire page. In the footer component, we have included ",(0,i.kt)("strong",{parentName:"p"},"Google map of the institution")," as well as the ",(0,i.kt)("strong",{parentName:"p"},"written address, navigation links, contact details, copyright notices"),", and other supplementary information."),(0,i.kt)("h2",{id:"map-component"},"Map Component"),(0,i.kt)("p",null,"This component is represented by the HTML program which includes a map embedded from Google Maps and an address description."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's the implemented code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {3-9,10-16} showLineNumbers',title:'"index.astro"',"{3-9,10-16}":!0,showLineNumbers:!0},'    {/* Map And Address */}\n         <div class="w-full lg:w-1/3 xl:w-1/3 m-2">\n             <div>\n                     <iframe\n                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7457229439237!2d72.87241691481825!3d19.20630535285474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1680794472903!5m2!1sen!2sin"\n                         style={{ border: 0, width: "100%", height: "27vh" }}\n                         loading="lazy"\n                         referrer-policy="no-referrer-when-downgrade"></iframe>\n             </div>\n             <div class="mt-4 text-sm">\n                 <p class="text-justify">\n                     Thakur College Of Engineering And Technology. A-Block, Thakur\n                     Educational Campus, Shyamnarayan Thakur Marg, Thakur Village,\n                     Kandivali(E). Mumbai - 400101.\n                 </p>\n             </div>\n         </div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's a breakdown explanation of the map component:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element is applied with multiple CSS classes. These are defined with attributes for styling puposes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element in the next line contains ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>")," element, which is added in the code to embed content from another source. Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," atribute is ",(0,i.kt)("strong",{parentName:"p"},"Google Maps embed URL"),", which is used to display map of the college in the footer. The CSS classes have been applied.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"loading")," attribute is set to ",(0,i.kt)("strong",{parentName:"p"},"lazy"),", which indicates that iframe should be loaded only when it becomes fully visible. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"referrer-policy")," is set to ",(0,i.kt)("strong",{parentName:"p"},"no-referrer-when-downgrade")," which is used to restrict the referrer information when loading the embedded Google Maps content. This helps in protecting user's privacy and security.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The next ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"<p> paragraph")," element. It represents the paragraph of text that describes the ",(0,i.kt)("strong",{parentName:"p"},"college address"),". There are CSS classes applied to the element as per our specifications."))),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:r,style:{border:"2px solid gray"}}),(0,i.kt)("b",null,(0,i.kt)("figcaption",null,"Map Component")))),(0,i.kt)("h2",{id:"navigation-component"},"Navigation Component"),(0,i.kt)("p",null,"The code for this section is represented by the HTML language which creates a navigation menu."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's the implemented code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {3-11} showLineNumbers',title:'"index.astro"',"{3-11}":!0,showLineNumbers:!0},'     {/* Nav as */}\n         <div class="mt-10 md:mt-0 w-full lg:w-1/3 m-2" >\n             <div class="grid grid-rows gap-2 text-left md:text-center">\n                 <a class="hover:underline" href="/about">Home</a>\n                 <a class="hover:underline" href="/download">Download</a>\n                 <a class="hover:underline" href="/media">Media</a>\n                 <a class="hover:underline" href="/news">News</a>\n                 <a class="hover:underline" href="/mandatory-disclosure">Mandatory Disclosure</a>\n                 <a class="hover:underline" href="/disclaimer">Disclaimer</a>\n                 <a class="hover:underline" href="/content-policy">Content Policy</a>\n             </div>\n         </div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's a breakdown explanation of the navigation component:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element in the code is used for ",(0,i.kt)("strong",{parentName:"p"},"styling purposes")," with multiple CSS classes applied. The next ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element have classes which is responsible for ",(0,i.kt)("strong",{parentName:"p"},"layout & alignment")," of the navigation links.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There are ",(0,i.kt)("inlineCode",{parentName:"p"},"<a> anchor")," elements present in the incoming code which represents the ",(0,i.kt)("strong",{parentName:"p"},"navigation links"),". Each link is wrapped inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," element with ",(0,i.kt)("strong",{parentName:"p"},"hover")," effect applied to it. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute specifies the ",(0,i.kt)("strong",{parentName:"p"},"destination URL")," for each link.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The overall section of the code generates a navigation menu with several links which is used to navigate different pages of the website. "))),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:o,style:{border:"2px solid gray"}}),(0,i.kt)("b",null,(0,i.kt)("figcaption",null,"Navigation Component")))),(0,i.kt)("h2",{id:"contact--copyrights-component"},"Contact & Copyrights Component"),(0,i.kt)("p",null,"The code for this section is represented by the HTML language which displays contact information and copyright details."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's the implemented code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.astro" {5-16,19-24,27-37,41-43} showLineNumbers',title:'"index.astro"',"{5-16,19-24,27-37,41-43}":!0,showLineNumbers:!0},'     {/* Contacts and CopyRight */}\n         <div class="w-full lg:w-1/3 mt-10 md:mt-0 m-2">\n             <div class="text-base">\n                 <div>\n                     <img class="inline mr-2" src="/misc/phone.svg" alt="phone" />\n                     <p class="inline">\n                         <a class="underline" href="tel:022-28461891"> 022 - 28461891</a>{\n                             " "\n                         }\n                         /{" "}\n                         <a class="underline" href="tel:022-67308000"> 022 - 67308000</a>\n                         ,{" "}\n                         <a class="underline" href="tel:022-67308106"> 67308106</a>{" "}\n                         /{" "}\n                         <a class="underline" href="tel:022-67308107"> 07</a>\n                     </p>\n                 </div>\n                  <div class="mt-2">\n                     <img class="inline mr-2" src="/misc/email.svg" alt="email" />\n                     <p class="inline">\n                      <a class="underline" href="mailto:tcet.tnp@thakureducation.org">\n                         tcet.tnp@thakureducation.org\n                      </a>\n                     </p>\n                  </div>\n              <div class="mt-2">\n                      <img class="inline mr-2" src="/misc/website.svg" alt="website" />\n                      <p class="inline">\n                         Websites:{" "}\n                          <a class="underline" href="https://www.tcetmumbai.in">\n                          www.tcetmumbai.in\n                          </a>{" "}\n                          /{" "}\n                          <a class="underline" href="https://www.thakureducation.org">\n                              www.thakureducation.org\n                          </a>\n                      </p>\n                  </div>\n              </div>\n              <div class="mt-8">\n                  <p class="">\n                      \xa9 2023 Thakur College of Engineering and Technology. All Rights Reserved.\n                  </p>\n                  </div>\n              </div>\n          </div>\n      </div>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's a breakdown explanation of this component:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," elements with multiple CSS classes. Majorly for styling purposes and to set the font for the content inside it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The below section of the code is to display the phone contact information. the ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," element is used to display the image of the ",(0,i.kt)("strong",{parentName:"p"},"phone icon"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," element is used to define the ",(0,i.kt)("strong",{parentName:"p"},"source or file path"),". There is ",(0,i.kt)("inlineCode",{parentName:"p"},"inline CSS")," used to make the image and the content ",(0,i.kt)("strong",{parentName:"p"},"display inline"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," element in the code conatins theb ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements which represents phone numbers. Each phone number is wrapped inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," anchor element and has the ",(0,i.kt)("inlineCode",{parentName:"p"},"underline")," attribute applied.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"underline")," attribute adds an ",(0,i.kt)("strong",{parentName:"p"},"underline")," to the content. Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute is set to the respective ",(0,i.kt)("strong",{parentName:"p"},"phone number links"),"."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Similar steps were carried out for adding  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"mailto:tcet.tnp@thakureducation.org"},"tcet.tnp@thakureducation.org")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.tcetmumbai.in"},"www.tcetmumbai.in"))," & ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.thakureducation.org"},"www.thakureducation.org"))," in this section.")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"To display the copyright content, a ",(0,i.kt)("inlineCode",{parentName:"li"},"div")," element with ",(0,i.kt)("inlineCode",{parentName:"li"},"<p>")," paragraph element inside it is used. The content ",(0,i.kt)("strong",{parentName:"li"},'"\xa9 2023 Thakur College of Engineering and Technology. All Rights Reserved."')," is wrapped inside the paragraph element.")),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:l,style:{border:"2px solid gray"}}),(0,i.kt)("b",null,(0,i.kt)("figcaption",null,"Contacts & Copyrights Component")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's take a view of the complete Footer Component:")),(0,i.kt)("figure",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:s,style:{border:"2px solid gray"}}),(0,i.kt)("b",null,(0,i.kt)("figcaption",null,"Footer Component")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"After successfully implementing the ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("a",{parentName:"strong",href:"footer"},"Footer"))," component of the ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"TNP (Training and Placement)"))," website, we were ready with out frontend part of the website. Next, we will be seeing on how we incorporated the backend of ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"TNP (Training and Placement)"))," website.")))}k.isMDXComponent=!0}}]);