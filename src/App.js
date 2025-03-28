import React, { useState } from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
const questions = [
    {
        question: "Quelle est la capitale de la France?",
        answers: ["Paris", "Londres", "Berlin", "Madrid"],
        correctAnswer: 0,
        explanation: "Paris est la capitale de la France."
    },
    // Ajoutez d'autres questions ici
];

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const handleAnswerSubmit = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="App">
            <h1>QuizzIA</h1>
                    <Question
                questionData={questions[currentQuestionIndex]}
                        questionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                        onAnswerSubmit={handleAnswerSubmit}
                onNextQuestion={handleNextQuestion}
                        score={score}
                explanation={questions[currentQuestionIndex].explanation}
                    />
            <Footer />
        </div>
    );
}

export default App;