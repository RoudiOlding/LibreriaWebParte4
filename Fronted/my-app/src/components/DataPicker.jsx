import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import dayjs from 'dayjs';
import DialogContent from '@mui/material/DialogContent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DialogActions from '@mui/material/DialogActions';
import Alerts from './Alerts';

function DataPickerAlone() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button 
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    color: 'white',
                    borderColor: '#6750A4',
                    backgroundColor: '#6750A4',
                    width: '130px',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: '#6750A4',
                    },
                }}    
            >
            Reservar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#ECE6F0',
                        borderRadius: '10px',
                    },
                }}
            >
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                <Button 
                    onClick={handleClose} 
                    autoFocus
                    sx={{
                        color: '#6750A4', // Color del texto
                        fontWeight: '20px',
                    }}
                >
                Cancel
                </Button>
                <Alerts 
                    onClick={handleClose} 
                    accion1='Ok'
                    ancho='100'
                    autoFocus
                    titulo='Reserva completada'
                    subtexto='La reserva del curso se ha realizado
                    on éxito. Este debe ser devuelto hasta el día XX/YY/ZZ' />
            </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DataPickerAlone;