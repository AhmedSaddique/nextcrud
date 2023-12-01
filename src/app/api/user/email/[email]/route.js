import { LoginEmail } from "../../CRUD/userGET";




export const GET = async (req, { params }) => {
    return LoginEmail(req , { params});
      
  }