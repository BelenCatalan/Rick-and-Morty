(this.webpackJsonprick=this.webpackJsonprick||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty.75509f2e.png"},19:function(e,a,t){e.exports=t.p+"static/media/nave.624910a2.png"},20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(25),t(12)),o=(t(26),t(16)),s=t.n(o),m=t(6),u=function(e){return console.log(e),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/character/".concat(e.character.id)},r.a.createElement("img",{className:"",src:e.character.image,alt:"character_name"}),r.a.createElement("h4",null,e.character.name),r.a.createElement("p",null,e.character.species)))};var h=function(e){return console.log(e),0===e.characters.length?r.a.createElement("div",null,r.a.createElement("p",null,"No hay ning\xfan personaje que coincida con: ",e.charactersFilter)):r.a.createElement("section",null,r.a.createElement("ul",null,e.characters.map((function(e){return r.a.createElement(u,{key:e.id,name:e.name,id:e.id,character:e,image:e.image,specie:e.species})}))))};var d=function(e){return console.log(e),r.a.createElement("section",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("label",{className:"",htmlFor:"name"}),r.a.createElement("input",{className:"",type:"text",name:"character",id:"name",placeholder:"Character name",onChange:function(a){a.preventDefault(),console.log(a.target.value),e.handleFilterText({value:a.target.value,name:a.target.name})},value:e.charactersFilter})))},E=t(19),p=t.n(E);var f=function(e){return console.log(e),r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{className:"ship__link",src:p.a,alt:"nave Rick and Morty"})),r.a.createElement("header",null,r.a.createElement("img",{className:"",src:e.character.image,alt:"character_name"})),r.a.createElement("section",null,r.a.createElement("ul",null,r.a.createElement("li",null,e.character.name),r.a.createElement("li",null,"Status: ",e.character.status),r.a.createElement("li",null,"Species:",e.character.species),r.a.createElement("li",null,"Origin: ",e.character.origin),r.a.createElement("li",null,"Episodes:",e.character.episodes))))))},g=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,origin:e.origin.name,image:e.image,episodes:e.episode.length}}))}))},v=t(5);var k=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),m=o[0],u=o[1];Object(n.useEffect)((function(){g().then((function(e){c(e)}))}),[]),t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}));var E=t.filter((function(e){return console.log(e.name),e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("img",{className:"",src:s.a,alt:"Rick and Morty"})),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/"},r.a.createElement(d,{handleFilterText:function(e){u(e.value)},charactersFilter:m}),r.a.createElement(h,{characters:E,charactersFilter:m})),r.a.createElement(v.a,{path:"/character/:characterId",render:function(e){console.log(e.match.params.characterId);var a=parseInt(e.match.params.characterId);console.log(a);var n=t.find((function(e){return e.id===a}));if(console.log(n),void 0!==n)return r.a.createElement(f,{character:n})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.5cedf8d3.chunk.js.map