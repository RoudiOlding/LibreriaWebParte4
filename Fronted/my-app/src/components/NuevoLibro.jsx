import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';
import Alerts from './Alerts';

function NuevoLibro() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        backgroundColor: '#FEF7FF',
                        border: '1px solid #6750A4',
                        borderRadius: '12px',
                    }}
                >
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        indicatorColor="secondary"
                        sx={{
                            '& .MuiTabs-scroller': {
                                overflow: 'visible',
                            },
                            '& .MuiTab-root': {
                                backgroundColor: '#FEF7FF',
                                color: '#79747E',
                                border: '1px solid #FEF7FF',
                                margin: '0',
                                borderRadius: '14px',
                                textAlign: 'center',
                                fontFamily: 'Roboto',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                '&.Mui-selected': {
                                    color: '#6750A4',
                                    fontFamily: 'Roboto',
                                },
                            },
                            '& .MuiTabs-flexContainer': {
                                gap: '120px',
                            },
                            '& .MuiTab-root:first-of-type': {
                                marginLeft: '280px',
                                marginRight: '280px',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#6750A4 !important',
                                height: '5px !important',
                                borderTopLeftRadius: '8px !important',
                                borderTopRightRadius: '8px !important',
                                width: '685px !important',
                                marginLeft: '-250px !important',
                            },                            
                        }}
                    >
                        <Tab label="INSERTAR NUEVO LIBRO" value="1" />
                    </TabList>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div>
                            <Textfield texto='Título' />
                        </div>
                        <div>
                            <Textfield texto='Autor, autores' />
                        </div>
                        <div>
                            <Textfield texto='ISBN' />
                        </div>
                        <div>
                            <Textfield texto='Serie, tipo' />
                        </div>
                        <div>
                            <Textfield texto='Imagen (url)' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <Alerts titulo='Registro completo' subtexto='La recurso ha sido grabado con éxito' 
                                estilo='outlined' accion1='Insertar'/>
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}

export default NuevoLibro