import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../ListaOpciones/Boton"

const Formulario = () =>{

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const manejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Manejar envio")
        let datosEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre"
            required 
            valor = {nombre} 
            actualizarValor = {actualizarNombre} />

            <CampoTexto 
            titulo="Puesto" 
            placeholder= "Ingresa puesto"
            required
            valor ={puesto}
            actualizarValor = {actualizarPuesto}/>

            <CampoTexto 
            titulo="Foto"
            placeholder="Ingresa enlace de foto"
            required
            valor = {foto}
            actualizarValor = {actualizarFoto}/>

            <ListaOpciones 
            valor = {equipo} 
            actualizarEquipo = {actualizarEquipo}/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario