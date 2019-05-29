const popMenu = document.querySelector("#popMenu ul"),
    popList = document.querySelectorAll("#popMenu ul li"),
    popLink = document.querySelectorAll("#popMenu ul li a");
var tl = new TimelineMax;

function myPopMenu(){
    tl.to(popMenu, 1, {
        marginLeft: "110%",
        width: "9em",
    })
    .from(popList, 0.5, {
        lineHeight: "0em",
        padding: "0em",
        lineHeight: "0em",
    }, "-=0.75")
    .to(popLink, 0.5, {
        opacity: 1,
        padding: "0.1em 0.75em",
    }, "-=0.5")
}