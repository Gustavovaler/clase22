//import Boton from './components/Boton'
import { useState } from 'react'
import axios  from 'axios'

function App() {

  // const botones = {
  //   boton1: "click 1", 
  //   boton2: "click2",
  //   tipo1:"success", 
  //   tipo2:"warning"
  // }
  //   let parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione aut aliquam consequatur ipsum reiciendis optio doloribus accusantium, quaerat vitae culpa asperiores sunt totam nisi."

  //   const [texto, setTexto] = useState('Aca va el texto')

  //   const cambiar_texto = () => {
  //       setTexto( parrafo )
  //   }
    // ----------------------------------



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
    </div>
  );
}

export default App;
