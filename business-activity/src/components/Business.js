import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import '../design/business.css'
import { BusinessCard } from './BusinessCard';
import Typography from '@mui/material/Typography';

export async function getBusiness() {
    // let businessList = [];
    // try {
    //     const res = axios.get("https://meetings-test.herokuapp.com/business").then(() => {
    //         businessList = res.data.map((item) => {
    //             let b = {
    //                 id: item.id,
    //                 img: item.img,
    //                 userid: item.userid,
    //                 ownersName: item.businessDetails.ownersName,
    //                 businessName: item.businessDetails.businessName,
    //                 services: item.businessDetails.services
    //             }
    //             return b;
    //         })
    //     })
    // } catch (err) {
    //     console.log(err);
    // }
    // return businessList;
    const temp = [
        {
            id: '000',
            img: './image/Haha.jpg',
            businessName: 'happy-life',
            ownersName: 'naama&Racheli&Ora'
        },
        {
            id: '111',
            img: './image/Haha.jpg',
            businessName: 'happy-life',
            ownersName: 'naama&Racheli&Ora'
        },
        {
            id: '222',
            img: './image/Haha.jpg',
            businessName: 'happy-life',
            ownersName: 'naama&Racheli&Ora'
        },
        {
            id: '333',
            img: './image/Haha.jpg',
            businessName: 'happy-life',
            ownersName: 'naama&Racheli&Ora'
        },
    ];
    return temp;
}
export default function BusinessForUsers() {
    const [businessList, setBusinessList] = useState();
    useEffect(() => {
        async function anyNameFunction2() {
            debugger;
            const tempList = await getBusiness();
            setBusinessList(tempList);
            console.log(businessList)
        }
        anyNameFunction2();
    }, []);

    return (

        <div id='business-div'>


            <Typography sx={{ textAlign: 'center', marginLeft: '40%' }} gutterBottom variant="h4" component="div">
                business page
            </Typography>
            {
                < Grid container spacing={{ xs: 2, md: 3, }}>
                    {businessList === undefined ? <p>no business</p> : businessList.map((item) => (
                        <Grid item xs={2} sm={3} md={3} key={item.CodeFlight}>
                            <BusinessCard business={item} />
                        </Grid>
                    ))}
                </Grid>
            }
        </div >
    );
}


