function page1Animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        dalay: 1,
        duration: 0.5,
        stagger: 0.2
    });

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.4
    }, "-=1");

    tl.from(".section1-bottom img", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
    });
};
page1Animation();

function page2Animation (){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            scrub:2,
            end:"top 0"
        }
    });
    
    tl2.from(".services",{
        y:-30,
        opacity:0
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:2,
    },"sathchalega1")
    
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:2,
    },"sathchalega1")
    
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:2,
    },"sathchalega2")
    
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:2,
    },"sathchalega2")
};

page2Animation();