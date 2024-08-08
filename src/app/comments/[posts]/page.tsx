'use client'
import React from 'react'
import getallcomments from '../../../../services/getUser'
import { Box, Button, Card, CardActions, CardContent, styled, Typography } from '@mui/material';


const StyleBox = styled(Box)({
 
    margin:'0px auto',
    width:'60%'
   })
   

const page =  async () => {
    const comment = await getallcomments();


    return (
      <StyleBox>
  
        {
          comment.map((item) => (
            <Box >
  
  
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.name}
                  </Typography>
  
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.email}
                  </Typography>
                  <Typography variant="body2">
                    {item.body}
  
                  </Typography>
                </CardContent>
                
              </Card>
            </Box>
          ))
        }
  
      </StyleBox >
    )
}

export default page
