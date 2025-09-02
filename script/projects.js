const projects = [
    {
        title: "My Portofolio",
        model: "Portofolio",
        detail:
            "This project is my personal portfolio, serving as a digital representation of my skills and work. I took on a full role as a Front-End Developer & UI/UX Designer, from design conception to technical implementation. The main challenge was balancing interactive and engaging animations with fast website performance. I addressed this by using GSAP for optimized animations and implementing lazy loading techniques to ensure minimal page load times.",
        img: "./image/product/web-portofolio.png",
        tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    },
    {
        title: "Web Aplikasi",
        model: "Sistem Manajemen Sekolah",
        year: "2025",
        detail:
            "A full-stack web application that provides a professional public website and internal dashboards for admins, teachers, and students. My role as a Full-Stack Developer was to design and build the entire platform, from the database to the user interface. The main challenges were managing complex access rights and creating a digital attendance feature, which I solved using Role-Based Access Control (RBAC) and WebSocket for real-time updates.",
        img: "./image/product/web-sekolah.png",
        tags: ["Next.js", "Tailwind", "Supabase"],
    },
    {
        title: "Coffee Shop",
        model: "Landing Page",
        year: "2025",
        detail:
            "A front-end website designed to be a warm and engaging digital storefront for a coffee shop. As a Front-End Developer & UI/UX Designer, I was responsible for the visual design and responsive development of the website. The main challenge was optimizing high-quality images to minimize website slowdowns, which was addressed using lazy loading techniques and the WebP image format.",
        img: "./image/product/web-coffeeshop.png",
        tags: ["Next.js", "Tailwind"],
    },
    {
        title: "Lumino",
        model: "Digital Asset Marketplace",
        year: "2025",
        detail:
            "A full-stack e-commerce platform for buying and selling digital assets such as web templates and AI agents. My role as a Full-Stack Developer involved building all features, including the product catalog, payments, and file delivery system. The critical challenge was secure asset delivery, which I solved by generating unique, time-limited signed URLs for each purchase through the Stripe API.",
        img: "./image/product/web-lumino.png",
        tags: ["Vite", "Framer Motion", "Tailwind"],
    }
];

const projectList = document.getElementById("project-list");
const hoverCard = document.getElementById("hover-card");
const modal = document.getElementById("detail-modal");
const modalTitle = document.getElementById("modal-title");
const modalModel = document.getElementById("modal-model");
const modalDetail = document.getElementById("modal-detail");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// render project list
projects.forEach((p, index) => {
    const li = document.createElement("li");

    // Tambahkan fade animasi
    if (index % 2 === 0) {
        li.setAttribute("data-fade-left", "");
    } else {
        li.setAttribute("data-fade-right", "");
    }

    li.className =
        "portfolio-item backdrop-blur-2xl bg-background/20 flex justify-between px-4 py-2 border border-gray-500 rounded-xl cursor-pointer hover:bg-background transition-colors duration-200";

    // data attributes
    li.dataset.title = p.title;
    li.dataset.model = p.model;
    li.dataset.detail = p.detail;
    li.dataset.img = p.img;

    li.innerHTML = `
    <div>
      <h2 class="sm:text-xl text-lg font-bold">${p.title}</h2>
      <h3 class="text-lg font-semibold text-gray-400">${p.model}</h3>
      <div class="flex gap-2 mt-1.5 flex-wrap">
        ${p.tags.map(tag => `<span class="bg-gray-200/20 rounded-2xl px-2 text-xs">${tag}</span>`).join("")}
      </div>
    </div>
    <button class="read-more text-blue-500 hover:underline">Read More</button>
  `;

    projectList.appendChild(li);

    // hover card
    li.addEventListener("mouseenter", () => {
        if (!modal.classList.contains("flex")) { // hanya tampilkan jika modal tidak terbuka
            hoverCard.innerHTML = `
              <img src="${p.img}" class="w-full h-32 object-cover rounded-lg mb-2" />
              <p class="text-md font-bold">${p.title}</p>
              <p class="text-sm text-gray-400">${p.model}</p>
            `;
            hoverCard.style.opacity = "1";
        }
    });

    li.addEventListener("mousemove", (e) => {
        if (!modal.classList.contains("flex")) { // hanya gerakkan jika modal tidak terbuka
            hoverCard.style.left = e.pageX + 20 + "px";
            hoverCard.style.top = e.pageY + 20 + "px";
        }
    });

    li.addEventListener("mouseleave", () => {
        hoverCard.style.opacity = "0";
    });

    // modal open
    li.querySelector(".read-more").addEventListener("click", (e) => {
        e.stopPropagation();
        modalTitle.textContent = p.title;
        modalModel.textContent = p.model;
        modalDetail.textContent = p.detail;
        modalImg.src = p.img;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden";

        // sembunyikan hoverCard saat modal terbuka
        hoverCard.classList.add("hidden");
    });
});

// modal close
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "";
    }
});
