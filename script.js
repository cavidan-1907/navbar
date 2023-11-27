let nav = document.createElement("nav");
let div = document.createElement("div");
let div2 = document.createElement("div");
div2.setAttribute("class", "nav");
div.setAttribute("class", "container");

let h1 = document.createElement("h1");
h1.innerText = "Start Boostrap"; 

let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerText = "Home";
let li2 = document.createElement("li");
li2.innerText = "Resume";
let li3 = document.createElement("li");
li3.innerText = "Projects";
let li4 = document.createElement("li");
li4.innerText = "Contact";

ul.append(li1, li2, li3, li4);

div2.append(h1, ul);
div.append(div2);
nav.append(div);

let section=document.createElement("section");

let section1=document.createElement("div");
section1.setAttribute("class", "section1");
let div3=document.createElement("div");
let div4=document.createElement("div");
div3.setAttribute("class", "div3");
div4.setAttribute("class", "div4");

section1.append(div3,div4);

div.append(section1);
section.append(div)

document.body.append(nav,section);