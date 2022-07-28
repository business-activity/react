import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function ManagerLogIn() {
    const navigate = useNavigate();
    const [managerName, setName] = React.useState();
    const [managerPassword, setPassword] = React.useState();
    const namehandleChange = (event) => {
        setName(event.target.value);
    };
    const passwordhandleChange = (event) => {
        setPassword(event.target.value);
    };


    const verifyManager = async () => {
        debugger
        const user = {
            "username": managerName,
            "password": managerPassword
        };
        const ourId = 'e9ff4ee6-88d0-48b7-8aa0-dd69fc1a8584';
        try {
            debugger
            axios.post(`https://meetings-test.herokuapp.com/user/signin`, user).then((res) => {
                debugger
                if (res.data.id) {
                    debugger
                    alert('SUCCEED');
                    let userId = res.data.id;
                    navigate('/managerlogIn/admin', { state: { managerId: userId} });
                } else {
                    debugger
                
                    navigate('/managerlogIn/admin', { state: { managerId: ourId } });
                }
            })
        } catch (err){
            debugger
            Alert(err);
        }
    }




    // debugger
    // const ourId = 'e9ff4ee6-88d0-48b7-8aa0-dd69fc1a8584';
    // try {
    //     debugger
    //     const user={
    //         "username": managerName,
    //         "password": managerPassword
    //     };
    //     debugger
    //     const res = await axios.post(`https://meetings-test.herokuapp.com/user/signin`,user)
    //         .catch((err) => {
    //             debugger;
    //             Alert(err + "in signin catch");
    //         });
    //     // .then((res) => {
    //     if (res.data.userId) {
    //         debugger
    //         alert('SUCCEED');
    //         let id = res.data.userId;
    //         navigate('/admin', { state: { managerId: id } });
    //     } else {
    //         Alert("owner not found");
    //         navigate('/admin', { state: { managerId: ourId } });
    //     }
    //     // })
    // } catch (err) {
    //     debugger
    //     Alert(err);
    // }
    // debugger

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
                        placeholder='yout name'
                        value={managerName}
                        onChange={namehandleChange}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="password"
                        placeholder='your password'
                        value={managerPassword}
                        onChange={passwordhandleChange}
                    />
                </Box>
                <Button type="submit">logIn</Button>
            </form>
        </>
    );
}
