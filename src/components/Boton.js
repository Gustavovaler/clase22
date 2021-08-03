

function Boton(props){

    let texto = props.texto
    let clases = `btn btn-${props.tipo}`

    return (
        <div>
            
            <span className={clases}>{ texto }</span>

        </div>
    )

}
export default Boton;