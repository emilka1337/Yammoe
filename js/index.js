document.addEventListener("scroll", () => {             // Shows/hides "Up" button
    let scrollPosition = window.scrollY;

    if (scrollPosition > 87) {
        document.querySelector(".up").style.opacity = 0.29;
    } else {
        document.querySelector(".up").style.opacity = 0;
    }
});

document.querySelector(".up").addEventListener("mouseover", () => {     // Up button opacity
    document.querySelector(".up").style.opacity = 1;
});
document.querySelector(".up").addEventListener("mouseout", () => {
    document.querySelector(".up").style.opacity = 0.29;
});

document.querySelector(".up").addEventListener("click", () => {         // Scrolling to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector(".toggle-navbar").addEventListener("click", () => {
    let header = document.querySelector(".header-bottom");
    
    header.classList.toggle("header-bottom-visible");

    // if (display == "flex") {
    //     header.style.display = "none";
    // } else {
    //     header.style.display = "flex";
    // }

    // classslist
});