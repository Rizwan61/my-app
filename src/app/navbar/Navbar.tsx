'use client';
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import { useState } from 'react';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Notifications from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))
const Icon = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
[theme.breakpoints.up("sm")]:{
  display:"flex"
}

 
}))
const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }

 
}))

const Navbar = () => {

  const [open, setOpen]= useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Navbar</Typography>
        <AutoAwesomeMosaicIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="Search..." /></Search>
        <Icon>
          <Badge badgeContent={4} color="error">
          <MailIcon color="white" />
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications />
        </Badge>
        <Avatar sx={{width:30, height:30}} alt="Travis Howard" src="" onClick={e => setOpen(true)} />
        </Icon>
        <UserBox onClick={e => setOpen(true)}>
        <Avatar
         sx={{width:30, height:30}} 
         alt="Travis Howard" src="" 
        
        />
        <Typography variant="span">Rizwan</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar