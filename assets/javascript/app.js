
$(document).ready(function () {
    var countDown = 30;
    var intervalId;

    var messages = [
        "CORRECT!",
        "WRONG CHOICE!",
        "TIMES UP!"
    ];
    var userMessage = " ";

    var totalCorrectAnswers = 0;
    var totalWrongAnswers = 0;

    var questionCount = 0;

    function startCountDown() {
        intervalId = setInterval(decrement, 1000);
    }

    function stopCountDown() {
        clearInterval(intervalId);
        intervalId = undefined;
    }

    function decrement() {
        countDown--;

        $("#count-down").html(`
            <h2>
                Time Remaining: ${countDown}
            </h2>
        `)

        if (countDown === 0) {
            game.displayAnswer();
        }
    }

    var game = {
        currentQuestion: {
            question: " ",
            choices: [],
            correctAnswer: " ",
            info: " ",
            img: " "
        },
        questions: [
            {
                question: `Who was Queen Nefertiti married to?`,
                choices: [
                    "Ramses The Great",
                    "Thutmose III",
                    "Akhenaten",
                    "Hatshepsut",
                    "Amenhotep I"
                ],
                correctAnswer: "Akhenaten",
                info: `Queen Nefertiti was married to 
                       Akhenaten, the heretic king. Akhenaten
                       attempted to convert ancient Egypt to 
                       monotheism.`,
                img: "assets/images/Nefertiti.jpg"
            },
            {
                question: `Which is not one of the 7 Wonders of
                           the Ancient World?`,
                choices: [
                    "Hanging Gardens of Babylon",
                    "Temple of Artemis at Ephesus",
                    "Mausoleum at Halicarnassus",
                    "Great Wall of China",
                    "Lighthouse at Alexandria"
                ],
                correctAnswer: "Great Wall of China",
                info: `The Great Wall of China is not included 
                       as one of the 7 Wonders of the Ancient World.`,
                img: "assets/images/GreatWallOfChina.jpg"
            },
            {
                question: `What does VE Day commemorate?`,
                choices: [
                    "The end of WWII",
                    "Nazi Germany's surrender",
                    "Napolean's invasion of Russia",
                    "Vladimir Lenin's birthday",
                    "The liberation of Paris from the Nazis"
                ],
                correctAnswer: "Nazi Germany's surrender",
                info: `VE Day (Victory in Europe) commemorates 
                       Nazi Germany's surrender toward the end 
                       of WWII.`,
                img: "assets/images/VEDay.jpg"
            },
            {
                question: `Who became US president after the 
                           assassination of Abraham Lincoln?`,
                choices: [
                    "Andrew Johnson",
                    "Richard Nixon",
                    "Rutherford B. Hayes",
                    "Andrew Jackson",
                    "Grover Cleveland"
                ],
                correctAnswer: "Andrew Johnson",
                info: `Lincoln was succeeded by Andrew Johnson.`,
                img: "assets/images/Johnson.jpg"
            },
            {
                question: `Who was the daughter of Anne Boleyn?`,
                choices: [
                    "Mary I",
                    "Lady Jane Grey",
                    "Catherine of Aragon",
                    "Elizabeth I",
                    "Mary, Queen of Scots"
                ],
                correctAnswer: "Elizabeth I",
                info: `Ann Boleyn was the mother of Elizabeth I.
                       She was beheaded by her husband, Henry VII,
                       when Elizabeth was two years old.`,
                img: "assets/images/Elizabeth_I.jpg"
            },
            {
                question: `A German U-boat sank which ocean liner 
                           in 1915?`,
                choices: [
                    "Lusitania",
                    "Queen Mary",
                    "Britannic",
                    "Titanic",
                    "Mauretania"
                ],
                correctAnswer: "Lusitania",
                info: `The sinking of the Lusitania in 1915 
                       helped turn US public opinion against 
                       Germany. This event led the way for US
                       involvement in WW1 two years later.`,
                img: "assets/images/Lusitania.jpg"
            },
            {
                question: `How long did the Roman Empire last?`,
                choices: [
                    "1500 years",
                    "700 years",
                    "1000 years",
                    "500 years",
                    "1200 years"
                ],
                correctAnswer: "500 years",
                info: `The Roman empire lasted 500 years. It's
                       eastern counterpart, the Byzantine empire, 
                       lasted for 1500 years.`,
                img: "assets/images/RomanEmpire.jpg"
            },
            {
                question: `The Rosetta Stone was instrumental in 
                           deciphering what?`,
                choices: [
                    "Linear A",
                    "Egyption hieroglphs",
                    "Coptic script",
                    "Cuneiform script",
                    "Linear B"
                ],
                correctAnswer: "Egyption hieroglphs",
                info: `The discovery of the Rosetta Stone 
                       was a breakthrough in diciphering Egyption 
                       hieroglphs. It contains three versions of the
                       same text: one written in Greek, one in 
                       Demotic script, and one in hieroglphs.`,
                img: "assets/images/RosettaStone.jpg"
            },
            {
                question: `Which killer was also known as The 
                           Whitechapel Murderer?`,
                choices: [
                    "H.H. Holmes",
                    "Ted Bundy",
                    "Mary Ann Cotton",
                    "Lizzie Borden",
                    "Jack the Ripper"
                ],
                correctAnswer: "Jack the Ripper",
                info: `Jack the Ripper commited all of his murders
                       in London's Whitechapel neighborhood.`,
                img: "assets/images/JackTheRipper.jpg"
            },
            {
                question: `Who was the last tsar of Russia?`,
                choices: [
                    "Nicholas I",
                    "Alexander II",
                    "Peter the Great",
                    "Elizabeth of Russia",
                    "Nicholas II"
                ],
                correctAnswer: "Nicholas II",
                info: `Nicholas II, along with his entire immediate 
                       family and their servants, was executed by the 
                       Bolsheviks in 1918.`,
                img: "assets/images/Romanovs.jpg"
            },
            {
                question: `Who was the first Holy Roman Emperor?`,
                choices: [
                    "Charlemagne",
                    "Otto I",
                    "Justinian I",
                    "Constantine",
                    "Charles III"
                ],
                correctAnswer: "Charlemagne",
                info: `Charlemagne, aka Charles The Great, was 
                       crowned Holy Roman Emperor by Pope Leo III 
                       in the year 800.`,
                img: "assets/images/Charlemagne.jpg"
            },
            {
                question: `Who was Narmer (aka Menes)?`,
                choices: [
                    "A character in the Epic of Gilgamesh",
                    "The vizier under Cleopatra VII",
                    "The first king of upper and lower Egypt",
                    "The heretic pharaoh",
                    "The architech of the great pyramid"
                ],
                correctAnswer: "The first king of upper and lower Egypt",
                info: `Narmer was the first pharaoh to unifiy upper and 
                       lower Egypt circa 3100 BCE.`,
                img: "assets/images/Narmer.jpg"
            },
            {
                question: `Where was Babylon located?`,
                choices: [
                    "Modern-day Iran",
                    "Modern-day Iraq",
                    "Modren-day Syria",
                    "Modern-day Jordan",
                    "Modern-day Sudan"
                ],
                correctAnswer: "Modern-day Iraq",
                info: `The ancient city of Babylon was located in 
                       modern-day Iraq.`,
                img: "assets/images/Babylon.jpg"
            },
            {
                question: `What are the Vedas?`,
                choices: [
                    "Ancient Nubian texts",
                    "Ancient Indian texts",
                    "Ancient Minoan texts",
                    "Darth Vader groupies",
                    "Ancient Sumarian texts"
                ],
                correctAnswer: "Ancient Indian texts",
                info: `The Vedas are a collection of ancient Hindu 
                       texts. They are written in Sanskrit.`,
                img: "assets/images/Vedas.jpg"
            },
            {
                question: `What was the largest empire in 
                           pre-Columbian America?`,
                choices: [
                    "Toltec Empire",
                    "Aztec Empire",
                    "Olmec Empire",
                    "Mayan Empire",
                    "Inca Empire"
                ],
                correctAnswer: "Inca Empire",
                info: `The Inca Empire was centred in the Andes (in 
                       modern-day Peru). It incorporated a large
                       portion of western South America.`,
                img: "assets/images/Inca.jpg"
            },
            {
                question: `The Enlightenment had an influence on 
                           which of these wars?`,
                choices: [
                    "Russian Revolution",
                    "French Revolution",
                    "War of the Roses",
                    "War of 1812",
                    "Austro-Prussian War"
                ],
                correctAnswer: "French Revolution",
                info: `The ideas of the Enlightenment inspired 
                       both the American and French Revolution.`,
                img: "assets/images/FrenchRevolution.jpg"
            },
            {
                question: `In which year did the demolition of 
                           the Berlin Wall begin?`,
                choices: [
                    "1985",
                    "1983",
                    "1980",
                    "1989",
                    "1992"
                ],
                correctAnswer: "1989",
                info: `The Berlin Wall was a guarded concrete barrier 
                       that physically and ideologically divided Berlin 
                       from 1961 to 1989.`,
                img: "assets/images/BerlinWall.jpg"
            }
        ],
        displayBackground: function() {
            $("html").append(`
            <body class="background">
                <!--Dynamically generated content from game.displaySheet() 
                    goes here-->
            </body>`);
        },
        displaySheet: function() {
            $(".background").append(`
             <div class="container-flex">
                <div class="row">  
                    <div class="col-1">
                        <!--This div remains empty-->
                    </div>
                    <div id="sheet-home" class="col-5 m-5 text-center 
                        justify-content-center">
                        <!--Dynamically generated content from 
                            displayStartScreen() goes here-->
                    </div>
                </div>
            </div>`);
        },
        displayStartScreen: function () {
            game.displayBackground();
            game.displaySheet();

            $("#sheet-home").append(`
                <div id="title" class="m-5">
                    <h1>WORLD HISTORY TRIVIA</h1>
                </div>
                <div id="start" class="m-5">
                    <button id="start-button" type="button" 
                        class="btn btn-lg">
                        Start
                    </button>
                </div>
                <div id="start-image">
                    <img src="assets/images/StartPageImage.jpg"
                     height="500">
                </div>    
            `);
        },
        pickQuestion: function () {
            if (questionCount === 0) {
                var arr = game.questions;

                for (var i = arr.length - 1; i > 0; i -= 1) {
                    var randomIndex = Math.floor(Math.random() * (i + 1));
                    var tempValue = arr[i];
                    arr[i] = arr[randomIndex];
                    arr[randomIndex] = tempValue;
                }
            }
            var randomQuestion = game.questions[questionCount];

            Object.assign(game.currentQuestion, randomQuestion);
        },
        displayQuestion: function () {
            game.pickQuestion();
            $("#sheet-home").empty();

            $("#sheet-home").append(`
                <div id="count-down" class="m-5">
                
                </div>
                <div>
                    <h1 id="question" class="m-5">
                        ${game.currentQuestion.question}
                    </h1>
                </div>
                <div>
                    <h3 class="choice m-1" id="answer1">
                        ${game.currentQuestion.choices[0]}
                    </h3>
                </div>
                <div>
                    <h3 class="choice m-1" id="answer2">
                        ${game.currentQuestion.choices[1]}
                    </h3>
                </div>
                <div>
                    <h3 class="choice m-1" id="answer3">
                        ${game.currentQuestion.choices[2]}
                    </h3>
                </div>
                <div>
                    <h3 class="choice m-1" id="answer4">
                        ${game.currentQuestion.choices[3]}
                    </h3>
                </div>
                <div>
                    <h3 class="choice m-1" id="answer5">
                        ${game.currentQuestion.choices[4]}
                    </h3>
                </div>
            `);
            startCountDown();
        },
        calculateChoice: function (event) {
            var userChoice = event.currentTarget.textContent.trim();

            if (userChoice === game.currentQuestion.correctAnswer) {

                totalCorrectAnswers++;
                userMessage = messages[0];

            } else {
                totalWrongAnswers++;
                userMessage = messages[1];
            }
        },
        advanceScreen: function () {
            if (questionCount < 8) {
                game.displayQuestion();
            } else {
                game.displayFinalStats();
            }
        },
        displayAnswer: function (event = 0) {
            stopCountDown();
            countDown = 30;

            if (event === 0) {
                totalWrongAnswers++;
                userMessage = messages[2];
            } else {
                game.calculateChoice(event);
            }

            $("#sheet-home").empty();
            $("#sheet-home").append(`
                <div>
                    <h1 id="user-message" class="m-5">
                        ${userMessage}
                    </h1>
                </div>
                <div>
                    <h3 id="answer" class="m-5">
                        ${game.currentQuestion.info}
                    </h3>
                </div>
                <div id="answer-image">
                    <img src=${game.currentQuestion.img} height="500">
                </div>
            `);
            questionCount++;

            setTimeout(game.advanceScreen, 7000);
        },
        displayFinalStats: function () {
            $("#sheet-home").empty();
            $("#sheet-home").append(`
                <div>
                    <h2 id="correct-answers" class="mt-5">
                        CORRECT ANSWERS: ${totalCorrectAnswers}
                    </h2>
                </div>
                <div>
                    <h2 id="incorrect-answers">
                        INCORRECT ANSWERS: ${totalWrongAnswers}
                    </h2>
                </div>
                <div id="reset" class=m-5>
                    <button id="reset-button" type="button" 
                            class="btn btn-lg">
                        Play Again
                    </button>
                </div>
            `);
        },
        reset: function () {
            questionCount = 0;
            userMessage = " ";
            totalCorrectAnswers = 0;
            totalWrongAnswers = 0;

            game.displayQuestion();
        }
    };

    //Start Game
    game.displayStartScreen();

    $("#sheet-home").on("click", "#start-button", game.displayQuestion);

    $("#sheet-home").on("click", ".choice", game.displayAnswer);

    $("#sheet-home").on("click", "#reset-button", game.reset);


});
