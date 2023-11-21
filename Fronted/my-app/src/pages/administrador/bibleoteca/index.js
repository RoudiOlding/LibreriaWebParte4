import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider, Button } from '@mui/material';
import Boton3 from '@/components/Button3';
import BusquedaAdmin from '@/components/BusquedaAdmin';
import Libro from '@/components/Libro';
import Pagination2 from '@/components/Pagination';

function index() {
    const [nombreUser, setNombreUser] = useState('');

    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);

    const [libros, setLibros] = useState([]);

        const getDataFromLocalStorage = () => {
        try {
            const librosLocal = localStorage.getItem('libros');
            if (librosLocal) {
            const nuevosLibros = JSON.parse(librosLocal);
            setLibros(nuevosLibros);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
        };
    
        useEffect(() => {
            getDataFromLocalStorage();
        }, [])
    
        console.log(libros.length)
    
        const numpages = Math.ceil(libros.length / 3);
    
    return (
        <>
            <div className={styles.megaConte}>
                <div className={styles.subMegaConte}>
                    <TopAppBar title="Biblioteca"/>
                </div>
                
                <div className={styles.subMegaConte}>
                    <div className={styles.contenedor}>
                        <div className={styles.child1}>
                            <div className={styles.child2}>
                                    <Link className={styles.links} href='/administrador'>Principal</Link>
                                    <Link className={styles.links} href='/administrador/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/administrador/bibleoteca'>Biblioteca</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <div className={styles.conteAgregar}>
                                <h1>Biblioteca</h1>
                                <div className={styles.subConteAgregar2}>
                                    <Boton3 texto='Añadir un nuevo recurso' estilo='contained'/>
                                </div>
                            </div>
                            <Divider />
                            <div className={styles.conteAgregar2}>
                                <BusquedaAdmin />
                            </div>
                            <div className={styles.conteAgregar3}>
                                <Libro Titulo='Libro Numero 1' Isbn='11111111' Autor='Autor 1' Editor= 'Editor 1'/>
                                <Libro Titulo='Libro Numero 2' Isbn='22222222' Autor='Autor 2' Editor= 'Editor 2'/>
                                <Libro Titulo='Libro Numero 3' Isbn='33333333' Autor='Autor 3' Editor= 'Editor 3'/>
                            </div>
                        </div>
                        <div>
                            <Pagination2 maxPage= {numpages} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index