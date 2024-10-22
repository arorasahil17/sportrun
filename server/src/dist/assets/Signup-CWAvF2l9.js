import{s as n,u as i,r as d,j as e,L as c}from"./index-CWJcri60.js";import{u as g,a as u,E as r}from"./ErrorField-CxgAASdu.js";const x=()=>g({mutationFn:n,validationSchema:u,successMessage:"Sign up successful!",errorMessage:"Sign up failed. Please try again."}),h=()=>{const{register:a,errors:s,handleSubmit:l,status:t,onsubmit:m}=x(),o=i();return d.useEffect(()=>{t==="success"&&o("/")},[t]),e.jsx("main",{className:"main bg-white px-6 md:px-16 m-6",children:e.jsxs("div",{className:"w-full border border-black-100 shadow-xl border-xl max-w-xl p-10 mx-auto lg:my-16",children:[e.jsxs("form",{className:"border-b-2 py-3",onSubmit:l(m),children:[e.jsx("h1",{className:"text-xl mb-2",children:"Create Your Account"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"firstName",children:"First Name"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"text",id:"firstName",...a("firstName")}),s.firstName&&s.firstName.message&&e.jsx(r,{message:s.firstName.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"lastName",children:"Last Name"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"text",id:"lastName",...a("lastName")}),s.lastName&&s.lastName.message&&e.jsx(r,{message:s.lastName.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"text",id:"username",...a("username")}),s.username&&s.username.message&&e.jsx(r,{message:s.username.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"email",id:"email",...a("email")}),s.email&&s.email.message&&e.jsx(r,{message:s.email.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"password",id:"password",...a("password")}),s.password&&s.password.message&&e.jsx(r,{message:s.password.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"confirmPassword",children:"Confirm Password"}),e.jsx("input",{className:"appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500",type:"password",id:"confirmPassword",...a("confirmPassword")}),s.confirmPassword&&s.confirmPassword.message&&e.jsx(r,{message:s.confirmPassword.message})]}),e.jsx("div",{children:e.jsx("button",{className:"w-full bg-[#3e64de]  text-white py-2 px-3 rounded",type:"submit",children:t==="pending"?"Signing up...":"Sign up"})})]}),e.jsx("div",{className:"mt-2 mb-3",children:e.jsx(c,{to:"/login",className:"text-sm text-[#3e64de]  hover:underline",children:"Already have an account? Log in"})})]})})};export{h as default};