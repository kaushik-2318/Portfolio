var loader = document.getElementById("preloader");
var preloaderremove = document.getElementsByClassName("preloaderremove");
var preloaderhide = document.getElementsByClassName(".preloaderhide");

setTimeout(function () {
    loader.classList.add("preloaderremove");
}, 1000);
setTimeout(function () {
    loader.classList.add("preloaderhide");
}, 1005);

var typed = new Typed("#element", {
    strings: ["Web Developer", "Full Stack Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: Infinity,
});

$(window).on("mousemove", function (e) {
    $("#cursor").css("top", `${e.pageY}px`);
    $("#cursor").css("left", `${e.pageX}px`);
});
$("a").on("mouseleave", function () {
    $("#cursor").removeClass("cursor-big");
});
$("a").on("mouseenter", function () {
    $("#cursor").addClass("cursor-big");
});

$(".contactform").on("mouseleave", function () {
    $("#cursor").removeClass("black");
});
$(".contactform").on("mouseenter", function () {
    $("#cursor").addClass("black");
});
$(window).scroll(function (event) {
    var sc = $(window).scrollTop();
    console.log(sc)
    if (sc > 40) {
        $("nav").addClass("hide");
        $(".bottomnavbar").removeClass("hide");
    } else {
        $("nav").removeClass("hide");
        $(".bottomnavbar").addClass("hide");
    }
    if(sc<3981){
        $("#icon-scroll").css("margin-top", `77vh`);
    }
    else{
        $("#icon-scroll").css("margin-top", `71vh`);
    }
});
let html = 0,
    css = 0,
    js = 0,
    jq = 0,
    react = 0,
    c = 0,
    ccc = 0,
    git = 0;
let numberhtml = document.getElementById("html");
setInterval(() => {
    if (html == 90) {
        clearInterval();
    } else {
        html += 1;
        numberhtml.innerHTML = html + "%";
    }
}, 30);

let numbercss = document.getElementById("css");
setInterval(() => {
    if (css == 80) {
        clearInterval();
    } else {
        css += 1;
        numbercss.innerHTML = css + "%";
    }
}, 30);

let numberjs = document.getElementById("javascript");
setInterval(() => {
    if (js == 40) {
        clearInterval();
    } else {
        js += 1;
        numberjs.innerHTML = js + "%";
    }
}, 30);

let numberjq = document.getElementById("jQurey");
setInterval(() => {
    if (jq == 50) {
        clearInterval();
    } else {
        jq += 1;
        numberjq.innerHTML = jq + "%";
    }
}, 30);

let numberreact = document.getElementById("react");
setInterval(() => {
    if (react == 40) {
        clearInterval();
    } else {
        react += 1;
        numberreact.innerHTML = react + "%";
    }
}, 30);

let number = document.getElementById("c");
setInterval(() => {
    if (c == 70) {
        clearInterval();
    } else {
        c += 1;
        number.innerHTML = c + "%";
    }
}, 30);

let numberccc = document.getElementById("ccc");
setInterval(() => {
    if (ccc == 70) {
        clearInterval();
    } else {
        ccc += 1;
        numberccc.innerHTML = ccc + "%";
    }
}, 30);

let numbergit = document.getElementById("git");
setInterval(() => {
    if (git == 70) {
        clearInterval();
    } else {
        git += 1;
        numbergit.innerHTML = git + "%";
    }
}, 30);
