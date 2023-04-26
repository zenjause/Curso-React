import "./equipo.css"
import Colaborador from "../Colaborador"

const Team = (props) =>{
    //Destructuracion

    const { colorPrimario, colorSecundario,titulo} = props.datos
    const {colaboradores} = props

    console.log(colaboradores.length > 0);
    const stiloTitulo = {borderColor: colorPrimario}

    return <>{ colaboradores.length> 0 && 
        <section className= "equipo" style={{ backgroundColor: colorSecundario}}>
        <h3 style={stiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
        {
            colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}/>)
        }
        
        </div>
    </section>}
    </>
}
export default Team
