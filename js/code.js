$(document).ready(function() {

	// Mostrar-ocultar nav en resolución móvil + Mostrar-ocultar modo claro/oscuro
	$("#menu-movil").click(function() {
		if ($("#navbar").hasClass('activado')) {
			$("#navbar").slideUp("fast");
			$("#navbar").removeClass('activado');
			$("#icono").removeClass("fa fa-close");
			$("#icono").addClass("fa fa-bars");
			$(".modo").slideDown("fast");
		}
		else {
			$("#navbar").slideDown("fast");
			$("#navbar").addClass('activado');
			$("#icono").removeClass("fa fa-bars");
			$("#icono").addClass("fa fa-close");
			$(".modo").slideUp("fast");
		}
	});

	// Cambio modo claro/oscuro
	$(".modo").click(function() {
		if ($('body').hasClass('oscuro')) {
			$('body').removeClass('oscuro');
			$(".link-default").removeClass('oscuro-link');
			$("#icono").removeClass('oscuro-link');
			$(".modo").removeClass('oscuro-button');
			$('button').removeClass('oscuro');
			$("#modo").removeClass('oscuro');
			$("#modo").removeClass("fa fa-moon-o");
			$("#modo").addClass("fa fa-sun-o");
			$("#logo").removeClass('oscuro-link');
			$("#logo-2").removeClass('oscuro-link');
			$("#logo-3").removeClass('oscuro-link');
			$("#logo-4").removeClass('oscuro-link');
			$("#logo-5").removeClass('oscuro-link');
			$("#logo-6").removeClass('oscuro-link');
			$("#logo-7").removeClass('oscuro-link');
			$("#logo-8").removeClass('oscuro-link');
		}
		else {
			$('body').addClass('oscuro');
			$('#icono').addClass('oscuro-link');
			$(".link-default").addClass('oscuro-link');
			$('button').addClass('oscuro');
			$(".modo").addClass('oscuro-button');
			$("#modo").addClass('oscuro');	
			$("#modo").removeClass("fa fa-sun-o");
			$("#modo").addClass("fa fa-moon-o");
			$("#logo").addClass('oscuro-link');
			$("#logo-2").addClass('oscuro-link');
			$("#logo-3").addClass('oscuro-link');
			$("#logo-4").addClass('oscuro-link');
			$("#logo-5").addClass('oscuro-link');
			$("#logo-6").addClass('oscuro-link');
			$("#logo-7").addClass('oscuro-link');
			$("#logo-8").addClass('oscuro-link');
		}

		var windowsize = $(window).width();
	    if (windowsize > 799) {
	    	$("#modo").addClass('negro');
	    	$(".presentacion").toggleClass('outline');
	    	$(".link-default").removeClass('oscuro-link');
	    }
		
	});

	// Ocultar nav una vez pulsado un enlace de la pág
	$(".link-nav").click(function() {
		if ($("#navbar").hasClass('activado')) {
			$("#navbar").slideUp("fast");
			$("#navbar").removeClass('activado');
			$("#icono").removeClass("fa fa-close");
			$("#icono").addClass("fa fa-bars");
			$(".modo").slideDown("fast");
		}
	});

	// Código de cambio de background con scroll para Nav (Versión escritorio)
	// Crédito a @OzzyCzech(stackoverflow.com)
	$(function () {
  	$(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  	});
	});

	var windowsize = $(window).width();
	if (windowsize > 799) {
	// Animar gif al hacer hover en resolución desktop
	$("#proyecto-1").hover(
        function()
        {
            $("#imgAnimate").attr("src", "https://dl.dropboxusercontent.com/s/m4tf9ocbrdmkfnr/Proyecto-1.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate").attr("src", "https://dl.dropboxusercontent.com/s/3ke86imkhivihec/Proyecto-1.jpg?dl=0");
        });
	$("#proyecto-2").hover(
        function()
        {
            $("#imgAnimate-2").attr("src", "https://dl.dropboxusercontent.com/s/eo3mdagi5luqsr1/Proyecto-2.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-2").attr("src", "https://dl.dropboxusercontent.com/s/2yqsfgwlrqmnjk1/Proyecto-2.jpg?dl=0");
        });
	$("#proyecto-3").hover(
        function()
        {
            $("#imgAnimate-3").attr("src", "https://dl.dropboxusercontent.com/s/knkj6vm2rvf65fh/Proyecto-3.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-3").attr("src", "https://dl.dropboxusercontent.com/s/rnryv6hc274rh8e/Proyecto-3.jpg?dl=0");
        });
	$("#proyecto-4").hover(
        function()
        {
            $("#imgAnimate-4").attr("src", "https://dl.dropboxusercontent.com/s/7g4zmz7yxjoml2s/Proyecto-4.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-4").attr("src", "https://dl.dropboxusercontent.com/s/005rjnyxqlhv5fd/Proyecto-4.jpg?dl=0");
        });
	$("#proyecto-5").hover(
        function()
        {
            $("#imgAnimate-5").attr("src", "https://dl.dropboxusercontent.com/s/gbh0qgelzwxghon/Proyecto-5.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-5").attr("src", "https://dl.dropboxusercontent.com/s/pptw6gl71wnbzsv/Proyecto-5.jpg?dl=0");
        });
	$("#proyecto-6").hover(
        function()
        {
            $("#imgAnimate-6").attr("src", "https://dl.dropboxusercontent.com/s/kof65jip88bmhd0/Proyecto-6.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-6").attr("src", "https://dl.dropboxusercontent.com/s/qsxqeji6oy4u2qd/Proyecto-6.jpg?dl=0");
        });
	$("#proyecto-7").hover(
        function()
        {
            $("#imgAnimate-7").attr("src", "https://dl.dropboxusercontent.com/s/s0p6ro3k3dprn5g/Proyecto-7.gif?dl=0");
        },
        function()
        {
            $("#imgAnimate-7").attr("src", "https://dl.dropboxusercontent.com/s/04ble55dy0ubfp6/Proyecto-7.jpg?dl=0");
        });
	}

});