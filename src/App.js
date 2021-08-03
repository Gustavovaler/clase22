import Boton from './components/Boton'
import { useState } from 'react'

function App() {

  const botones = {
    boton1: "click 1", 
    boton2: "click2",
    tipo1:"success", 
    tipo2:"warning"
  }
    let parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione aut aliquam consequatur ipsum reiciendis optio doloribus accusantium, quaerat vitae culpa asperiores sunt totam nisi."

    const [texto, setTexto] = useState('Aca va el texto')

    const cambiar_texto = () => {
        setTexto( parrafo )
    }

  return (  
      <div class="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                  <h3>Aca va el titulo</h3>
                </div>
                <div className="card-body">
                    <p> { texto } </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success btn-block" onClick={cambiar_texto}>Cambiar datos</button>
                </div>
            </div>

          </div>
        </div> 
    </div>
  );
}

export default App;
