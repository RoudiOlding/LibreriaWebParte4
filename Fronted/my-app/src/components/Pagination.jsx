import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './Pagination.module.css'

function Pagination2({maxPage}) {
    const [page, setPage] = React.useState(1);

    useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
        setPage(parseInt(storedPage, 10));
    }
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
        localStorage.setItem('currentPage', value);
    };
    
    return (
        <div className={styles.conte1}>
            <Stack spacing={2} display='flex' flexDirection='row'>
                <div className={styles.page}>
                    <p>Pagina {page} de {maxPage} </p>
                </div>
                <Pagination count= {maxPage} page={page} onChange={handleChange} className={styles.page2}/>
            </Stack>
        </div>       
    );
}

export default Pagination2