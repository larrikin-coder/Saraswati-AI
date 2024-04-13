import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

function Chat() {
    const [query, setQuery] = useState("");
    const [ml, setMl] = useState("");

    // Update the query state whenever the input changes
    function prompt(event) {
        setQuery(event.target.value);
    }

    // Update the ml state when the send button is clicked
    function send() {
        setMl(query);
    }

    // Use useEffect to send the ml state to the server when it updates
    useEffect(() => {
        if (ml) {
            axios.post('http://127.0.0.1:5000/ml', { message: ml })
            .then(response => {
                // Handle the response here
                console.log(response.data);
            })
            .catch(error => {
                // Handle any errors here
                console.error('There was an error!', error);
            });
        }
    }, [ml]); // This effect depends on the ml state

    // JSX code for the chat interface
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 60 }}>
            <TextField
                sx={{ width: 900 }}
                label="Enter your prompt here"
                multiline
                variant="outlined"
                rows={2}
                onChange={prompt}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit" aria-label="send" onClick={send}>
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default Chat;
