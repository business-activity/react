
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function UserFormDetails() {
  return (
    <>
     <Typography sx={{textAlign:'center', marginTop:5}} gutterBottom variant="h4" component="div">
        enter your details
        </Typography>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        textAlign:'center',
        marginTop:5,
       
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
        />
        <TextField
          id="standard-textarea"
          label="your last name"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="mail"
          placeholder="your mail"
          multiline
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-textarea"
          label="address-city"
          placeholder="your city"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="address-street"
          placeholder="your street"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="address-building"
          placeholder="your building"
          multiline
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-textarea"
          label="phone"
          placeholder="your phone"
          multiline
          variant="standard"
        />
     
      </div>
    </Box>
    <Button sx={{textAlign:'center',alignItems:'center',marginLeft:'44%',marginTop:5}} variant="outlined" size="small">send your details</Button>     
    </>
  );
}
