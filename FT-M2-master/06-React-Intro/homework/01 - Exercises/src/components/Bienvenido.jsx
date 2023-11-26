import React from "react";
import { Botones, Botones2 } from "./botones";

const studentName = "Mirko Miler";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
<div>
  <h1>TITULOOOOOOOOOOOOOOO!!</h1>
  <h3>{studentName}</h3>  
  <ul>
{/* MANERA 1 */}
  {techSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
   ))}
{/* MANERA 2 */}
    {/* <li>Html</li>
    <li>Css</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Redux</li> */}


  </ul>
  <Botones alerts={alerts} />
 <Botones2 alerts={alerts} />
  
</div>



)
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
