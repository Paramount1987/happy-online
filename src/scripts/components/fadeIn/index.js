window.fadeInContent = function () {
    $('.js-fade-in').each(function () {
        var $jsFadeIn = $(this);

        function fadeIn() {
            if (!$jsFadeIn.hasClass('is-ready') && $(window).scrollTop() + window.innerHeight > $jsFadeIn.offset().top + 100) {
                $jsFadeIn.addClass('is-ready');
                setTimeout(function() {
                    $jsFadeIn.removeClass('js-fade-in');
                }, 1000);
            }
        }

        fadeIn();

        $(window).scroll(function () {
            fadeIn();
        });
    });
};

$(window).ready(function () {
    setTimeout(function () {
        fadeInContent();
    }, 500);
});
