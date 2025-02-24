import React, { useState } from "react";
import "../styles/Characterquiz.css";

function Characterquiz({ onCharacterSelected }) {
  const questions = [
    { question: "What's your combat style?", options: ["Lightsaber Master", "Blaster Expert", "Tactical Genius", "None"] },
    { question: "Which group do you align with?", options: ["Jedi Order", "Rebel Alliance", "Galactic Empire", "Neutral"] },
    { question: "What's most important to you?", options: ["Honor", "Survival", "Power", "Wealth"] },
    { question: "Where would you live in the Star Wars universe?", options: ["Dagobah", "Tatooine", "Coruscant", "Cloud City"] },
  ];

  const [answers, setAnswers] = useState([]);
  const [characterName, setCharacterName] = useState("");

  const handleSelect = (index, option, event) => {
    const updatedAnswers = [...answers]; // Creates a copy
    updatedAnswers[index] = option; // Updates answer
    setAnswers(updatedAnswers); // Updates state
    event.target.style.backgroundColor = "blue";
  };

  const determineCharacter = () => {
    const jediAnswers = ["Lightsaber Master", "Jedi Order", "Honor", "Dagobah"];
    const sithAnswers = ["TIE Fighter", "Galactic Empire", "Power", "Coruscant"];
    const rebelAnswers = ["Blaster Expert", "Rebel Alliance", "Survival", "Tatooine"];
    const bountyHunterAnswers = ["Tactical Genius", "Neutral", "Wealth", "Cloud City"];

    // Tallys up the number of answers for each catergory
    const jediScore = answers.filter((answer) => jediAnswers.includes(answer)).length; 
    const sithScore = answers.filter((answer) => sithAnswers.includes(answer)).length;
    const rebelScore = answers.filter((answer) => rebelAnswers.includes(answer)).length;
    const bountyHunterScore = answers.filter((answer) => bountyHunterAnswers.includes(answer)).length;

    let selectedCharacter = "Chewbacca"; // Default character

    if (jediScore >= 3) {
      selectedCharacter = "Obi-Wan Kenobi";
    } else if (jediScore === 2) {
      selectedCharacter = "Yoda";
    } else if (sithScore >= 3) {
      selectedCharacter = "Darth Vader";
    } else if (sithScore === 2) {
      selectedCharacter = "Emperor Palpatine";
    } else if (rebelScore >= 3) {
      selectedCharacter = "Leia Organa";
    } else if (rebelScore === 2) {
      selectedCharacter = "Han Solo";
    } else if (bountyHunterScore >= 3) {
      selectedCharacter = "Boba Fett";
    } else if (bountyHunterScore === 2) {
      selectedCharacter = "Din Djarin (Mando)";
    }

    setCharacterName(selectedCharacter); // Updates character state with the character result
    onCharacterSelected(selectedCharacter); // Fetch character results using the App.js API call
    // Reset all buttons to orange after submission
    document.querySelectorAll("button").forEach((btn) => (btn.style.backgroundColor = "#ffaa00"));
  };

  return (
    <div className="quiz-container">
      <h2>Which Star Wars Character Are You?</h2>
      {questions.map((q, index) => ( // maps through questions and assigns them indexes 
        <div key={index} className="question">
          <p>{q.question}</p>
          {q.options.map((option) => ( // maps through options and assigns them indexes 
            <button 
            key={option} 
            onClick={(event) => handleSelect(index, option, event)}
            > {/*when answer is selected it is updated with handler*/}
              {option}
            </button>
          ))}
        </div>
      ))}
      <button onClick={determineCharacter} className="submit-btn">
        Get My Star Wars Character
      </button>

      {/* Reveals the character */}
      {characterName && <h3>You are {characterName}!</h3>}
    </div>
  );
}

export default Characterquiz;
