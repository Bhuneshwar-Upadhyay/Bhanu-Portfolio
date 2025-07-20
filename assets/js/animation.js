let tl = gsap.timeline();
tl.from(".navbar a", {
    y: 10,
    duration: .5,
    delay: .2,
    opacity: 0,
    stagger: .2,
})

tl.from(".hero-section h1", {
    y:50,
    duration: .5,
    opacity: 0,
}, ".5")
tl.from(".hero-section p", {
    y:50,
    duration: .5,
    opacity: 0,
}, ".8")
tl.from(".hero-section a", {
    y:50,
    duration: .5,
    opacity: 0,
    stagger: .1
}, "1")
tl.from(".profile-image", {
    x:50,
    duration: .5,
    opacity: 0,
    stagger: .1
}, ".5")


gsap.from('.animRound', {
    x: "-80%",
    y: "-100%",
    scale: .3,
    duration: 1,
})

let currentScroll = 0;
let isScrollingDown = true;
let arrow = document.querySelectorAll('.marquee_inner i');

let tween = gsap.to(".marquee_item", {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear",
}).totalProgress(0.8);

// gsap.set(".marquee_inner", {xPercent: -20})

window.addEventListener('scroll', () => {
    if(window.pageYOffset > currentScroll){
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
    });

    arrow.forEach((arrow) => {
        if(isScrollingDown){
            arrow.classList.add("active");
        } else{
            arrow.classList.remove("active")
        }
    });
    currentScroll = window.pageYOffset;
})

// Gsap Animated Line

let path = "M 10 100 Q 500 100 990 100";
      let oldPath = "M 10 100 Q 500 100 990 100";

      let bottom_line = document.querySelector('.bottom_line');
      let line = document.querySelector('.bottom_line path');
      
      bottom_line.addEventListener('mousemove', (e) => {
        
        let x = e.x - bottom_line.getBoundingClientRect().x;
        let y = e.y - bottom_line.getBoundingClientRect().y ;
        
        x = Math.floor(x);
        y = Math.floor(y);
        path = `M 10 100 Q ${x} ${y} 990 100`;
        line.setAttribute("d", path);
        
        gsap.to('.bottom_line path', {
          attr: {d : path}
        })        
      });
      bottom_line.addEventListener('mouseleave', () => {
        gsap.to('.bottom_line path', {
          attr: {d : oldPath},
          duration:1.5,
          ease: "elastic.out(1,0.2)",  
        })
        
      });