const icon = document.querySelector(".icon");
const nav = document.querySelector(".rightHeader");

icon.addEventListener("click", () => {
    if (nav.style.width === "0%") {
        nav.style.width = "200px";
        icon.childNodes[1].style.color = "black"; // Adjusting the color of the icon
    } else {
        nav.style.width = "0%";
        icon.childNodes[1].style.color = "white"; // Adjusting the color of the icon
    }
});
