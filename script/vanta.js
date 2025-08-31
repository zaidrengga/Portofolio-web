// Background NET di Home
var setVanta = () => {
  if (window.VANTA) window.VANTA.NET({
    el: ".s-page-1 #vanta-bg #vanta",
    mouseControls: true,       // bereaksi ke mouse
    touchControls: true,       // bereaksi ke touch
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x0,
    scale: 1.0,
    scaleMobile: 1.0,
    points: 10,                // jumlah titik
    maxDistance: 20,           // jarak maksimum titik
    spacing: 14,
    amplitude: 0.1             // kecil agar ada gerakan halus saat idle
  });
}

// Background HALO di About
var setVanta2 = () => {
  if (window.VANTA) window.VANTA.HALO({
    el: ".s-page-2 #aurora #s-aurora",
    mouseControls: true,       // bereaksi ke mouse
    touchControls: true,       // bereaksi ke touch
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x0,
    amplitude: 0.1             // gerakan halus saat idle
  });
}

setVanta2();
setVanta();