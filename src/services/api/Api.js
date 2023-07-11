import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// =================================================== ADMIN ==================================================== //

// login api
export const LOGIN = (data) => API.post('/admin/auth/login', data);

// login api
export const ADDUSER = (data) => API.post('/admin/auth/signup', data);

// forgot password admin
export const FORGOTPASSWORD = (email) => API.post('/admin/auth/forgot/password', email)

// add airline api
export const ADDAIRLINE = (data) => API.post('/system/add/airline', data);

// all airline api
export const ALLAIRLINE = () => API.get('/system/all/airline');

// update airline api
export const EDITAIRLINE = (id, data, header) => API.post('/system/update/airline/' + id, data, header);

// delete airline api
export const DELETEAIRLINE = (id, header) => API.post('/system/delete/airline/' + id, header);

// all admin api
export const ALLADMIN = () => API.get('/all/admin');

// update admin api
export const EDITADMIN = (id, data, header) => API.post('/admin/update/' + id, data, header);

// update admin api
export const DELETEADMIN = (id, header) => API.post('/admin/delete/' + id, header);

// all Vendor api
export const ALLVENDOR = () => API.get('/all/vendor');

// update vendor api
export const EDITVENDOR = (id, data, header) => API.post('/vendor/update/' + id, data, header);

// update vendor api
export const DELETEVENDOR = (id, header) => API.post('/vendor/delete/' + id, header);


// =================================================== AIRLINE ==================================================== //

// airlineLogin api
export const AIRLINELOGIN = (data) => API.post('/system/login/airline', data);
export const ADDVENDOR = (data) => API.post('/vendor/auth/signup', data);
export const FORGOTAIRLINEPASSWORD = (email) => API.post('/system/airline/forgot/password', email);


// =================================================== VENDOR ==================================================== //

// airlineLogin api
export const VENDORLOGIN = (data) => API.post('/login/vendor', data);
export const VENDORFORGOTPASSWORD = (email) => API.post('/vendor/forgot/password', email);


// =================================================== BOOKING ==================================================== //


export const TAKEBOOKING = (data, header) => API.post('/take/booking', data, header);
export const GETALLBOOKINGS = () => API.get('/all/booking');
export const DELETEBOOKING = (id, header) => API.post('/delete/booking/' + id, header);
export const UPDATEBOOKING = (id, data, header) => API.post('/update/booking/' + id, data, header);
export const DELETEFILE = (data) => API.post('/delete/file', data);