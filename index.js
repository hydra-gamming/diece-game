var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomnumber1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomnumber2+".png");
var s=" ";
if(randomnumber1 < randomnumber2){
    s=" player 2 wins🚩";
}
else if(randomnumber1 >randomnumber2){
    s="🚩Player 1 wins";
}
else{
    s="Draw!😒";
}
document.querySelector("h1").textContent=s;