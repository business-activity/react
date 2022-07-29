import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function AddService() {
    const location = useLocation();
    const businessId = location.state.businessId;
    const businessName = location.state.businessName;
const postService=()=>{

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
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="num of meetings"
                        placeholder="num of meetings"
                        multiline
                        variant="standard"
                    />
                    </div>
                    <div>
                    <TextField
                        id="standard-textarea"
                        label="duration Of Meeting"
                        placeholder="duration Of Meeting"
                        multiline
                        variant="standard"
                    />
                    </div>
                    <div>
                    <TextField
                        id="standard-textarea"
                        label="cost"
                        placeholder="cost"
                        multiline
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="Opening Hours"
                        placeholder="Opening Hours"
                        multiline
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-textarea"
                        label="address-building"
                        placeholder="building-number"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="address-street"
                        placeholder="street"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="address-city"
                        placeholder="city"
                        multiline
                        variant="standard"
                    />
                </div>
                <Button color="primary" variant="outlined" onClick={postService}>SAVE</Button>
            </Box>
        </>
    );
}

