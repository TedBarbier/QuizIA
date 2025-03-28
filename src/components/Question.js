import React, { useState, useEffect, useRef } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, userAnswer, score, explanation }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const correctAnswerIndexRef = useRef(null);
    useEffect(() => {
        setSelectedAnswer(null);
        setIsSubmitted(false);
        const optionsCopy = [...questionData.options];
        shuffleArray(optionsCopy);
        setShuffledOptions(optionsCopy);

        correctAnswerIndexRef.current = questionData.options.indexOf(questionData.correctAnswer);
    }, [questionIndex, questionData.options, questionData.correctAnswer]);

    const handleSubmit = () => {
        setIsSubmitted(true);
        onAnswerSubmit(selectedAnswer);
    };

    const getCorrectAnswerFromShuffled = () => {
        if (correctAnswerIndexRef.current !== null) {
            return shuffledOptions[correctAnswerIndexRef.current];
        }
        return questionData.correctAnswer;
    };

    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
                <ul className="options-list">
                {shuffledOptions.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                value={index}
                                checked={selectedAnswer === index}
                                onChange={() => setSelectedAnswer(index)}
                                disabled={isSubmitted}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
                <div className="question-buttons">
                <button onClick={handleSubmit} disabled={isSubmitted || selectedAnswer === null}>
                    Soumettre la réponse
                </button>
                <button type="button" className="skip-button" onClick={() => onAnswerSubmit(null)} disabled={isSubmitted}>
                    Passer la question
                </button>
                    </div>
            {isSubmitted && (
                <div className={selectedAnswer === correctAnswerIndexRef.current ? "feedback correct" : "feedback incorrect"}>
                    <p>Votre réponse : {shuffledOptions[selectedAnswer]}</p>
                    <p>Réponse correcte : {getCorrectAnswerFromShuffled()}</p>
                    <p>Explication : {explanation}</p>
                    <p className="current-score">Score actuel : {score} / {questionIndex + 1}</p>
                </div>
            )}
        </div>
    );
}

export default Question;