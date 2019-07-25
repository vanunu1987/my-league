import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/events' : '//localhost:3003/groups';


const loadEvents = async () => {
    const response = await axios.get(`${BASE_URL}`)
    return response.data
}

export default{
    loadEvents
}