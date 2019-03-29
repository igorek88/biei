$('.tables__slider').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
});

$('.footer__donwload').on('mouseleave', function () {
    $('.footer__donwload img').attr('src', 'img/footer/ic-download.png');
});

$('.footer__donwload').on('mouseenter', function () {
    $('.footer__buttons .footer__donwload img').attr('src', 'img/footer/ic-downloadw.png');
});




