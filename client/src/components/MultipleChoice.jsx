import React from 'react'
import { useState } from 'react'
import AudioPlayer from './AudioPlayer'
import './MultipleChoice.scss'
import CorrectAnswer from './CorrectAnswer'

export const MultipleChoice = ({ frogSounds }) => {
    const [currentFrog, setCurrentFrog] = useState(frogSounds[0])
    const [correctAnswer, setCorrectAnswer] = useState(' ')
    const [showAnswer, setShowAnswer] = useState(false)

    function checkAnswer(event) {
        console.log(event.target.id)
        if (event.target.id == currentFrog.id) {
            console.log("Correct!")
            setCorrectAnswer("true")
            displayAnswer()
        } else {
            console.log("Incorrect")
            setCorrectAnswer("false")
            displayAnswer()
        }
    }

    function nextFrog() {
        console.log(currentFrog.species)
        const increment = currentFrog.id + 1;
        console.log(increment)
        setCurrentFrog(frogSounds[increment])
        setShowAnswer(false);
        const allButtons = document.querySelectorAll("input")
        console.log(allButtons)
        allButtons.forEach(button => {
            button.checked = false;
        })
        setCorrectAnswer(' ')
    }

    function displayAnswer() {
        console.log("Clicked!")
        setShowAnswer(true);
        // return (
        //     <CorrectAnswer currentFrog={currentFrog}/>
        // )
    }

    function correctOrIncorrect() {

        if (correctAnswer === "true") {
            return <p className="correct">Correct!</p>
        } else if (correctAnswer === "false") {
            return <p className="incorrect">Incorrect</p>
        }
        // return (
        //     correctAnswer ? <p className="correct">Correct!</p> : <p className="incorrect">Incorrect</p>
        // )
    }

  return (
    <div>
        <AudioPlayer currentFrog={currentFrog} />
        <div className="radio-buttons">
            <label>
                <input type="radio" value={frogSounds[0].species} name="frog" onClick={checkAnswer} id={frogSounds[0].id} />
                American Toad
            </label>
            <label> 
                <input type="radio" value={frogSounds[1].species} name="frog" onClick={checkAnswer} id={frogSounds[1].id} /> 
                American Bullfrog
            </label>
            <label>  
                <input type="radio" value={frogSounds[2].species} name="frog" onClick={checkAnswer} id={frogSounds[2].id}/> 
                Western Chorus Frog
            </label>
            <label>  
                <input type="radio" value={frogSounds[3].species} name="frog" onClick={checkAnswer} id={frogSounds[3].id}/> 
                Cope's Gray Treefrog
            </label>
            <label>  
                <input type="radio" value={frogSounds[4].species} name="frog" onClick={checkAnswer} id={frogSounds[4].id}/> 
                Cricket Frog
            </label>
            <label>  
                <input type="radio" value={frogSounds[5].species} name="frog" onClick={checkAnswer} id={frogSounds[5].id}/> 
                Eastern Gray Treefrog
            </label>
            <label>  
                <input type="radio" value={frogSounds[6].species} name="frog" onClick={checkAnswer} id={frogSounds[6].id}/> 
                Green Frog
            </label>
            <label>  
                <input type="radio" value={frogSounds[7].species} name="frog" onClick={checkAnswer} id={frogSounds[7].id}/> 
                Mink Frog
            </label>
            <label>  
                <input type="radio" value={frogSounds[8].species} name="frog" onClick={checkAnswer} id={frogSounds[8].id}/> 
                Northern Leopard Frog
            </label>
            <label>  
                <input type="radio" value={frogSounds[9].species}  name="frog" onClick={checkAnswer} id={frogSounds[9].id} /> 
                Spring Peeper
            </label>
            <label>  
                <input type="radio" value={frogSounds[10].species}  name="frog" onClick={checkAnswer} id={frogSounds[10].id} /> 
                Wood Frog
            </label>
        </div>
        {correctOrIncorrect()}
        {/* {isCorrect !== null && (
        <p className={`answerStatus ${isCorrect ? 'answerStatus--correct' : 'answerStatus--incorrect'}`}>
          {isCorrect ? 'Correct' : 'Incorrect'}
        </p>
      )} */}

        {/* <button onClick={displayAnswer}>Show Answer</button> */}
        <button onClick={nextFrog}>Next</button>
        <CorrectAnswer currentFrog={currentFrog} showAnswer={showAnswer} correctAnswer={correctAnswer} />
    </div>
  )
}

export default MultipleChoice;


// onClcik, check if ID of button matches ID of Mp3
