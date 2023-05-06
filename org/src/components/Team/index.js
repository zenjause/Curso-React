import "./equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Team = (props) =>{
    //Destructuracion

    const { colorPrimario, colorSecundario,titulo,id} = props.datos
    const {colaboradores, eliminarColaborador,actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.6)
    }

    const stiloTitulo = {borderColor: colorPrimario}

    return <>{ colaboradores.length> 0 && 
        <section className= "equipo" style={obj}>
        <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario,0.6)}
            onChange={ (event)=>{
                actualizarColor(event.target.value,id);
            }}
        
        
        
        >
        </input>
        <h3 style={stiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
        {
            colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}
            eliminarColaborador = {eliminarColaborador}
            like= {like}
            />)
        }
        
        </div>
    </section>}
    </>
}
export default Team
