import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import styles from './Libro.module.css';
import Boton3 from '@/components/Button3';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function Libro2({ Titulo, Isbn, Foto, Autor, Editor , Accion, LibroId, Estado, Editorial, Topico, IdAlumno}) {
    const TituloIniciales = Titulo
        ?.split(' ')
        ?.slice(0, 2)
        ?.map(word => word.charAt(0).toUpperCase())
        ?.join('');

    const [libroAct, setLibroAct] = useState();
    const [fecha, setFecha] = useState('');
    const [libros, setLibros] = useState([]);
    const [userAct, setUserAct] = useState();
    const [users, setUsers] = useState([]);

    const devolverLibro = (LibroId, IdAlumno) => {
        //Actualizar la listo de libros
        const newLibros = JSON.parse(localStorage.getItem('libros'));
        setLibros(newLibros)
        const libroAfectado = newLibros.find(libro => libro.id === LibroId);

        //Encontrar alumno
        const newUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        setUsers(newUsuarios)
        const usuarioAfectado = newUsuarios.find(usuario => usuario.Id === IdAlumno);

        if(libroAfectado && usuarioAfectado){
            const nuevosValores = {
                disponibilidad: true,
                FechaDevolucion: '',
            }
            
            Object.assign(libroAfectado, nuevosValores);

            const nuevaListaLibros = newLibros.map(libro => (libro.id === LibroId ? libroAfectado : libro));
            setLibros(nuevaListaLibros);
            localStorage.setItem('libros', JSON.stringify(nuevaListaLibros));

            const finalLibros = usuarioAfectado.librosPrestados.filter(usuarioAfectado => usuarioAfectado.id !== LibroId)

            localStorage.setItem('UsuarioActual', JSON.stringify(usuarioAfectado));
            const nuevaListaUsuarios = newUsuarios.map(usuario => (usuario.Id === IdAlumno ? usuarioAfectado : usuario));
            setUsers(nuevaListaUsuarios);
            localStorage.setItem('usuarios', JSON.stringify(nuevaListaUsuarios));
            window.location.reload()

        } else {
            console.error(`No se encontró ningún libro con el id ${IdAlumno}`)
            console.error(`No se encontró ningún libro con el id ${LibroId}`)
        }

        //Subir el nuevo libro del usuario a su listo de libros
    }

    return (
        <>
            <Card sx={{ maxWidth: 360, borderRadius: '15px', border: '0.5px solid #D9D9D9', width: '314px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: purple[800] }} aria-label="recipe">
                            {TituloIniciales}
                        </Avatar>
                    }
                    title={
                        <>
                            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{Titulo}</span>
                                <IconButton aria-label="add to favorites" sx={{ ml: 10 }}>
                                    <FavoriteIcon />
                                </IconButton>
                            </div>
                        </>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Foto}
                    alt="La imagen no está disponible"
                />
                <CardContent>
                    <p className={styles.isbn}>ISBN: {Isbn}</p>
                    <p className={styles.autor}>
                        Autor: <span className={styles.autor2}>{Autor}</span>
                    </p>
                    <p>
                        <span className={styles.editor}>Editor: </span>
                        <span className={styles.editor2}>{Editor}</span>
                    </p>
                    <div className={styles.reservar} onClick={() => devolverLibro(LibroId, IdAlumno)}>
                        <Boton3 texto={Accion} estilo='contained' ancho='100' />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default Libro2;
