

function Boton(props){

    let texto = props.texto
    

    return (
        <div>
            
            <span className="btn btn-danger">{ texto }</span>

        </div>
    )

}
export default Boton;