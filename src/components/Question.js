import React, { useState, useEffect } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getCorrectAnswerFromShuffled(shuffledOptions, correctAnswer) {
    return shuffledOptions.find(option => option === correctAnswer);
}
function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, onNextQuestion, userAnswer, setUserAnswer, score }) {
    const [showResult, setShowResult] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const options = [...questionData.options];
        shuffleArray(options);
        setShuffledOptions(options);
        setIsSubmitted(false);
    }, [questionData]);

    const handleAnswerSubmit = () => {
        const correctAnswer = getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer);
        const isCorrect = userAnswer === correctAnswer;
        onAnswerSubmit(isCorrect);
        setShowResult(true);
        setIsSubmitted(true);
    };

    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
            <form onSubmit={(e) => { e.preventDefault(); handleAnswerSubmit(); }}>
                <ul className="options-list">
                    {shuffledOptions.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={option}
                                    checked={userAnswer === option}
                                    onChange={() => setUserAnswer(option)}
                                    disabled={isSubmitted}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="question-buttons">
                    <button type="submit" disabled={isSubmitted}>Soumettre la réponse</button>
                    <button type="button" className="skip-button" onClick={() => {
                        setUserAnswer(null);
                            setShowResult(false);
                        onAnswerSubmit(null);
                        setIsSubmitted(false);
                    }}>Passer la question</button>
                    </div>

                {showResult && (
                    <div className={userAnswer === getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer) ? "feedback correct" : "feedback incorrect"}>
                        {userAnswer === getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer) ? (
                            <p>Correct ! 🎉 {questionData.explanation}</p>
                        ) : (
                            <p>Incorrect. 😔 La bonne réponse est : <strong>{getCorrectAnswerFromShuffled(shuffledOptions, questionData.correctAnswer)}</strong>. {questionData.explanation}</p>
                        )}
                        <p className="current-score">Score actuel : {score} / {questionIndex + 1}</p>
                        <p className="question-buttons">
                        <button type="submit" className = "next-button" onClick={() => {
                            setShowResult(false);
                            onNextQuestion();
                        }}>Prochaine Question</button>
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Question;