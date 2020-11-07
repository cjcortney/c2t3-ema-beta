$(document).ready(function(){
    $('#search-input').val("");
    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find(".accordion-btn-span").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }).on('hide.bs.collapse', function(){
        $(this).parent().find(".accordion-btn-span").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });
    if (typeof getUrlVars()["actorid"] != 'undefined'){
        param = getUrlVars()["actorid"] + 'card';
        searchFunction(param)
    }
})


function toggleActiveNavLink(link){
    $('.navbar-nav').find('li.active').removeClass('active');
    $("#" + link).addClass( 'active' );
}

jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};


function searchFunction(searchValue, textSearch) {
    if (textSearch == 1){
        $('.card-container').hide();
        $(".card-container:contains('" + searchValue + "')").show().children().show();
    } else {
        if(typeof $("#"+searchValue).attr("id") != 'undefined'){
            $('.card-container').hide();
            $("#"+searchValue).show().children().show();
        }
    }
}

$(document).on("keypress", "#search-input", function(event){
    console.log('here');
    if(event.keyCode == 13){
        $('#search-button').click();
    }
});

$(function(){
    $("#expand-collapse").click(function(){
        if ($("#expand-collapse").text() == "Expand All"){
            $("#expand-collapse").text("Collapse All");
            expandFunction("expand");
        } else {
            $("#expand-collapse").text("Expand All");
            expandFunction("collapse");
        }
    });
});

function expandFunction(param){
    if (param == "expand"){
        $(".collapse").removeClass("collapse").addClass("collapsed");
        $(".collapsed").parent().find(".accordion-btn-span").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    } else {
        $(".collapsed").removeClass("collapsed").removeClass("show").addClass("collapse");
        $(".collapse").parent().find(".accordion-btn-span").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }
}

$(function(){
    $("#search-button").click(function(){
        searchFunction($("#search-input").val(), 1);
    });
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


