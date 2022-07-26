import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BusinessDetails() {
  return (
    <>
       <Typography sx={{ textAlign:'center'}} variant="h3" gutterBottom component="div">
   
      </Typography>
    <Card sx={{ maxWidth: 600,textAlign:'center',alignItems:'center',marginLeft:'33%',marginTop:5}}>
      <CardMedia
        component="img"
       height="400"
        image='./image/Haha.jpg'
        alt="ha ha ha"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        business details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
     
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">schedule a meeting for a service</Button>     
      </CardActions>
    </Card>
    </>
  );
}



