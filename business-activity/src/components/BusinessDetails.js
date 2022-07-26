import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BusinessDetails() {
  return (
    <>
    
    <Card sx={{ maxWidth: 600,alignItems:'center',marginLeft:'33%',marginTop:5}}>
      <CardMedia
        component="img"
       height="400"
        image='./image/Haha.jpg'
        alt="ha ha ha"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        name of business
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        <Typography variant="h6" gutterBottom component="div">
        duration of meeting:
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        cost:
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        address:
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        service name
        </Typography>

        
     
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">schedule a meeting for a service</Button>     
      </CardActions>
    </Card>
    </>
  );
}



