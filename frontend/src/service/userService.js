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
const loginUser = async (credentials) => {
    console.log('logedinUser credentials',credentials)
    const response = await axios.put(`${BASE_URL}/login`,credentials)
    return response.data
}
const logOutUser = async (user) => {
    const response = await axios.put(`${BASE_URL}/logout`,user)
    return response.data
}
const signUpUser = async (credentials) => {
    console.log('signUpUser data',credentials)
    const response = await axios.post(`${BASE_URL}/signup`,credentials)
    return response.data
}

const checkUser = async () => {
    const response = await axios.get(`${BASE_URL}/user`)
    console.log('response.data : ',response.data);
    return response.data
}
    


export default {
    loadUsers,
    loginUser,
    signUpUser,
    checkUser,
    logOutUser

}