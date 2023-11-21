import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import SemiLibro from '@/components/SemiLibro';

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
    
    return (
        <>
            <div className={styles.megaConte}>
                <div className={styles.subMegaConte}>
                    <TopAppBar title=""/>
                </div>
                
                <div className={styles.subMegaConte}>
                    <div className={styles.contenedor}>
                        <div className={styles.child1}>
                            <div className={styles.child2}>
                                    <Link className={styles.links} href='/alumno'>Principal</Link>
                                    <Link className={styles.links} href='/alumno/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/alumno/prestamos'>Biblioteca</Link>
                                    <Link className={styles.links} href='/alumno/favoritos'>Favoritos</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <h1>Bienvenido, {nombreUser}!</h1>
                            <Divider />
                            <div className={styles.megaConte3}>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Últimas Reservas</p>
                                    <p className={styles.subSubTexto}>No hay reservas</p>
                                    <div className={styles.miniLibro}>
                                        <SemiLibro Titulo='Shrimp and Chorizo Paella' Fecha='September 15, 2016'/>
                                        <SemiLibro Titulo='Shrimp and Chorizo Paella' Fecha='September 15, 2016'/>
                                    </div>
                                    <div>
                                        <Link className={styles.verTodo} href='/alumno/misLibros'>Ver todo</Link>
                                    </div>
                                </div>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Próximos a vencer</p>
                                    <p className={styles.subSubTexto}>No hay libros pedidos</p>
                                    <div className={styles.miniLibro}>
                                        <SemiLibro Titulo='Shrimp and Chorizo Paella' Fecha='September 15, 2016'/>
                                        <SemiLibro Titulo='Shrimp and Chorizo Paella' Fecha='September 15, 2016'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index