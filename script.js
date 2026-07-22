// ======================================
// PAGE ELEMENTS
// ======================================

const page1 = document.getElementById("page1");
const loadingScreen = document.getElementById("loadingScreen");
const memoryScreen = document.getElementById("memoryScreen");
const confirmationPage = document.getElementById("confirmationPage");
const birthdayPage = document.getElementById("birthdayPage");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const readyButton = document.getElementById("readyButton");
const maybeButton = document.getElementById("maybeButton");

const loadingText = document.getElementById("loadingText");
const progress = document.getElementById("progress");
const progressPercent = document.getElementById("progressPercent");

// ======================================
// LOADING MESSAGES
// ======================================

const loadingMessages = [

"Initializing...",

"Connecting...",

"Scanning that bagu...",

"Checking for all her personalities...",

"Searching for talkative girl...",

"Estimated completion time...",

"17 hours...",

"😂",

"Just kidding.",

"Around 30 seconds.",

"Btw i love my Brian...",

"Looking for putskin miline bay girls...",

"Birthday girl verified. ✓",

"Opening memory..."

];

// ======================================
// YES BUTTON
// ======================================

yesButton.addEventListener("click", function(){

    page1.style.display = "none";

    loadingScreen.style.display = "flex";

    startLoading();

});

// ======================================
// NO BUTTON
// ======================================

noButton.addEventListener("mouseover", moveButton);

// ======================================
// MAYBE BUTTON
// ======================================

maybeButton.addEventListener("mouseover", moveButton);

// ======================================
// READY BUTTON
// ======================================

readyButton.addEventListener("click", function(){

    confirmationPage.style.display = "none";

    birthdayPage.style.display = "flex";

    startBirthdayMessage();

});
// ======================================
// MOVE BUTTON FUNCTION
// ======================================

function moveButton(event){

    const button = event.target;

    const maxX = window.innerWidth - button.offsetWidth;

    const maxY = window.innerHeight - button.offsetHeight;

    button.style.position = "absolute";

    button.style.left = Math.random() * maxX + "px";

    button.style.top = Math.random() * maxY + "px";

}

// ======================================
// LOADING
// ======================================

function startLoading(){

    let index = 0;

    let percent = 0;

    const timer = setInterval(function(){

        loadingText.textContent = loadingMessages[index];

        percent += 8;

        if(percent > 100){

            percent = 100;

        }

        progress.style.width = percent + "%";

        progressPercent.textContent = percent + "%";

        index++;

        if(index >= loadingMessages.length){

            clearInterval(timer);

            setTimeout(function(){

                loadingScreen.style.display = "none";

                memoryScreen.style.display = "flex";

                setTimeout(function(){

                    memoryScreen.style.display = "none";

                    confirmationPage.style.display = "flex";

                },3000);

            },1000);

        }

    },1000);

}

// ======================================
// BIRTHDAY MESSAGE
// ======================================

const title = document.getElementById("birthdayTitle");
const message = document.getElementById("birthdayMessage");

const birthdayText =
`Congratulations on 19 years on this earth.

Thank You so much for being You always. You have always been the friendly, energetic and the TALKATIVE girl I met all those years ago.

God willing, I hope you do so great in this next chapter of your life and you truly deserve all the blessings that come to you and WILL come to you in the future.

You are so smart and I know in the future you will be a millionaire and you will definitely buy me loads of Rave green and 500ml cokes.

Remember always that you are pretty, beautiful, and the most lovely girl on this earth. Your hair is soo nice (cut it off and give it to me now😑) and your soul is so sweet. Despite what anyone ever tells you, you look pretty in this or you look pretty in that, just know that personally I think the prettiest thing you can wear is your smile🫶🏾nothing else matters.

Please have a lovely day today and just know that we all (your friends, family and I) are blessed to have you in our lives.

Thank you so much for giving me some of my last 8 minutes💜

Written by

Your Headache 💜`;

function startBirthdayMessage(){

    title.textContent = "";

    message.textContent = "";

    typeTitle();

}

function typeTitle(){

    const heading = "Happy Birthday Tams💜";

    let i = 0;

    const timer = setInterval(function(){

        title.textContent += heading.charAt(i);

        i++;

        if(i >= heading.length){

            clearInterval(timer);

            setTimeout(typeMessage,700);

        }

    },100);

}

function typeMessage(){

    let i = 0;

    const timer = setInterval(function(){

        message.textContent += birthdayText.charAt(i);

        i++;

        if(i >= birthdayText.length){

            clearInterval(timer);

        }

    },25);

}
