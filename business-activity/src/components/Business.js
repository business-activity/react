import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import './business.css'
import { BusinessCard } from './BusinessCard';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ManagerLogIn from './ManagerLogin';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



// export async function getBusiness() {
//     let businessList = [];
//     try {
//         const res = axios.get("https://meetings-test.herokuapp.com/business").then(() => {
//             businessList = res.data.map((item) => {
//                 let b = {
//                     id: item.id,
//                     img: item.img,
//                     userid: item.userid,
//                     ownersName: item.businessDetails.ownersName,
//                     businessName: item.businessDetails.businessName,
//                     services: item.businessDetails.services
//                 }
//                 return b;
//             })
//         })
//     } catch (err) {
//         console.log(err);
//     }
//     return businessList;
//     // const temp = [
//     //     {
//     //         id: '000',
//     //         businessName: 'happy-life',
//     //         ownersName: 'naama&Racheli&Ora',
//     //         img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
//     //     },
//     //     {
//     //         id: '111',
//     //         businessName: 'happy-life',
//     //         ownersName: 'naama&Racheli&Ora',
//     //         img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
//     //     },
//     //     {
//     //         id: '222',
//     //         businessName: 'happy-life',
//     //         ownersName: 'naama&Racheli&Ora',
//     //         img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
//     //     },
//     //     {
//     //         id: '333',
//     //         businessName: 'happy-life',
//     //         ownersName: 'naama&Racheli&Ora',
//     //         img: 'https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
//     //     },
//     // ];
//     // return temp;
// }
export default function BusinessForUsers() {
    debugger
    const [businessList, setBusinessList] = useState();
    useEffect(() => {
        async function getBusiness() {
            debugger;
            try {
               const res= await axios.get("https://meetings-test.herokuapp.com/business")
                // .then((res) => {
                    let tempList = res.data.map((item) => {
                        let b = {
                            id: item.id,
                            img: item.img,
                            userid: item.userId,
                            ownersName: item.ownersName,
                            businessName: item.businessName,
                            services: item.services
                        }
                        return b;
                    })
                    setBusinessList(tempList);
                    console.log(res.data)
                // })
                // .catch((err) => {
                //     debugger
                //     console.log(err);
                //   })
            } catch (err) {
                console.log(err);
            }
        }
        getBusiness();
    },[]);
    // const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>

            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                business page
            </Typography>
            <Button variant="contained" size="medium" id='businessButton' onClick={handleOpen}>Manager Access</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <ManagerLogIn />
                </Box>
            </Modal>
            <div id='business-div'>
                {
                    < Grid container spacing={{ xs: 2, md: 3, }}>
                        {businessList === undefined ? <p>no business</p> : businessList.map((item) => (
                            <Grid item xs={2} sm={3} md={3} key={item.id}>
                                <BusinessCard business={item} />
                            </Grid>
                        ))}
                    </Grid>
                }
            </div>
        </>
    );
}


