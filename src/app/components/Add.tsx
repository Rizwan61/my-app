'use client';
import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    margineBottom:"20px"
})



export default function Add() {
   
    const [open, setOpen]= useState(false)


  return (
    <Box>
         <Tooltip onClick={e=>(setOpen(true))} title="Add">
      <IconButton>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </IconButton>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={e=>(setOpen(false))}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={600} height={300}  p={3} >
          
        <Typography  variant="h6" color="gray" textAlign="center">
            Create New Post
          </Typography>
          <UserBox>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography  variant="h6" color="gray" textAlign="center">
          Rizwan
          </Typography>
         
           
     
            </UserBox>
          <TextField
          id="standard-multiline-static"
          fullWidth
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary"/>
            <ImageIcon color="secondary"/>
            <VideocamIcon color="success" />
            <PersonIcon color="error" />
      </Stack>
      <ButtonGroup  fullWidth variant="contained" aria-label="Basic button group">
      <Button>Post</Button>
      <Button sx={{width:"100px"}}>
        <CalendarMonthIcon/>
        </Button>
      
    </ButtonGroup>

        </Box>
      </StyledModal>
    </Box>
  );
}
