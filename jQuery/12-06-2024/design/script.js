`import 'jquery'`;

$(function () {
    $("#loader").load("loader.html", function () {
        $("#loader").slideUp(3000, function () {
            $("#mainContent").slideDown()
        })
    })

    $("#menu_header").load("header.html")
    $("#page_footer").load("footer.html")
})