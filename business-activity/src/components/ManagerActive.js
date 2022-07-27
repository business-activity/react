import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

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
                id="standard-textarea"
                label={business.businessName}
                placeholder={business.businessName}
                multiline
                variant="standard"
              />
            </div>
            <div>
            <Typography sx={{ textAlign: 'center',color: '#edcf3f' }} gutterBottom variant="h10" component="div">
              your business name:
            </Typography>
              <TextField
                id="standard-textarea"
                label={business.ownersName}
                placeholder={business.ownersName}
                multiline
                variant="standard"
              />
            </div>
            <Typography sx={{ textAlign: 'center',color: '#edcf3f' }} gutterBottom variant="h10" component="div">
            your name:
            </Typography>
            <div>
              
              <br></br>
              <br></br>
              <Button  variant="outlined" size="medium">
                update
              </Button>
              <br></br>
              <br></br>
              <Button variant="outlined" size="medium">
                delete
              </Button>
            </div>










          </Box>
        </div>


      }
    </>
  );
}

