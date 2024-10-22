const questions = [
    {
        question: "If cats could talk, what would they say most often?",
        options: ["'Feed me!'", "'I love you!'", "'Let's go for a walk!'", "'I’ll do your taxes!'"],
        answer: "'Feed me!'"
    },
    {
        question: "What’s the national animal of Scotland?",
        options: ["Unicorn", "Dragon", "Loch Ness Monster", "Sheep"],
        answer: "Unicorn"
    },
    {
        question: "What is the most essential ingredient in making a sandwich?",
        options: ["Bread", "Patience", "Love", "A spoon"],
        answer: "Bread"
    },
    {
        question: "Which of these animals can’t jump?",
        options: ["Elephant", "Frog", "Kangaroo", "Rabbit"],
        answer: "Elephant"
    },
    {
        question: "What’s something you’d yell if you dropped your phone into the toilet?",
        options: ["'Oh no!'", "'Goodbye cruel world!'", "'Why me?!'", "'Guess I’m getting a new phone!'"],
        answer: "'Why me?!'"
    },
    {
        question: "Which country invented the ice cream cone?",
        options: ["United States", "France", "Italy", "Syria"],
        answer: "Syria"
    },
    {
        question: "Which planet is most likely to be the villain in a sci-fi movie?",
        options: ["Mars", "Venus", "Earth", "Pluto"],
        answer: "Mars"
    },
    {
        question: "What would you find at the end of a rainbow?",
        options: ["A pot of gold", "A leprechaun", "Your lost Wi-Fi signal", "Unicorns"],
        answer: "Your lost Wi-Fi signal"
    },
    {
        question: "What’s the best way to avoid doing housework?",
        options: ["Hire a robot", "Say you're allergic to cleaning", "Pretend you're busy with important work", "Run away and join the circus"],
        answer: "Say you're allergic to cleaning"
    },
    {
        question: "If humans could fly, what would be the worst thing about it?",
        options: ["Birds would get jealous", "Traffic lights in the sky", "We'd forget how to walk", "You'd have to dodge planes"],
        answer: "Traffic lights in the sky"
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }

    const buttons = optionsElement.querySelectorAll('.btn');
    buttons.forEach(btn => btn.disabled = true);

    nextButton.style.display = 'block';

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = 'Submit';
    } else {
        nextButton.textContent = 'Next';
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex === questions.length - 1) {
        showResult();
    } else {
        currentQuestionIndex++;
        displayQuestion();
    }
});

function showResult() {
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    nextButton.style.display = 'none';
}

displayQuestion();
