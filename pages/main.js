document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// let logo = document.querySelector(".name")
// window.onscroll = function (){
//     if (window.scrollY >= 100 ){
//         logo.classList.add("text-red-500")


//     }else {logo.classList.remove("text-red-500")}



// }

// let element = document.querySelector(".mpara")
// let move = document.querySelector(".para")

// if(element.hasAttribute("w-72") == true){
//     move.classList.remove("hidden")


// }