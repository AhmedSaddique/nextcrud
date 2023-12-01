import { cardDELETE } from "../CRUD/cardDELETE";
import { cardGetByID } from "../CRUD/cardGET";
import { cardPUT } from "../CRUD/cardPUT";



export const GET = async (req,  {params}) => {
    return cardGetByID(req , {params})
}

export const PUT = async (req,  {params}) => {
    return cardPUT(req,  {params});
  };


  export const DELETE = async (req, {params})=>{
  return cardDELETE(req , {params});
  }