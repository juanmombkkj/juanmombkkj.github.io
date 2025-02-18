(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	// Defina a data de inauguração (horário de Brasília - UTC-3)
const inaugurationDate = new Date("2025-03-01T20:00:00-03:00").getTime();

// Função para atualizar o countdown
function updateCountdown() {
  const now = new Date().getTime(); // Obtém o tempo atual em milissegundos
  const timeLeft = inaugurationDate - now; // Calcula o tempo restante

  if (timeLeft > 0) {
    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualiza os valores no HTML
    document.querySelector(".days .value").textContent = days.toString().padStart(2, '0');
    document.querySelector(".hours .value").textContent = hours.toString().padStart(2, '0');
    document.querySelector(".minutes .value").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".seconds .value").textContent = seconds.toString().padStart(2, '0');
  } else {
    // Caso o tempo tenha se esgotado
    document.querySelector(".counter").innerHTML = "<h4>A inauguração começou!</h4>";
  }
}

// Atualiza o countdown a cada segundo
setInterval(updateCountdown, 1000);

// Chamada inicial para evitar atraso
updateCountdown();


})(jQuery);