import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.100.86:3000/'
    //192.168.100.86: moda house cf
    //172.20.10.7: 
});

axiosInstance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        config.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        return config;
    },
    err => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err)
);//callback

export default axiosInstance;