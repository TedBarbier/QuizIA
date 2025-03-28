import React, { useState } from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
import questions from './questionsData';
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