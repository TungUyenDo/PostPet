$(function() {
    "use-strict";
    $(".side-nav-right").sideNav({
        edge: "left",
        closeOnClick: !1
    }), $(".slider").slider({
        full_width: !0
    }), $("#owl-testimonial").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: !0
    }), $(".work-owl").owlCarousel({
        autoPlay: 3e3
    }), $(".image-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade"
    }), $(".recent-owl").owlCarousel({
        autoPlay: !1,
        singleItem: !0
    })
});