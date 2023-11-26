import React, { useState } from "react";
import Card from "./Card";
import charactersData from "./data";

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClose = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      {selectedCharacter && (
        <Card character={selectedCharacter} onClose={handleCardClose} />
      )}

      {charactersData.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <button onClick={() => setSelectedCharacter(character)}>
            Ver Detalles
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
