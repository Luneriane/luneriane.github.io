const popMenu = document.querySelector("li");
var tl = new TimelineMax();

function poppingMenu(){
    tl.to(popMenu, 1, { 
        width: "9.5em",
    })
      .to(popMenu, 2, { 
        height: "2em",
        },"-=0,5")
}

function myScroll(){
    var href = this.attr("href");
    var topY = href.offset().top;

    console.log(href + topY);
    
    TweenMax.to(window, 1, {
        scrollTo:{
            y: topY, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
        });
    
    return false;
};