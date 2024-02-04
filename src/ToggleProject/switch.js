import React, { useState, useContext } from 'react';
import { Switch, Box } from '@mui/material';
import Background from './background';
import { ToggleContext } from './toggleContext';

const ToggleSwitch = () => {
    const { theme, darkTheme, lightTheme } = useContext(ToggleContext);

    const handleSwitch = (e) => {
        if (theme === "black") {
            lightTheme();
        } else {
            darkTheme();
        }
    }

    return (
        <>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Box>
                    <Switch
                        onChange={handleSwitch}
                        checked={theme === "black"}
                        value={theme}
                        sx={{marginBottom: '10px'}}
                    />
                </Box>
                <Background />
            </Box>
        </>
    )
}

export default ToggleSwitch;