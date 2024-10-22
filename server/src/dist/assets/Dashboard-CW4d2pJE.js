import{R as l,j as t,k as v,m as w,L as m,O as y,o as N,p as u,q as O,r as C,t as P}from"./index-CWJcri60.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(j),E=["attr","size","title"];function S(e,r){if(e==null)return{};var s=z(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function z(e,r){if(e==null)return{};var s={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;s[n]=e[n]}return s}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},o.apply(this,arguments)}function p(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,n)}return s}function d(e){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?p(Object(s),!0).forEach(function(n){D(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function D(e,r,s){return r=L(r),r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function L(e){var r=_(e,"string");return typeof r=="symbol"?r:r+""}function _(e,r){if(typeof e!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function b(e){return e&&e.map((r,s)=>l.createElement(r.tag,d({key:s},r.attr),b(r.child)))}function x(e){return r=>l.createElement(R,o({attr:d({},e.attr)},r),b(e.child))}function R(e){var r=s=>{var{attr:n,size:a,title:i}=e,g=S(e,E),h=a||s.size||"1em",c;return s.className&&(c=s.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,g,{className:c,style:d(d({color:e.color||s.color},s.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return f!==void 0?l.createElement(f.Consumer,null,s=>r(s)):r(j)}function k(e){return x({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function M(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function B(e){return x({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}const F=()=>t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 p-6",children:[t.jsxs("div",{className:"bg-blue-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg",children:[t.jsx(k,{className:"text-4xl mb-4"}),t.jsx("h2",{className:"text-xl font-bold",children:3}),t.jsx("p",{className:"text-lg",children:"Enrolled Courses"})]}),t.jsxs("div",{className:"bg-green-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg",children:[t.jsx(B,{className:"text-4xl mb-4"}),t.jsx("h2",{className:"text-xl font-bold",children:3}),t.jsx("p",{className:"text-lg",children:"Active Courses"})]}),t.jsxs("div",{className:"bg-purple-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg",children:[t.jsx(M,{className:"text-4xl mb-4"}),t.jsx("h2",{className:"text-xl font-bold",children:1}),t.jsx("p",{className:"text-lg",children:"Completed Courses"})]})]}),I=()=>{const{pathname:e}=v(),r=w(s=>s.userReducer.user);return t.jsxs("div",{className:"flex min-h-screen border rounded-xl",children:[t.jsxs("aside",{className:"bg-gray-200 md:w-64 w-20 transition-all duration-300",children:[t.jsxs("div",{className:"hidden md:flex flex-col items-center p-6",children:[t.jsx("img",{className:"w-24 h-24 rounded-full mb-4",src:"https://via.placeholder.com/150",alt:"Profile"}),t.jsx("h3",{className:"text-xl font-semibold",children:r==null?void 0:r.name})]}),t.jsx("nav",{className:"mt-10",children:t.jsxs("ul",{className:"space-y-2",children:[t.jsx("li",{children:t.jsxs(m,{to:"/dashboard",className:`block py-2 px-4 text-center md:text-left ${e==="/dashboard"?"bg-[#3e64de] text-white":""} hover:bg-[#3e64de] hover:text-white`,children:[t.jsx("span",{className:"md:inline hidden",children:"Dashboard"}),t.jsx("i",{className:"fas fa-home md:hidden"})]})}),t.jsx("li",{children:t.jsxs(m,{to:"/dashboard/profile",className:`block py-2 px-4 text-center md:text-left ${e==="/dashboard/profile"?"bg-[#3e64de] text-white":""} hover:bg-[#3e64de] hover:text-white`,children:[t.jsx("span",{className:"md:inline hidden",children:"My Profile"}),t.jsx("i",{className:"fas fa-user md:hidden"})]})}),t.jsx("li",{children:t.jsxs(m,{to:"/dashboard/courses",className:`block py-2 px-4 text-center md:text-left ${e==="/dashboard/courses"?"bg-[#3e64de] text-white":""} hover:bg-[#3e64de] hover:text-white`,children:[t.jsx("span",{className:"md:inline hidden",children:"Enrolled Courses"}),t.jsx("i",{className:"fas fa-book md:hidden"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#",className:`block py-2 px-4 text-center md:text-left ${e==="Settings"?"bg-[#3e64de] text-white":""} hover:bg-[#3e64de] hover:text-white`,children:[t.jsx("span",{className:"md:inline hidden",children:"Settings"}),t.jsx("i",{className:"fas fa-cog md:hidden"})]})})]})})]}),t.jsx("main",{className:"flex-1 bg-gray-100 p-8",children:t.jsx(y,{})})]})},$=()=>t.jsx(t.Fragment,{children:t.jsx(N,{children:t.jsxs(u,{path:"/",element:t.jsx(I,{}),children:[t.jsx(u,{index:!0,element:t.jsx(F,{})}),O.map(({name:e,path:r,component:s})=>t.jsx(u,{path:r,element:t.jsx(C.Suspense,{fallback:t.jsx(P,{}),children:t.jsx(s,{})})},e))]})})});export{$ as default};
