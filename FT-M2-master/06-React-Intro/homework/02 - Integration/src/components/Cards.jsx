import React from "react";
import Card from './Card';

export default function Cards(props) {
   const {characters}=props;
   return (
   <div>
      {characters.map((character)=>(
         <Card key={character.id} character={character} onClose={props.onClose}/>
      ))}
   </div>
   );
}