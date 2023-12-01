import { cardGET } from "./CRUD/cardGET";
import { cardpost } from "./CRUD/cardPOST";



export const POST= async (req)=> {
   return cardpost(req)
};

export const GET = async (req)=>{
    return cardGET(req)
   
}

