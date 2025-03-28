import React, { useState, useEffect, useRef } from 'react';

// Helper function to shuffle array in place (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Question({ questionData, questionIndex, totalQuestions, onAnswerSubmit, userAnswer, score }) { // Receive score prop
    const [selectedOption, setSelectedOption] = useState(userAnswer !== null ? userAnswer : null); // Initialize to userAnswer
    const [shuffledOptions, setShuffledOptions] = useState([]); // State for shuffled options
    const correctAnswerIndexRef = useRef(null); // Ref to store correct answer index
    const [feedbackVisible, setFeedbackVisible] = useState(false); // State to control feedback visibility

    useEffect(() => {
        setSelectedOption(null); // Reset selectedOption when questionIndex changes
        setFeedbackVisible(false); // Hide feedback when question changes

        // Create a copy of options and shuffle it
        const optionsCopy = [...questionData.options];
        shuffleArray(optionsCopy);
        setShuffledOptions(optionsCopy);

        // Find and store the index of the correct answer in the ORIGINAL options array
        correctAnswerIndexRef.current = questionData.options.indexOf(questionData.correctAnswer);

    }, [questionIndex, questionData.options, questionData.correctAnswer]); // Run effect when questionIndex or questionData.options changes


    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value); // Just update selectedOption, don't show feedback yet
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit called"); // ADDED console.log
        console.log("selectedOption:", selectedOption); // ADDED console.log
        if (selectedOption !== null) {
            onAnswerSubmit(selectedOption); // Submit answer now in handleSubmit
            setFeedbackVisible(true); // Show feedback now in handleSubmit
            console.log("feedbackVisible set to true"); // ADDED console.log
        } else {
            alert("Veuillez sélectionner une réponse avant de soumettre ou passer.");
        }
    };

    const handleSkipQuestion = () => {
        onAnswerSubmit(null); // Pass null to indicate skipped question
        setSelectedOption(null); // Reset selected option
        setFeedbackVisible(false); // Hide feedback when skipping (though it should already be hidden)
    };


    // Function to get the correct answer from shuffled options using the stored index
    const getCorrectAnswerFromShuffled = () => {
        if (correctAnswerIndexRef.current !== null) {
            return shuffledOptions[correctAnswerIndexRef.current];
        }
        return questionData.correctAnswer; // Fallback in case of error
    };


    return (
        <div className="question-card">
            <h3>Question {questionIndex + 1} / {totalQuestions}</h3>
            <p className="scenario">{questionData.scenario}</p>
            <p className="question-text">{questionData.question}</p>
            <form onSubmit={handleSubmit}> {/* Re-add onSubmit to form */}
                <ul className="options-list">
                    {shuffledOptions.map((option, index) => ( // Use shuffledOptions for rendering
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${questionIndex}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange} /* handleOptionChange only updates selectedOption */
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="question-buttons">
                    <button type="submit" disabled={selectedOption === null}>Soumettre la réponse</button> {/* Re-add Submit Button */}
                    <button type="button" className="skip-button" onClick={handleSkipQuestion}>Passer la question</button>
                </div>

                {feedbackVisible && ( // Conditionally render feedback based on feedbackVisible state
                    <div className={selectedOption === getCorrectAnswerFromShuffled() ? "feedback correct" : "feedback incorrect"}> {/* Compare with shuffled correct answer */}
                        {selectedOption === getCorrectAnswerFromShuffled() ? (
                            <p>Correct ! 🎉 {questionData.explanation}</p>
                        ) : (
                            <p>Incorrect. 😔 La bonne réponse est : <strong>{getCorrectAnswerFromShuffled()}</strong>. {questionData.explanation}</p>
                        )}
                        <p className="current-score">Score actuel : {score} / {questionIndex + 1}</p> {/* Display score here */}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Question;