const countdown = ()=>{
const countDate= new Date('December 25, 2022 00:00:00').getTime();
const now=new Date().getTime();
const difference= countDate-now;
const seconds= 1000;
const minutes=seconds*60;
const hour=minutes*60;
const day=hour*24;
let calcDay=Math.floor(difference/day);
let calcHour=Math.floor((difference%day)/hour);
let calcMinute=Math.floor((difference%day%hour)/minutes);
let CalcSecond=Math.floor((difference%day%hour%minutes)/seconds);

document.querySelector(".day").innerText= calcDay;

document.querySelector(".hours").innerText= calcHour;

document.querySelector(".minutes").innerText= calcMinute;

document.querySelector(".seconds").innerText= CalcSecond;


}
setInterval(countdown,1000);