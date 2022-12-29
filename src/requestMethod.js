import axios from "axios";

const BASE_URL = "https://menshopmernstack.herokuapp.com/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.accessToken;

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken??"";
// const TOKEN = () => {
//   if (
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
//   ) {
//     return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//       .currentUser.accessToken;
//   } else { return '' }
// };

// let TOKEN ="";
// try{
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.accessToken;
// }catch(e){}

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)?.currentUser?.accessToken || '[]';


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `${TOKEN}` },
// });