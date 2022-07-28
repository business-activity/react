import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import { updateLocale } from 'moment';

export default function Admin() {
  const [business, setBusiness] = useState();
  const [businessId, setBusinessId] = useState();
  const [services, setServices] = useState();
  const location = useLocation();
  const form = location.state;
  React.useEffect(() => {
    async function getBusiness() {
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/business/${form.managerId}`)
          .then((res) => {
            debugger
            setBusiness(res.data)
            setBusinessId(res.data.id)
            console.log("inserted: " + res.data);
          })
      } catch (err) {
        console.log(err)
      }
    }

    getBusiness();
  }, []);

  React.useEffect(() => {
    async function getServices() {
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`)
        // .then((res) => {
        debugger
        let tempList = await res.data.map((item) => {
          let b = {
            name: item.serviceName,
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
        setServices(tempList);
      } catch (err) {
        console.log(err)
      }
    }
    getServices();
  });

  const updateBusiness = () => {

  }
  const deleteBusiness = () => {

  }
  return (

    <>
      {business &&
        <div
          style={{
            backgroundImage: `${business.img}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '89vh',
            marginTop: "-2.9%"
          }}
          >

          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h4" component="div">
              update your business details
            </Typography>
            <CardMedia
              component="img"
              image={business.img}
            // alt="your business image"
            />
            <div>

              <TextField
                sx={{ marginLeft: '4%' }}
                id="standard-textarea"
                label='business name'
                placeholder={business.businessName}
                multiline
                variant="standard"
              />


              <TextField
                sx={{ marginLeft: '4%' }}
                id="standard-textarea"
                label='owners name'
                placeholder={business.ownersName}
                multiline
                variant="standard"
              />

              <br></br>

              <br></br>
              <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h5" component="div">
                update your service
              </Typography>

              {services.map((item) => (


                <div key={item.name}>
                  <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h7" component="div">
                    {item.name}
                  </Typography>


                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='num of meeting'
                    placeholder={item.num}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='duration of meeting'
                    placeholder={item.duration}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='cost'
                    placeholder={item.cost}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='address-city'
                    placeholder={item.address.city}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='address-street'
                    placeholder={item.address.street}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{ marginLeft: '2%' }}
                    id="standard-textarea"
                    label='address-number'
                    placeholder={item.address.number}
                    multiline
                    variant="standard"
                  />

                  <Typography variant="body2">

                    <br />

                  </Typography>
                </div>

              ))}

              <br></br>
              <br></br>
              <Button onClick={updateBusiness()} variant="outlined" size="medium">
                update your details
              </Button>

              <Button onClick={deleteBusiness()} sx={{ marginLeft: '4%', marginButton: '2%' }} variant="outlined" size="medium">
                delete your business
              </Button>
            </div>


          </Box>
        </div>


      }
    </>
  );
}

