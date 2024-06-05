`import 'jquery'`;

$(document).ready(function () {
    $("#btn").on("click", function () {
        $(".nav").toggleClass("navShow")
    })

    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > 0) {
            $("header").addClass("headerchange")
        } else {
            $("header").removeClass("headerchange")
        }
    })


    $(".dropdown").each(function () {
        $(this).on("click", function () {
            $(this).find(".dropmenu").toggleClass("show");
        });
    });
})
