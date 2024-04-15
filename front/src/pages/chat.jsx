import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
//tujhe ml lena hai

function Chat() {
    const [query, setQuery] = useState("");
    const [ml, setMl] = useState("");

    function prompt(event) {
        setQuery(event.target.value);
    }
    function send() {
        setMl(query);
        setQuery("")
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 60 }}>
            <TextField
                sx={{ width: 900 }}
                label="Enter your prompt here"
                multiline
                variant="outlined"
                rows={2}
                value={query}
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
