(function () {
  const myQuestions = [

    // Question--1
    {
      question: "How many days do we have in a week?",
      answers: {
        a: "4",
        b: "5",
        c: "7"
      },
      correctAnswer: "c"
    },


    // Question--2
    {
      question: "How many days are there in a year?",
      answers: {
        a: "365",
        b: "345",
        c: "335"
      },
      correctAnswer: "a"
    },

    // Question--3
    {
      question: "Which animal is known as the ‘Ship of the Desert?’",
      answers: {
        a: "lizzard",
        b: "cat",
        c: "dog",
        d: "camel"
      },
      correctAnswer: "d"
    },


    // Question--4
    {
      question: " How many letters are there in the English alphabet?",
      answers: {
        a: "26",
        b: "28",
        c: "32",
      },
      correctAnswer: "a"
    },

    // Question--5
    {
      question: "How many consonants are there in the English alphabet?",
      answers: {
        a: "14",
        b: "21",
        c: "18",
      },
      correctAnswer: "b"
    },


    // Question--6
    {
      question: "How many sides are there in a triangle?",
      answers: {
        a: "4",
        b: "2",
        c: "3",
      },
      correctAnswer: "c"
    },


    // Question--7
    {
      question: "How many weeks are there in one year?",
      answers: {
        a: "52",
        b: "50",
        c: "48",
      },
      correctAnswer: "a"
    },


    // Question--8
    {
      question: "Which way is anti-clockwise, left or right?",
      answers: {
        a: "left",
        b: "right",
      },
      correctAnswer: "a"
    },


    // Question--9
    {
      question: "Which is the principal source of energy for earth?",
      answers: {
        a: "moon",
        b: "sun",
        c: "solar",
      },
      correctAnswer: "b"
    },


    // Question--10
    {
      question: "What is the standard taste of the water?",
      answers: {
        a: "tasteless",
        b: "salty",
        c: "sweet",
      },
      correctAnswer: "a"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "darkblue";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
