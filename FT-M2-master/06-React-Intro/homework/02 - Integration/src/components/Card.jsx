import React from "react";

export default function Card(props) {
   const { character, onClose } = props;

   if (!character) {
      return <div>No se ha proporcionado un personaje.</div>;
   }

   const { name, status, species, gender, origin, image } = character;

   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <img src={image} alt='imagen' />
      </div>
   );
}
