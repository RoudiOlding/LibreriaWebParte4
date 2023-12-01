import React, { use, useEffect, useState } from 'react'
import TopAppBar from '@/components/TopBar'
import styles from './index.module.css'
import Link from 'next/link'
import { Divider } from '@mui/material';
import SemiLibro from '@/components/SemiLibro';
import { Newsreader } from 'next/font/google';

function index() {

    const [nombreUser, setNombreUser] = useState('');
    const [librosPedidos, setLibrosPedidos] = useState([]);
    const [librosReservas, setlibrosReservas] = useState([]);

    useEffect(() => {
        let constUsuario = localStorage.getItem('UsuarioActual');
        if (constUsuario) {
            const usuario = JSON.parse(constUsuario);
            setNombreUser(usuario.Nombre);
        } else {
            console.error('No se encontró el usuario en el local storage.');
        }
    }, []);


    useEffect(() => {
        let listLibro = JSON.parse(localStorage.getItem("libros"));
        if(listLibro){
            listLibro.sort((a, b) => b.pedidos + a.pedidos);
            const first2books = listLibro.slice(0,2);
            setLibrosPedidos(first2books);
            console.log("Se guardaron los libros");
        }else{
            console.error("No hay libros");
        }
    }, [])

    useEffect(() => {
        let listLibro = JSON.parse(localStorage.getItem("libros"));
        if(listLibro){
            const fechaActual = new Date();

            listLibro.sort((a, b) => {
                const fechaA = new Date(a.FechaDevolucion);
                const fechaB = new Date(b.FechaDevolucion);

                return fechaA - fechaActual - (fechaB - fechaActual);
            })

            const first2books = listLibro.slice(0,2);
            //setlibrosReservas(first2books);
            console.log("Se guardaron los libros");
        }else{
            console.error("No hay libros");
        }
    },[])
    async function fetchLastBookings() {
        try {
            const resp = await fetch("http://localhost:3100/api/student/getLastBookings", {
                method: "GET"
            });
            if (resp.ok) {
                const data = await resp.json();
                setlibrosReservas(data);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            // Puedes manejar el error de acuerdo a tu lógica
        }
    }
      
    useEffect(() =>{
        fetchLastBookings()
    },[])

    const pedidoCero = librosPedidos.every(x => x.pedidos === 0);
    //const fechaVacia = librosReservas.every(x => x.FechaDevolucion !== '');
    //<SemiLibro Titulo={x.titulo} Fecha={x.FechaDevolucion} Foto={x.FotoLibro}/>
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
                                    <Link className={styles.links} href='/administrador'>Principal</Link>
                                    <Link className={styles.links} href='/administrador/configuracion'>Perfil</Link> 
                                    <Link className={styles.links} href='/administrador/bibleoteca'>Biblioteca</Link>
                                    <p className={styles.version}>Biblio v1.0.2-alpha</p>
                            </div>
                        </div>
                        <div className={styles.subMegaConte2}>
                            <h1>Bienvenido, {nombreUser}!</h1>
                            <Divider />
                            <div className={styles.megaConte3}>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Últimas Reservas</p>
                                    
                                    <div className={styles.miniLibro}>
                                        {librosReservas.length > 0 ? (
                                            
                                            librosReservas.map((x,i) => (
                                                <div key={i}>
                                                    <div>fecha de fin: {x.endDate}</div> 
                                                    <div>id de libro: {x.BookId}</div>
                                                    <Link href="/administrador/bibleoteca" className={styles.verTodo}>
                                                        Ver todo
                                                    </Link>
                                                </div>
                                            ))                                         
                                        ): (
                                            //<p className={styles.subSubTexto}>No existen libros</p>
                                            <p className={styles.subSubTexto}>No hay reservas</p>
                                        )}
                                        
                                    </div>
                                    
                                </div>
                                <div className={styles.subMegaConte3}>
                                    <p className={styles.subSubTitulo}>Los más pedidos</p>
                                    
                                    <div className={styles.miniLibro}>
                                        {librosPedidos.length > 0 ? (
                                            pedidoCero ? (
                                                <p className={styles.subSubTexto}>No hay libros más pedidos</p>
                                            ): (
                                                <div>
                                                    hola
                                                </div>
                                            )       
                                        ): (
                                            <p className={styles.subSubTexto}>No exiten libros </p>
                                        )}
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