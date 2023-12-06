import{_ as f,r as a,o as h,c as w,a as y,b as e,w as g,d as l,v as i,F as L,e as x,p as R,f as I,A as _}from"./index-ac545b60.js";const t=n=>(R("data-v-5b985d27"),n=n(),I(),n),U={class:"container-fluid"},V={class:"accordion position-absolute top-50 start-50 translate-middle w-50",id:"loginRegisterDisplay"},P={class:"accordion-item"},S=t(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#loginCollapse","aria-expanded":"true","aria-controls":"loginCollapse"}," Login ")],-1)),E={id:"loginCollapse",class:"accordion-collapse collapse show p-2","data-bs-parent":"#loginRegisterDisplay"},C={class:"form-floating mb-3"},D=t(()=>e("label",{for:"emailLoginInput"},"Email address",-1)),B={class:"form-floating mb-2"},k=t(()=>e("label",{for:"passwordLoginInput"},"Password",-1)),M=t(()=>e("p",{class:"errorMessage hide ps-2 mb-1"},"Error !",-1)),$=t(()=>e("div",{class:"text-end"},[e("button",{id:"loginButton",type:"submit",class:"btn btn-primary"},"Login")],-1)),j={class:"accordion-item"},A=t(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#registerCollapse","aria-expanded":"false","aria-controls":"registerCollapse"}," Register ")],-1)),F={id:"registerCollapse",class:"accordion-collapse collapse p-2","data-bs-parent":"#loginRegisterDisplay"},N={class:"row"},G={class:"col"},J={class:"form-floating mb-3"},T=t(()=>e("label",{for:"usernameRegister"},"Username",-1)),Y={class:"col"},q={class:"form-floating mb-3"},z=t(()=>e("label",{for:"ppRegister"},"Profile Picture link",-1)),H={class:"form-floating mb-3"},K=t(()=>e("label",{for:"emailLoginInput"},"Email address",-1)),O={class:"form-floating mb-3"},Q=t(()=>e("label",{for:"passwordLoginInput"},"Password",-1)),W=t(()=>e("p",{class:"errorMessage hide ps-2 mb-1"},"Error !",-1)),X=t(()=>e("div",{class:"text-end"},[e("button",{id:"registerButton",type:"submit",class:"btn btn-primary"},"Login")],-1)),Z={__name:"LoginRegisterView",setup(n){const r=a(""),d=a(""),p=a(""),c=a(""),u=a(""),m=a("");function v(){_.login({email:r.value,password:d.value})}function b(){_.register({username:p.value,emailUser:u.value,passwordUser:m.value,ppUser:c.value})}return(ee,s)=>(h(),w(L,null,[y(x,{title:"YouGame - Login"}),e("div",U,[e("div",V,[e("div",P,[S,e("div",E,[e("form",{onSubmit:s[2]||(s[2]=g(o=>v(),["prevent"]))},[e("div",C,[l(e("input",{type:"email",class:"form-control",id:"emailLoginInput","onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o),placeholder:"name@example.com"},null,512),[[i,r.value]]),D]),e("div",B,[l(e("input",{type:"password",class:"form-control",id:"passwordLoginInput","onUpdate:modelValue":s[1]||(s[1]=o=>d.value=o),placeholder:"Don't use 123 ;)"},null,512),[[i,d.value]]),k]),M,$],32)])]),e("div",j,[A,e("div",F,[e("form",{onSubmit:s[7]||(s[7]=g(o=>b(),["prevent"]))},[e("div",N,[e("div",G,[e("div",J,[l(e("input",{type:"text",class:"form-control",id:"usernameRegister","onUpdate:modelValue":s[3]||(s[3]=o=>p.value=o),placeholder:"Jacky963"},null,512),[[i,p.value]]),T])]),e("div",Y,[e("div",q,[l(e("input",{type:"text",class:"form-control",id:"ppRegister","onUpdate:modelValue":s[4]||(s[4]=o=>c.value=o),placeholder:"*.png",pattern:"^(https?://.+\\.(jpg|jpeg|png|gif|bmp)|)$",title:"Please enter a valid image URL (e.g., http://example.com/image.jpg)"},null,512),[[i,c.value]]),z])])]),e("div",H,[l(e("input",{type:"email",class:"form-control",id:"emailLoginInput","onUpdate:modelValue":s[5]||(s[5]=o=>u.value=o),placeholder:"name@example.com"},null,512),[[i,u.value]]),K]),e("div",O,[l(e("input",{type:"password",class:"form-control",id:"passwordLoginInput","onUpdate:modelValue":s[6]||(s[6]=o=>m.value=o),placeholder:"Don't use 123 ;)"},null,512),[[i,m.value]]),Q]),W,X],32)])])])])],64))}},oe=f(Z,[["__scopeId","data-v-5b985d27"]]);export{oe as default};
