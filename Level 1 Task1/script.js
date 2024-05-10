const click=document.querySelector(".icon");
const options=document.querySelector("#options");
click.addEventListener("click",()=>{
    if (options.className==="options") {
        options.className+=" show";
    }else{
        options.classList="options";
    }
})