import React from "react"
import Questions from "./Questions"
import AnswerCheck from "./AnswerCheck"

export default function App() {
    
    const defaultState = () => {
        let blankState = []
        for (let n = 0; n < 4; n ++) {
            blankState.push({
            question: "Loading...",
            correct_answer: "...",
            randomized_answers: ["...","...","...", "..."],
            id: Math.floor(Math.random() * 999999999),
            chosen_answer: "none",
            })
        }
        return blankState
    }
    
    const [questions, setQuestions] = React.useState(defaultState)
    
    const [correctCounter, setCorrectCounter] = React.useState({
        totalCorrect: 0,
        currentCorrect: 0,
        check: false,
        reset: 0,
    })
    
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
            .then(response => response.json())
            .then(data => setQuestions(data.results.map(result => ({
                question: result.question,
                correct_answer: result.correct_answer,
                randomized_answers: shuffleArray([...result.incorrect_answers, result.correct_answer]),
                id: Math.floor(Math.random() * 999999999),
                chosen_answer: "none",
                }))))
    }, [correctCounter.reset])

    function shuffleArray(array) {
        return [...array].sort(() => 0.5 - Math.random())
    }
      
    function chooseAnswer(event) {
        setQuestions((prevQuestions) => (
            prevQuestions.map(quest => {
                if (quest.id == event.target.id) {
                    return {...quest, chosen_answer: event.target.value}
                } else {
                    return quest
                }
            })
        ))
    }
    
    function checkAnswers() {
        let correct = 0
        for (let n = 0; n < questions.length; n++) {
            if (questions[n].correct_answer == questions[n].chosen_answer) {
                correct += 1
                }
        }
        setCorrectCounter(prevState => ({
            totalCorrect: prevState.totalCorrect + correct,
            currentCorrect: correct,
            check: true,
            reset: prevState.reset,
        }))
    }
    
    function reset() {
            setQuestions(defaultState)
            setCorrectCounter(prevState => ({
            totalCorrect: prevState.totalCorrect,
            currentCorrect: 0,
            check: false,
            reset: prevState.reset + 1,
        }))
    }
    
    const questionComponents = questions.map(q => (<Questions
                                                    quest={q.question}
                                                    randAnswers={q.randomized_answers} 
                                                    key={q.id}
                                                    chooseAnswer={chooseAnswer}
                                                    id={q.id}
                                                    chosenAns={q.chosen_answer}
                                                    correctAns={q.correct_answer}
                                                    check={correctCounter.check}
                                                    />))
    
    
    return (
        <div className="answers-div">
        <h1>CompSci Trivia!</h1>
        {questionComponents}
        <AnswerCheck 
            clickHandler={checkAnswers}
            resetHandler={reset}
            correctNumber={correctCounter}
                    />
        </div>
    )
}