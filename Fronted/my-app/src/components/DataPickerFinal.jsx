import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DataPickerFinal() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Ingresar fecha límite"
                slotProps={{
                textField: {
                    helperText: 'MM/DD/YYYY',
                },
                }}
            />
        </LocalizationProvider>
    );
}

export default DataPickerFinal
