import React from 'react';
import { Button, TextField } from '@mui/material';

const DeleteImage = () => {
  return (
    <div>
      <TextField label="Image ID" />
      <Button variant="contained" color="secondary">
        Delete Image
      </Button>
    </div>
  );
};

export default DeleteImage;
