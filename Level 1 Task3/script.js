const values=document.querySelectorAll(".value");
const output=document.querySelector(".calculation");
const clear=document.querySelector(".clear");
const del=document.querySelector(".delete");
const op=document.querySelectorAll(".op");
const out=document.querySelector(".out");
const per=document.querySelector(".per");
let newValue=true,same=true;
let firstValue=0,secondValue=0;
let operation;
values.forEach(element => {
    element.addEventListener("click", () => {
        if ( newValue){    
            output.innerHTML=element.innerHTML;
            newValue=false;
        }else{
            if (element.innerHTML!='.'||!(output.innerHTML.includes("."))) {
                if (output.innerHTML.length<10) {
                    
                    output.innerHTML+=element.innerHTML;
                }
                
            }
        }
    });
});
op.forEach(element=>{
    element.addEventListener("click",()=>{
      operation=element.innerHTML;
      firstValue=parseFloat(output.innerHTML);
      newValue=true;
      same=false;
    })
})
del.addEventListener("click",()=>{
    output.innerHTML=output.innerHTML.substring(0,output.innerHTML.length-1);
})
clear.addEventListener("click",()=>{
    output.innerHTML="0";
    newValue=true;
    firstValue=0
    secondValue=0;
    operation='+';
})
per.addEventListener("click",()=>{
    firstValue=parseFloat(output.innerHTML);
    output.innerHTML=firstValue/100;
    newValue=true;
})
out.addEventListener("click",()=>{
    if (!same) {      
        secondValue=parseFloat(output.innerHTML);
        same=true;
    }
    switch (operation) {
        case '+':
            output.innerHTML=firstValue+secondValue;
            break;
        case '-':
            output.innerHTML=firstValue-secondValue;
            break;
        case 'X':
            output.innerHTML=firstValue*secondValue;
            break;
        case '/':
            output.innerHTML=firstValue/secondValue;
            break;
        case '%':
            output.innerHTML=firstValue/100;
            break;
        default:
            break;
    }
    firstValue=parseFloat(output.innerHTML);
    newValue=true;
})