document.addEventListener("DOMContentLoaded", function () {
    let offcanvas = document.getElementById("offcanvasTop");
    
    offcanvas.addEventListener("shown.bs.offcanvas", function () {
        document.querySelectorAll(".fade-up").forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    });

    offcanvas.addEventListener("hidden.bs.offcanvas", function () {
        document.querySelectorAll(".fade-up").forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(50px)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
	AOS.init();
});

document.querySelectorAll('a[href$=".html"]').forEach(link => {
	link.addEventListener('click', function(e) {
	  const href = this.getAttribute('href');
  
	  if (!href.startsWith("http")) {
		e.preventDefault();
		const overlay = document.getElementById("slide-overlay");
		overlay.classList.add("show");
  
		setTimeout(() => {
		  window.location.href = href;
		}, 700); 
	  }
	});
  });

  jQuery(document).ready(function($) {
    $('.fade-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
		autoplay: true,
  autoplaySpeed: 2000,
        cssEase: 'linear'
    });
});