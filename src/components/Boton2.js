import React from 'react';


class Boton2 extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
            
                <span className="btn btn-info"> { this.props.texto } </span>

            </div>
        )
    }

}
export default Boton2