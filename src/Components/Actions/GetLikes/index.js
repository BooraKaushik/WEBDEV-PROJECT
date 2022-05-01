import {getUserInfo} from "../../../Services/AddAddress"

const GetLikes=async()=>{
const likes= await getUserInfo();
return likes.user.likes;
}

export default GetLikes;