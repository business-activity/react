import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

async function getBusiness() {
    let businessList = [];
    try {
        const res = await axios.get("https://meetings-test.herokuapp.com/business");
        businessList = res.data.map((item) => {
            let b = {
                id:item.id,
                userid: item.userid,
                ownersName: item.businessDetails.ownersName,
                businessName: item.businessDetails.businessName,
                services: item.businessDetails.services
            }
            return b;
        })
    } catch (err) {
        console.log(err);
    }
    return businessList;
}
export default async function BusinessForUsers() {
    const businessList = await getBusiness();
    const navigate=useNavigate();
    return (
        <div id='business-div'>
            {
                businessList.map((business) => {
                    <div onClick={navigate('./BusinessDetails',{id:business.id})}>
                        <div>
                            {business.businessName}
                        </div>
                        <div>
                            by {business.ownersName}
                        </div>
                    </div>
                })
            }
        </div>
    );
}
