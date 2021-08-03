import Boton from './components/Boton'
import Boton2 from './components/Boton2'

function App() {

  return (  
      <div class="jumbotron">
        <h1 class="display-4">Helle world !!</h1>
        <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component <br/>
            for alling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
            It ussses unity classes for typhography and spacing to space content out <br/>
            whithin the larger container
        </p>
        <a href="" class="btn btn-primary btn-lg"  role="button">Learn More</a> 
        <br/>
        <br/>

        <Boton texto="Clickeame ahora !" /> 

        <br/>
        <br/>
        <Boton2 texto="soy el boton 2 !" />

     

    </div>
  );
}

export default App;
