import React, { useState, useEffect,useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';
import { getResponse } from '../helper/api-commn';
//tujhe ml lena hai

function Chat() {
    const [query, setQuery] = useState("");
    const [messages,setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    function prompt(event) {
        setQuery(event.target.value);
    }
    
    function send() {
        if (query.trim() !== "") {
            const newMessages = [...messages, { text: query, sender: 'User' }];
            // Simulate a response
            const response = getResponse(query);
            console.log(response)
            newMessages.push({ text: "Hey ladies knock me down", sender: 'Bot' });
            setMessages(newMessages);
            setQuery("");
        }
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between'}}>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2, pt: 2 }}>
                {messages.map((msg, index) => (
                    <Typography key={index} sx={{ wordWrap: 'break-word', p: 2, bgcolor: msg.sender === 'User' ? '#984447' : '#ADD9F4', borderRadius: '10px', mb: 1, textAlign: msg.sender === 'User' ? 'right' : 'left' ,color:'#101419'}}>
                        {msg.text}
                    </Typography>
                ))}
                <div ref={messagesEndRef} />
            </Box>
            <Box sx={{ p: 1, bgcolor: 'background.paper'}}>
                <TextField
                    fullWidth
                    label="Enter your prompt here"
                    multiline
                    variant="outlined"
                    placeholder='Eg: Write a program to print Hello World in Assembly'
                    rows={1}
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
            
        </Box>
    );
}

export default Chat;
