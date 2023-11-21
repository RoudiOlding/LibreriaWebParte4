import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ChipFiltro({texto}) {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip label={texto} variant="outlined" onDelete={handleDelete} />
        </Stack>
    );
}
export default ChipFiltro