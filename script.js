let istatus = document.getElementsByTagName("h4")
let yess = document.getElementById("Yess")
yess.addEventListener('click', function() {
    istatus[0].innerHTML = "YOU SELECTED YES"
})
let No = document.getElementById("NO")
No.addEventListener('click', function() {
    istatus[0].innerHTML = "YOU SELECTED NO" //isatus is [0] so that 1st h4 is used
})

//if the loop h4 exsits more in the code use loop so that it can fix the error by replace all
// let istatus = document.getElementsByTagName("h4");
// let yess = document.getElementById("Yess");
// let No = document.getElementById("NO");

// yess.addEventListener('click', function() {
//     for (let i = 0; i < istatus.length; i++) {
//         istatus[i].innerHTML = "YOU SELECTED YES";
//     }
// });

// No.addEventListener('click', function() {
//     for (let i = 0; i < istatus.length; i++) {
//         istatus[i].innerHTML = "YOU SELECTED NO";
//     }
// });

let main1 = document.getElementsByTagName("body")
let crsr = document.querySelector(".cursor")

main1[0].addEventListener("mousemove",function(dots){
    crsr.style.left = dots.x+"px"  
    crsr.style.top = dots.y+"px" 
})