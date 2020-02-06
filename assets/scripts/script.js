//https://stackoverflow.com/questions/44055692/headroom-js-header-with-initial-static-state
var myElement = document.querySelector("header");

var headroom = new Headroom(myElement, {
    // vertical offset in px before element is first unpinned
    "offset": 220,
    // or you can specify tolerance individually for up/down scroll
    "tolerance": {
        up: 0,
        down: 0
    },
    // css classes to apply
    "classes": {
        // when element is initialised
        "initial": "header--fixed",
        // when scrolling up
        "pinned": "slideDown",
        // when scrolling down
        "unpinned": "slideUp",
        // when above offset
        "top": "top",
        // when below offset
        "notTop": "not-top",
    }
});

headroom.init();

// When the page is at the top, remove the slideDown class.
window.addEventListener('scroll', function () {
    if (window.pageYOffset === 0) {
        myElement.classList.remove('slideDown');
    }
});

$(document).ready(function () {

    $('#navbarSupportedContent').on('show.bs.dropdown', function () {
        $('.dropdown-bar').toggle();
        $('.navbar').toggleClass('pb-0');
    });
    $('#navbarSupportedContent').on('hide.bs.dropdown', function () {
        $('.dropdown-bar').toggle();
        $('.navbar').toggleClass('pb-0');
    });

    $('.multi-item-carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) next = $(this).siblings(':first');
        next.children(':first-child').clone().appendTo($(this));
    });
    $('.multi-item-carousel .carousel-item').each(function () {
        var prev = $(this).prev();
        if (!prev.length) prev = $(this).siblings(':last');
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
    });

    // if (screen.width < 992)
    //     $(".carouselNews").addClass("carousel-fade");

    // $('#carouselNews').carousel({
    //     interval: 1000000
    // });

    // $('#carouselExampleCaptions').carousel({
    //     interval: 1000000
    // });

    ResizeSelect();
});


// $(".jumbotron").css({ height: $(window).height() + "px" });

// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });


$(window).on("resize", function () {
    ResizeSelect();
});

function ResizeSelect() {
    $(".strapline select").css({
        width: $(".strapline h1").width() + "px"
    });

    // if (screen.width >= 992) {
    //     $(".homes").css ({
    //         height: $(".homes .inside .outer").height() + "px"
    //     });
    // }

    // $(".commitment").css ({
    //     height: $(".commitment .row").height() + "px"
    // });



}