$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-pev',
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        initialSlide: 1,
        pauseOnFocus: true,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    });

    $('.slider-pev').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 2000,
        asNavFor: '.slider'
    });
    $(".slider-pev").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
    });
});
