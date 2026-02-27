/* ========================================
   CHAMÓN COMIDA ÁRABE - LANDING PAGE
   JavaScript - Animations & Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Preloader
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');
            //initGSAPAnimations();
        }, 2000);
    });
    
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');
            initGSAPAnimations();
        }
    }, 4000);
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 100
        });
    }
    
    
    // Menu Category Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            
            menuCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    
    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.removeAttribute('data-aos');
            el.removeAttribute('data-aos-delay');
        });
    }
    
    // Console branding
    console.log('%c🥙 Chamón Comida Árabe', 'font-size: 24px; font-weight: bold; color: #d4a853; background: #1e3a52; padding: 10px 20px; border-radius: 8px;');
});

// Animation keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(styleSheet);



const btnMenu = document.getElementById("icon-menu");
const menu = document.getElementById("show-menu");
const container = document.getElementById("move-content");

btnMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que el click cierre el menú inmediatamente
  container.classList.toggle("move-container-all");
  menu.classList.toggle("show-lateral");
});

// Cerrar menú al hacer click fuera
document.addEventListener("click", (e) => {
  const clickDentroMenu = menu.contains(e.target);
  const clickEnBoton = btnMenu.contains(e.target);

  if (!clickDentroMenu && !clickEnBoton) {
    menu.classList.remove("show-lateral");
    container.classList.remove("move-container-all");
  }
});

// Cerrar menú cuando se hace click en un link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-lateral");
    container.classList.remove("move-container-all");
  });
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("show-lateral");
    container.classList.remove("move-container-all");
  }
});


const buttonUp = document.getElementById("button-up");

// Mostrar / ocultar botón
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else {
    buttonUp.style.transform = "scale(0)";
  }
});

// Scroll suave al top
buttonUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

