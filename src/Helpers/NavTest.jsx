import React, { useContext } from "react";
import { authContext } from "../Contexts/AuthProvider";
import {Link} from 'react-router-dom';



function NavTest(){

    const { auth } = useContext(authContext);

    if (auth.roll==1){
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/alumno1">kardex</Link>
                    </li>

                    <li>
                        <Link to="/alumno2">Horario</Link>
                    </li>

                </ul>
            </nav>
        );
    }

    if(auth.roll==2){
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/docente1">Calificaciones</Link>
                    </li>

                    <li>
                        <Link to="/docente2">Asistencias</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavTest;

