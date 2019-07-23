import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/groups' : '//localhost:3003/groups';


const GROUPS = [
    {
        _id:1,
        name:'Toto Monsters',
        imgURL:'https://i2-prod.dailyrecord.co.uk/incoming/article11000226.ece/ALTERNATES/s615/13777114.jpg'
    },
    {
        _id:2,
        name:'Best Odds',
        imgURL:'http://sohanews.sohacdn.com/2013/article-2306522-1933b72e000005dc-187-634x420-1365565930328.jpg'
    },
    {
        _id:3,
        name:'Friendly Games',
        imgURL:'https://i.ytimg.com/vi/pvADtY2PUB0/maxresdefault.jpg'
    },
    {
        _id:4,
        name:'Football Lovers',
        imgURL:'https://madnessmedia.net/wp-content/uploads/2018/06/Thumb-no-barss-1-758x426.jpg'
    },
    {
        _id:5,
        name:'Liverpool is in my blood',
        imgURL:'https://www.abc.net.au/news/image/8553308-3x2-940x627.jpg'
    },
    {
        _id:6,
        name:'F.C Toto',
        imgURL:'https://thespun.com/wp-content/uploads/2018/04/GettyImages-83034141-775x465.jpg'
    },
]

const loadGroups = async () => {
    // return Promise.resolve(GROUPS)
    const response = await axios.get(`${BASE_URL}`)
    return response.data
}

const findGroupById = (id)=>{
    return GROUPS.find((group)=> group._id===id)
    
}

export default {
    loadGroups,
    findGroupById
}