import React, {useState} from "react";


export const App = () => {

    const [curso , setCurso] = useState("");
    const [cursos, setCursos] = useState([{id: 2, name: 'Ingles 4'}, {id: 3, name: 'Física Mecánica'}])

    const CourseItem = [curso, setCurso];
    const CourseList = [cursos, setCursos];

    const addCurso = (event) => {
        event.preventDefault();

        const newCurso = {
            id: Math.floor(Math.random() * 100),
            name: curso
        }

        const num= newCurso.name

        if (curso.trim().length < 1 || typeof(num) === 'number') return;
      
        const existeCurso = cursos.some((element) => element.name === newCurso.name);
        if (existeCurso) {
            window.alert("El curso ya existe!!!");
        } else {
            setCursos([...cursos, newCurso]);
        }   
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
        <div>
          <h2>Lista de cursos</h2>
          <ul>
            {
              cursos.map((curso)=>(
                <li key={curso.id}>
                    <span>{curso.id}</span>
                    &nbsp; &nbsp;
                  <span>{curso.name}</span>
                  <button 
                    onClick={()=>deleteCurso(curso.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))
            }
          </ul>
    </div>
    </div>
    </div>
  )
}
