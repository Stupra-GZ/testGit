/* 
* @Author: San
* @Date:   2015-12-28 18:26:04
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-28 21:58:41
*/
//开关切换
function picture1(){
    var imgObj = document.getElementById("pic1");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Open.jpg")
        imgObj.src=Flag?"./img/Close.jpg":"./img/Open.jpg";
}
function picture2(){
    var imgObj = document.getElementById("pic2");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Open.jpg")
        imgObj.src=Flag?"./img/Close.jpg":"./img/Open.jpg";
}
function picture3(){
    var imgObj = document.getElementById("pic3");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Close.jpg")
        imgObj.src=Flag?"./img/Open.jpg":"./img/Close.jpg";
}
function picture4(){
    var imgObj = document.getElementById("pic4");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Open.jpg")
        imgObj.src=Flag?"./img/Close.jpg":"./img/Open.jpg";
}
function picture5(){
    var imgObj = document.getElementById("pic5");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Close.jpg")
        imgObj.src=Flag?"./img/Open.jpg":"./img/Close.jpg";
}
function picture6(){
    var imgObj = document.getElementById("pic6");
    var Flag=(imgObj.getAttribute("src",2)=="./img/Close.jpg")
        imgObj.src=Flag?"./img/Open.jpg":"./img/Close.jpg";
}


//.鼠标移动变色
function border(){
document.getElementById("bor").style.border= "1px solid #0188cc"
document.getElementById("but1").style.background="#0188cc"
document.getElementById("but1").style.color="#ffffff"
}
function border1(){
document.getElementById("bor").style.border = "1px solid #dedede"
document.getElementById("but1").style.background="#ffffff"
document.getElementById("but1").style.color="#4d4d4d"
}
function bor(){
document.getElementById("bor2").style.border= "1px solid #0188cc"
document.getElementById("but2").style.background="#0188cc"
document.getElementById("but2").style.color="#ffffff"
}
function bor1(){
document.getElementById("bor2").style.border = "1px solid #dedede"
document.getElementById("but2").style.background="#ffffff"
document.getElementById("but2").style.color="#4d4d4d"
}
function bor3(){
document.getElementById("bor3").style.border= "1px solid #0188cc"
document.getElementById("but3").style.background="#0188cc"
document.getElementById("but3").style.color="#ffffff"
}
function bor4(){
document.getElementById("bor3").style.border = "1px solid #dedede"
document.getElementById("but3").style.background="#ffffff"
document.getElementById("but3").style.color="#4d4d4d"
}
function bor5(){
document.getElementById("bor4").style.border= "1px solid #0188cc"
document.getElementById("but4").style.background="#0188cc"
document.getElementById("but4").style.color="#ffffff"
}
function bor6(){
document.getElementById("bor4").style.border = "1px solid #dedede"
document.getElementById("but4").style.background="#ffffff"
document.getElementById("but4").style.color="#4d4d4d"
}
function bor7(){
document.getElementById("bor5").style.border= "1px solid #0188cc"
document.getElementById("but5").style.background="#0188cc"
document.getElementById("but5").style.color="#ffffff"
}
function bor8(){
document.getElementById("bor5").style.border = "1px solid #dedede"
document.getElementById("but5").style.background="#ffffff"
document.getElementById("but5").style.color="#4d4d4d"
}
function bor9(){
document.getElementById("bor6").style.border= "1px solid #0188cc"
document.getElementById("but6").style.background="#0188cc"
document.getElementById("but6").style.color="#ffffff"
}
function bor10(){
document.getElementById("bor6").style.border = "1px solid #dedede"
document.getElementById("but6").style.background="#ffffff"
document.getElementById("but6").style.color="#4d4d4d"
}