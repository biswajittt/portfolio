const details=["Software Engineer","Fullstack Development","Frontend Development","Backend Development","Software Development"]

const caption = document.querySelector("#caption");
let i = 0;
setInterval(() => {
    if (i == details.length - 1) i = 0;
    caption.innerHTML = '#' + details[i];
    i++;
},2000)