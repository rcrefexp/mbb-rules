import questions from './basketball-rules-questions';

/**
 * NCAA Men's Basketball Rules Quiz
 * 
 * This quiz randomly selects 15 questions from the question repository
 * and provides immediate feedback on answers.
 */

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const scoreDisplay = document.getElementById('score-display');
const questionCount = document.getElementById('question-count');

let currentQuestions = [];
let currentScore = 0;
const NUM_QUESTIONS = 15;

// Initialize quiz
function initQuiz() {
  // Reset containers
  quizContainer.innerHTML = '';
  resultContainer.innerHTML = '';
  currentScore = 0;
  
  // Get random questions
  currentQuestions = getRandomQuestions(NUM_QUESTIONS);
  
  // Build quiz HTML
  buildQuiz();
  
  // Show submit button, hide restart button and results
  submitButton.style.display = 'block';
  restartButton.style.display = 'none';
  resultContainer.style.display = 'none';
  
  // Update question count
  questionCount.textContent = `${NUM_QUESTIONS}`;
}

// Get random questions from the question repository
function getRandomQuestions(num) {
  // Create a copy of the questions array to avoid modifying the original
  const questionsCopy = [...questions];
  const randomQuestions = [];
  
  // Get random questions
  for (let i = 0; i < num && questionsCopy.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * questionsCopy.length);
    randomQuestions.push(questionsCopy[randomIndex]);
    questionsCopy.splice(randomIndex, 1);
  }
  
  return randomQuestions;
}

// Build quiz HTML
function buildQuiz() {
  // Create HTML for each question
  currentQuestions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.id = `question-${index}`;
    
    // Create question text
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.textContent = `Question ${index + 1}: ${question.question}`;
    
    questionDiv.appendChild(questionText);
    
    // Create options
    question.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${index}`;
      radio.value = optionIndex;
      
      const optionText = document.createElement('span');
      optionText.textContent = option;
      
      label.appendChild(radio);
      label.appendChild(optionText);
      questionDiv.appendChild(label);
    });
    
    quizContainer.appendChild(questionDiv);
  });
}

// Check answers and display results
function checkAnswers() {
  currentScore = 0;
  let incorrectQuestions = [];
  
  // Check each question
  currentQuestions.forEach((question, index) => {
    const questionDiv = document.getElementById(`question-${index}`);
    const selectedOption = questionDiv.querySelector(`input[name="question-${index}"]:checked`);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    
    if (selectedOption) {
      const selectedAnswer = parseInt(selectedOption.value);
      
      if (selectedAnswer === question.correctAnswer) {
        // Correct answer
        currentScore++;
        resultDiv.textContent = '✓ Correct!';
        resultDiv.classList.add('correct');
      } else {
        // Incorrect answer
        resultDiv.textContent = `✗ Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`;
        resultDiv.classList.add('incorrect');
        
        // Add to incorrect questions for review
        incorrectQuestions.push({
          question: question.question,
          yourAnswer: question.options[selectedAnswer],
          correctAnswer: question.options[question.correctAnswer],
          rule: question.rule
        });
      }
    } else {
      // No answer selected
      resultDiv.textContent = `✗ No answer selected. The correct answer is: ${question.options[question.correctAnswer]}`;
      resultDiv.classList.add('incorrect');
      
      // Add to incorrect questions for review
      incorrectQuestions.push({
        question: question.question,
        yourAnswer: 'No answer selected',
        correctAnswer: question.options[question.correctAnswer],
        rule: question.rule
      });
    }
    
    questionDiv.appendChild(resultDiv);
  });
  
  // Update score display
  scoreDisplay.textContent = `${currentScore}/${NUM_QUESTIONS}`;
  
  // Show incorrect questions for review
  resultContainer.innerHTML = '<h3>Questions to Review:</h3>';
  
  if (incorrectQuestions.length === 0) {
    resultContainer.innerHTML += '<p>Great job! You got all questions correct!</p>';
  } else {
    const reviewList = document.createElement('ul');
    
    incorrectQuestions.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <p><strong>Question:</strong> ${item.question}</p>
        <p><strong>Your Answer:</strong> ${item.yourAnswer}</p>
        <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
        <p><strong>Rule Reference:</strong> ${item.rule}</p>
      `;
      reviewList.appendChild(listItem);
    });
    
    resultContainer.appendChild(reviewList);
  }
  
  // Show restart button and results, hide submit button
  submitButton.style.display = 'none';
  restartButton.style.display = 'block';
  resultContainer.style.display = 'block';
}

// Event listeners
submitButton.addEventListener('click', checkAnswers);
restartButton.addEventListener('click', initQuiz);

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);