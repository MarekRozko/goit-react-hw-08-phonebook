"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{8720:function(e,n,t){t.d(n,{Z:function(){return i}});var a="button_button__zpxkc",r=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,r.jsx)("button",{type:i,className:a,children:n})}},2945:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(1413),r=t(4925),i=t(2791),l="textField_wrapper__BBbYh",o="textField_field__CXIOL",u=t(184),s=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=(0,r.Z)(e,s),d=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("label",{htmlFor:d,children:n}),(0,u.jsx)("input",(0,a.Z)({className:o,id:d,onChange:t},c))]})}},3943:function(e,n,t){var a=t(4942),r=t(1413),i=t(9439),l=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,l.useState)((0,r.Z)({},n)),u=(0,i.Z)(o,2),s=u[0],c=u[1],d=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},s)),c((0,r.Z)({},n))}}}},8952:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});t(2791);var a=t(1632),r=t(9434),i=t(1413),l=t(2945),o=t(8720),u=t(3943),s={email:{type:"email",name:"email",require:"true",label:"Email",placeholder:"Email"},password:{type:"password",name:"password",require:"true",label:"Password",placeholder:"Password"}},c={email:"",password:""},d="loginForm_container__o4vHA",h=t(184),m=function(e){var n=e.onSubmit,t=(0,u.Z)({initialState:c,onSubmit:n}),a=t.state,r=t.handleChange,m=t.handleSubmit,f=a.email,p=a.password;return(0,h.jsxs)("form",{onSubmit:m,className:d,children:[(0,h.jsx)(l.Z,(0,i.Z)({value:f,handleChange:r},s.email)),(0,h.jsx)(l.Z,(0,i.Z)({value:p,handleChange:r},s.password)),(0,h.jsx)(o.Z,{children:"Login"})]})},f=t(3573),p=function(){var e=(0,r.I0)();return(0,h.jsx)(a.xu,{sx:{backgroundImage:"linear-gradient(to right, #3a6186, #89253e)",color:"white",py:[4,5,6],minHeight:"100vh"},children:(0,h.jsxs)(a.kC,{alignItems:"center",flexDirection:"column",sx:{maxWidth:"400px",mx:"auto"},children:[(0,h.jsx)(a.X6,{mb:3,sx:{textAlign:"center",fontSize:[4,5,6]},children:"Login"}),(0,h.jsx)(m,{onSubmit:function(n){e((0,f.x4)(n))}})]})})}}}]);
//# sourceMappingURL=952.0480370b.chunk.js.map