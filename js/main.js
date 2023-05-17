$(function() {

    $(".menu a, .go-top, .logo").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider-blog__inner').slick({
        dots: true,
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.header__inner-top').toggleClass('header__top-inner--active');
    });

    var mixer = mixitup('.galery__content');
});