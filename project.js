// var date;
// var time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(timer,1000)
function timer(){
    a=new Date();
    var time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
    var date=a.toLocaleDateString(undefined,options)
   document.getElementById("time").innerHTML=time+" "+date
}
