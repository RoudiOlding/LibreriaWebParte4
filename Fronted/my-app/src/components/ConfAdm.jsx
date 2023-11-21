import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Textfield from './Textfield';
import BasicButtons2 from './Button2';

function ConfAdm() {
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
                        width: '100%',
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
                                marginLeft: '60px',
                            },
                            '& .MuiTab-root:last-of-type': {
                                marginRight: '60px',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#6750A4',
                                height: '5px',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                            },
                        }}
                    >
                        <Tab label="Datos Personales" value="1" />
                        <Tab label="Cuenta" value="2" />
                        <Tab label="Preferencias" value="3" />
                    </TabList>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="1" sx={{ width: '100%' }}>
                        <div>
                            <Textfield texto='Nombres' />
                        </div>
                        <div>
                            <Textfield texto='Tipo de Documento' />
                        </div>
                        <div>
                            <Textfield texto='Apellidos' />
                        </div>
                        <div>
                            <Textfield texto='Nro de Documento' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="2" sx={{ width: '100%' }}>
                        <div>
                            <Textfield texto='Correo' />
                        </div>
                        <div>
                            <Textfield texto='Contraseña' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                    <TabPanel value="3" sx={{ width: '100%' }}>
                        <div>
                            <Textfield texto='Idioma' />
                        </div>
                        <div>
                            <Textfield texto='Prefijo' />
                        </div>
                        <div>
                            <Textfield texto='Color Favorito' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                            <BasicButtons2 texto='Guardar' />
                        </div>
                    </TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}

export default ConfAdm