import {LikesService} from "../../../Services/LikesService";

export const FIND_ALL_LIKES = 'FIND_ALL_LIKES';


export const findAllLikes = async (dispatch) => {
 const likes = await LikesService();
 dispatch({
   type: FIND_ALL_LIKES,
   likes
 })
;}

