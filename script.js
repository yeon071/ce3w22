// WHEN LOADING IS FINISHED, TRIGGER "START"
$(window).on("load", start);

function start(){
    $("ul.nav a:first").click();
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    var url = $(this).atter("href");
    $("#content").load(url);
    $("ul.nav.a").removeClass("active");
    $(this).addClass("active");
}

