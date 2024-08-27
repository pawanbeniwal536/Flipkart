import axios from 'axios';

const api = axios.create({ baseURL: 'https://flipkart-server-qfd6.onrender.com' });

export const signupOTP = (data) => api.post('user/signup', data);
export const loginOTP = ( data ) => api.post('/user/login',data);

export const loginVerification = (data) => api.post('user/login-otp-verification',data);
export const signupVerification = ( data ) => api.post('user/signup-otp-verification',data);

export const getUser = ( data ) => api.post('user/getUser',data)

export const getProducts = () => api.get('/get/products');

export const deleteUser = (userId) => api.delete(`/user/delete-user/${userId}`);
