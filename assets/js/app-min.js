$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>=50?$("#nav").addClass("scrolled"):$("#nav").removeClass("scrolled")}),$(".navbar-toggler").click(function(){$(this).hasClass("open")?$(this).removeClass("open"):$(this).addClass("open"),$(".navbar-collapse").toggleClass("show")})});