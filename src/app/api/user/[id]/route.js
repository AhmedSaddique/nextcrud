import { userDELETE } from "../CRUD/userDELETE"
import { userGETByID } from "../CRUD/userGET"
import { userPUT } from "../CRUD/userPUT"



export const GET = async (req, { params })=>{
  return userGETByID(req , { params})
}

// PUTT /users Upadte

export const PUT = async (req, {params}) => {
  return userPUT(req , { params})
}

//  DELETE /users

export const DELETE = async (req, { params }) => {
  return userDELETE(req , { params});
    
}