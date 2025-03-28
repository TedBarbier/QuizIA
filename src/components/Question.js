import React, { useState, useEffect, useRef } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, onNextQuestion, userAnswer, score, explanation }) {
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [showNextButton, setShowNextButton] = React.useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setShowNextButton(true);
        onAnswerSubmit(selectedAnswer);
    };

    const handleNextQuestion = () => {
        setIsSubmitted(false);
        setShowNextButton(false);
        setSelectedAnswer(null);
        onNextQuestion();
    };

    return (
        <div className="question">
            <h2>Question {questionIndex + 1} / {totalQuestions}</h2>
            <p>{questionData.question}</p>
            <ul>
                {questionData.answers.map((answer, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                name="answer"
                                value={index}
                                checked={selectedAnswer === index}
                                onChange={() => setSelectedAnswer(index)}
                                disabled={isSubmitted}
                            />
                            {answer}
                        </label>
                    </li>
                ))}
            </ul>
            {!isSubmitted && (
                <button onClick={handleSubmit} disabled={selectedAnswer === null}>
                    Soumettre
                </button>
            )}
            {isSubmitted && (
                <div>
                    <p>Votre réponse : {questionData.answers[selectedAnswer]}</p>
                    <p>Réponse correcte : {questionData.answers[questionData.correctAnswer]}</p>
                    <p>Explication : {explanation}</p>
                    <p>Score actuel : {score}</p>
                    {showNextButton && (
                        <button onClick={handleNextQuestion}>
                            Suivant
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Question;