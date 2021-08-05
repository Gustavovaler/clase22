
import { useState } from 'react'
import axios  from 'axios'
import Formulario from './components/Formulario';

function App() {
  
    const [ personaje , setPersonaje ] = useState('')

    const [id_personaje, setId_personaje ] = useState(3); 


    axios.get(`https://swapi.dev/api/people/${id_personaje}`)
        .then(res => {
          setPersonaje(res.data.name)})

  return (  
      <div className ="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                  <h3>{ personaje }</h3>
                </div>
                <div className="card-body">
                    <p></p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success btn-block" onClick={() => setId_personaje(4)}>Cambiar personaje</button>
                </div>
            </div>

          </div>
        </div> 
      
        {/* formulario */}
        <Formulario/>
    </div>
  );
}

export default App;
