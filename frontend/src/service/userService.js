import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/users' : '//localhost:3003/users';

const USERS = [
    {
        _id: 1,
        name: 'Muki',
        groups: [],
        score: 100
    },
    {
        _id: 2,
        name: 'Puki',
        groups: [],
        score: 10
    },
    {
        _id: 3,
        name: 'Shuki',
        groups: [],
        score: 93
    },
    {
        _id: 4,
        name: 'Dima',
        groups: [],
        score: 111
    },
    {
        _id: 5,
        name: 'Sima',
        groups: [],
        score: 62
    }
]

const loadUsers = async () => {
    // let users = USERS.sort((userA,userB) => userB.score - userA.score)
    // users = users.map((user,idx) => {
    //     user.rank = idx+1
    //     return user
    // } )
    // return Promise.resolve(users)
    const response = await axios.get(`${BASE_URL}`)
    return response.data.map((user,idx) => {
        user.rank = idx+1
        return user
    })
}
const logedinUser = async (data)=>{
    const response = await axios.get(`${BASE_URL}`,data)
    return response.data
}
const signinUser = async (data)=>{
    const response = await axios.get(`${BASE_URL}`,data)
    return response.data
}
    


export default {
    loadUsers,
    logedinUser,
    signinUser

}