import React, { useContext } from 'react';
import { Box, TextField, Card, Typography } from '@mui/material';
import { ToggleContext } from './toggleContext';

const Background = () => {
    const { theme, fontColor} = useContext(ToggleContext);
console.log('fontColor',fontColor)
    return (
        <Box
            sx={{
                backgroundColor: theme,
                color: fontColor,
                width: '80%',
                padding: '20px',
            }}>
                <Typography variant='h3' sx={{paddingBottom: '10px',}}> Context in ReactJs</Typography>
                <Typography variant='h5' sx={{paddingBottom: '10px'}}> Problem - Prop drilling between the components</Typography>
                <Typography variant='h5' sx={{paddingBottom: '10px'}}> Solution - Context ( createContext, useContext )</Typography>
                <Typography variant='p' sx={{paddingBottom: '10px',lineHeight: "30px", fontSize: "20px"  }}> The React Context API is a way for a React app to effectively 
                            produce global variables that can be passed around. This is the 
                            alternative to "prop drilling" or moving props from grandparent to 
                            child to parent, and so on. Context is also touted as an easier, 
                            lighter approach to state management using Redux.
                </Typography>

        </Box>
    )
}

export default Background;