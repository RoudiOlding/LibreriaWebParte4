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

function Libro2({ Titulo, Isbn, Foto, Autor, Editor , Accion}) {
    const TituloIniciales = Titulo
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join('');

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
                    image="/images/pruebaUsuario1.jpg"
                    alt="Paella dish"
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
                    <div className={styles.reservar}>
                        <Boton3 texto={Accion} estilo='contained' ancho='100' />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default Libro2;
