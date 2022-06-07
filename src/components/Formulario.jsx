import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregarAlumno}) => {

    //Creo un alumno vacío y lo inicializamos con useState

    const [alumno, editarAlumno] = useState({
        nombre: "",
        dni: "",
        curso: ""
    });

    //Creo otro state para el error de validación del formulario

    const [error, setError] = useState(false);

    //Extraer los valores de alumno

    const { nombre, dni, curso } = alumno;

    //Recibimos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarAlumno({
            ...alumno,
            [e.target.name]: e.target.value,
        })
    }

    //Función para cuando se envía el formulario
    const submitForm = (e) => {
        e.preventDefault();

        //Validar el formulario
        if (nombre.trim() === '' || dni.trim() === '' || curso.trim() === '') {
            setError(true);
            return;
        }

        //Quitar el mensaje de error
        setError(false);

        //Poner un id
        alumno.id = uuidv4();
        console.log(alumno);

        //Generar el alumno
        agregarAlumno(alumno);

        //Limpiar el formulario
        editarAlumno({
            nombre: "",
            dni:"",
            curso:""
        })
    };

    return (

        <Fragment>

            <Form
                onSubmit={submitForm}
                className="space-y-2 text-2xl text-purple-600 w-2/6"
            >
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        
                        type="text"
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="DNI sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange}
                        value={dni}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Curso</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Escribe el curso el cual estás interesado"
                        name="curso"
                        onChange={handleChange}
                        value={curso}
                    />
                </Form.Group>     
                <Button
                    variant="primary"
                    type="submit">
                    Ingresar Alumno
                </Button>
            </Form>
            {
                error
                    ? <h4 className='text-red-600 font-bold'> Debes completar todos los campos</h4>
                    : null
            }
        </Fragment>

    );
}

export default Formulario;