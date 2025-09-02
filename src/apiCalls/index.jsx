// import axios from "axios";

// export const axiosInstance = axios.create({
//     headers: {
//         authorization: `Bearer ${localStorage.getItem("token")}`
//     }
// });





import axios from "axios";

export const url = "https://chat-app-backend-1-llty.onrender.com";

export const axiosInstance = axios.create({
    baseURL: url, // <-- Yeh line add karo!
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});










// import axios from "axios";

// export const url = "https://chat-app-backend-1-llty.onrender.com";
// // export const localUrl = "http://localhost:5000/";

// export const axiosInstance = axios.create({
//     headers: {
//         authorization: `Bearer ${localStorage.getItem('token')}`
//     }
// });