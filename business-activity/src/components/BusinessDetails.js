import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const businessDetails = {
  ownersName: "Naama&Racheli&Ora",
  businessName: "happy-life",
  img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
}
const services = [
  {
    serviceName: "Group laughter workshop",
    numOfMeetings: 7,
    durationOfMeeting: "45 miniutes",
    cost: "200$",
    openingHours: "10:00-20:00",
    address: {
      city: "Tiberias",
      street: "rimon",
      number: 5
    }
  },
  {
    serviceName: " laughter ",
    numOfMeetings: 2,
    durationOfMeeting: "45 miniutes",
    cost: "40$",
    openingHours: "10:00-20:00",
    address: {
      city: "Tiberias",
      street: "rimon",
      number: 5
    }
  },
  {
    serviceName: " laughter workshop",
    numOfMeetings: 7,
    durationOfMeeting: "45 miniutes",
    cost: "200$",
    openingHours: "10:00-20:00",
    address: {
      city: "Tel-Aviv",
      street: "Arlozerov",
      number: 2
    }
  },
  {
    serviceName: "Group laughter workshop",
    numOfMeetings: 30,
    durationOfMeeting: "20 miniutes",
    cost: "400$",
    openingHours: "10:00-20:00",
    address: {
      city: "Tiberias",
      street: "rimon",
      number: 5
    }
  }
]


export default function BusinessDetails() {
  debugger
  //const location = useLocation();
  // const form = location.state;
  // let business;
  // try {
  //   const res = axios.get(`https://meetings-test.herokuapp.com/business/${form.id}`).then(() => {
  //     business = res.data;
  //     debugger
  //   })
  // } catch (err) {
  //   console.log(err)
  // }
  const navigate = useNavigate();
  return (
    <>

      <Card sx={{ maxWidth: 2000, alignItems: 'center', marginLeft: '4%', marginTop: 5 }}>
        <CardMedia
          component="img"
         
          height="230"
          image={businessDetails.img}
          alt="ha ha ha"
        />
        <CardContent>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h3" component="div">
            {businessDetails.businessName}
          </Typography>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
            {businessDetails.ownersName}
          </Typography>



          < Grid container spacing={{ xs: 2, md: 3, }}>
            {services.map((item) => (
              <Grid item xs={2} sm={3} md={3} key={item.serviceName}>


                <Card >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      name: {item.serviceName}
                    </Typography>
                    <Typography variant="h10" component="div">
                      num of meetings: {item.numOfMeetings}
                    </Typography>
                    <Typography variant="h10" component="div">
                      duration: {item.durationOfMeeting}
                    </Typography>
                    <Typography variant="h10" component="div">
                      cost: {item.cost}
                    </Typography>
                    <Typography variant="h10" component="div">
                      open: {item.openingHours}
                    </Typography>
                    <Typography variant="h10" component="div">
                      address:  {item.address.street} {item.address.number} ,{item.address.city}
                    </Typography>
                    <Typography variant="body2">

                      <br />

                    </Typography>
                    <Button onClick={() => navigate('/BusinessDetails/UserFormDetails')} variant="outlined" size="small">schedule </Button>
                  </CardContent>
                  <CardActions>

                  </CardActions>
                </Card>


              </Grid>
            ))}
          </Grid>

        </CardContent>

      </Card>
    </>
  );
}