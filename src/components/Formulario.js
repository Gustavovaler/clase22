import axios from 'axios'
import {Fragment, useState} from 'react'

function Formulario() {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido:''
    })

    const cargarDatos = (evento) => {
        //console.log(evento.target.value)
        setDatos({
            ...datos,
            [evento.target.name] : evento.target.value
        })
    }

    const enviarDatos = (evento) => {
        evento.preventDefault();
        console.log(datos);
        axios.post('url del backend', datos)
            .then( res => res.data)       
    }

    return(
        <Fragment >
            <form className="row mt-5" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        name="nombre"
                        type="text"
                        className="form-control m-3"
                        onChange={cargarDatos}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        name="apellido"
                        type="text"
                        className="form-control m-3"
                        onChange={cargarDatos}
                    />
                </div>
                <div className="col-md-3">
                    <button
                        type="submit"
                        className=" btn btn-info m-3"
                    >
                    Enviar    </button>
                </div>

            </form>
        </Fragment>
    )
}export default Formulario;