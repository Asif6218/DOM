//changing title

console.log(document.title);
document.title ="modified";
console.log(document.title);

//DOM selectors
//1.element by id
//2.element by tag name
//3.element by class name
//4.query selector 
//5.query selector all

//element by id

let  des=document.getElementById("first");
console.log(des);

//element by tag name

let heading =document.getElementsByTagName("h1");
console.log(heading[0]);

//element by class name

let des2=document.getElementsByClassName("second");
console.log(des2[0]);

//query selector

let heading1=document.querySelector("#first");
console.log(heading1);

let des3=document.querySelector("h1");
console.log(des3);

//query selector all

let des4=document.querySelectorAll(".second");
console.log(des4[0]);

//
let pe1=document.getElementById("parent");
console.log(pe1);

let pe2=document.getElementById("parent");
console.log(pe2.children);

let pe3=document.getElementById("parent");
console.log(pe3.childNodes);

let pe4=document.getElementById("parent");
console.log(pe4.firstChild);

let pe5=document.getElementById("parent");
console.log(pe5.firstElementChild);

let pe6=document.getElementById("parent");
console.log(pe6.lastChild);

let pe7=document.getElementById("parent");
console.log(pe7.lastElementChild);

let pe8=document.getElementById("parent");
console.log(pe8.previousSibling);

let pe9=document.getElementById("parent");
console.log(pe9.nextSibling);

let pe10=document.getElementById("parent");
console.log(pe10.previousElementSibling);

let pe11=document.getElementById("parent");
console.log(pe11.nextElementSibling);

let pe12=document.getElementById("parent");
console.log(pe12.parentElement);


