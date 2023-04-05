import React, {useState} from "react";


export const App = () => {

    const [curso , setCurso] = useState("");
    const [cursos, setCursos] = useState([{id: 2, name: 'Ingles 4'}, {id: 3, name: 'Física Mecánica'}])

    const addCurso = (event) => {

        event.preventDefault();

        const newCurso = {
            id: Math.floor(Math.random() * 100),
            name: curso
        }

        const num= newCurso.name

        if (curso.trim().length < 1 || typeof(num) === 'number') return;

        setCursos([...cursos, newCurso])   
        
        setCurso('');
    }      

    const deleteCurso=(id)=>{
      
    }
  return (
    <div>App</div>
  )
}
