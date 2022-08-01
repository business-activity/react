import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { useRef } from 'react';

export default function UserFormDetails() {

  const location = useLocation();
  const service = location.state.service;
  const firstName_ref=useRef();
  const lastName_ref=useRef();
  const mail_ref=useRef();
  const phone_ref=useRef();

  const handleRegister = async () => {
    const newMeeting = {
      business_id: service.businessId,
      start_time:new Date(),
      duration:service.durationOfMeeting,
      meeting: {
        service_Id: service.id,
        userDetails:{
          firstName:firstName_ref.current?.value,
          lastName:lastName_ref.current?.value,
          mail:mail_ref.current?.value,
          phone:phone_ref.current?.value
        }
      }
    }
    const res = await axios.post("https://meetings-test.herokuapp.com/meeting", newMeeting)
      .then((response) => {
        swal({
          title: "Added successfully!",
          text: "service added to your business",
          icon: "success",
          button: "Aww yiss!",
        }).then(() => {

        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res.data);
  }

  return (
    <>
      <Typography sx={{ textAlign: 'center', marginTop: 5 }} gutterBottom variant="h4" component="div">
        enter your details
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          textAlign: 'center',
          marginTop: 5,
        }}
        noValidate
        autoComplete="on"
      >
        <div>
          <TextField
            id="standard-textarea"
            label="first name"
            placeholder="your first name"
            multiline
            variant="standard"
            inputRef="firstName_ref"
          />
          <TextField
            id="standard-textarea"
            label="last name"
            placeholder="your last name"
            multiline
            variant="standard"
            inputRef='lastName_ref'
          />
          <TextField
            id="standard-textarea"
            label="mail address"
            placeholder="your mail"
            multiline
            variant="standard"
            inputRef='mail_ref'
          />
        </div>
        {/* <div>
          <TextField
            id="standard-textarea"
            label="address-city"
            placeholder="your city"
            multiline
            variant="standard"
            inputRef='city_ref'
          />
          <TextField
            id="standard-textarea"
            label="address-street"
            placeholder="your street"
            multiline
            variant="standard"
            inputRef='street_ref'
          />
          <TextField
            id="standard-textarea"
            label="address-building"
            placeholder="your building"
            multiline
            variant="standard"
            inputRef='building_ref'
          />
        </div> */}
        <div>
          <TextField
            id="standard-textarea"
            label="phone number"
            placeholder="your phone"
            multiline
            variant="standard"
            inputRef='phone_ref'
          />
          <p>*payment in first meeting</p>
        </div>
      </Box>
      <Button onClick={handleRegister} sx={{ textAlign: 'center', alignItems: 'center', marginLeft: '44%', marginTop: 5 }}
        variant="outlined" size="small">send your details</Button>
    </>
  );
}
