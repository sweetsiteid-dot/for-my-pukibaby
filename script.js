/* =====================================================
LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2500);

});


/* =====================================================
ELEMENT
===================================================== */

const music = document.getElementById("music");

const flash = document.getElementById("flash");

const startStory = document.getElementById("startStory");

const hero = document.getElementById("hero");

const storyBtn = document.getElementById("storyBtn");

const letterBtn = document.getElementById("letterBtn");


/* =====================================================
FLASH EFFECT
===================================================== */

function cameraFlash(){

    flash.style.opacity = "1";

    setTimeout(() => {

        flash.style.opacity = "0";

    }, 180);

}


/* =====================================================
START STORY
===================================================== */

startStory.addEventListener("click", () => {

    cameraFlash();

    music.play().catch(() => {});

    setTimeout(() => {

        hero.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

});


/* =====================================================
HERO BUTTON
===================================================== */

storyBtn.addEventListener("click", () => {

    document.getElementById("filmRoll")
    .scrollIntoView({
        behavior: "smooth"
    });

});


letterBtn.addEventListener("click", () => {

    document.getElementById("loveLetter")
    .scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================================
LOVE LETTER
===================================================== */

const envelope =
document.getElementById("openEnvelope");

const paper =
document.querySelector(".letter-paper");

const envelopeFront =
document.querySelector(".envelope-front");

const letterContent =
document.getElementById("letterContent");


/* =====================================================
LETTER CONTENT
===================================================== */

const letterText = `For my beloved person,

Untuk segala hal yang akan aku ucapkan
sekarang hal terpenting dan yang utama adalah rasa terima kasih. Terima kasih sudah lahir ke dunia dan menjadi anak yang cantik, pintar, dan baik hatı. Terima kasih karena selalu menghadapi shit nya dunia dengan ekspresif karena tidak semua orang bisa melakukan itu, terima kasih juga sudah hadir dan menjadi partnerku yang aku syukuri dan aku sayangi, dari semua hal yang terjadi dimasa remaja, mengenal kamu adalah salah satu scene favoriteku, jadi terima kasih karena hidup dengan baik hingga saat ini dan bisa menjadi partner yang sangat berarti untuk aku. Jangan merasa diri kamu ga worth it untuk siapapun karena aku yakin orang-orang akan merasakan hal yang sama dengan aku saat
mengenal kamu, aku bangga, kamu keren, kamu mampu melewati banyak hal di dunia ini, mungkin di ulang tahun sebelum-sebelumnya kamu belum punya aku, tapi aku harap ditahun ini setelah kamu punya aku sebagai partner kamu, kamu akan merasa bahagia, bersyukur, dan tenang disetiap ulang tahun kamu selanjutnya. Untuk sekarang nikmati momen sedih yang kamu miliki, semoga kedepannya kamu bisa lebih percaya dengan diri kamu sendiri bahwa kamuuu hebattttt banget. Ce, garis start atau finish seseorang dalam menjalani kehidupan itu berbeda-beda, orang ga harus berada dijalan yang sama untuk mencapai kebahagiaan dan kesuksesan, jadiiii fokus sama kelebihan kamu yaa. Gaada orang yang sempurna didunia, bahkan albert einstein sekalipun, jadi kamu harus bangga sama diri kamu ya? I hope this year is the last of all your sadness, lets make a happy journey and life. U can do that dedek💝💝`;


let indexLetter = 0;


/* =====================================================
OPEN ENVELOPE
===================================================== */

envelope.addEventListener("click", () => {

    envelopeFront.style.display = "none";

    paper.style.display = "block";

    typeLetter();

});


/* =====================================================
TYPE LETTER
===================================================== */

function typeLetter(){

    if(indexLetter < letterText.length){

        letterContent.innerHTML +=
        letterText.charAt(indexLetter);

        indexLetter++;

        setTimeout(typeLetter, 28);

    }

}


/* =====================================================
CAMERA DEVELOP
===================================================== */

const developBtn =
document.getElementById("developBtn");

const polaroid =
document.getElementById("polaroid");

const photo =
document.querySelector(".polaroid-photo img");


developBtn.addEventListener("click", () => {

    cameraFlash();

    polaroid.style.display = "block";

    photo.style.filter =
    "grayscale(100%) brightness(2)";

    photo.style.transition = "2.5s";

    setTimeout(() => {

        photo.style.filter =
        "grayscale(0) brightness(1)";

    }, 400);

});


/* =====================================================
REASONS
===================================================== */

const reasons = [

    "I love your smile.",

    "I love your kindness.",

    "I love your beautiful heart.",

    "I love the way you express yourself.",

    "I love every little thing you do.",

    "I love how strong you are.",

    "I love making memories with you.",

    "I simply love you."

];


const nextReason =
document.getElementById("nextReason");

const reasonText =
document.getElementById("reasonText");

let reasonIndex = 0;


nextReason.addEventListener("click", () => {

    reasonText.style.opacity = "0";

    setTimeout(() => {

        reasonText.innerHTML =
        reasons[reasonIndex];

        reasonText.style.opacity = "1";

        reasonIndex++;

        if(reasonIndex >= reasons.length){

            reasonIndex = 0;

        }

    }, 250);

});


/* =====================================================
SCRAPBOOK
===================================================== */

const pages =
document.querySelectorAll(".scrap-page");

const nextPage =
document.getElementById("nextPage");

const prevPage =
document.getElementById("prevPage");

let currentPage = 0;


function showPage(index){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

}


nextPage.addEventListener("click", () => {

    currentPage++;

    if(currentPage >= pages.length){

        currentPage = 0;

    }

    showPage(currentPage);

});


prevPage.addEventListener("click", () => {

    currentPage--;

    if(currentPage < 0){

        currentPage = pages.length - 1;

    }

    showPage(currentPage);

});


showPage(currentPage);


/* =====================================================
VHS TIMER
===================================================== */

const vhsTimer =
document.getElementById("vhsTimer");

let second = 1;


function updateTimer(){

    const h =
    String(Math.floor(second / 3600))
    .padStart(2, "0");

    const m =
    String(Math.floor((second % 3600) / 60))
    .padStart(2, "0");

    const s =
    String(second % 60)
    .padStart(2, "0");

    vhsTimer.innerHTML =
    `${h}:${m}:${s}`;

    second++;

}


setInterval(updateTimer, 1000);


/* =====================================================
QUOTE SLIDER
===================================================== */

const quoteText =
document.getElementById("quoteText");


const quotes = [

    "You are my favorite person.",

    "Every memory with you is worth keeping.",

    "You make ordinary days feel special.",

    "I hope you always remember how amazing you are.",

    "You deserve every beautiful thing in this world.",

    "I am grateful our paths crossed.",

    "Your happiness will always matter to me.",

    "Happy birthday to my favorite girl."

];


let quoteIndex = 0;


setInterval(() => {

    quoteText.style.opacity = "0";

    setTimeout(() => {

        quoteIndex++;

        if(quoteIndex >= quotes.length){

            quoteIndex = 0;

        }

        quoteText.innerHTML =
        quotes[quoteIndex];

        quoteText.style.opacity = "1";

    }, 300);

}, 5000);


/* =====================================================
FILM CARD ANIMATION
===================================================== */

const filmCards =
document.querySelectorAll(".film-card");


const filmObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});


filmCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(60px)";

    card.style.transition = ".8s";

    filmObserver.observe(card);

});


/* =====================================================
SECTION FADE
===================================================== */

const sections =
document.querySelectorAll("section");


const sectionObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});


sections.forEach(section => {

    if(section.id !== "intro"){

        section.style.opacity = "0";

        section.style.transform =
        "translateY(70px)";

        section.style.transition = "1s";

        sectionObserver.observe(section);

    }

});


/* =====================================================
BACK TO TOP
===================================================== */

const backTop =
document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backTop.style.display = "flex";

        backTop.style.alignItems = "center";

        backTop.style.justifyContent = "center";

    }else{

        backTop.style.display = "none";

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
SECRET MEMORY
===================================================== */

const unlockSecret =
document.getElementById("unlockSecret");

const secretBox =
document.getElementById("secretBox");

let secretOpened = false;


unlockSecret.addEventListener("click", () => {

    if(secretOpened) return;

    secretOpened = true;

    cameraFlash();

    secretBox.style.display = "block";

    secretBox.style.opacity = "0";

    secretBox.style.transform =
    "translateY(40px)";

    secretBox.style.transition = ".8s";


    setTimeout(() => {

        secretBox.style.opacity = "1";

        secretBox.style.transform =
        "translateY(0)";

    }, 100);

});


/* =====================================================
VHS SLIDESHOW
===================================================== */

const vhsImage =
document.getElementById("vhsImage");


const vhsPhotos = [

    "assets/photos/photo11.jpg",

    "assets/photos/photo12.jpg",

    "assets/photos/photo13.jpg",

    "assets/photos/photo14.jpg",

    "assets/photos/photo15.jpg"

];


let vhsIndex = 0;


setInterval(() => {

    vhsImage.style.opacity = ".15";

    setTimeout(() => {

        vhsIndex++;

        if(vhsIndex >= vhsPhotos.length){

            vhsIndex = 0;

        }

        vhsImage.src =
        vhsPhotos[vhsIndex];

        vhsImage.style.opacity = "1";

    }, 250);

}, 4000);


/* =====================================================
PARALLAX LIGHT LEAK
===================================================== */

const lightLeak =
document.querySelector(".light-leak");


window.addEventListener("scroll", () => {

    const offset =
    window.scrollY * 0.12;

    lightLeak.style.transform =
    `translateY(${offset}px)`;

});


/* =====================================================
FLOATING HEARTS
===================================================== */

function createHeart(){

    const heart =
    document.createElement("span");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
    (18 + Math.random() * 18) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition =
    "all 5s linear";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.bottom = "110vh";

        heart.style.opacity = "0";

        heart.style.transform =
        `translateX(${Math.random() * 120 - 60}px)
         rotate(${Math.random() * 360}deg)`;

    }, 100);


    setTimeout(() => {

        heart.remove();

    }, 5200);

}


setInterval(createHeart, 2200);


/* =====================================================
CAMERA CURSOR FLASH
===================================================== */

document.addEventListener("click", (e) => {

    const flashPoint =
    document.createElement("div");


    flashPoint.style.position =
    "fixed";

    flashPoint.style.left =
    e.clientX + "px";

    flashPoint.style.top =
    e.clientY + "px";

    flashPoint.style.width = "18px";

    flashPoint.style.height = "18px";

    flashPoint.style.borderRadius =
    "50%";

    flashPoint.style.background =
    "#ffffff";

    flashPoint.style.boxShadow =
    "0 0 35px #fff";

    flashPoint.style.pointerEvents =
    "none";

    flashPoint.style.zIndex =
    "9999";

    flashPoint.style.opacity = "1";

    flashPoint.style.transition =
    ".5s";


    document.body.appendChild(
        flashPoint
    );


    setTimeout(() => {

        flashPoint.style.transform =
        "scale(8)";

        flashPoint.style.opacity =
        "0";

    }, 20);


    setTimeout(() => {

        flashPoint.remove();

    }, 500);

});


/* =====================================================
ENDING FADE
===================================================== */

const ending =
document.getElementById("ending");


const endingObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            ending.style.backgroundPosition =
            "center";

            ending.style.transition =
            "2s";

        }

    });

});


endingObserver.observe(ending);


/* =====================================================
CONSOLE MESSAGE
===================================================== */

console.log(
"%c🎂 Birthday Memories",
"font-size:18px;color:#ff9fc4;font-weight:bold;"
);

console.log(
"%cMade with love by K",
"font-size:14px;color:#ffb6d5;"
);
