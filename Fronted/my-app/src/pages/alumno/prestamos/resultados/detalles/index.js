import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import DetalleLibro from '@/components/DetalleLibro';
import Boton3 from '@/components/Button3';
import DataPickerFinal from '@/components/DataPickerFinal';
import Alerts from '@/components/Alerts';

function index() {
    
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
                            <div className={styles.subSubMegaConte2}>
                                <h1>Citas</h1>
                                <Divider />
                                <DetalleLibro 
                                    Titulo='Primer Libro'
                                    Autor='Primer Autor'
                                    Estado='Disponible'
                                    FotoUrl='https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg'
                                    Parrafo= 'Este libro sólo tiene un objetivo principal: provocar el inicio de un nuevo campo de estudio: la programación informática como actividad humana o, en pocas palabras, la psicología de la programación informática. Todos los demás objetivos están subordinados a éste. Por ejemplo, he intentado que el libro sea interesante y no técnico, en la medida de lo posible, para animar al mayor número posible de personas a leerlo: no sólo programadores, sino gestores de programación y otras personas relacionadas con la programación en las muchas formas en que estamos relacionados con la programación hoy en día. Lo que intento conseguir es que el lector diga, al terminar el libro: "Sí, la programación no es sólo una cuestión de hardware y software. A partir de ahora tendré que ver las cosas de otra manera".'
                                    NombreEditorial='Editorial 1'
                                />
                            </div>
                            <div className={styles.reservar}>
                                <h4 className={styles.tituloReservar}>Reservar</h4>
                                <DataPickerFinal />
                                <Alerts
                                    accion1= 'Reservar'
                                    estilo='contained'
                                    ancho='200'
                                    titulo='Reserva completada'
                                    subtexto='La reserva del curso se ha realizado
                                    con éxito. Este debe ser devuelto hasta el día XX/YY/ZZ' 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index