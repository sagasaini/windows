import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import videoSrc from '../../assets/videos/WhatsApp Video 2024-06-03 at 09.12.30_d5f4398d.mp4';
import imageSrc from "../../assets/images/image10.jpg";

const sampleGalleryData = [
  { id: 1, type: 'image', src: imageSrc, title: 'Sample Image' },
  { id: 2, type: 'video', src: videoSrc, title: 'Sample Video' },
  // Add more sample data as needed
];

const Gallery = () => {
  return (
    <Grid container spacing={2}>
      {sampleGalleryData.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card>
            {item.type === 'image' ? (
              <CardMedia
                component="img"
                image={item.src}
                title={item.title}
              />
            ) : (
              <CardMedia
                component="video"
                src={item.src}
                title={item.title}
                controls
              />
            )}
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
