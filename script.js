// PILGANNNNN

// DECLARE DECLARE DECLARE DECLARE //
// DEFAULT PAGE
localStorage.setItem("page", 0);
let page = localStorage.getItem("page") ? parseInt(localStorage.getItem("page")) : 0;
// SCORE STORAGE
localStorage.setItem("score0", "");
localStorage.setItem("score1", "");
localStorage.setItem("score2", "");
localStorage.setItem("score3", "");
localStorage.setItem("score4", "");
let score0 = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
// TRUE ANSWER
let true0 = document.getElementById("choice2-0");//B
let true1 = document.getElementById("choice4-1");//D
let true2 = document.getElementById("choice1-2");//A
let true3 = document.getElementById("choice3-3");//C
let true4 = document.getElementById("choice4-4");//D
// FINAL AVERAGE
let average;

// MODIF DISPLAY MODIF DISPLAY MODIF DISPLAY MODIF DISPLAY //

// PAGE SCORE
function refresh() {
    document.getElementById("score0").textContent = localStorage.getItem("score0");
    document.getElementById("score1").textContent = localStorage.getItem("score1");
    document.getElementById("score2").textContent = localStorage.getItem("score2");
    document.getElementById("score3").textContent = localStorage.getItem("score3");
    document.getElementById("score4").textContent = localStorage.getItem("score4");
    score0 = localStorage.getItem("score0") ? parseInt(localStorage.getItem("score0")) : 0;
    score1 = localStorage.getItem("score1") ? parseInt(localStorage.getItem("score1")) : 0;
    score2 = localStorage.getItem("score2") ? parseInt(localStorage.getItem("score2")) : 0;
    score3 = localStorage.getItem("score3") ? parseInt(localStorage.getItem("score3")) : 0;
    score4 = localStorage.getItem("score4") ? parseInt(localStorage.getItem("score4")) : 0;
    if (
        localStorage.getItem("score0") != ""
        && localStorage.getItem("score1") != ""
        && localStorage.getItem("score2") != ""
        && localStorage.getItem("score3") != ""
        && localStorage.getItem("score4") != ""
    ) {
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "block";
        });
    }else{
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "none";
        });
    }

    average = (score0 + score1 + score2 + score3 + score4) / 5;
    document.getElementById("average-value").textContent = average

    if (page == 0) {
        document.getElementById("card0").style.display = "block";
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("average").style.display = "none";
    } else if (page == 1) {
        document.getElementById("card1").style.display = "block";
        document.getElementById("card0").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("average").style.display = "none";
    } else if (page == 2) {
        document.getElementById("card2").style.display = "block";
        document.getElementById("card1").style.display = "none";
        document.getElementById("card0").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("average").style.display = "none";
    } else if (page == 3) {
        document.getElementById("card3").style.display = "block";
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card0").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("average").style.display = "none";
    } else if (page == 4) {
        document.getElementById("card4").style.display = "block";
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card0").style.display = "none";
        document.getElementById("average").style.display = "none";
    } else if (page == 5) {
        document.getElementById("card4").style.display = "none";
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card0").style.display = "none";
        document.getElementById("average").style.display = "flex";
        document.getElementsByClassName("next")[0].style.display = "none";
        document.getElementsByClassName("back")[0].style.display = "none";
    }
}

// FUNCTION FUNCTION FUNCTION FUNCTION //

// SWITCH PAGE
function plusPage() {
    if (page < 4) {
        page += 1;
        localStorage.setItem("page", page);
    } else {
        page = 0;
        localStorage.setItem("page", page);
    }
    refresh()
}
function minPage() {
    if (page > 0) {
        page -= 1;
        localStorage.setItem("page", page);
    } else {
        page = 4;
        localStorage.setItem("page", page);
    }

    refresh()
}
// CHOICE SCORE
function check(a) {
    if (a == 0) {
        if (true0.checked) {
            localStorage.setItem("score0", "100");
        } else {
            localStorage.setItem("score0", "0");
        }
    } else if (a == 1) {
        if (true1.checked) {
            localStorage.setItem("score1", "100");
        } else {
            localStorage.setItem("score1", "0");
        }
    } else if (a == 2) {
        if (true2.checked) {
            localStorage.setItem("score2", "100");
        } else {
            localStorage.setItem("score2", "0");
        }
    } else if (a == 3) {
        if (true3.checked) {
            localStorage.setItem("score3", "100");
        } else {
            localStorage.setItem("score3", "0");
        }
    } else if (a == 4) {
        if (true4.checked) {
            localStorage.setItem("score4", "100");
        } else {
            localStorage.setItem("score4", "0");
        }
    }
    refresh()
}

// END BUTTON
function isAll() {
    if (
        localStorage.getItem("score0") != ""
        && localStorage.getItem("score1") != ""
        && localStorage.getItem("score2") != ""
        && localStorage.getItem("score3") != ""
        && localStorage.getItem("score4") != ""
    ) {
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "block";
        });
    }else{
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "none";
        });
    }
}
// END
function end() {
    page = 5
    localStorage.setItem("page", page)
    refresh()
}

// DO FUNCTION DO FUNCTION DO FUNCTION DO FUNCTION //

refresh()
