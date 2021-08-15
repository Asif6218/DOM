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