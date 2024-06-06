import React from 'react';
import { Button, TextField } from '@mui/material';

const AddVideo = () => {
  return (
    <div>
      <TextField type="file" accept="video/*" />
      <Button variant="contained" color="primary">
        Upload Video
      </Button>
    </div>
  );
};

export default AddVideo;
