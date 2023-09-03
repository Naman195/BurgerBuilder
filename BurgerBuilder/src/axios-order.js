import axios from 'axios';


const instance = axios.create({
    // baseURL: 'https://react-my-burger-4154f-default-rtdb.firebaseio.com'
    baseURL : 'https://react-my-burger-4154f-default-rtdb.firebaseio.com'

})



export default instance;