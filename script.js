

function display(num) {
  
document.getElementById("textA").innerHTML=document.getElementById("textA").innerHTML+num;
}

function calculate() {
 try {

document.getElementById("textA").innerHTML= eval(document.getElementById("textA").innerHTML);

 }
 catch(error) {
   alert("invalid statement")
 }

}
function clean() {
  document.getElementById("textA").innerHTML="";
}
function del() {
document.getElementById("textA").innerHTML=document.getElementById("textA").innerHTML.slice(0,-1)

}

//function result() { 
//document.getElementById("textA").innerText=" ";
//}
//one
//document.getElementById("one").addEventListener("click", one) 
//function one() {
//document.getElementById("textA").innerText= //document.getElementById("textA").innerText+"1";

//two

/*
idString=["*","/","+","-","="]
idvalues=["mul","division","plus","minus","equals"]
fetch('https://myjson.dit.upm.es/api/bins/hmc').then(res=>res.json()).then(data => {
  x=Object.values(data)
  for(let i=0;i<=4;i++){
   document.getElementById(idvalues[i]).innerText= x[0][i].title;
   //console.log(idvalues[i])
    }
  console.log(x)
}).catch((e)=> {
var res= [{"title":"Mul","operation":"*"},{"title":"Div","operation":"/"},{"title":"+","operation":"+"},{"title":"Sub","operation":"-"},{"title":"Res","operation":"="}]
 x= Object.values(data)
  for(let i=0;i<=x.length;i++){
   document.getElementById(idvalues[i]).innerText= x[0][i].title;
   //console.log(idvalues[i])
    }
//console.log(res)
})*/