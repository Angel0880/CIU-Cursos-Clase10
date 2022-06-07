import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Alumno from './components/Alumno';

function App() {

    //Creamos un state vacío para los alumnos
    const [alumnos, editarAlumnos] = useState([]);

    //Funcion que toma el alumno nuevo y lo mete en la lista de alumnos
    const agregarAlumno = (alumno) => {
      editarAlumnos([
        ...alumnos,
        alumno
      ])
    };

    //Función para borrar alumnos de la lista
    const borrarAlumno = (id) => {
      const listaAlumnos = alumnos.filter(alumno => alumno.id !== id);
      editarAlumnos(listaAlumnos);
    };

    return (

      <Fragment>
        <Container className='text-3xl space-y-4 text-black font-mono font-bold'>
          <Row>
            <Col>Cursos de Lenguajes de Programación</Col>
          </Row>
          <Row>
            <Col>
                <Formulario
                    agregarAlumno={agregarAlumno}
                />
            </Col>
          </Row>
          <Row className="px-8 py-8 space-y-6">
            <Col>Lista de alumnos interesados </Col>
              {
                alumnos.map(
                  alumno =>
                    <Alumno
                      alumno={alumno}
                      key={alumno.id}
                      borrarAlumno={borrarAlumno}
                    />
                )
              }
          </Row>
      </Container>
    </Fragment>
  );
}

export default App;
