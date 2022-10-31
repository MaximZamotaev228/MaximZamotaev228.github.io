jQuery(function ($) {
    $(document).ready(function () {
        $(".slider").slick({
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2
                    }
                }
            ],
            slidesToScroll: 1,
            slidesToShow: 4
        });
    });
});
