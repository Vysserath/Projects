$(document).ready(() => {
    $('.hamburger').on('click', function () {
        if ($('.hamburger').hasClass('is-active')) {
            $('.hamburger').removeClass('is-active');
        } else {
            $('.hamburger').addClass('is-active');
        }
        if ($('.nav').hasClass('is-active')) {
            $('.nav').removeClass('is-active');
        } else {
            $('.nav').addClass('is-active');
        }
    });
});