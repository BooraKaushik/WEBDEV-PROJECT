import {
  AddLikeService,
  IsLikedService,
  RemoveLikeService,
} from "../../../Services/Likes";
import { LikesService } from "../../../Services/LikesService";

export const FIND_ALL_LIKES = "FIND_ALL_LIKES";

export const isLikedAction = async (pid) => {
  const out = await IsLikedService(pid);
  return out;
};

export const addLikeAction = async (pid) => {
  const out = await AddLikeService(pid);
  console.log(out);
  return out;
};

export const removeLikeAction = async (pid) => {
  const out = await RemoveLikeService(pid);
  console.log(out);
  return out;
};

export const findAllLikes = async (dispatch) => {
  const likes = await LikesService();
  dispatch({
    type: FIND_ALL_LIKES,
    likes,
  });
};
