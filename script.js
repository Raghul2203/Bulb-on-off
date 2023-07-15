let image = document.querySelector("#img");
let btn1 = document.querySelector("#on");
let btn2 = document.querySelector("#off");
btn1.addEventListener("click",()=>{
    image.src="on.avif";
})
btn2.addEventListener("click",()=>{
    image.src="off.avif";
})