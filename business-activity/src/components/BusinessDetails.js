import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


import { useLocation, useNavigate } from 'react-router-dom';



export default function BusinessDetails() {
  const location = useLocation();
  let business;
  try {
    const res = axios.get(`https://meetings-test.herokuapp.com/business/${location.id}`).then(() => {
      business = res.data;
    })
  } catch (err) {
    console.log(err)
  }
  const navigate = useNavigate();
  return (
    <>

      <Card sx={{ maxWidth: 600, alignItems: 'center', marginLeft: '33%', marginTop: 5 }}>
        <CardMedia
          component="img"
          height="400"
          image='./image/Haha.jpg'
          alt="ha ha ha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {business.businessName}
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
          <Button onClick={() => navigate('/UserFormDetails')} variant="outlined" size="small">schedule a meeting for a service</Button>
        </CardActions>
      </Card>
    </>
  );
}



