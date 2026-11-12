// Selada Hidroponik Premium 
const WHATSAPP_NUMBER = "6285725763865";

document.getElementById("year").textContent = new Date().getFullYear();

// Navigasi mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Animasi elemen saat masuk ke viewport
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Notifikasi kecil
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// Tombol pesan produk mengarahkan ke WhatsApp dengan nama produk
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}
document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    openWhatsApp(`Halo DaunSegar, saya tertarik memesan ${product}. Mohon info ketersediaan dan harga terbaru.`);
  });
});

// Tautan kontak WhatsApp utama
document.getElementById("whatsappLink").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo DaunSegar, saya ingin bertanya tentang selada hidroponik.")}`;

// Dashboard simulasi: nilai berubah saat tombol ditekan.
// Ini bukan pembacaan sensor sungguhan.
document.getElementById("refreshData").addEventListener("click", () => {
  const random = (min, max, decimals = 1) => (Math.random() * (max - min) + min).toFixed(decimals);
  document.getElementById("phValue").textContent = random(5.6, 6.4);
  document.getElementById("ecValue").textContent = random(1.0, 1.7);
  document.getElementById("tempValue").textContent = random(21.5, 25.5);
  document.getElementById("humidityValue").textContent = Math.round(random(65, 82));
  showToast("Data simulasi berhasil diperbarui.");
});
