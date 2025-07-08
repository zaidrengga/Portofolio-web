const texts = [" Web Developer ", " UI/UX Enthusiast "];
let count = 0;
let index = 0;
let isDeleting = false;
let speed = 100;

function typeWriter() {
  const current = texts[count % texts.length];
  const displayText = isDeleting
    ? current.substring(0, index--)
    : current.substring(0, index++);

  document.getElementById("typing").textContent = displayText;

  // Adjust speed for deleting
  let typeSpeed = isDeleting ? speed / 2 : speed;

  if (!isDeleting && index === current.length) {
    // Pause at end
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    // Next text
    isDeleting = false;
    count++;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
}

typeWriter();