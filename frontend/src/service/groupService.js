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
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
}

const addUserToGroup = async group => {
    const response = await axios.post(`${BASE_URL}/user/add`,group)
    console.log('response : ',response.data);
    return response.data
}

export default {
    loadGroups,
    findGroupById,
    addUserToGroup
}