import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar]= useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])

  const [equipos,actualizarEquipos] = useState([
    {
      titulo:"Programación",
      colorPrimario:"#57C278" ,
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69" ,
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF" ,
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29" ,
      colorSecundario:"#FFEEDF"
    }


])

  //ternario --> condicion? seMuestra : noseMuestra
  //condicion && seMuestra

  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador= (colaborador) =>{
    console.log("nuevo colaborador", colaborador)

    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador

  const eliminarColaborador = () =>{
    console.log("eliminar colaborador");
  }

  // Actualizar color de equipo
  const actualizarColor = (color,titulo) =>{
    console.log("actualizar color", color,titulo)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}

      {
      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador = {registrarColaborador}

      /> 
      }
      
      <MiOrg  cambiarMostrar = {cambiarMostrar}/>
      
      {
        equipos.map( (equipo)=> <Team 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        />)
      }

      <Footer/>


    </div>

  );
};

export default App;


