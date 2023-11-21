// Boton3.jsx

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './Button3.module.css';

function Boton3({ texto, ancho, estilo }) {
    return (
        <Stack spacing={2} direction="row">
            <Button
            variant={estilo}
            color="secondary"
            className={styles.boton3}
            sx={{ width: `${ancho}px`, }}
            >
            {texto}
            </Button>
        </Stack>
    );
}

export default Boton3;
