import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ManagerLogIn() {
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
        if (managerId) {
            navigate('/admin', { state: { managerId: managerId } }, { replace: true });
        }
    };
    navigateAdmin();
    const verifyManager = async () => {

        const ourId = '6145be68-adfa-422a-886a-8638df0b80cc';
        if (managerName === 'Naama&Ora' && managerPassword === 'NO') {
            setManagerId(ourId);
        }
        //     const user = {
        //         "username": managerName,
        //         "password": managerPassword
        //     };
        //     try {
        //         axios.post(`https://meetings-test.herokuapp.com/user/signin`, user)
        //             .then((res) => {
        //                 const userId = res.data.id;
        //                 if (userId) {
        //                     setManagerId(userId);
        //                 }
        //             })
        //             .catch((err) => { console.error(err); })
        //     }
        //     catch (err) {
        //         Console.log(err);
        //     }
        //     finally{
        //         if(managerId){
        //          navigate('/admin', { state: { managerId:ourId } }, { replace: true });
        //         }
        //     }
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
