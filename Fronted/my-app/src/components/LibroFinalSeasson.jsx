import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import styles from './Libro.module.css'
import DataPickerAlone from './DataPicker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FinalButton from './FinalButton';

function LibroFinalSeasson({Titulo, Isbn, Foto, Autor, Editor, LibroId, Estado, Editorial, Topico}) {
    const TituloIniciales = Titulo
        .split(' ')
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join('');

    const handleMoreInfo = () => {
        const libroReservado = {
            id: LibroId,
            Titulo,
            Isbn,
            Autor,
            Foto,
            Editor,
            Estado,
            Editorial,
            Topico
        };
        localStorage.setItem('LibroActual', JSON.stringify(libroReservado));
        location.href = "/alumno/prestamos/resultados/detalles";
        };

    return (
        <>
        <Card sx={{ maxWidth: 360, borderRadius: '15px', border: '0.5px solid #D9D9D9', width: '314px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[800], display: 'flex', flexWrap: 'wrap'}} aria-label="recipe">
                        {TituloIniciales}
                    </Avatar>
                }
                title={
                    <>
                        <div className={styles.contenedor}>
                            <div>
                                {Titulo}
                            </div>
                            <div className={styles.Fav}>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={Foto}
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
                {
                    Estado == true?
                        <div className={styles.reservar}>
                            <DataPickerAlone />
                            <p onClick={handleMoreInfo} className={styles.moreInfo}>Más información</p>
                        </div>
                    :   
                        <div className={styles.reservar}>
                            <p>No disponible</p>
                            <FinalButton texto='RESERVAR'/>
                            <p onClick={handleMoreInfo} className={styles.moreInfo}>Más información</p>
                        </div>
                }
            </CardContent>
        </Card>
        </>
    );
}

export default LibroFinalSeasson;