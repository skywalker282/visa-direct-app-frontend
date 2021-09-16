
import axios from 'axios';

const signUp = async ({userName, password, cardNumber}) => {
    const user = await axios({
        method: 'post',
        url: 'http://localhost:7000/user',
        data: {
            userName: userName,
            password: password,
            cardNumber: cardNumber
        }
    });
    
    let response = user.data;
    console.log(response);

    if(response.status === 'pending') {
        return 100
    }

    return 600
}

export default signUp;