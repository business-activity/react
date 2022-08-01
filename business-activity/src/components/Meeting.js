import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

export default function Meeting() {
    debugger
    const location = useLocation();
    const from = location.state;
    async function getMeetings() {
        debugger
        try {
            const res = await axios.get(`https://meetings-test.herokuapp.com/meeting?business_id=${from.businessId}`)
            let tempList = res.data.map((item) => {
                let meeting = {
                    business_id: item.business_id,
                    duration: item.duration,
                    startTime: item.startTime,
                    id: item.id,
                    service_Id: item.service_Id,
                    userDetails: item.userDetails
                }
                return meeting;
            })
            debugger
            setMeetingList(tempList);
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    const [meetingList, setMeetingList] = useState();
    useEffect(() => {
        getMeetings();
    }, []);
    return (
        <>
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                MEETINGS FOR {from.businessName}
            </Typography>
            <div id='meeting-div'>
                {
                    < Grid container spacing={{ xs: 2, md: 3, }}>
                        {meetingList === undefined ? <p>no meetings</p> : meetingList.map((item) => (
                            <Grid item xs={2} sm={3} md={3} key={item.id}>
                                customer: {item.userDetails.firstName} {item.userDetails.lastName}
                                <br></br>
                                service : {item.service_Id}
                            </Grid>
                        ))}
                    </Grid>
                }
            </div>
        </>
    );
}
