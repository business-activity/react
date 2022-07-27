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

export default function Admin(props) {
  const location = useLocation();
  const form = location.state;
  const [business, setBusiness] = useState()
  try {
    debugger
    axios.get(`https://meetings-test.herokuapp.com/business/${form.managerId}`).then((res) => {
      debugger
      setBusiness(res.data)
      console.log(res.data)
      debugger
    })
  } catch (err) {
    console.log(err)
  }

  return (

    <>
      {business &&
        <div>

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
                sx={{marginLeft:'4%'}}
                id="standard-textarea"
                label='business name'
                placeholder={business.businessName}
                multiline
                variant="standard"
              />
            
         
              <TextField
                sx={{marginLeft:'4%'}}
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
              {business.services.map((item) => (

           
                  <div>
                  <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h7" component="div">
                    {item.serviceName}
                  </Typography>
                
               
                  <TextField
                  sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='num of meeting'
                    placeholder={item.numOfMeetings}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='duration of meeting'
                    placeholder={item.durationOfMeeting}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='cost'
                    placeholder={item.cost}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='address-city'
                    placeholder={item.address.city}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='address-street'
                    placeholder={item.address.street}
                    multiline
                    variant="standard"
                  />
                  <TextField
                    sx={{marginLeft:'2%'}}
                    id="standard-textarea"
                    label='item.address.number'
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
              <Button    variant="outlined" size="medium">
                update your details
              </Button>
        
              <Button sx={{marginLeft:'4%', marginButton:'2%'}} variant="outlined" size="medium">
                delete your business
              </Button>
            </div>


          </Box>
        </div>


      }
    </>
  );
}

