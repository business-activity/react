import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function componentName(props) {
  const location = useLocation();
  const form = location.state;
  let business;
  try {
    const res = axios.get(`https://meetings-test.herokuapp.com/business/${form.id}`).then(() => {
      business = res.data;
      debugger
    })
  } catch (err) {
    console.log(err)
  }
  // try {
  //  // const userId = '2c4db4bf-9145-491f-8990-7c811fbcae61';
  //   const res = axios.get(`https://meetings-test.herokuapp.com/business/${props.managerId}`)
  //     .then(() => { 
  //       console.log(res)
  //      })
  //     .catch((err) => console.log(err))
  // } catch (err) {
  //   console.log(err);
  // }
  return (
  
  <>
    <div>
      <Button variant="outlined" size="medium">
        update
      </Button>
      <Button variant="outlined" size="medium">
        delete
      </Button>
    </div>

  </>
  );
}

