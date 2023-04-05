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
      const filterCursos=cursos.filter(curso=>curso.id !== id)
      setCursos(filterCursos)
    }
  return (
    <div>
        <h3>CURSOS UNISABANA</h3>
        <hr/>
        <div>
            <div>
                <h2>Agregue un curso</h2>
                <form onSubmit={addCurso}>
                    <input
                        type="text"
                        placeholder="Ingrese el curso..."
                        onChange={(text) => setCurso(text.target.value)}
                        value={curso}                    
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
            <hr/>
        </div>
        <div>
          <h2>Lista de cursos</h2>
          <ul>
            {
              cursos.map((curso)=>(
                <li key={curso.id}>
                  <span>{curso.name}</span>
                  <button 
                    onClick={()=>deleteCurso(curso.id)}
                  >
                    Eliminar
                  </button>dw
                </li>
              ))
            }
          </ul>
    </div>




    </div>
  )
}
