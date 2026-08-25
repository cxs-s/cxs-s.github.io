/* =========================
   JACKSON WANG TIMELINE
========================= */

const track = document.getElementById("timelineTrack");
const cards = document.querySelectorAll(".timeline-card");

const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

const dots = document.querySelectorAll(".progress-dot");

let currentIndex = 0;

let startX = 0;
let endX = 0;


/* =========================
   MOVE TIMELINE
========================= */

function updateTimeline() {

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    /* Update progress dots */

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentIndex
        );

    });

}


/* =========================
   NEXT CARD
========================= */

function nextCard() {

    if (currentIndex < cards.length - 1) {

        currentIndex++;

        updateTimeline();

    }

}


/* =========================
   PREVIOUS CARD
========================= */

function previousCard() {

    if (currentIndex > 0) {

        currentIndex--;

        updateTimeline();

    }

}


/* =========================
   BUTTONS
========================= */

nextButton.addEventListener("click", nextCard);

prevButton.addEventListener("click", previousCard);


/* =========================
   TOUCH SWIPING
========================= */

track.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;

});


track.addEventListener("touchend", function(event) {

    endX = event.changedTouches[0].clientX;

    handleSwipe();

});


/* =========================
   MOUSE SWIPING
========================= */

track.addEventListener("mousedown", function(event) {

    startX = event.clientX;

    track.style.cursor = "grabbing";

});


track.addEventListener("mouseup", function(event) {

    endX = event.clientX;

    track.style.cursor = "grab";

    handleSwipe();

});


/* =========================
   SWIPE LOGIC
========================= */

function handleSwipe() {

    const difference = startX - endX;

    const swipeDistance = 50;


    /* Swiped LEFT */

    if (difference > swipeDistance) {

        nextCard();

    }


    /* Swiped RIGHT */

    else if (difference < -swipeDistance) {

        previousCard();

    }

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        nextCard();

    }

    if (event.key === "ArrowLeft") {

        previousCard();

    }

});