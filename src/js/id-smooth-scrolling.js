$(document).ready(function () {
    $("a.header-list__link,a.btn--register,a.page-menu").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500
        });
    });
});