
import { useNavigate } from 'react-router-dom';
import './business.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function BusinessCard(props) {
    debugger;
    const navigate = useNavigate();
    return (
        <div>

            <Card sx={{ maxWidth: 345 }} id='imgCard'>
                <CardMedia
                    component="img"
                    height="230"
                    //  image='./image/Haha.jpg'
                    //    image={props.business.img}
                    // image='https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif'
                image='https://www.animatedimages.org/data/media/1309/animated-laughing-image-0152.gif'
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
                        onClick={() => navigate('/BusinessDetails', { state: { id: props.business.id } })}
                    >Details</Button>
                </CardActions>
            </Card>
        </div>
    );
}
