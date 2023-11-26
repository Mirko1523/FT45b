import React, { useState } from "react";

export default function SearchBar(props) {
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = () => {
      props.onSearch(searchTerm);
      setSearchTerm("");  // Corregido aquí
   }

   return (
      <div>
         <input 
            type='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
