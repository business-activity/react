import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../design/business.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
                img: '../hahaha.png',
                businessName: 'happy-life',
                ownersName: 'naama&Racheli&Ora'
            },
            {
                id: '000',
                img: '../hahaha.png',
                businessName: 'happy-life',
                ownersName: 'naama&Racheli&Ora'
            },
            {
                id: '000',
                img: '../hahaha.png',
                businessName: 'happy-life',
                ownersName: 'naama&Racheli&Ora'
            },
            {
                id: '000',
                img: '../hahaha.png',
                businessName: 'happy-life',
                ownersName: 'naama&Racheli&Ora'
            },
        ];
    return temp;
}
export function Business(props) {
    const navigate = useNavigate();
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    // image="../hahaha.png"
                    image={props.business.img}
                    alt="business logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.business.businessName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        by {props.business.ownersName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                        onClick={navigate('/BusinessDetails', { id: props.business.id })}
                    >Details</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default function BusinessForUsers() {
    // const businessList = [
    //     {
    //         id: '000',
    //         img: '../hahaha.png',
    //         businessName: 'happy-life',
    //         ownersName: 'naama&Racheli&Ora'
    //     },
    //     {
    //         id: '000',
    //         img: '../hahaha.png',
    //         businessName: 'happy-life',
    //         ownersName: 'naama&Racheli&Ora'
    //     },
    //     {
    //         id: '000',
    //         img: '../hahaha.png',
    //         businessName: 'happy-life',
    //         ownersName: 'naama&Racheli&Ora'
    //     },
    //     {
    //         id: '000',
    //         img: '../hahaha.png',
    //         businessName: 'happy-life',
    //         ownersName: 'naama&Racheli&Ora'
    //     },
    // ];
    const [businessList, setBusinessList] = React.useState([{
                id: '000',
                img: '../hahaha.png',
                businessName: 'happy-life',
                ownersName: 'naama&Racheli&Ora'
            }]);

    // React.useEffect(() => {
    //     Axios.get('http://localhost:3001').then(res => {
    //         setData(res)
    //     })
    // }, [])

    React.useEffect(() => {
        debugger
    const tempList=
     getBusiness().then(()=>{
        debugger
    setBusinessList(tempList);
    }).catch(err => console.log(err))
    });
    debugger
    return (
        <>
            <h3>business page</h3>
            <div id='business-div'>
                {
                    businessList?.length === 0 ? (<p>no business</p>) : (businessList.map((business) => {
                        <Business business={business} />
                    }))
                }
            </div>
        </>
    );
}

