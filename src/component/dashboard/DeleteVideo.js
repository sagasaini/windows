import React from 'react';
import { Button, TextField } from '@mui/material';

const DeleteVideo = () => {
  return (
    <div>
      <TextField label="Video ID" />
      <Button variant="contained" color="secondary">
        Delete Video
      </Button>
    </div>
  );
};

export default DeleteVideo;
