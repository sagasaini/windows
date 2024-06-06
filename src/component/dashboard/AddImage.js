import React from 'react';
import { Button, TextField } from '@mui/material';

const AddImage = () => {
  return (
    <div>
      <TextField type="file" accept="image/*" />
      <Button variant="contained" color="primary">
        Upload Image
      </Button>
    </div>
  );
};

export default AddImage;
