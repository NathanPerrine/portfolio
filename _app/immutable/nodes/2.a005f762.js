import{h as Se,s as ee,o as Le,d as De,u as je,g as Ve,e as Ae,n as se,c as Ne,b as ze,i as Fe}from"../chunks/scheduler.ce286fe4.js";import{S as ae,i as oe,e as le,a as B,d as V,p as de,t as z,b as fe,f as x,g,r as pe,h as v,j as $,u as ue,k as p,v as he,B as Oe,w as me,s as C,m as Q,H as Ue,c as E,n as X,C as We,x as O,y as i,o as Re,D as Je,z as ce,A as qe,E as Be}from"../chunks/index.64a226ca.js";import{e as Z}from"../chunks/each.e59479a4.js";import{d as Ge,w as ge}from"../chunks/index.22c07247.js";function Ke(o){const e=o-1;return e*e*e+1}function He(o,{delay:e=0,duration:l=400,easing:t=Ke,x:s=0,y:a=0,opacity:r=0}={}){const f=getComputedStyle(o),h=+f.opacity,d=f.transform==="none"?"":f.transform,u=h*(1-r),[I,k]=Se(s),[L,m]=Se(a);return{delay:e,duration:l,easing:t,css:(_,D)=>`
			transform: ${d} translate(${(1-_)*I}${k}, ${(1-_)*L}${m});
			opacity: ${h-u*D}`}}const Qe=ge(900),Xe=ge(900);Ge([Qe,Xe],([o,e])=>o<e);const Ye=(o,e)=>{const l=typeof globalThis.window<"u";let t=e;const{set:s,...a}=ge(e,()=>{if(l){f();const d=u=>{u.key===o&&f()};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}else return()=>{}}),r=d=>{t=d,s(d);try{localStorage.setItem(o,JSON.stringify(d))}catch(u){console.error(`the \`${o}\` store's new value \`${d}\` could not be persisted to localStorage because of ${u}`)}},f=()=>{let d=null;try{d=localStorage.getItem(o)}catch(u){console.error(`the \`${o}\` store's value could not be restored from localStorage because of ${u}`)}if(d===null)r(e);else try{const u=JSON.parse(d);s(u),t=u}catch(u){console.error(`localStorage's value for \`${o}\` (\`${d}\`) could not be parsed as JSON because of ${u}`)}};return{...a,set:r,update:d=>{r(d(t))}}};const Ze=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";Ye("theme",Ze);function $e(o){let e;const l=o[2].default,t=De(l,o,o[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&2)&&je(t,l,s,s[1],e?Ae(l,s[1],a,null):Ve(s[1]),null)},i(s){e||(V(t,s),e=!0)},o(s){z(t,s),e=!1},d(s){t&&t.d(s)}}}function et(o){let e,l,t=o[0]&&$e(o);return{c(){t&&t.c(),e=le()},l(s){t&&t.l(s),e=le()},m(s,a){t&&t.m(s,a),B(s,e,a),l=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&V(t,1)):(t=$e(s),t.c(),V(t,1),t.m(e.parentNode,e)):t&&(de(),z(t,1,1,()=>{t=null}),fe())},i(s){l||(V(t),l=!0)},o(s){z(t),l=!1},d(s){s&&x(e),t&&t.d(s)}}}function tt(o,e,l){let{$$slots:t={},$$scope:s}=e,a=!1;return Le(()=>{l(0,a=!0)}),o.$$set=r=>{"$$scope"in r&&l(1,s=r.$$scope)},[a,s,t]}class lt extends ae{constructor(e){super(),oe(this,e,tt,et,ee,{})}}function st(o){let e,l,t,s,a,r,f=o[0].name+"",h,d,u,I,k,L=o[0].description+"",m,_,D='<div class="ml-auto cursor-pointer group-hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full rounded-lg after:bg-violet-400 after:duration-200 group-hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="mx-2 z-4">Go to →</p></div>',M,H;return{c(){e=g("a"),l=g("div"),t=g("i"),a=C(),r=g("h3"),h=Q(f),d=C(),u=g("div"),I=g("p"),k=new Ue(!1),m=C(),_=g("div"),_.innerHTML=D,this.h()},l(S){e=v(S,"A",{href:!0,target:!0,class:!0});var w=$(e);l=v(w,"DIV",{class:!0});var j=$(l);t=v(j,"I",{class:!0}),$(t).forEach(x),j.forEach(x),a=E(w),r=v(w,"H3",{class:!0});var G=$(r);h=X(G,f),G.forEach(x),d=E(w),u=v(w,"DIV",{class:!0});var N=$(u);I=v(N,"P",{class:!0});var Y=$(I);k=We(Y,!1),Y.forEach(x),N.forEach(x),m=E(w),_=v(w,"DIV",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-p9u1u3"&&(_.innerHTML=D),w.forEach(x),this.h()},h(){p(t,"class",s=o[0].icon),p(l,"class","bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-14 mx-auto duration-100"),p(r,"class","font-medium text-xl sm:text-2xl md:text-3xl"),k.a=null,p(I,"class","lg:line-clamp-[11] group-hover:line-clamp-none group-hover:bg-slate-950"),p(u,"class","max-h-[100px] lg:max-h-[275px] overflow-auto px-1"),p(_,"class","flex flex-1 justify-between gap-4 items-end"),p(e,"href",M=o[0].href),p(e,"target","_blank"),p(e,"class","max-h-full h-full p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200")},m(S,w){B(S,e,w),i(e,l),i(l,t),i(e,a),i(e,r),i(r,h),i(e,d),i(e,u),i(u,I),k.m(L,I),i(e,m),i(e,_)},p(S,w){w&1&&s!==(s=S[0].icon)&&p(t,"class",s),w&1&&f!==(f=S[0].name+"")&&Re(h,f),w&1&&L!==(L=S[0].description+"")&&k.p(L),w&1&&M!==(M=S[0].href)&&p(e,"href",M)},i(S){S&&(H||Ne(()=>{H=Je(e,He,{x:-200,duration:300,delay:300}),H.start()}))},o:se,d(S){S&&x(e)}}}function Ie(o){let e,l,t,s;return l=new lt({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){e=g("div"),pe(l.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=$(e);ue(l.$$.fragment,r),r.forEach(x),this.h()},h(){p(e,"class","lg:h-full ")},m(a,r){B(a,e,r),he(l,e,null),s=!0},p(a,r){const f={};r&5&&(f.$$scope={dirty:r,ctx:a}),l.$set(f)},i(a){s||(V(l.$$.fragment,a),t&&t.end(1),s=!0)},o(a){z(l.$$.fragment,a),a&&(t=Oe(e,He,{x:200,duration:300})),s=!1},d(a){a&&x(e),me(l),a&&t&&t.end()}}}function at(o){let e=o[1],l,t,s=Ie(o);return{c(){s.c(),l=le()},l(a){s.l(a),l=le()},m(a,r){s.m(a,r),B(a,l,r),t=!0},p(a,[r]){r&2&&ee(e,e=a[1])?(de(),z(s,1,1,se),fe(),s=Ie(a),s.c(),V(s,1),s.m(l.parentNode,l)):s.p(a,r)},i(a){t||(V(s),t=!0)},o(a){z(s),t=!1},d(a){a&&x(l),s.d(a)}}}function ot(o,e,l){let{step:t}=e,{active:s}=e;return o.$$set=a=>{"step"in a&&l(0,t=a.step),"active"in a&&l(1,s=a.active)},[t,s]}class rt extends ae{constructor(e){super(),oe(this,e,ot,at,ee,{step:0,active:1})}}const nt=[{name:"developer",description:"I am an ambitious full-stack developer with a strong foundation in Python and JavaScript, along with expertise in HTML, CSS, and various frameworks. I am on the lookout for a role that not only challenges me but also allows me to leverage the latest technologies. Having taught myself to code through free online resources, I discovered a profound passion for the creative problem-solving involved in crafting innovative online experiences. I further honed my skills through a rigorous bootcamp, where I delved into full-stack development."},{name:"curious",description:"My approach is characterized by quiet confidence and an insatiable curiosity, propelling me to continually enhance my skill set. I thrive on learning about new technologies and seamlessly integrating them into my toolkit. I am excited about the prospect of contributing my technical expertise to a dynamic and forward-thinking team, driving impactful projects and pushing the boundaries of what's possible in web development."},{name:"designer",description:"Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."},{name:"communicator",description:"Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."}],it=[{name:"React portfolio",icon:"fa-brands fa-react",href:"https://nathanperrine.github.io/react_portfolio/#/",tags:["All","React","Web dev"],description:'A sample portfolio site utilizing <strong class="text-violet-400">React</strong> instead of Sveltekit. Utilizes <strong class="text-violet-400">Sanity</strong> CMS to display data and showcases higher order components'},{name:"Link Tree clone",icon:"fa-solid fa-link",href:"",tags:["All","Svelte","Sveltekit","Web dev"],description:'Clone tree is a Full Stack CRUD application utilizing <strong class="text-violet-400">Sveltekit, Firebase, Tailwind CSS and daisyUI</strong> to create a web app that allows users to create accounts linked to their gmail account and share all their social media links.'},{name:"Ultimate Todos",icon:"fa-solid fa-list-check",href:"",tags:["All","Web dev",""],description:'Ultimate Todos is a Full Stack <strong class="text-violet-400">Next.js</strong>, <strong class="text-violet-400">Node.js + Express.js</strong> & <strong class="text-violet-400">Firebase</strong> CRUD application that allows a user to login, manage a tidy and efficacious todo list, and persist this information across devices.'},{name:"Pokedex",icon:"fa-solid fa-diagram-project",href:"",tags:["All","Web dev",""],description:'The Pokédex is a <strong class="text-violet-400">SvelteKit & TailwindCSS</strong> web application, hosted on <strong class="text-violet-400">Netlify</strong>, that consumes and caches the <strong class="text-violet-400">Pokémon API</strong> to display all Pokémon information. Gotta catch them all!'},{name:"Sample Python Project",icon:"fa-brands fa-python",href:"",tags:["All","Python",""],description:"Python project placeholder"},{name:"placeholder",icon:"",href:"",tags:["",""],description:""}];function ct(o,e,l){const t=o.slice();return t[5]=e[l],t[7]=l,t}function Te(o,e,l){const t=o.slice();return t[8]=e[l],t}function Ce(o,e,l){const t=o.slice();return t[11]=e[l],t}function Ee(o){let e,l=o[11]+"",t,s,a,r,f;function h(){return o[3](o[11])}return{c(){e=g("button"),t=Q(l),s=C(),this.h()},l(d){e=v(d,"BUTTON",{class:!0});var u=$(e);t=X(u,l),s=E(u),u.forEach(x),this.h()},h(){p(e,"class",a="btn bg-slate-950 hover:border-violet-400 w-24 duration-500 "+(o[0]===o[11]?"poppins text-violet-400 border border-violet-400":"border border-violet-700"))},m(d,u){B(d,e,u),i(e,t),i(e,s),r||(f=qe(e,"click",h),r=!0)},p(d,u){o=d,u&1&&a!==(a="btn bg-slate-950 hover:border-violet-400 w-24 duration-500 "+(o[0]===o[11]?"poppins text-violet-400 border border-violet-400":"border border-violet-700"))&&p(e,"class",a)},d(d){d&&x(e),r=!1,f()}}}function Me(o){let e,l,t;function s(r){o[4](r)}let a={step:o[8]};return o[0]!==void 0&&(a.active=o[0]),e=new rt({props:a}),ze.push(()=>Be(e,"active",s)),{c(){pe(e.$$.fragment)},l(r){ue(e.$$.fragment,r)},m(r,f){he(e,r,f),t=!0},p(r,f){const h={};f&2&&(h.step=r[8]),!l&&f&1&&(l=!0,h.active=r[0],Fe(()=>l=!1)),e.$set(h)},i(r){t||(V(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){me(e,r)}}}function dt(o){let e,l,t,s=o[7]+1+"",a,r,f,h,d=o[5].name+"",u,I,k,L=o[5].description+"",m,_;return{c(){e=g("div"),l=g("p"),t=Q("0"),a=Q(s),r=C(),f=g("div"),h=g("h3"),u=Q(d),I=C(),k=g("p"),m=Q(L),_=C(),this.h()},l(D){e=v(D,"DIV",{class:!0});var M=$(e);l=v(M,"P",{class:!0});var H=$(l);t=X(H,"0"),a=X(H,s),H.forEach(x),r=E(M),f=v(M,"DIV",{class:!0});var S=$(f);h=v(S,"H3",{class:!0});var w=$(h);u=X(w,d),w.forEach(x),I=E(S),k=v(S,"P",{});var j=$(k);m=X(j,L),j.forEach(x),S.forEach(x),_=E(M),M.forEach(x),this.h()},h(){p(l,"class","poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"),p(h,"class","text-2xl sm:text-3xl md:text-5xl"),p(f,"class","flex flex-col gap-6 sm:gap-8"),p(e,"class","flex gap-6 sm:gap-8")},m(D,M){B(D,e,M),i(e,l),i(l,t),i(l,a),i(e,r),i(e,f),i(f,h),i(h,u),i(f,I),i(f,k),i(k,m),i(e,_)},p:se,d(D){D&&x(e)}}}function ft(o){let e,l,t=`<div class="flex flex-col lg: justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:6xl">Hi! I&#39;m <span class="poppins text-violet-400">Nathan</span> Perrine
				<br/>
				Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> inclues Python, Sveltekit, TailwindCSS,
				JavaScript, PostgreSQL or Firebase/Firestore!</p> <a href="https://www.linkedin.com/in/nathan-perrine/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"><div class="absolute top-0 right-full w-full h-full bg-slate-950 opacity-20 group-hover:translate-x-full z-10 duration-200"></div> <h4 class="relative z-9 poppins">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img src="images/profile2.png" alt="Scruffy man working on a computer" class="object-cover z-[2] max-h-[70vh"/></div>`,s,a,r,f='<h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3>',h,d,u,I,k,L,m,_,D='<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>',M,H,S="I am . . .",w,j,G,N,Y='. . . the <span class="text-violet-400 poppins">complete</span> package.',re,W,ve='<table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-400"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Programming Skills</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table>',ne,R,xe="<p>Scroll to see more →</p>",ie,J,be="So why not invest?",te,K=Z(o[2]),T=[];for(let c=0;c<K.length;c+=1)T[c]=Ee(Ce(o,K,c));let q=Z(o[1]),b=[];for(let c=0;c<q.length;c+=1)b[c]=Me(Te(o,q,c));const Pe=c=>z(b[c],1,1,()=>{b[c]=null});let _e=Z(nt),F=[];for(let c=0;c<_e.length;c+=1)F[c]=dt(ct(o,_e,c));return{c(){e=g("main"),l=g("section"),l.innerHTML=t,s=C(),a=g("section"),r=g("div"),r.innerHTML=f,h=C(),d=g("div");for(let c=0;c<T.length;c+=1)T[c].c();u=C(),I=g("div"),k=g("div");for(let c=0;c<b.length;c+=1)b[c].c();L=C(),m=g("section"),_=g("div"),_.innerHTML=D,M=C(),H=g("p"),H.textContent=S,w=C(),j=g("div");for(let c=0;c<F.length;c+=1)F[c].c();G=C(),N=g("h5"),N.innerHTML=Y,re=C(),W=g("div"),W.innerHTML=ve,ne=C(),R=g("div"),R.innerHTML=xe,ie=C(),J=g("p"),J.textContent=be,this.h()},l(c){e=v(c,"MAIN",{class:!0});var y=$(e);l=v(y,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),O(l)!=="svelte-1ln20n7"&&(l.innerHTML=t),s=E(y),a=v(y,"SECTION",{id:!0,class:!0});var n=$(a);r=v(n,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-1s2twk0"&&(r.innerHTML=f),h=E(n),d=v(n,"DIV",{class:!0});var U=$(d);for(let A=0;A<T.length;A+=1)T[A].l(U);U.forEach(x),u=E(n),I=v(n,"DIV",{class:!0});var we=$(I);k=v(we,"DIV",{class:!0});var ke=$(k);for(let A=0;A<b.length;A+=1)b[A].l(ke);ke.forEach(x),we.forEach(x),n.forEach(x),L=E(y),m=v(y,"SECTION",{id:!0,class:!0});var P=$(m);_=v(P,"DIV",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-ildlcz"&&(_.innerHTML=D),M=E(P),H=v(P,"P",{class:!0,"data-svelte-h":!0}),O(H)!=="svelte-rcpqeb"&&(H.textContent=S),w=E(P),j=v(P,"DIV",{class:!0});var ye=$(j);for(let A=0;A<F.length;A+=1)F[A].l(ye);ye.forEach(x),G=E(P),N=v(P,"H5",{class:!0,"data-svelte-h":!0}),O(N)!=="svelte-e4g4jj"&&(N.innerHTML=Y),re=E(P),W=v(P,"DIV",{class:!0,"data-svelte-h":!0}),O(W)!=="svelte-1wdoxhs"&&(W.innerHTML=ve),ne=E(P),R=v(P,"DIV",{class:!0,"data-svelte-h":!0}),O(R)!=="svelte-1ldeall"&&(R.innerHTML=xe),ie=E(P),J=v(P,"P",{class:!0,"data-svelte-h":!0}),O(J)!=="svelte-g5q3n9"&&(J.textContent=be),P.forEach(x),y.forEach(x),this.h()},h(){p(l,"id","introPage"),p(l,"class","grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"),p(r,"class","flex flex-col gap-2 text-center"),p(d,"class","flex flex-wrap flex-row justify-center gap-4"),p(k,"class","grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-12 lg:gap-10 mx-8"),p(I,"class","flex flex-1 flex-row"),p(a,"id","projects"),p(a,"class","lg:min-h-screen lg:max-h-screen overflow-hidden pt-20 lg:pt-16 flex flex-col gap-12"),p(_,"class","flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"),p(H,"class","mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl"),p(j,"class","flex flex-col gap-20 w-full mx-auto max-w-[800px]"),p(N,"class","text-2xl sm:text-3xl font-semibold text-center poppins"),p(W,"class","flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"),p(R,"class","mx-auto -mt-12 italic sm:hidden opacity-50"),p(J,"class","mx-auto"),p(m,"id","about"),p(m,"class","py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-8 sm:gap-10 md:gap-12 relative"),p(e,"class","flex flex-col flex-1 p-4")},m(c,y){B(c,e,y),i(e,l),i(e,s),i(e,a),i(a,r),i(a,h),i(a,d);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m(d,null);i(a,u),i(a,I),i(I,k);for(let n=0;n<b.length;n+=1)b[n]&&b[n].m(k,null);i(e,L),i(e,m),i(m,_),i(m,M),i(m,H),i(m,w),i(m,j);for(let n=0;n<F.length;n+=1)F[n]&&F[n].m(j,null);i(m,G),i(m,N),i(m,re),i(m,W),i(m,ne),i(m,R),i(m,ie),i(m,J),te=!0},p(c,[y]){if(y&5){K=Z(c[2]);let n;for(n=0;n<K.length;n+=1){const U=Ce(c,K,n);T[n]?T[n].p(U,y):(T[n]=Ee(U),T[n].c(),T[n].m(d,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=K.length}if(y&3){q=Z(c[1]);let n;for(n=0;n<q.length;n+=1){const U=Te(c,q,n);b[n]?(b[n].p(U,y),V(b[n],1)):(b[n]=Me(U),b[n].c(),V(b[n],1),b[n].m(k,null))}for(de(),n=q.length;n<b.length;n+=1)Pe(n);fe()}},i(c){if(!te){for(let y=0;y<q.length;y+=1)V(b[y]);te=!0}},o(c){b=b.filter(Boolean);for(let y=0;y<b.length;y+=1)z(b[y]);te=!1},d(c){c&&x(e),ce(T,c),ce(b,c),ce(F,c)}}}function pt(o,e,l){let t,s;const a=["All","React","Svelte","Python","Web dev"],r=h=>l(0,t=h);function f(h){t=h,l(0,t)}return o.$$.update=()=>{o.$$.dirty&1&&l(1,s=it.filter(h=>h.tags.includes(t)))},l(0,t="All"),[t,s,a,r,f]}class ut extends ae{constructor(e){super(),oe(this,e,pt,ft,ee,{})}}function ht(o){let e,l;return e=new ut({}),{c(){pe(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,s){he(e,t,s),l=!0},p:se,i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){me(e,t)}}}class bt extends ae{constructor(e){super(),oe(this,e,null,ht,ee,{})}}export{bt as component};