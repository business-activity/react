import React, { useState, useEffect } from 'react';
import './business.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import swal from 'sweetalert';
import Grid from "@mui/material/Grid";

export default function Admin() {
  const navigate = useNavigate();
  const [business, setBusiness] = useState();
  const [businessId, setBusinessId] = useState();
  const [services, setServices] = useState();
  const location = useLocation();

  const form = location.state;
  useEffect(() => {
    async function getBusiness() {
      // debugger;
      try {
        // debugger
        await axios.get(`https://meetings-test.herokuapp.com/business/${form.managerId}`)
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

  useEffect(() => {
    async function getServices() {
      // debugger;
      try {
        // debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`)
        // .then((res) => {
        // debugger
        let tempList = await res.data.map((item) => {
          let b = {
            id: item.id,
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
        setServices(tempList);
      } catch (err) {
        console.log(err)
      }
    }
    getServices();
  });
  const inputRef_ownersName = useRef();
  const inputRef_businessName = useRef();
  async function updateBusiness() {
    debugger
    const updateBusiness =
    {
      "business": {
        "ownersName": inputRef_ownersName.current?.value,
        "businessName": inputRef_businessName.current?.value
      }
    }
    const res = await axios.put('https://meetings-test.herokuapp.com/business/e97ec65a-a5d9-4834-9bef-3a6189b15fe4', updateBusiness)
      .then((res) => {
        swal({
          title: "Saved!",
          text: "your details update",
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .catch((error) => {
        debugger
        alert(JSON.stringify(error) + 'Error: ' + error.message)
      });
  }

  const navigatePageE = (id) => {
    debugger
    console.log(id)
    navigate('/editServices', { state: { id: id } })
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
              update your business {business.businessName}  details
            </Typography>
            <CardMedia
              component="img"
              image={business.img}
            // alt="your business image"
            />
            <div>

              <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">

                here- you can change business details:
              </Typography>
              <TextField
                sx={{ margin: '1%' }}
                id="outlined-textarea"
                label="business Name"
                defaultValue={business.businessName}
                inputRef={inputRef_businessName}
                multiline
              />
              <TextField
                sx={{ margin: '1%' }}
                id="outlined-textarea"
                label="owners Name"
                defaultValue={business.ownersName}
                inputRef={inputRef_ownersName}
                multiline
              />
              <Box>
                <Button onClick={() => updateBusiness()} variant="contained" size="medium">
                  update your business details
                </Button>
              </Box>
              <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                Click on one of your service to update or delete it
              </Typography>
              <div id='business-div'>
              {services?.map((item) => (
                <div key={item.id}>
                  {item.id && <Button key={item.id} onClick={() => { navigatePageE(item.id) }} sx={{ marginBottom: "1%", padding:'1vw',whiteSpace:'normal',wordWrap: 'break-word', maxWidth:'16vw'}} variant="outlined">{item.name}</Button>}
                </div>
              ))}
              </div>
              <br></br>
              <br></br>
              {<Button onClick={() => navigate('/addService', { state: { businessId: businessId, businessName: business.businessName } })} variant="contained" size="medium">
                add service to {business.businessName}
              </Button>
             /* <Button onClick={deleteBusiness()} sx={{ marginLeft: '4%', marginButton: '2%' }} variant="outlined" size="medium">
                delete your business
              </Button> */}
            </div>
          </Box>
        </div>
      }
    </>
  );
}

