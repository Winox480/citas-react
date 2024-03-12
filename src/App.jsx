import { useState, useEffect } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"
function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS =  [];
  //     setPacientes(pacientesLS)
  //   }

  //   obtenerLS();
  // }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }


  //Aqui se pueden crear funciones
  // const sumar = () => {

  //   const numero = 6;

  //   if (numero > 5) {
  //     console.log('Si es Mayor')
  //   } else
  //     console.log('No es may')
  // }

  // sumar();
  return (
    <div className="container mx-auto mt-20">
      <Header

      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )

}

export default App
