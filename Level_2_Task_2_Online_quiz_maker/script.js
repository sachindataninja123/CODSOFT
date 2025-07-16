// Global variables
let currentUser = null;
let quizzes = [];
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let questionCounter = 0;

function init() {
  loadData();
  setupEventListeners();
  checkAuthStatus();
}

function loadData() {
  const savedUser = getCurrentUser();
  if (savedUser) {
    currentUser = savedUser;
    updateAuthUI();
  }

  quizzes = getQuizzes();
  displayQuizzes();
}
function saveData() {
  console.log("Data saved to memory");
}

function getCurrentUser() {
  return currentUser;
}

function getQuizzes() {
  return [
    {
      id: 1,
      title: "Frontend Basics",
      description: "Test your knowledge of JavaScript fundamentals",
      author: "Admin",
      questions: [
        {
          question:
            "What is the correct way to declare a variable in JavaScript?",
          options: [
            "var x = 5;",
            "variable x = 5;",
            "v x = 5;",
            "declare x = 5;",
          ],
          correct: 0,
        },
        {
          question:
            "Which method is used to add an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correct: 0,
        },
        {
          question: "What does 'DOM' stand for?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Dynamic Object Method",
            "Document Oriented Markup",
          ],
          correct: 0,
        },
        {
          question: "Which HTML tag is used for the largest heading?",
          options: ["<h6>", "<h1>", "<header>", "<head>"],
          correct: 1,
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
          ],
          correct: 1,
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlink Text Module Language",
          ],
          correct: 0,
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"],
          correct: 1,
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["style", "class", "font", "styles"],
          correct: 0,
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: ["//", "/*", "#", "<!-- -->"],
          correct: 0,
        },
        {
          question:
            "Which method is used to convert JSON data to a JavaScript object?",
          options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "parse.JSON()",
          ],
          correct: 0,
        },
      ],
    },
    {
      id: 2,
      title: "`Basic Quiz",
      description: "Basic web development concepts",
      author: "WebDev",
      questions: [
        {
          question: "Which HTML tag is used for the largest heading?",
          options: ["<h6>", "<h1>", "<header>", "<head>"],
          correct: 1,
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
          ],
          correct: 1,
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlink Text Module Language",
          ],
          correct: 0,
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"],
          correct: 1,
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["style", "class", "font", "styles"],
          correct: 0,
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: ["//", "/*", "#", "<!-- -->"],
          correct: 0,
        },
        {
          question:
            "Which method is used to convert JSON data to a JavaScript object?",
          options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "parse.JSON()",
          ],
          correct: 0,
        },
        {
          question: "Which HTTP method is used to fetch data from a server?",
          options: ["POST", "PUT", "GET", "DELETE"],
          correct: 2,
        },
        {
          question: "Which tag is used to create a hyperlink in HTML?",
          options: ["<link>", "<href>", "<a>", "<hyper>"],
          correct: 2,
        },
        {
          question: "Which language is used to style web pages?",
          options: ["HTML", "CSS", "JavaScript", "Python"],
          correct: 1,
        },
        {
          question: "In which year was JavaScript created?",
          options: ["1995", "1990", "2000", "2005"],
          correct: 0,
        },
        {
          question: "What does API stand for?",
          options: [
            "Application Programming Interface",
            "Application Protocol Interface",
            "Applied Programming Interface",
            "App Programming Integration",
          ],
          correct: 0,
        },
        {
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Strong Question Language",
            "Simple Query List",
            "Structured Question Language",
          ],
          correct: 0,
        },
        {
          question: "Which protocol is used to transfer web pages?",
          options: ["FTP", "SMTP", "SSH", "HTTP"],
          correct: 3,
        },
      ],
    },
  ];
}

// Event listeners
function setupEventListeners() {
  // Navigation
  document
    .getElementById("createQuizBtn")
    .addEventListener("click", () => showSection("createSection"));
  document.getElementById("browseQuizzesBtn").addEventListener("click", () => {
    showSection("browseSection");
    displayQuizzes();
  });
  document
    .getElementById("backToHomeBtn")
    .addEventListener("click", () => showSection("homeSection"));
  document
    .getElementById("backToHomeBtn2")
    .addEventListener("click", () => showSection("homeSection"));
  document.getElementById("backToBrowseBtn").addEventListener("click", () => {
    showSection("browseSection");
    displayQuizzes();
  });

  // Auth
  document
    .getElementById("loginBtn")
    .addEventListener(
      "click",
      () => (document.getElementById("loginModal").style.display = "block")
    );
  document
    .getElementById("registerBtn")
    .addEventListener(
      "click",
      () => (document.getElementById("registerModal").style.display = "block")
    );
  document.getElementById("logoutBtn").addEventListener("click", logout);
  document
    .getElementById("closeLogin")
    .addEventListener(
      "click",
      () => (document.getElementById("loginModal").style.display = "none")
    );
  document
    .getElementById("closeRegister")
    .addEventListener(
      "click",
      () => (document.getElementById("registerModal").style.display = "none")
    );
  document.getElementById("loginSubmit").addEventListener("click", login);
  document.getElementById("registerSubmit").addEventListener("click", register);

  // Quiz creation
  document
    .getElementById("addQuestionBtn")
    .addEventListener("click", addQuestion);
  document.getElementById("saveQuizBtn").addEventListener("click", saveQuiz);

  // Quiz taking
  document
    .getElementById("nextQuestionBtn")
    .addEventListener("click", nextQuestion);
  document
    .getElementById("submitQuizBtn")
    .addEventListener("click", submitQuiz);
  document.getElementById("cancelQuizBtn").addEventListener("click", () => {
    showSection("browseSection");
    displayQuizzes();
  });
  document
    .getElementById("retakeQuizBtn")
    .addEventListener("click", retakeQuiz);

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
}

// Authentication functions
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (username && password) {
    currentUser = { username, email: username + "@example.com" };
    updateAuthUI();
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    alert("Login successful!");
  } else {
    alert("Please enter both username and password");
  }
}

function register() {
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (username && email && password) {
    currentUser = { username, email };
    updateAuthUI();
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    alert("Registration successful!");
  } else {
    alert("Please fill in all fields");
  }
}

function logout() {
  currentUser = null;
  updateAuthUI();
  showSection("homeSection");
  alert("Logged out successfully!");
}

function updateAuthUI() {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (currentUser) {
    welcomeMessage.textContent = `Welcome, ${currentUser.username}!`;
    loginBtn.classList.add("hidden");
    registerBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    welcomeMessage.textContent = "Welcome! Please log in to get started.";
    loginBtn.classList.remove("hidden");
    registerBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }
}

function checkAuthStatus() {
  updateAuthUI();
}

// Section navigation
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

// Quiz creation functions
function addQuestion() {
  if (!currentUser) {
    alert("Please log in to create quizzes");
    return;
  }

  questionCounter++;
  const questionsContainer = document.getElementById("questionsContainer");

  const questionDiv = document.createElement("div");
  questionDiv.className = "question-item";
  questionDiv.innerHTML = `
                <div class="question-header">
                    <div class="question-number">Question ${questionCounter}</div>
                    <button class="delete-question" onclick="deleteQuestion(this)">Delete</button>
                </div>
                <div class="form-group">
                    <label>Question Text</label>
                    <input type="text" class="question-text" placeholder="Enter your question">
                </div>
                <div class="form-group">
                    <label>Options (select the correct answer)</label>
                    <div class="option-item">
                        <input type="radio" name="correct_${questionCounter}" value="0">
                        <input type="text" class="option-text" placeholder="Option A">
                    </div>
                    <div class="option-item">
                        <input type="radio" name="correct_${questionCounter}" value="1">
                        <input type="text" class="option-text" placeholder="Option B">
                    </div>
                    <div class="option-item">
                        <input type="radio" name="correct_${questionCounter}" value="2">
                        <input type="text" class="option-text" placeholder="Option C">
                    </div>
                    <div class="option-item">
                        <input type="radio" name="correct_${questionCounter}" value="3">
                        <input type="text" class="option-text" placeholder="Option D">
                    </div>
                </div>
            `;

  questionsContainer.appendChild(questionDiv);
}

function deleteQuestion(button) {
  const questionItem = button.closest(".question-item");
  questionItem.remove();
  updateQuestionNumbers();
}

function updateQuestionNumbers() {
  const questionItems = document.querySelectorAll(".question-item");
  questionItems.forEach((item, index) => {
    const questionNumber = item.querySelector(".question-number");
    questionNumber.textContent = `Question ${index + 1}`;
  });
}

function saveQuiz() {
  if (!currentUser) {
    alert("Please log in to create quizzes");
    return;
  }

  const title = document.getElementById("quizTitle").value;
  const description = document.getElementById("quizDescription").value;
  const questionItems = document.querySelectorAll(".question-item");

  if (!title || questionItems.length === 0) {
    alert("Please provide a title and at least one question");
    return;
  }

  const questions = [];
  let isValid = true;

  questionItems.forEach((item, index) => {
    const questionText = item.querySelector(".question-text").value;
    const optionTexts = Array.from(item.querySelectorAll(".option-text")).map(
      (input) => input.value
    );
    const correctAnswer = item.querySelector('input[type="radio"]:checked');

    if (!questionText || optionTexts.some((opt) => !opt) || !correctAnswer) {
      isValid = false;
      return;
    }

    questions.push({
      question: questionText,
      options: optionTexts,
      correct: parseInt(correctAnswer.value),
    });
  });

  if (!isValid) {
    alert("Please fill in all question fields and select correct answers");
    return;
  }

  const newQuiz = {
    id: Date.now(),
    title,
    description,
    author: currentUser.username,
    questions,
  };

  quizzes.push(newQuiz);
  saveData();

  // Reset form
  document.getElementById("quizTitle").value = "";
  document.getElementById("quizDescription").value = "";
  document.getElementById("questionsContainer").innerHTML = "";
  questionCounter = 0;

  alert("Quiz saved successfully!");
  showSection("homeSection");
}

// Quiz display functions
function displayQuizzes() {
  const quizList = document.getElementById("quizList");
  quizList.innerHTML = "";

  if (quizzes.length === 0) {
    quizList.innerHTML =
      '<p style="text-align: center; color: #666;">No quizzes available yet. Create the first one!</p>';
    return;
  }

  quizzes.forEach((quiz) => {
    const quizCard = document.createElement("div");
    quizCard.className = "quiz-card";
    quizCard.innerHTML = `
                    <h3>${quiz.title}</h3>
                    <p style="color: #666; margin-bottom: 10px;">${quiz.description}</p>
                    <div class="quiz-meta">
                        <span>👤 By ${quiz.author}</span> | 
                        <span>📝 ${quiz.questions.length} questions</span>
                    </div>
                    <button class="btn btn-primary" onclick="startQuiz(${quiz.id})">Take Quiz</button>
                `;
    quizList.appendChild(quizCard);
  });
}

// Quiz taking functions
function startQuiz(quizId) {
  currentQuiz = quizzes.find((q) => q.id === quizId);
  if (!currentQuiz) {
    alert("Quiz not found");
    return;
  }

  currentQuestionIndex = 0;
  userAnswers = [];
  showSection("takeSection");
  displayQuestion();
}

function displayQuestion() {
  const question = currentQuiz.questions[currentQuestionIndex];
  const quizContent = document.getElementById("quizContent");
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");
  const nextBtn = document.getElementById("nextQuestionBtn");
  const submitBtn = document.getElementById("submitQuizBtn");

  // Update progress
  const progress =
    ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  progressFill.style.width = progress + "%";
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${
    currentQuiz.questions.length
  }`;

  // Display question
  quizContent.innerHTML = `
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options
                          .map(
                            (option, index) => `
                            <label class="quiz-option" onclick="selectOption(${index})">
                                <input type="radio" name="question_${currentQuestionIndex}" value="${index}">
                                <span>${option}</span>
                            </label>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;

  // Show/hide buttons based on question position
  if (currentQuestionIndex === currentQuiz.questions.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function selectOption(optionIndex) {
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((option) => option.classList.remove("selected"));
  options[optionIndex].classList.add("selected");

  const radio = options[optionIndex].querySelector('input[type="radio"]');
  radio.checked = true;
}

function nextQuestion() {
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );

  if (!selectedOption) {
    alert("Please select an answer before proceeding");
    return;
  }

  userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.questions.length) {
    displayQuestion();
  }
}

function submitQuiz() {
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );

  if (!selectedOption) {
    alert("Please select an answer before submitting");
    return;
  }

  userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  showResults();
}

function showResults() {
  let correctAnswers = 0;

  currentQuiz.questions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      correctAnswers++;
    }
  });

  const scorePercentage = Math.round(
    (correctAnswers / currentQuiz.questions.length) * 100
  );

  document.getElementById(
    "scoreDisplay"
  ).textContent = `${correctAnswers}/${currentQuiz.questions.length}`;
  document.getElementById("scoreMessage").textContent =
    getScoreMessage(scorePercentage);

  // Show answer review
  const answerReview = document.getElementById("answerReview");
  answerReview.innerHTML =
    '<h3 style="margin-bottom: 20px;">Answer Review:</h3>';

  currentQuiz.questions.forEach((question, index) => {
    const isCorrect = userAnswers[index] === question.correct;
    const answerItem = document.createElement("div");
    answerItem.className = `answer-item ${
      isCorrect ? "answer-correct" : "answer-wrong"
    }`;
    answerItem.innerHTML = `
                    <h4>${question.question}</h4>
                    <p><strong>Your answer:</strong> ${
                      question.options[userAnswers[index]]
                    }</p>
                    <p><strong>Correct answer:</strong> ${
                      question.options[question.correct]
                    }</p>
                    <p><strong>Result:</strong> ${
                      isCorrect ? "✅ Correct" : "❌ Wrong"
                    }</p>
                `;
    answerReview.appendChild(answerItem);
  });

  showSection("resultsSection");
}

function getScoreMessage(percentage) {
  if (percentage >= 90) return "Outstanding! You're a quiz master! 🏆";
  if (percentage >= 80) return "Excellent work! Great job! 🎉";
  if (percentage >= 70) return "Good job! Keep it up! 👍";
  if (percentage >= 60) return "Not bad! Room for improvement! 📚";
  return "Keep practicing! You'll get better! 💪";
}

function retakeQuiz() {
  if (currentQuiz) {
    startQuiz(currentQuiz.id);
  }
}

// Initialize the application when the page loads
document.addEventListener("DOMContentLoaded", init);
