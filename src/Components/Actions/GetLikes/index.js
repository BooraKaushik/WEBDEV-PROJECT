import {getUserInfo} from "../../../Services/AddAddress"

export const GetLikes=async()=>{
const likes= await getUserInfo();
return likes.user.likes;
}

