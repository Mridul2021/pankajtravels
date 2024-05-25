import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import Logo from "../../assets/images/Logo3.jpg";
import zIndex from '@mui/material/styles/zIndex';

const Navbar = () => {
    return (
        <div>
            <Box
                style={{
                    width: '100vw',
                    height: '95px',
                    boxShadow: '0px 13px 6px rgba(0, 0, 0, 0.1)',
                    position: 'fixed',
                    backgroundColor: 'white',
                    zIndex:'1000',
                }}
            >
                <Grid container>
                    <Grid item sm={10}>
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '350px',
                                height: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item sm={2}>
                        {/* <Button
                            style={{
                                padding: '10px',
                                color: 'black',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'green',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            style={{
                                padding: '10px',
                                color: 'black',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'green',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            style={{
                                padding: '10px',
                                color: 'black',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'green',
                                },
                            }}
                        >
                            Home
                        </Button> */}
                    </Grid>
                </Grid>
                {/* Other content goes here */}
            </Box>
        </div>
    );
};

export default Navbar;
