import React, { useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import BusquedaAlum from '@/components/BusquedaAlum';
import ChipFiltro from '@/components/Chip4';
import CheckFilter from '@/components/CheckBox';
import Boton3 from '@/components/Button3';
import BasicButtons2 from '@/components/Button2';

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
                            <h1>Busqueda </h1>
                            <Divider />
                            <div className={styles.busqueda}>
                                <div className={styles.textField}>
                                    <div className={styles.subTextField}>
                                        <BusquedaAlum titulo='Ingrese la palabra clave' ancho='550'/>
                                        <BusquedaAlum titulo='Tipo de recurso' ancho='400'/>
                                    </div>
                                    <div className={styles.tematica}>
                                        <ChipFiltro texto='Tema 1'/>
                                        <ChipFiltro texto='Tema 2'/>
                                        <ChipFiltro texto='Tema 3'/>
                                        <ChipFiltro texto='Tema 4'/>
                                        <ChipFiltro texto='Tema 5'/>
                                        <ChipFiltro texto='Tema 3'/>
                                        <ChipFiltro texto='Tema 4'/>
                                        <ChipFiltro texto='Tema 5'/>
                                        <ChipFiltro texto='Tema 3'/>
                                        <ChipFiltro texto='Tema 4'/>
                                        <ChipFiltro texto='Tema 4'/>
                                    </div>
                                </div>
                                <div className={styles.filtrado}>
                                    <p className={styles.label}>Incluir búsqueda en</p>
                                    <CheckFilter texto='Filtro 1'/>
                                    <CheckFilter texto='Filtro 2'/>
                                    <CheckFilter texto='Filtro 3'/>
                                    <CheckFilter texto='Filtro 4'/>
                                    <div className={styles.opciones}>
                                        <BasicButtons2 texto='Limpiar' ancho='90'/>
                                        <Boton3 texto='Buscar' ancho='40px' estilo='contained'/>
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