import React, { useState, useEffect } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, onNextQuestion, score }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    useEffect(() => {
        setSelectedAnswer(null);
        setIsSubmitted(false);
        const shuffled = [...questionData.options];
        shuffleArray(shuffled);
        setShuffledAnswers(shuffled);
    }, [questionIndex, questionData.options]);

    const handleSubmit = () => {
        setIsSubmitted(true);
        onAnswerSubmit(selectedAnswer);
    };

    const handleNextQuestion = () => {
        setIsSubmitted(false);
        setSelectedAnswer(null);
        onNextQuestion();
    };

    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
                <ul className="options-list">
                {shuffledAnswers.map((answer, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                value={answer}
                                checked={selectedAnswer === answer}
                                onChange={() => setSelectedAnswer(answer)}
                                disabled={isSubmitted}
                            />
                            {answer}
                        </label>
                    </li>
                ))}
            </ul>
            {!isSubmitted && (
                <div className="question-buttons">
                    <button onClick={handleSubmit} disabled={selectedAnswer === null}>
                        Soumettre la réponse
                    </button>
                    <button type="button" className="skip-button" onClick={handleNextQuestion}>
                        Passer la question
                    </button>
                    </div>
                )}
            {isSubmitted && (
                <div className={selectedAnswer === questionData.correctAnswer ? "feedback correct" : "feedback incorrect"}>
                    {selectedAnswer === questionData.correctAnswer ? (
                        <p>Correct ! 🎉 {questionData.explanation}</p>
                    ) : (
                        <p>Incorrect. 😔 La bonne réponse est : <strong>{questionData.correctAnswer}</strong>. {questionData.explanation}</p>
                    )}
                    <p className="current-score">Score actuel : {score} / {questionIndex + 1}</p>
                    <button onClick={handleNextQuestion}>
                        Suivant
                    </button>
        </div>
            )}
        </div>
    );
}

export default Question;