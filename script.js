var timer=60;
var rn=0;
var score=0;
function makebubble(){
    var clutter= "";
    for(var i=1;i<=176;i++){
        var rn = Math.floor(Math.random()*10);
      clutter+= ` <div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbottom").innerHTML=clutter;
}
function hitval (){
    rn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=rn;
}
function runtimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML="<h1>GAME OVER</h1>";
        }
    },1000);
}
function getscore(){
    score+=10; 
    document.querySelector("#scoreval").textContent=score;
    
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
   if(clickednum===rn)
   {
       getscore();
       makebubble();
       hitval();
   }
});

runtimer();
makebubble();
hitval();
