import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/groups' : '//localhost:3003/groups';


const loadGroups = async () => {
    const response = await axios.get(`${BASE_URL}`)
    return response.data
}

const findGroupById = async (id)=> {
    console.log('id : ',id);
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
    
}

export default {
    loadGroups,
    findGroupById
}