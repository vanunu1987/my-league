import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/users' : '//localhost:3003/users';

const loadUsers = async () => {
    const response = await axios.get(`${BASE_URL}`)
    return response.data.map((user,idx) => {
        user.rank = idx+1
        return user
    })
}

export default {
    loadUsers
}