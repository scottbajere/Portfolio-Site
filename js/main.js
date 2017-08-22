$(document).ready(function(){
    $(".portfolioboxtext").click(function(){
        $(this).toggleClass('flipped');
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
