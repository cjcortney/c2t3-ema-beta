$(document).ready(function(){
    var page = $(location).attr("pathname");
    switch(true){
        case page.includes("index"):
        toggleActiveNavLink("home-link");
        break;
        case page.includes("movie-cards"):
        toggleActiveNavLink("movies-link");
        break;
        case page.includes("actor-cards"):
        toggleActiveNavLink("actors-link");
        break;
        default:
        console.log('broken');
    }
});

function toggleActiveNavLink(link){
    $('.navbar-nav').find('li.active').removeClass('active');
    $("#" + link).addClass( 'active' );
}