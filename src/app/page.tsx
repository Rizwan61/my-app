"use client"
import { Box, Stack } from '@mui/material';
import Navbar from "./navbar/Navbar";
import Slidebar from "./components/Slidebar";
import Main from "./components/Main";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



export default function Home() {
  const [mode, setMode] = useState("light")
  const darktheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darktheme} >
    <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Slidebar setMode={setMode} mode={mode} />
          <Main />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
      
    </>
  );
}
