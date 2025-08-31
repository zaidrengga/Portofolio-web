lucide.createIcons();
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur", "bg-background/70", "shadow-md");
    } else {
        header.classList.remove("backdrop-blur", "bg-background/70", "shadow-md");
    }
});

// Script for dynamic footer content
const copyrightYearEl = document.getElementById('copyright-year');
const localTimeEl = document.getElementById('local-time');

if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
}

function updateTime() {
    if (localTimeEl) {
        const time = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        localTimeEl.textContent = `${time} WIB`;
    }
}

updateTime();
setInterval(updateTime, 60000); // Update every minute