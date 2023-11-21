import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';

function CheckFilter({ texto }) {
    return (
        <FormGroup>
        <FormControlLabel
            control={
            <Checkbox
                defaultChecked
                style={{
                color: '#6750A4', // Color por defecto
                '&.Mui-checked': {
                    color: purple[800], // Color cuando está seleccionado
                },
                }}
            />
            }
            label={texto}
            style={{ color: purple[800] }}
        />
        </FormGroup>
    );
}

export default CheckFilter