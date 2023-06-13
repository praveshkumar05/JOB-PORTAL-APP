import { gotobackend } from "./commonrequest"
import { BASE_URL } from "./baseulr"
export const getregisterfunc=async(data,header)=>{
    return await gotobackend("POST",`${BASE_URL}/auth/register`,header,data);
}