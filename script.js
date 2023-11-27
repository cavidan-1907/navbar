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
document.body.append(nav);