
var userCorrect = true;

var game = {
    currentQuestion: {
        question: " ",
        choices: [],
        correctAnswer: " ",
        img: " "
    },
    questions: [
        {
            question: "Who was Queen Nefertiti married to?",
            choices: [
                "Ramses The Great",
                "Thutmose III",
                "Akhenaten",
                "Hatshepsut",
                "Amenhotep I"
            ],
            correctAnswer: "Akhenaten",
            img: "assets/images/Nefertiti.jpg"
        },
        {
            question: "Which is not one of the 7 Wonders of the Ancient World?",
            choices: [
                "Hanging Gardens of Babylon",
                "Temple of Artemis at Ephesus",
                "Mausoleum at Halicarnassus",
                "Great Wall of China",
                "Lighthouse at Alexandria"
            ],
            correctAnswer: "Great Wall of China",
            img: "assets/images/GreatWallOfChina.jpg.jpg"
        },
        {
            question: "What did VE Day commemorate?",
            choices: [
                "The end of WWII",
                "Nazi Germany's surrender",
                "Napolean's invasion of Russia",
                "Vladimir Lenin's birthday",
                "The liberation of Paris from the Nazis"
            ],
            correctAnswer: "Nazi Germany's surrender",
            img: "assets/images/VEDay.jpg"
        },
        {
            question: "Who became US president after the assassination of Abraham Lincoln?",
            choices: [
                "Andrew Johnson",
                "Richard Nixon",
                "Rutherford B. Hayes",
                "Andrew Jackson",
                "Grover Cleveland"
            ],
            correctAnswer: "Andrew Johnson",
            img: "assets/images/"
        },
        {
            question: "Who was the daughter of Anne Boleyn?",
            choices: [
                "Mary I",
                "Lady Jane Grey",
                "Catherine of Aragon",
                "Elizabeth I",
                "Mary, Queen of Scots"
            ],
            correctAnswer: "Elizabeth I",
            img: "assets/images/Elizabeth_I.jpg"
        },
        {
            question: "A German U-boat sank which ocean liner in 1915?",
            choices: [
                "Lusitania",
                "Queen Mary",
                "Britannic",
                "Titanic",
                "Mauretania"
            ],
            correctAnswer: "Lusitania",
            img: "assets/images/Lusitania.jpg"
        },
        {
            question: "How long did the Roman empire last?",
            choices: [
                "1500 years",
                "700 years",
                "1000 years",
                "500 years",
                "1200 years"
            ],
            correctAnswer: "500 years",
            img: "assets/images/RomanEmpire.jpg"
        },
        {
            question: "The Rosetta Stone was instrumental in deciphering what?",
            choices: [
                "Linear A",
                "Egyption hieroglphs",
                "Coptic script",
                "Cuneiform script",
                "Linear B"
            ],
            correctAnswer: "Egyption hieroglphs",
            img: "assets/images/RosettaStone.jpg"
        },
        {
            question: "Which killer was also known as The Whitechapel Murderer?",
            choices: [
                "H.H. Holmes",
                "Ted Bundy",
                "Mary Ann Cotton",
                "Lizzie Borden",
                "Jack the Ripper"
            ],
            correctAnswer: "Jack the Ripper",
            img: "assets/images/JackTheRipper.jpg"
        },
        {
            question: "Who was the last tsar of Russia?",
            choices: [
                "Nicholas I",
                "Alexander II",
                "Peter the Great",
                "Elizabeth of Russia",
                "Nicholas II"
            ],
            correctAnswer: "Nicholas II",
            img: "assets/images/Romanovs.jpg"
        },
        {
            question: "Who was the first Holy Roman Emperor?",
            choices: [
                "Charlemagne",
                "Otto I",
                "Justinian I",
                "Constantine",
                "Charles III"
            ],
            correctAnswer: "Charlemagne",
            img: "assets/images/Charlemange.jpg"
        },
        {
            question: "Who was Narmer (aka Menes)?",
            choices: [
                "A character in the Epic of Gilgamesh",
                "The vizier under Cleopatra VII",
                "The first king of upper and lower Egypt",
                "The heretic pharaoh",
                "The architech of the great pyramid"
            ],
            correctAnswer: "The first king of upper and lower Egypt",
            img: "assets/images/Narmer.jpg"
        },
        {
            question: "Where was Babylon located?",
            choices: [
                "Modern-day Iran",
                "Modern-day Iraq",
                "Modren-day Syria",
                "Modern-day Jordan",
                "Modern-day Sudan"
            ],
            correctAnswer: "Modern-day Iraq",
            img: "assets/images/Babylon.jpg"
        },
        {
            question: "What are the Vedas?",
            choices: [
                "Ancient Nubian texts",
                "Ancient Indian texts",
                "Ancient Minoan texts",
                "Darth Vader groupies",
                "Ancient Sumarian texts"
            ],
            correctAnswer: "Ancient Indian texts",
            img: "assets/images/Vedas.jpg"
        }
    ],
    displayQuestion: function() {
        $("#sheet-home").empty();
        $("#sheet-home").append(`
            <div id="question">
                ${this.currentQuestion.question}
            </div>
            <div id="answer1">
                ${this.currentQuestion.choices[0]}
            </div>
            <div id="answer2">
                ${this.currentQuestion.choices[1]}
            </div>
            <div id="answer3">
                ${this.currentQuestion.choices[2]}
            </div>
            <div id="answer4">
                ${this.currentQuestion.choices[3]}
            </div>
            <div id="answer5">
                ${this.currentQuestion.choices[4]}
            </div>
        `);
    },
    displayAnswer: function() {
        $("#sheet-home").empty();
        $("#sheet-home").append(`
            <div id="answer">
                ${this.currentQuestion.correctAnswer}
            </div>
            <div id="answer1">
                <img src=${this.currentQuestion.img}>
            </div>
        `);
    }
}
