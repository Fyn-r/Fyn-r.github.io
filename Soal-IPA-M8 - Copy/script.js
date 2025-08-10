// PILGANNNNN

// DECLARE DECLARE DECLARE DECLARE //
// DEFAULT PAGE
localStorage.setItem("page", 0);
let page = localStorage.getItem("page") ? parseInt(localStorage.getItem("page")) : 0;
// CARD TEXT
let T;
let Q;
let A;
let B;
let C;
let D;
// SCORE STORAGE
localStorage.setItem("score0", "");
localStorage.setItem("score1", "");
localStorage.setItem("score2", "");
localStorage.setItem("score3", "");
localStorage.setItem("score4", "");
localStorage.setItem("score5", "");
localStorage.setItem("score6", "");
localStorage.setItem("score7", "");
localStorage.setItem("score8", "");
localStorage.setItem("score9", "");
let score0;
let score1;
let score2;
let score3;
let score4;
let score5;
let score6;
let score7;
let score8;
let score9;
// TRUE ANSWER
let true0 = document.getElementById("B");
let true1 = document.getElementById("D");
let true2 = document.getElementById("A");
let true3 = document.getElementById("A");
let true4 = document.getElementById("C");
let true5 = document.getElementById("D");
let true6 = document.getElementById("C");
let true7 = document.getElementById("B");
let true8 = document.getElementById("C");
let true9 = document.getElementById("D");
// FINAL AVERAGE
let average;

// MODIF DISPLAY MODIF DISPLAY MODIF DISPLAY MODIF DISPLAY //

// PAGE SCORE
function refresh() {
    score0 = localStorage.getItem("score0") ? parseInt(localStorage.getItem("score0")) : "";
    score1 = localStorage.getItem("score1") ? parseInt(localStorage.getItem("score1")) : "";
    score2 = localStorage.getItem("score2") ? parseInt(localStorage.getItem("score2")) : "";
    score3 = localStorage.getItem("score3") ? parseInt(localStorage.getItem("score3")) : "";
    score4 = localStorage.getItem("score4") ? parseInt(localStorage.getItem("score4")) : "";
    score5 = localStorage.getItem("score5") ? parseInt(localStorage.getItem("score5")) : "";
    score6 = localStorage.getItem("score6") ? parseInt(localStorage.getItem("score6")) : "";
    score7 = localStorage.getItem("score7") ? parseInt(localStorage.getItem("score7")) : "";
    score8 = localStorage.getItem("score8") ? parseInt(localStorage.getItem("score8")) : "";
    score9 = localStorage.getItem("score9") ? parseInt(localStorage.getItem("score9")) : "";
    if (page == 0) {
        if (score0 == "100") {
            document.getElementById("score").textContent = "Benar"
            true0.checked = true
        } else if (score0 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 1";
        Q = "Manakah definisi hormon yang paling tepat";
        A = "A. zat yang berperan dalam proses metabolisme";
        B = "B. zat yang berperan sebagai pembawa pesan";
        C = "C. zat yang dihasilkan oleh kelenjar hipofisis";
        D = "D. zat yang berperan dalam pertumbuhan saja";
    } else if (page == 1) {
        if (score1 == "100") {
            document.getElementById("score").textContent = "Benar"
            true1.checked = true
        } else if (score1 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 2";
        Q = "Berikut ini kelenjar endokrin yang berada di daerah leher sampai kepala yaitu";
        A = "A. tiroid, paratiroid, pineal, adrenal";
        B = "B. timus, adrenal, pituitari, pineal";
        C = "C. pituitari, timus";
        D = "D. pineal, tiroid";
    } else if (page == 2) {
        if (score2 == "100") {
            document.getElementById("score").textContent = "Benar"
            true2.checked = true
        } else if (score2 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 3";
        Q = "Seseorang mengalami penurunan berat badan drastis serta mudah lelah dan lapar. Dapat disimpulkan penyebabnya adalah";
        A = "A. kelebihan hormon tiroksin, gangguan kelenjar tiroid";
        B = "B. kelebihan hormon insulin, gangguan kelenjar adrenal";
        C = "C. kekurangan adrenalin, gangguan kelenjar adrenal";
        D = "D. kekurangan parathormon, gangguan kelenjar paratiroid";
    } else if (page == 3) {
        if (score3 == "100") {
            document.getElementById("score").textContent = "Benar"
            true3.checked = true
        } else if (score3 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 4";
        Q = "Pernyataan yang benar mengenai penyebab diabetes mellitus adalah";
        A = "A. produksi insulin menurun";
        B = "B. kekurangan hormon T4 sebagai pengontrol gula darah";
        C = "C. produksi insulin meningkat";
        D = "D. pankreas tidak dapat memproduksi enzim tripsin";
    } else if (page == 4) {
        if (score4 == "100") {
            document.getElementById("score").textContent = "Benar"
            true4.checked = true
        } else if (score4 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 5";
        Q = "Manfaat yang didapat saat insulin dan melatonin dalam kadar stabil diantaranya";
        A = "A. percepatan pertumbuhan tinggi dan berat badan";
        B = "B. terhindar dari penyakit graves dan diabetes";
        C = "C. terhindar dari penyakit hipoglikemia dan insomnia";
        D = "D. terhindar dari feoktomositoma dan penyakit addison";
    } else if (page == 5) {
        if (score5 == "100") {
            document.getElementById("score").textContent = "Benar"
            true5.checked = true
        } else if (score5 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 6";
        Q = "Hormon yang dihasilkan oleh kelenjar pineal, ovarium, pankreas, dan tiroid diantaranya";
        A = "A. adrenalin, testosteron, insulin, melatonin";
        B = "B. parathormon, estrogen, tiroksin, insulin";
        C = "C. melatonin, tiroksin, parathormon, estrogen";
        D = "D. tiroksin, estrogen, melatonin, insulin";
    } else if (page == 6) {
        if (score6 == "100") {
            document.getElementById("score").textContent = "Benar"
            true6.checked = true
        } else if (score6 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 7";
        Q = "Sindrom cushing disebabkan oleh";
        A = "A. efektifitas hormon aldosteron menurun";
        B = "B. peredaran hormon adrenalin terganggu";
        C = "C. produksi hormon kortisol berlebihan";
        D = "D. kekurangan hormon GH untuk pertumbuhan";
    } else if (page == 7) {
        if (score7 == "100") {
            document.getElementById("score").textContent = "Benar"
            true7.checked = true
        } else if (score7 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 8";
        Q = "Berikut hormon yang diproduksi oleh kelenjar pituitari, kecuali";
        A = "A. GH";
        B = "B. RH";
        C = "C. TSH";
        D = "D. ACTH";
    } else if (page == 8) {
        if (score8 == "100") {
            document.getElementById("score").textContent = "Benar"
            true8.checked = true
        } else if (score8 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 9";
        Q = "Masalah kesehatan disebabkan oleh hipopituitarisme yang benar adalah";
        A = "A. pertumbuhan terlalu cepat dipengaruhi hormon GH";
        B = "B. kerusakan kelenjar tiroid";
        C = "C. produksi hormon berkurang";
        D = "D. semua benar";
    } else if (page == 9) {
        if (score9 == "100") {
            document.getElementById("score").textContent = "Benar"
            true9.checked = true
        } else if (score9 == "0") {
            document.getElementById("score").textContent = "Salah"
        }else {
            document.getElementById("score").textContent = ""
        };
        T = "Pertanyaan 10";
        Q = "Berikut ini pasangan kelenjar beserta hormon yang benar, kecuali";
        A = "A. Tiroid : Kalsitonin";
        B = "B. Hipofisis : Oksitosin";
        C = "C. Hipotalamus : Oksitosin";
        D = "D. Tiroid : Kortisol";
    }
    document.getElementById("card-title").textContent = T;
    document.getElementById("question").textContent = Q;
    document.getElementById("A-val").textContent = A;
    document.getElementById("B-val").textContent = B;
    document.getElementById("C-val").textContent = C;
    document.getElementById("D-val").textContent = D;
    if (
        localStorage.getItem("score0") != ""
        && localStorage.getItem("score1") != ""
        && localStorage.getItem("score2") != ""
        && localStorage.getItem("score3") != ""
        && localStorage.getItem("score4") != ""
        && localStorage.getItem("score5") != ""
        && localStorage.getItem("score6") != ""
        && localStorage.getItem("score7") != ""
        && localStorage.getItem("score8") != ""
        && localStorage.getItem("score9") != ""
    ) {
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "block";
        });
    } else {
        document.querySelectorAll(".end-button").forEach(function (el) {
            el.style.display = "none";
        });
    }

    average = (score0 + score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9) / 10;
    document.getElementById("average-value").textContent = average;

    if (page == 10) {
        document.getElementById("card").style.display = "none";
        document.getElementById("average").style.display = "flex";
        document.getElementsByClassName("next")[0].style.display = "none";
        document.getElementsByClassName("back")[0].style.display = "none";
    } else {
        document.getElementById("average").style.display = "none";
    }
}

// FUNCTION FUNCTION FUNCTION FUNCTION //

// SWITCH PAGE

function plusPage() {
    if (page < 9) {
        page += 1;
        localStorage.setItem("page", page);
    } else {
        page = 0;
        localStorage.setItem("page", page);
    }
    document.querySelectorAll("input[name='choice']").forEach(radio => {
        radio.checked = false;
    });
    refresh()
}
function minPage() {
    if (page > 0) {
        page -= 1;
        localStorage.setItem("page", page);
    } else {
        page = 9;
        localStorage.setItem("page", page);
    }
    document.querySelectorAll("input[name='choice']").forEach(radio => {
        radio.checked = false;
    });
    refresh()
}

// CHOICE SCORE
function check() {
    if (page == 0) {
        if (true0.checked) {
            localStorage.setItem("score0", "100");
        } else {
            localStorage.setItem("score0", "0");
        }
    } else if (page == 1) {
        if (true1.checked) {
            localStorage.setItem("score1", "100");
        } else {
            localStorage.setItem("score1", "0");
        }
    } else if (page == 2) {
        if (true2.checked) {
            localStorage.setItem("score2", "100");
        } else {
            localStorage.setItem("score2", "0");
        }
    } else if (page == 3) {
        if (true3.checked) {
            localStorage.setItem("score3", "100");
        } else {
            localStorage.setItem("score3", "0");
        }
    } else if (page == 4) {
        if (true4.checked) {
            localStorage.setItem("score4", "100");
        } else {
            localStorage.setItem("score4", "0");
        }
    } else if (page == 5) {
        if (true5.checked) {
            localStorage.setItem("score5", "100");
        } else {
            localStorage.setItem("score5", "0");
        }
    } else if (page == 6) {
        if (true6.checked) {
            localStorage.setItem("score6", "100");
        } else {
            localStorage.setItem("score6", "0");
        }
    } else if (page == 7) {
        if (true7.checked) {
            localStorage.setItem("score7", "100");
        } else {
            localStorage.setItem("score7", "0");
        }
    } else if (page == 8) {
        if (true8.checked) {
            localStorage.setItem("score8", "100");
        } else {
            localStorage.setItem("score8", "0");
        }
    } else if (page == 9) {
        if (true9.checked) {
            localStorage.setItem("score9", "100");
        } else {
            localStorage.setItem("score9", "0");
        }
    }
    refresh()
}

// END
function end() {
    page = 10
    localStorage.setItem("page", page)
    refresh()
}

// DO FUNCTION DO FUNCTION DO FUNCTION DO FUNCTION //
refresh()