function smoothscroll(target, duration){
    val target = document.querySelector(target);
    val targetposition = target.getBoundingClientRect().top;
    val startpositon = window.pageYOffset;
    var distance = targetposition - startpositon;
    var starttime = null;
    
    function animation(currentTime){
        if(starttime === null) starttime = currentTime;
        var timeElapsed = currentTime - starttime;
        var run = ease (timeElapsed, startpositon,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d/2;
        if (t<1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t -2) - 1) + b; 
    }

    requestAnimationFrame(animation);
}

var top = document.querySelector('.showcase');
var topbtn = document.querySelector('.topbtn');

topbtn.addEventListener('click', function(){
    smoothscroll('top', 3000);
})
