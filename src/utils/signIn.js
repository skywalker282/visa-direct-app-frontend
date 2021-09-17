import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const signIn = async ({userName, userPassword, userCardNumber}) => {

    let loginRequest = await axios({
        method: 'get',
        url: `http://localhost:7000/user/login/${userName}/${userCardNumber}/${userPassword}`
    });

    let response = loginRequest.data
    
    if (response) {
        return {
            status: response.status,
            payload: response.response.payload,
            message: response.message
        }
    }
    
    return({
        message: response.message,
        status: 900
    })
}

export default signIn;