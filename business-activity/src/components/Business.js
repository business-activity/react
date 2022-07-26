import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import '../design/business.css'
import { BusinessCard } from './BusinessCard';


export async function getBusiness() {
    // let businessList = [];
    // try {
    //     const res = await axios.get("https://meetings-test.herokuapp.com/business");
    //     businessList = res.data.map((item) => {
    //         let b = {
    //             id: item.id,
    //             img: item.img,
    //             userid: item.userid,
    //             ownersName: item.businessDetails.ownersName,
    //             businessName: item.businessDetails.businessName,
    //             services: item.businessDetails.services
    //         }
    //         return b;
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
            <h3>business page</h3>
            {
                // businessList === undefined ? <p>no business</p> : businessList.map((business) => {


                //     debugger;
                //     <div>
                //         <BusinessCard business={business} />
                //     </div>


                // })


                    < Grid container spacing={{ xs: 2, md: 3, }}>
                      { businessList === undefined ? <p>no business</p> : businessList.map((item) => (
                      <Grid item xs={2} sm={3} md={3} key={item.CodeFlight}>
                      <BusinessCard business={item} />
                      </Grid>
                       ))}
                     </Grid>


            
            }
        </div >
    );
}


