import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge, Button } from 'react-bootstrap';

const Alumno = ({alumno, borrarAlumno}) => {
    return (

        <Fragment>
            <Badge bg="success">
                <p>ALUMNO: {alumno.id}</p>
                <p>NOMBRE: {alumno.nombre}</p>
                <p>DNI: {alumno.dni}</p>
                <p>CURSO: {alumno.curso}</p>
                <Button
                    variant="outline-danger"
                    onClick={() => borrarAlumno(alumno.id)}
                >Borrar alumno</Button>
            </Badge>
        </Fragment>
        
        );
}

export default Alumno;