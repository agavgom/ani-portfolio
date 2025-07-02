// ==========================
// Scroll suave (fallback)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ==========================
// Activar clase 'active' en el menú según scroll
// ==========================
const secciones = document.querySelectorAll("section");
const enlacesNav = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;

  secciones.forEach(seccion => {
    if (
      scrollPos >= seccion.offsetTop &&
      scrollPos < seccion.offsetTop + seccion.offsetHeight
    ) {
      enlacesNav.forEach(enlace => {
        enlace.classList.remove("active");
        if (enlace.getAttribute("href") === `#${seccion.id}`) {
          enlace.classList.add("active");
        }
      });
    }
  });
});
