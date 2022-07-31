import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function ManagerLogIn() {
    debugger
    const navigate = useNavigate();
    const [managerName, setName] = React.useState();
    const [managerPassword, setPassword] = React.useState();
    const [managerId, setManagerId] = React.useState();

    const namehandleChange = (event) => {
        setName(event.target.value);
    };
    const passwordhandleChange = (event) => {
        setPassword(event.target.value);
    };
    const navigateAdmin = () => {
        debugger
        if(managerId){
            debugger
            navigate('/admin', { state: { managerId: managerId } }, { replace: true });
        }
    };
    navigateAdmin();
    const verifyManager = async () => {
    //     debugger
    //     const user = {
    //         "username": managerName,
    //         "password": managerPassword
    //     };
         const ourId = '7f40235b-46ad-4f07-8a05-923b84dac214';
         if(managerName==='Naama&Ora'&&managerPassword==='NO'){
             setManagerId(ourId);
         }
        
    //     debugger
    //     try {
    //         axios.post(`https://meetings-test.herokuapp.com/user/signin`, user)
    //             .then((res) => {
    //                 debugger
    //                 const userId = res.data.id;
    //                 if (userId) {
    //                     debugger
    //                     setManagerId(userId);
    //                 }
    //                 debugger
    //             })
    //             .catch((err) => { console.error(err); })
    //     }
    //     catch (err) {
    //         debugger
    //         alert(err);
    //     }
    //     finally{
    //         if(managerId){
                // navigate('/admin', { state: { managerId:ourId } }, { replace: true });
    //         }
    //     }
        
    }
    // React.useEffect(() => {
    //   return () => {
    //     navigate('/admin', { state: { managerId: managerId } })
    //   };
    // }, [managerId])
    return (
        <>
            <form onSubmit=
                {
                    verifyManager
                }
            >
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
