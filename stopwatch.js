
function showTime(){
    let time = new Date();
    let h  = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let time2 = `${h}:${m}:${s}`;
    document.getElementById("display").textContent = time2;
    console.log( time2);
}
showTime(); // time dikhayega

setTimeout(()=>{console.log(time2)},1000);//next second me time dikhayega

let interval = setInterval(showTime,1000);// har second me time dikhayega

let pausebtn = document.getElementById("pause");//pause button ko get kr liya
pausebtn.addEventListener("click",function(){
    clearInterval(interval);
})//pause button ka function


let startbtn = document.getElementById("start");//start button ko get kr liya
startbtn.addEventListener("click",function(){
    interval = setInterval(showTime,1000);
})//start button ka function 

let restartbtn = document.getElementById("restart");//restart button ko get kr liya
restartbtn.addEventListener("click",function(){
    clearInterval(interval);
    document.getElementById("display").textContent = "0:0:0";
})//restart button ka function 


