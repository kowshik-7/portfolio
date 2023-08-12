
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");

function callFunction1(){
    if(page1.style.display === "none"){
        page1.classList.add("active");
        page1.style.display="block";
        page2.style.display="none";
        page3.style.display="none";
        page4.style.display="none";

    }
    else{
        page1.classList.add("active")
    }
}
function callFunction2(){
    page2.classList.add("active");
    page2.style.display="block";
    page1.style.display="none";
    page3.style.display="none";
    page4.style.display="none";

}
function callFunction3(){
    page3.classList.add("active");
    page3.style.display="block";
    page1.style.display="none";
    page2.style.display="none";
    page4.style.display="none";
}
function callFunction4(){
    page4.classList.add("active");
    page4.style.display="block";
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
}
