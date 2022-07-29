import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export default function Admin() {
  const navigate = useNavigate();
  const [business, setBusiness] = useState();
  const [businessId, setBusinessId] = useState();
  const [services, setServices] = useState();
  const location = useLocation();
  const form = location.state;
  useEffect(() => {
    async function getBusiness() {
      debugger;
      try {
        debugger
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
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`)
        // .then((res) => {
        debugger
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

  const updateBusiness = () => {

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
              sx={{margin:'1%'}}
                id="outlined-textarea"
                label={business.businessName}
                placeholder={business.businessName}
                multiline
              />
              <TextField
                sx={{margin:'1%'}}
                id="outlined-textarea"
                label={business.ownersName}
                placeholder={business.ownersName}
                multiline
              />
              <Box>
              <Button onClick={updateBusiness()} variant="contained" size="medium">
               update your business details
              </Button>
              </Box>
              <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                Click on one of your service to update or delete it
              </Typography>
              {services?.map((item) => (
                <div key={item.id}>
                  {item.id && <Button key={item.id} onClick={() => { navigatePageE(item.id) }} sx={{ marginBottom: "1%" }} variant="outlined">{item.name}</Button>}
                </div>
              ))}
              <br></br>
              <br></br>
              {<Button onClick={()=>navigate('/addService',{state:{businessId:businessId,businessName:business.businessName}})} variant="contained" size="medium">
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

