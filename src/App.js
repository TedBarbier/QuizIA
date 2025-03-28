// src/App.js
import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Footer from './components/Footer'; // Import Footer component
import originalQuestionsData from './questionsData'; // Import original questions data

// Helper function to shuffle array in place (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function App() {
    const [shuffledQuestionsData, setShuffledQuestionsData] = useState([]); // State for shuffled questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [userAnswers, setUserAnswers] = useState(Array(originalQuestionsData.length).fill(null)); // Track user answers - use original length

    useEffect(() => {
        // Shuffle questions on component mount
        const questionsCopy = [...originalQuestionsData]; // Create a copy to avoid modifying original
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);
    }, []); // Run only once on mount


    const currentQuestion = shuffledQuestionsData[currentQuestionIndex]; // Use shuffled questions

    const handleAnswerSubmit = (selectedAnswer) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
        setUserAnswers(updatedUserAnswers);

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < shuffledQuestionsData.length - 1) { // Use shuffled length
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        // Shuffle questions again on restart
        const questionsCopy = [...originalQuestionsData];
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);

        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setUserAnswers(Array(originalQuestionsData.length).fill(null)); // Reset user answers - use original length
    };


    // Render only if shuffledQuestionsData is populated
    if (!shuffledQuestionsData || shuffledQuestionsData.length === 0) {
        return <div>Loading quiz...</div>; // Or a loading spinner
    }


    return (
        <div className="app">
            <h1>Quiz d'Intelligence Artificielle - Entraînement</h1>

            {showResults ? (
                <div className="results">
                    <h2>Résultats du Quiz</h2>
                    <p>Votre Score : {score} sur {shuffledQuestionsData.length}</p> {/* Use shuffled length */}
                    <div className="results-review">
                        {shuffledQuestionsData.map((question, index) => ( // Use shuffled questions for results
                            <div key={index} className="result-question-card">
                                <h3>Question {index + 1}</h3>
                                <p className="scenario">{question.scenario}</p>
                                <p className="question-text">{question.question}</p>
                                <p>Votre réponse: <strong>{userAnswers[index] || "Non répondu"}</strong></p>
                                <p>Réponse correcte: <strong>{question.correctAnswer}</strong></p>
                                <p className="explanation">Explication: {question.explanation}</p>
                                {userAnswers[index] === question.correctAnswer ? (
                                    <p className="result-feedback correct">Correct 🎉</p>
                                ) : (
                                    <p className="result-feedback incorrect">Incorrect 😔</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <button onClick={handleRestartQuiz}>Recommencer le Quiz</button>
                </div>
            ) : (
                <>
                          
                    <p className="scenario-intro">
                        Bienvenue au Quiz d'Entraînement en Intelligence Artificielle ! <br/>
                        Testez vos connaissances sur les concepts fondamentaux de l'IA, des agents intelligents aux algorithmes de recherche et d'apprentissage. <br/>
                        Ce quiz vous aidera à évaluer votre compréhension des principes de l'Intelligence Artificielle.
                    </p>
                    <Question
                        questionData={currentQuestion}
                        questionIndex={currentQuestionIndex}
                        totalQuestions={shuffledQuestionsData.length} // Use shuffled length
                        onAnswerSubmit={handleAnswerSubmit}
                        userAnswer={userAnswers[currentQuestionIndex]}
                        score={score} // Pass the score here
                    />
                </>
            )}
            <Footer /> {/* Include the Footer component here */}
        </div>
    );
}

export default App;