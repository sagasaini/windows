import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import AddImage from './AddImage';
import AddVideo from './AddVideo';
import DeleteImage from './DeleteImage';
import DeleteVideo from './DeleteVideo';
import Gallery from './Gallery';

const drawerWidth = 240;

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Gallery');

  const renderContent = () => {
    switch (selectedOption) {
      case 'Add Image':
        return <AddImage />;
      case 'Add Video':
        return <AddVideo />;
      case 'Delete Image':
        return <DeleteImage />;
      case 'Delete Video':
        return <DeleteVideo />;
      case 'Gallery':
        return <Gallery />;
      default:
        return <Gallery />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Add Image', 'Add Video', 'Delete Image', 'Delete Video', 'Gallery'].map((text) => (
            <ListItem button key={text} onClick={() => setSelectedOption(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Typography variant="h4" gutterBottom>
          {selectedOption}
        </Typography>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
