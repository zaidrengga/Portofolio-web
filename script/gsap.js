gsap.registerPlugin(ScrollTrigger);

gsap.to("#vanta-bg #vanta", {
    y: -100,
    scrollTrigger: {
        trigger: "#vanta-bg",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
    }
});

const fadeElements = [
    { selector: "data-fade-up", enter: { y: 50 }, leave: { y: -50 } },
    { selector: "data-fade-down", enter: { y: -50 }, leave: { y: 50 } },
    { selector: "data-fade-left", enter: { x: 50 }, leave: { x: -50 } },
    { selector: "data-fade-right", enter: { x: -50 }, leave: { x: 50 } },
];

fadeElements.forEach(item => {
    document.querySelectorAll(`[${item.selector}]`).forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
                gsap.fromTo(
                    el,
                    { ...item.enter, opacity: 0 },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        delay: 0.05,
                        overwrite: "auto"
                    }
                );
            },
            onLeave: () => {
                gsap.to(el, {
                    ...item.leave,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.in",
                    overwrite: "auto"
                });
            },
            onEnterBack: () => {
                gsap.fromTo(
                    el,
                    { ...item.leave, opacity: 0 },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        delay: 0.05,
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: () => {
                gsap.to(el, {
                    ...item.enter,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.in",
                    overwrite: "auto"
                });
            }
        });
    });
});



const roles = ["Web Developer", "UI/UX Designer", "Frontend Engineer"];
const el = document.querySelector(".role-text");

function typeRole(role) {
    let tl = gsap.timeline();
    role.split("").forEach((char, i) => {
        tl.to({}, {
            duration: 0.05,
            onComplete: () => el.textContent += char
        });
    });
    // Tahan sebentar
    tl.to({}, { duration: 2 });
    // Hapus huruf satu per satu
    role.split("").forEach((_, i) => {
        tl.to({}, {
            duration: 0.05,
            onComplete: () => el.textContent = role.substring(0, role.length - i - 1)
        });
    });
    return tl;
}
// Master timeline, loop selamanya
let master = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
roles.forEach(role => {
    master.add(typeRole(role));
});


const blobs = document.querySelectorAll(".aurora-blob");

blobs.forEach((blob, i) => {
    // bikin animasi random, loop tanpa henti
    gsap.to(blob, {
        x: () => gsap.utils.random(-150, 150),
        y: () => gsap.utils.random(-150, 150),
        scale: () => gsap.utils.random(0.9, 1.2),
        rotation: () => gsap.utils.random(-15, 15),
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
    });
});



gsap.from("#skills-list .skill-item", {
    scrollTrigger: {
        trigger: "#skills-list",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
});