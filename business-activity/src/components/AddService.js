import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useRef } from 'react';
import swal from 'sweetalert';

export default function AddService() {
    const location = useLocation();
    const businessId = location.state.businessId;
    const businessName = location.state.businessName;
    const name_inputRef = useRef();
    const durationMeeting_inputRef = useRef();
    const numMeetings_inputRef = useRef();
    const cost_inputRef = useRef();
    const openingHours_inputRef = useRef();
    const building_inputRef = useRef();
    const street_inputRef = useRef();
    const city_inputRef = useRef();
    const navigate = useNavigate();
    const postService = async () => {
        debugger
        const newService = {
            "business_id": businessId,
            "name": name_inputRef.current?.value,
            "service": {
                "name": name_inputRef.current?.value,
                "numOfMeetings": numMeetings_inputRef.current?.value,
                "durationOfMeeting": durationMeeting_inputRef.current?.value,
                "cost": cost_inputRef.current?.value,
                "OpeningHours": openingHours_inputRef.current?.value,
                "address": {
                    "building": building_inputRef.current?.value,
                    "street": street_inputRef.current?.value,
                    "city": city_inputRef.current?.value
                }
            }
        };
        debugger
        const res = await axios.post("https://meetings-test.herokuapp.com/service", newService)
            .then((response) => {
                debugger

                swal({
                    title: "Good job!",
                    text: "service added to your business",
                    icon: "success",
                    button: "Aww yiss!",
                }).then(() => {
                    navigate('/admin', { state: { managerId: '444b57a8-a5d8-4786-8768-f907f9670f12' } }, { replace: true });
                });
            })
            .catch((error) => {
                debugger
                alert(error);
            });
        alert(res.data);
    }
    return (
        <>
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
                <Typography variant="h5" component="div" color="primary" textAlign="center">NEW SERVICE TO {businessName}</Typography>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="name of new service"
                        placeholder="new service name"
                        multiline
                        variant="standard"
                        inputRef={name_inputRef}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="num of meetings"
                        placeholder="num of meetings"
                        multiline
                        inputRef={numMeetings_inputRef}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="duration Of Meeting"
                        placeholder="duration Of Meeting"
                        multiline
                        inputRef={durationMeeting_inputRef}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="cost"
                        placeholder="cost"
                        multiline
                        inputRef={cost_inputRef}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="Opening Hours"
                        placeholder="Opening Hours"
                        multiline
                        inputRef={openingHours_inputRef}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="address-building"
                        placeholder="building-number"
                        multiline
                        inputRef={building_inputRef}
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="address-street"
                        placeholder="street"
                        multiline
                        inputRef={street_inputRef}
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="address-city"
                        placeholder="city"
                        multiline
                        inputRef={city_inputRef}
                        variant="standard"
                    />
                </div>
                <Button color="primary" variant="outlined" onClick={postService}>SAVE</Button>
            </Box>
            <Button onClick={() => {
                navigate('/admin', { state: { managerId: '444b57a8-a5d8-4786-8768-f907f9670f12' } }, { replace: true });
            }} variant="outlined" size="medium" sx={{ position: 'fixed', left: '2vh', top: '2vh' }}>back↩</Button>
        </>
    );
}

