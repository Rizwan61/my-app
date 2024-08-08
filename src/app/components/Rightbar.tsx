import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import * as React from 'react';
import Image from 'next/image';
const getallproduct = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const products = res.json();
  return products
}


export default async function Rightbar() {
  const data = await getallproduct();
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="" >
          <Typography variant="h6" fontWeight={100} py={2}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
            <Avatar alt="Travis Howard" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
            <Avatar alt="Cindy Baker" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
            <Avatar alt="Agnes Walker" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
            <Avatar alt="Trevor Henderson" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} py={2}>
            Least Photos
          </Typography>
          <ImageList cols={3} rowHeight={100}>

            <ImageListItem >
              <img

                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"


              />
            </ImageListItem>
            <ImageListItem >
              <img

                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"


              />
            </ImageListItem>
            <ImageListItem >
              <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
            </ImageListItem>
          </ImageList>
          {
            data.map((item) => (
              <>
                <Typography variant="h6" fontWeight={100} py={2}>
                  Least Posts
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          <Typography>
                            <p>{item.body}</p>
                          </Typography>

                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" />

                </List>
              </>
            ))
          }
        </Box>
      </Box>

    </>
  );
}
