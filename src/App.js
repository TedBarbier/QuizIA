import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
import originalQuestionsData from './questionsData';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Importez les styles CSS de KaTeX

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function App() {
    const [shuffledQuestionsData, setShuffledQuestionsData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);

    useEffect(() => {
        const questionsCopy = [...originalQuestionsData];
        shuffleArray(questionsCopy);
        setShuffledQuestionsData(questionsCopy);
    }, []);

    const handleAnswerSubmit = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer(null);
    };

    if (!shuffledQuestionsData || shuffledQuestionsData.length === 0) {
        return <div>Loading quiz...</div>;
    }

    return (
        <div className="app">
            <h1>Intelligece Artificielle - Partiel d'Entraînement</h1>

            {currentQuestionIndex < shuffledQuestionsData.length ? (
            <>
            <p className="scenario-intro">
            Bienvenue au Quiz d'Entraînement en Intelligence Artificielle ! <br/>
            Testez vos connaissances sur les concepts fondamentaux de l'IA, des agents intelligents aux algorithmes de recherche et d'apprentissage. <br/>
            Ce quiz vous aidera à évaluer votre compréhension des principes de l'Intelligence Artificielle.
            </p>
            <Question
            questionData={shuffledQuestionsData[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={shuffledQuestionsData.length}
            onAnswerSubmit={handleAnswerSubmit}
            onNextQuestion={handleNextQuestion}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            score={score}
        />
    </>
) : (
    <div className="results">
        <h2>Résultats du Quiz</h2>
        <p>Votre Score : {score} / {shuffledQuestionsData.length}</p>
        <button onClick={() => {
            const questionsCopy = [...originalQuestionsData];
            shuffleArray(questionsCopy);
            setShuffledQuestionsData(questionsCopy);
            setCurrentQuestionIndex(0);
            setScore(0);
            setUserAnswer(null);
        }}>Recommencer le Quiz</button>
    </div>
)}
<Footer />
</div>
);
}

export default App;