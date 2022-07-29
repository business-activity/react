import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

// const businessDetails = {
//   ownersName: "Naama&Racheli&Ora",
//   businessName: "happy-life",
//   img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
// }
// const services = [
//   {
//     serviceName: "Group laughter workshop",
//     numOfMeetings: 7,
//     durationOfMeeting: "45 miniutes",
//     cost: "200$",
//     openingHours: "10:00-20:00",
//     address: {
//       city: "Tiberias",
//       street: "rimon",
//       number: 5
//     }
//   },
//   {
//     serviceName: " laughter ",
//     numOfMeetings: 2,
//     durationOfMeeting: "45 miniutes",
//     cost: "40$",
//     openingHours: "10:00-20:00",
//     address: {
//       city: "Tiberias",
//       street: "rimon",
//       number: 5
//     }
//   },
//   {
//     serviceName: " laughter workshop",
//     numOfMeetings: 7,
//     durationOfMeeting: "45 miniutes",
//     cost: "200$",
//     openingHours: "10:00-20:00",
//     address: {
//       city: "Tel-Aviv",
//       street: "Arlozerov",
//       number: 2
//     }
//   },
//   {
//     serviceName: "Group laughter workshop",
//     numOfMeetings: 30,
//     durationOfMeeting: "20 miniutes",
//     cost: "400$",
//     openingHours: "10:00-20:00",
//     address: {
//       city: "Tiberias",
//       street: "rimon",
//       number: 5
//     }
//   }
// ]


export default function BusinessDetails() {
  debugger
  const [business, setBusiness] = React.useState();
  const [services, setServices] = React.useState([]);
  const location = useLocation();
  const form = location.state;
  React.useEffect(() => {
    async function getBusiness() {
      debugger;
      try {
        debugger
        const res = await axios.get(`https://meetings-test.herokuapp.com/business?business_id=${form.id}`)
        // .then((res) => {
        debugger
        setBusiness(res.data)
        console.log("inserted: " + res.data);

        // })
        // .catch((err) => {
        //   debugger
        //   console.log(err);
        // })
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
        const res = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${form.id}`)
        // .then((res) => {
        debugger
        let tempList = await res.data.map((item) => {
          let b = {
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
          // .then((console.log("inserted: " + res.data)));

        // })
        // .catch((err) => {
        //   debugger
        //   console.log(err);
        // })
      } catch (err) {
        console.log(err)
      }
    }
    getServices();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <p>DETAILS</p>
      <Card sx={{ maxWidth: 2000, alignItems: 'center', marginTop: 2 }}>
        <CardMedia
          component="img"
          width="200"
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
                  <CardContent>
                    <Typography variant="h6" component="div">
                      name: {item.name}
                    </Typography>
                    <Typography variant="h6" component="div">
                      num of meetings: {item.num}
                    </Typography>
                    <Typography variant="h6" component="div">
                      duration: {item.duration}
                    </Typography>
                    <Typography variant="h6" component="div">
                      cost: {item.cost}
                    </Typography>
                    <Typography variant="h6" component="div">
                      open: {item.openingHours}
                    </Typography>
                    <Typography variant="h6" component="div">
                      address: {item.address.number} {item.address.street} ,{item.address.city}
                    </Typography>
                    <Typography variant="body2">
                      <br />
                    </Typography>
                    <Button onClick={() => navigate('/BusinessDetails/UserFormDetails')} variant="outlined" size="small">schedule </Button>
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