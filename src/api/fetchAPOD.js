import axios from 'axios';

const URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchAPOD = async () => {
    
    const { data } = await axios.get(URL, {
        params: {
            api_key: API_KEY  
        }
    })

    return data;
}