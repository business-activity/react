import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';



export default function EditService() {
    const [services, setServices] = useState([]);
    const location = useLocation();
    const form = location.state;
    const inputName = useRef();
    const inputNum = useRef();
    const inputDuration = useRef();
    const inputCost = useRef();
    const inputOpeningHours = useRef()
    const inputNumber = useLocation();
    const inputCity = location.state;
    const inputStreet = useRef();
    const navigate=useNavigate();

 
    const updateServices = async () => {
      
        debugger
        const dataInput = {
           "service":{
                "numOfMeetings": inputNum.current?.value,
                "durationOfMeeting": inputDuration.current?.value,
                "cost": inputCost.current?.value,
                "OpeningHours": inputOpeningHours.current?.value,
                "address": {
                  "city": inputCity.current?.value,
                  "street": inputStreet.current?.value,
                  "number": inputNumber.current?.value,
            }}
        }

    
        console.log(dataInput);
    
        debugger
      
        try {
            debugger
      
            await axios.put(`https://meetings-test.herokuapp.com/service/${form.id}`,dataInput)
                .then((res) => {
                    swal({
                        title: "Saved!",
                        text: "your details update",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                })
                .catch((err) => {
                    debugger
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
        }
    }
    const deleteServices = async () => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your service deleted!", {
                icon: "success",
              });
              try {
                
                 axios.delete(`https://meetings-test.herokuapp.com/service/${form.id}`)
                    .then((res) => {
                        console.log(res)
                        navigate('/admin', { state: { managerId: '444b57a8-a5d8-4786-8768-f907f9670f12' } }, { replace: true });

                    })
                    .catch((err) => {
                        debugger
                        console.log(err);
                    })
            } catch (err) {
                console.log(err);
            }
            } else {
                swal({
                  
                    text: "Your service file is safe!",
                    icon: "success",
                   
                  });
              
            }
          });


       
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
                    <form >
                        <Typography sx={{ textAlign: 'center', color: '#edcf3f' }} gutterBottom variant="h4" component="div">
                            edit your service
                        </Typography>
                        <CardContent>
                            <div>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                    service name:
                                </Typography>
                                <TextField
                                    inputRef={inputName}
                                    id="outlined-textarea"
                                    label={services.name}
                                    defaultValue={services.name}
                                    multiline
                                />
                            </div>

                            <div>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                    number of meeting:
                                </Typography>
                                <TextField
                                    inputRef={inputNum}
                                    id="outlined-textarea"
                                    label={services.num}
                                    defaultValue={services.num}
                                    multiline
                                />
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                    duration of meeting
                                </Typography>
                                <TextField
                                    inputRef={inputDuration}
                                    id="outlined-textarea"
                                    label={services.duration}
                                    defaultValue={services.duration}
                                    multiline
                                />
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                    open in Hours:
                                </Typography>
                                <TextField
                                    inputRef={inputOpeningHours}
                                    id="outlined-textarea"
                                    label={services.openingHours}
                                    defaultValue={services.openingHours}
                                    multiline
                                />
                            </div>
                            <div>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h7" component="div">
                                    cost:
                                </Typography>
                                <TextField
                                    inputRef={inputCost}
                                    id="outlined-textarea"
                                    label={services.cost}
                                    defaultValue={services.cost}
                                    multiline
                                />
                            </div>

                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                address:
                            </Typography>

                            <TextField
                                inputRef={inputCity}
                                sx={{ margin: '1%' }}
                                id="outlined-textarea"
                                label={services.city}
                                defaultValue={services.city}
                                multiline
                            />

                            <TextField
                                inputRef={inputStreet}
                                sx={{ margin: '1%' }}
                                id="outlined-textarea"
                                label={services.street}
                                defaultValue={services.street}
                                multiline
                            />

                            <TextField
                                inputRef={inputNumber}
                                sx={{ margin: '1%' }}
                                id="outlined-textarea"
                                label={services.numberM}
                                defaultValue={services.numberM}
                                multiline
                            />

                        </CardContent>

                        <Button onClick={updateServices}  sx={{ margin: '2%' }} variant="contained">update details</Button>
                        <Button onClick={deleteServices} sx={{ margin: '2%' }} variant="contained">delete this service</Button>
                    </form>
                </Card>}
        </>
    );
}
