const click=document.querySelector(".icon");
const options=document.querySelector("#options");
click.addEventListener("click",()=>{
    if (options.style.top=="-100%") {
        options.style.top="0%";
        options.style.display="block";
    }else{
        options.style.top="-100%";
        options.style.display="none";
    }
})