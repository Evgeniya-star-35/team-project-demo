$(document).ready(function () {
    $("a.header-list__link").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000
        });
    });
});