$(document).ready(function () {
    $(".system-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable: true,
        // arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                },
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
//------------------------------//
$(document).ready(function () {
    $(".bot-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        // arrows: true,
        prevArrow: '<button class="slide-prev prev-arr"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-prev next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                },
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
