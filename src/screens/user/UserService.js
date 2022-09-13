import axiosInstance from "../../utils/axios";

export const login = async (email, password) => {
    const data = {
        // uyennhi2609@gmail.com, pass:1234
        email: email,
        password: password
    }
    console.log(data);
    const res = await axiosInstance.post('/api/auth/login', data);
    return res;
}

export const register = async (email, password) => {
    const data = {
        email: email,
        password: password
    }
    console.log(data);
    const res = await axiosInstance.post('/api/users/register', data);
    return res;
}