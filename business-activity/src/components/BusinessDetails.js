import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function BusinessDetails() {
  debugger
  const [business, setBusiness] = useState();
  const [services, setServices] = useState([]);
  const location = useLocation();
  const form = location.state;
useEffect(() => {
    async function getBusiness() {
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/business?business_id=${form.id}`)
        // .then((res) => {
        debugger
        setBusiness(res.data)
        debugger;
        console.log(res.data);

      } catch (err) {
        console.log(err)
      }
    }

    getBusiness();
  }, []);
useEffect(() => {
    async function getServices() {
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${form.id}`)     
        debugger
        let tempList = await res.data.map((item) => {
          let b = {
            serviceId:item.id,
            businessId:item.businessId,
            name: item.name,
            num: item.numOfMeetings,
            duration: item.durationOfMeeting,
            cost: item.cost,
            openingHours: item.OpeningHours,
            address: {
              number: item.address.number,
              street: item.address.street,
              city: item.address.city
            }
          }
          return b;
        })
        setServices(tempList)
       
      } catch (err) {
        console.log(err)
      }
    }
    getServices();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {/* <p>DETAILS</p> */}
      <Card sx={{ maxWidth: 2000, alignItems: 'center', marginTop: 2 }}>
        <CardMedia
          component="img"      
          height="230"
          image={business?.img}
          alt="ha ha ha"
        />
        <CardContent>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h3" component="div">
            {/* {businessDetails.businessName} */}
            {business?.businessName}
          </Typography>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
            {/* {businessDetails.ownersName} */}
            {business?.ownersName}
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3, }}>
            {services===[]?<p>no services</p>:services.map((item) => (
              <Grid item xs={2} sm={3} md={3} key={item.name}>
                <Card >
                  <CardContent >
                    <Typography variant="h5" component="div" color="primary" textAlign="center">
                      {item.name}
                    </Typography>
                    <Typography variant="h6" component="div" textAlign="center">
                      num of meetings: {item.num}
                    </Typography>
                    <Typography variant="h6" component="div" textAlign="center">
                      duration: {item.duration}
                    </Typography>
                    <Typography variant="h6" component="div" textAlign="center">
                      cost: {item.cost}
                    </Typography>
                    <Typography variant="h6" component="div" textAlign="center">
                      place of meetings:<br/>
                       {item.address.number} {item.address.street} ,{item.address.city}
                    </Typography>
                    <Typography variant="h8" component="div" textAlign="center">
                    Contact: 0504168639 between: {item.openingHours}
                    </Typography>
                    
                    <Typography variant="body2">
                      <br />
                    </Typography>
                    <Button onClick={() => navigate('/BusinessDetails/UserFormDetails',{state:{service:item}})} variant="outlined" size="small">schedule </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <div style={{ marginRight: 'left' }}></div>
      </Card>
    </>
  );
}