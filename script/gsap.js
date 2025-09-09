gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // Sembunyikan preloader
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        preloader.style.display = "none";
        // Tampilkan konten utama
        mainContent.classList.remove("hidden");

        // Animasi masuk main content
        gsap.from("#main-content > *", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
        });

        // Animasi scroll GSAP untuk Vanta
        const vantaCanvas = document.querySelector("#vanta-bg canvas");
        gsap.to(vantaCanvas, {
            y: 200,
            scale: 1.2,
            scrollTrigger: {
                trigger: "#vanta-bg",
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true,
            }
        });


const marquee = document.getElementById("skills-marquee");

// Duplikat konten minimal 3x supaya arah negatif juga halus
marquee.innerHTML += marquee.innerHTML + marquee.innerHTML;

let speed = 100; // pixel per detik
let direction = 1; // 1 = kiri, -1 = kanan
let offset = 0;

// Detect scroll direction
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    direction = delta < 0 ? 1 : -1;
    lastScrollY = currentScrollY;
});

// Animasi terus berjalan menggunakan gsap.ticker
gsap.ticker.add((time, deltaTime) => {
    const movement = direction * speed * (deltaTime / 1000);
    offset += movement;

    // Looping marquee
    const totalWidth = marquee.scrollWidth / 3; // karena konten diduplikasi 3x
    if (offset > totalWidth) offset -= totalWidth;
    if (offset < 0) offset += totalWidth;

    marquee.style.transform = `translateX(${-offset}px)`;
});




        const fadeElements = [
            { selector: "data-fade-up", enter: { y: 50 }, leave: { y: -50 } },
            { selector: "data-fade-down", enter: { y: -50 }, leave: { y: 50 } },
            { selector: "data-fade-left", enter: { x: 50 }, leave: { x: -50 } },
            { selector: "data-fade-right", enter: { x: -50 }, leave: { x: 50 } },
        ];

        fadeElements.forEach(item => {
            document.querySelectorAll(`[${item.selector}]`).forEach(el => {
                // Set state awal tapi jangan render langsung
                gsap.set(el, { ...item.enter, opacity: 0, immediateRender: false });

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }),
                    onLeave: () => gsap.to(el, { ...item.leave, opacity: 0, duration: 1.2, ease: "power3.in" }),
                    onEnterBack: () => gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }),
                    onLeaveBack: () => gsap.to(el, { ...item.enter, opacity: 0, duration: 1.2, ease: "power3.in" }),
                });

                // **Cek apakah elemen sudah terlihat saat load**
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power3.out" });
                }
            });
        });

        // Refresh ScrollTrigger setelah semua konten load
        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
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

        const snowContainer = document.getElementById("snow-container");

        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.textContent = "❄"; // Bisa ganti simbol lain
            snowflake.style.left = Math.random() * window.innerWidth + "px";
            snowflake.style.fontSize = (Math.random() * 10 + 10) + "px"; // ukuran bervariasi
            snowflake.style.opacity = Math.random();

            snowContainer.appendChild(snowflake);

            // Animasi jatuh
            const duration = Math.random() * 5 + 5; // 5-10 detik
            gsap.to(snowflake, {
                y: window.innerHeight + 20,
                x: "+=" + (Math.random() * 100 - 50), // gerakan horizontal kecil
                rotation: Math.random() * 360,
                duration: duration,
                ease: "linear",
                onComplete: () => snowflake.remove()
            });
        }

        // Tambah salju setiap 200ms
        setInterval(createSnowflake, 200);

    }, 500);
});