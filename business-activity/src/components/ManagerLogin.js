import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function ManagerLogIn() {
    const navigate = useNavigate();
    const [managerName, setName] = React.useState();
    const [managerEmail, setEmail] = React.useState();
    const namehandleChange = (event) => {
        setName(event.target.value);
    };
    const emailhandleChange = (event) => {
        setEmail(event.target.value);
    };
    const verifyManager=()=>{
        if((managerName==='Ora'||managerName==='Naama'||managerName==='Racheli')
        && managerEmail==="manager@gmail.com"){ 
            let id;
            try{
                const ourId='2c4db4bf-9145-491f-8990-7c811fbcae61';
                const res=axios.get(`https://meetings-test.herokuapp.com/user/${ourId}`)
                .then(() =>{id=res.data.id})
                .catch((err)=>console.log(err))
            } catch(err){
                console.log(err);
            }
            navigate('/admin',{state:{managerId:id}});
        }
    }
    return (
        <>
            <form onSubmit={verifyManager}>
                <Box
                    component="form"
                    
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        textAlign: 'center',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={managerName}
                        onChange={namehandleChange}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="email address"
                        value={managerEmail}
                        onChange={emailhandleChange}
                    />
                </Box>
                <Button type="submit">logIn</Button>
            </form>
        </>
    );
}
