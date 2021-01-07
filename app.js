'use strict'
console.log("Here's a hidden message");

// Change top navbar on scroll in index.html
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 0) {
        $('#topbar-home').addClass('not-top-page');
        $('.navbar-menu-home').addClass('not-top-page');
        $('#logo-home').attr('src', "fotos/logo.png")
    } else {
        $('#topbar-home').removeClass('not-top-page');
        $('.navbar-menu-home').removeClass('not-top-page');
        $('#logo-home').attr('src', "fotos/logo_blanc.png")
    }
});