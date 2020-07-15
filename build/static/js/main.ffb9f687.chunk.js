(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),s=a.n(o),i=(a(34),a(20));a(35);function l(){return r.a.createElement("header",null,r.a.createElement("a",{href:"/",className:"logo"},"Emmanuel Macharia"),r.a.createElement("nav",{className:"Navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact")))))}var c=a(9);var m=a(12),p=a(13),u=a(15),h=a(14),d=a(16),g=a(8),f=a(18),b=a(11),v=a(5),E=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=new v.b;e.staggerFrom(".personal-statement , .Address, .linkedin",2,{opacity:0,y:-60,ease:v.a.easeOut},.2),e.staggerFrom(".github",.5,{opacity:0,scale:.4,ease:v.a.ease},.2,"-=.6"),e.staggerFrom(".medium",.5,{opacity:0,scale:.3,ease:v.a.ease},.2,"-=.2"),e.staggerFrom(".quora",.5,{opacity:0,scale:.2,ease:v.a.ease},.1,"-=.2"),e.staggerFrom(".twitter",.5,{opacity:0,scale:.3,ease:v.a.ease},.2,"-=.2"),e.staggerFrom(".facebook",.5,{opacity:0,scale:.2,ease:v.a.ease},.1,"-=.2")}},{key:"render",value:function(){return r.a.createElement("div",{className:"fullscreen"},r.a.createElement("section",{className:"location-info"},r.a.createElement("section",{className:"personal-statement"},r.a.createElement("h4",null,"It'd be great to hear from you"),r.a.createElement("p",null,"Whether you have questions about projects or are looking to hire me as a software developer for a project/contract. ",r.a.createElement("br",null)," Or maybe you have suggestions on improvements to this site, or needed clarification on something; Do not hesitate to get in touch through any one of all these mediums. And if you'd like to know me even more, maybe consider connecting on linkedIn or following me on twitter or facebook; or reading my blogs on Medium.")),r.a.createElement("section",{className:"contact-div"},r.a.createElement("div",{className:"Address"},"find me here:",r.a.createElement("p",null,"Address: 28446 - 00200 ",r.a.createElement("p",null,"Queensway Road")),r.a.createElement("a",{href:"https://www.google.com/maps/place/Nairobi/@-1.303209,36.8473969,10z/data=!3m1!4b1!4m5!3m4!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2921573!4d36.822052"},r.a.createElement(g.a,{icon:f.b})," \xa0 Nairobi, Kenya")),r.a.createElement("div",{className:"myform"},r.a.createElement("div",{className:"linkedin"},r.a.createElement("a",{href:"https://linkedin.com/in/emmanuel-macharia",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.c}),"\xa0linkedIn")),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"https://github.com/emmanuelmacharia",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.b}),"\xa0github")),r.a.createElement("div",{className:"medium"},r.a.createElement("a",{href:"https://medium.com/@samwelehrmarsha",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.d}),"\xa0Medium")),r.a.createElement("div",{className:"quora"},r.a.createElement("a",{href:"https://www.quora.com/profile/Emmanuel-Macharia-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.e}),"\xa0Quora")),r.a.createElement("div",{className:"twitter"},r.a.createElement("a",{href:"https://twitter.com/Samwelehrmarsha",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.f}),"\xa0twitter")),r.a.createElement("div",{className:"facebook"},r.a.createElement("a",{href:"https://www.facebook.com/samuel.marsha.14",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:b.a}),"\xa0facebook"))))))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){var t=document.getElementsByClassName("arrow-head"),n=Array.from(t);a.setState(function(e){a.state.trigger=!a.state.trigger}),!0===a.state.trigger?(a.setState(a.state.contentStyle={display:"block",color:"white",fontSize:"inherit",transition:"all 300ms ease 0s"}),a.styleChildren(),n.map(function(e){e.style.transform="rotate(270deg)",e.style.color="#5AA2FF",e.focus()})):(a.setState(a.state.contentStyle={display:"none"}),n.map(function(e){e.style.transform="rotate(90deg)",e.style.color="#white",e.blur()}))},a.styleChildren=function(){var e=document.getElementsByClassName("all"),t=document.getElementsByClassName("description"),a=document.getElementsByClassName("link-project"),n=document.getElementsByClassName("link"),r=document.getElementsByClassName("img"),o=document.getElementsByClassName("p-image");Array.from(e).map(function(e){e.setAttribute("class","project-content-wrapper")}),Array.from(a).map(function(e){e.setAttribute("class","link-container")}),Array.from(n).map(function(e){e.setAttribute("class","project-link")}),Array.from(t).map(function(e){e.setAttribute("class","paragraph")}),Array.from(r).map(function(e){e.setAttribute("class","content-image")}),Array.from(o).map(function(e){e.setAttribute("class","project-image")})},a.animateArrow=function(){var e=document.getElementsByClassName("arrow-head");Array.from(e).map(function(e){e.style.transform="rotate(270deg)",e.style.color="#5AA2FF",e.focus()})},a.state={trigger:!0,contentStyle:{display:"none"}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.tags.map(function(e){return r.a.createElement("span",null,e)}),t=this.props.deployed?r.a.createElement("div",{className:"link-project"},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noopener noreferrer"},"view source code")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:this.props.website,target:"_blank",rel:"noopener noreferrer"},"view live site"))):r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:this.props.github,target:"_blank",rel:"noopener noreferrer"},"view source code"));return r.a.createElement("div",null,r.a.createElement("button",{className:"project-wrapper",onClick:this.handleClick},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{src:this.props.thumbnail,className:"thumbnail-image",alt:"project-screenshot"})),r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("div",{className:"project-title"},r.a.createElement("p",null,this.props.name)),r.a.createElement("div",{className:"tags"},e)),r.a.createElement("div",{className:"arrow-head"},r.a.createElement("i",{className:"chevron-down"},r.a.createElement(g.a,{icon:f.a})))),r.a.createElement("div",{className:"project-content",style:this.state.contentStyle},r.a.createElement("div",{className:"all"},r.a.createElement("div",{className:"description"},r.a.createElement("p",null,this.props.description)),r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:this.props.thumbnail,className:"thumbnail-image p-image",alt:"project-screenshot"})),t)))}}]),t}(n.Component),w=[{id:1,name:"Portfolio",description:"A web application that describes me as a professional, and showcases my work",thumbnail:"./assets/portfolio-min.jpg",github:"https://github.com/emmanuelmacharia/portfolio",deployed:!1,website:"",tags:["reactjs","react-router","scss","react-fontawesome"]},{id:2,name:"Eventscrubber",description:"An application that lets one view, manage and browse through events. It's a front end application built on angular 2. It's a project built through learning angular. A user can sign in and sign out, create, search and filter events and vote for sessions in the applications",thumbnail:"./assets/programming-3186084_960_720.jpg",github:"https://github.com/emmanuelmacharia/EventsApplication",deployed:!1,website:"",tags:["Angular","Toastr","NodeJS","Javascript","bootstrap","Angular-cli"]},{id:3,name:"Javascript Development Environment",description:"A boiler plate project tht helps you get you up and running quickly on Javascript projects. It giudes decisions on bundling, transpiling, liniting, unit-testing and deployment and much much more. It's a frictionless boilerplate so you can easily change configurations, scripts and technologies",thumbnail:"./assets/programming-3186084_960_720.jpg",github:"https://github.com/emmanuelmacharia/JavaScript-Development-Environment",deployed:!1,website:"https://github.com/emmanuelmacharia/JavaScript-Development-Environment",tags:["webpack","babel","mocha-chai","express","npm-scripts"]},{id:4,name:"Pomodoro-clock",description:"The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.",thumbnail:"./assets/pomodoro-min.jpg",github:"https://github.com/emmanuelmacharia/pomodoro-clock",deployed:!0,website:"https://pomodori-clock.herokuapp.com/",tags:["reactjs","react-router","react-bootstrap & fontawesome"]},{id:5,name:"Questioner-database-integration",description:"Crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log. This has a postgres database set up.",thumbnail:"./assets/programming-3186084_960_720.jpg",github:"https://github.com/emmanuelmacharia/Questioner-Database-Integration",deployed:!0,website:"https://questionscheme.herokuapp.com/api/v1/v2/users",tags:["python3","postgresql","flask","psycopg2"]},{id:6,name:"Sote Store-Manager",description:"A store management platforms that digitizes operations that take place in a store. It has two types of users; the manager: Their responsibilities are to:Manage inventory: The manager can add new products to the inventory, can delete products from the inventory, can modify details of the products and add more when they run out of stock. Manage attendants: The manager can add new attendants into the store where they assign credentials to the new user, can remove attendants from the store or change attendants' information where appropriate. The manager can also change the role of an attendant to manager -for example in the case of a promotion.The manager can also view all sales made within the store and can filter sales by attendant.The manager has admin privileges in the system. Attendant: They are the ones who interact with the customers in the store Their main responsibility is to add the products to the buyers cart.To this effect, the store management platform becomes a Point of sale system.The attendant can also view their own sales records and view progress.",thumbnail:"./assets/sote-thumbnail-min.jpg",github:"https://github.com/emmanuelmacharia/Store-Manager",deployed:!0,website:"https://emmanuelmacharia.github.io/Store-Manager/",tags:["python","flask"]},{id:7,name:"Javascript Calculator",description:"A simple calculator application",thumbnail:"./assets/calculator.jpg",github:"https://github.com/emmanuelmacharia/js-calculator",deployed:!0,website:"https://reactcalculator.herokuapp.com",tags:["reactjs-bootstrap","react-fontawesome","html-css-javascript"]},{id:8,name:"Redox Music",description:"A full stack music application that is built in Django and Jinja in the front-end. ",thumbnail:"../assets/programming-3186084_960_720.jpg",github:"https://github.com/emmanuelmacharia",deployed:!1,website:"https://github.com/emmanuelmacharia",tags:["python","sqlAlchemy","Django","Jinja"]}];function k(){var e=w.map(function(e){return r.a.createElement(y,{key:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail,github:e.github,deployed:e.deployed,website:e.website,tags:e.tags})});return r.a.createElement("div",{className:"fullscreen"},r.a.createElement("section",{className:"featured-section"},r.a.createElement("p",null,"2 years of professional experience in software development | possesses excellent technical aptitude."),r.a.createElement("p",null," Proficient in developing Responsive and Interactive websites | Skillful in HTML5, CSS3, SCSS, Javascript, jQuery, Angular and React "),r.a.createElement("p",null,"Hands on experience working with python; both django and flask | Sound understanding of databases, API, SQL queries, JSON"),r.a.createElement("p",null,"Capable of peformance and unit testing, optimiation, Documentation, Version Control and Deployment")),r.a.createElement("section",{className:"Projects"},e),r.a.createElement("section",{className:"link-buttons"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/emmanuelmacharia",target:"_blank",rel:"noopener noreferrer"},"Click here, To see more projects")),r.a.createElement("div",null,r.a.createElement("a",{href:"/contact"},"Get in touch"))))}var N=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=new v.b;e.staggerFrom("section",2,{opacity:0,scale:.5,ease:v.a.easeOut},.2),e.staggerFrom("h1, h2",.5,{opacity:0,y:-40,ease:v.a.easeInOut},.2,"-=2"),e.staggerFrom(".anim-panel",1,{opacity:0,y:-40,ease:v.a.easeInOut},.2,"-=1.5")}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"clipper"},r.a.createElement("h1",null,"Software developer")),r.a.createElement("div",{className:"anim-panel"},r.a.createElement("p",null,"Explore high quality, well documented code"),r.a.createElement("a",{href:"/portfolio",className:"read-btn primary"},"Explore portfolio")))),r.a.createElement("section",{className:"featured"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"clipper"},r.a.createElement("h2",null,"Featured")),r.a.createElement("div",{className:"anim-panel"},r.a.createElement("p",null,"A versatile, adaptable, creative and technically adept software developer with good organizational skills, coupled with excellent interpersonal and communication skills. He also has good presentation skills. He is diligent, keen, thorough and effective in every given task. Also a persistent learner and highly motivated to reach heights previously un-met."),r.a.createElement("a",{href:"/portfolio",className:"read-btn"},"Read more")))),r.a.createElement("section",{className:"explore"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"clipper"},r.a.createElement("h2",null,"Get started")),r.a.createElement("div",{className:"anim-panel"},r.a.createElement("p",null,"Review the source code, and live sites for some of the projects he has done"),r.a.createElement("form",{action:"/portfolio"},r.a.createElement("button",{className:"cta",type:"submit"},"Get started"))))))}}]),t}(n.Component);function j(){return r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:N}),r.a.createElement(c.a,{exact:!0,path:"/portfolio",component:k}),r.a.createElement(c.a,{exact:!0,path:"/contact",component:E}))}var A=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(l,null),r.a.createElement(j,null)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");C?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.ffb9f687.chunk.js.map