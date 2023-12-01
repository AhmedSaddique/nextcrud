import { userGET } from "./CRUD/userGET";
import { userPOST } from "./CRUD/userPOST";




export const POST= async (req)=> {
  return userPOST(req);
}

export const GET = async (req)=>{
    return userGET(req)
}

// {
//     "firstName": "Ali",
//     "lastName": "Ali",
//     "age": "25",
//     "email": "ali@gmail.com",
//     "password": "123456"
// }
