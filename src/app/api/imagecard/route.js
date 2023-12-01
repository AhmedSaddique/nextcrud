import { CardImageGET } from "./CRUD/cardGET";
import { CardImagepost } from "./CRUD/cardPOST";




export const POST= async (req)=> {
   return CardImagepost(req)
};

export const GET = async (req)=>{
    return CardImageGET(req)
   
}

