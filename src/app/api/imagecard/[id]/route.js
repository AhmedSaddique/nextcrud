import { CardImageDELETE } from "../CRUD/cardDELETE";
import { CardImageGetByID } from "../CRUD/cardGET";
import { CardImagePUT } from "../CRUD/cardPUT";



export const GET = async (req,  {params}) => {
    return CardImageGetByID(req , {params})
}

export const PUT = async (req,  {params}) => {
    return CardImagePUT(req,  {params});
  };


  export const DELETE = async (req, {params})=>{
  return CardImageDELETE(req , {params});
  }