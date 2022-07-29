import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { flexbox } from '@mui/system';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function EditService() {
    const [services, setServices] = useState([]);
    const location = useLocation();
    const form = location.state;
     const deleteServices =async () => {
    //     try {
    //         await axios.delete(`https://meetings-test.herokuapp.com/service/${form.id}`)
    //             .then((res) => {
    //                 console.log(res)
    //                 alert("your Services deleted!!!")
                  
    //             })
    //             .catch((err) => {
    //                 debugger
    //                 console.log(err);
    //             })
    //     } catch (err) {
    //         console.log(err);
    //     }
     }
    const updateServices = () => {

    }
    useEffect(() => {
        async function getService() {
            debugger
            debugger;
            try {
                await axios.get(`https://meetings-test.herokuapp.com/service/${form.id}`)
                    .then((res) => {
                        debugger;
                        console.log(res.data)
                        let tempList = {
                         
                            id: res.data.id,
                            name: res.data.name,
                            num: res.data.numOfMeetings,
                            duration: res.data.durationOfMeeting,
                            cost: res.data.cost,
                            openingHours: res.data.OpeningHours,

                            numberM: res.data.address.number,
                            street: res.data.address.street,
                            city: res.data.address.city


                        }
                        setServices(tempList);
                    })
                    .catch((err) => {
                        debugger
                        console.log(err);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        getService();
    }, []);



    return (
        <>

            {services &&
                <Card sx={{ minWidth: 275, textAlign: 'center' }}>
                    <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h4" component="div">
                        edit your service
                    </Typography>
                    <CardContent>
                        <div>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                service name:
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label={services.name}
                                placeholder={services.name}
                                multiline
                            />
                        </div>

                        <div>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                number of meeting:
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label={services.num}
                                placeholder={services.num}
                                multiline
                            />
                        </div>
                        <div>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                duration of meeting
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label={services.duration}
                                placeholder={services.duration}
                                multiline
                            />
                        </div>
                        <div>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                open in Hours:
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label={services.openingHours}
                                placeholder={services.openingHours}
                                multiline
                            />
                        </div>
                        <div>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                cost:
                            </Typography>
                            <TextField
                                id="outlined-textarea"
                                label={services.cost}
                                placeholder={services.cost}
                                multiline
                            />
                        </div>

                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                            address:
                        </Typography>

                        <TextField
                            sx={{ margin: '1%' }}
                            id="outlined-textarea"
                            label={services.city}
                            placeholder={services.city}
                            multiline
                        />

                        <TextField
                            sx={{ margin: '1%' }}
                            id="outlined-textarea"
                            label={services.street}
                            placeholder={services.street}
                            multiline
                        />

                        <TextField
                            sx={{ margin: '1%' }}
                            id="outlined-textarea"
                            label={services.numberM}
                            placeholder={services.numberM}
                            multiline
                        />



                    </CardContent>

                    <Button onClick={updateServices()} sx={{ margin: '2%' }} variant="contained">update your details</Button>
                    <Button onClick={deleteServices()} sx={{ margin: '2%' }} variant="contained">delete your services</Button>

                </Card>}
        </>
    );
}
