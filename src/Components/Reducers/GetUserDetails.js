import {GET_USER_DETAILS} from "../Actions/GetUserDetails";
const GetUserDetailsReducer=(state=[],action)=>{
    switch(action.type){
        case GET_USER_DETAILS:
            return action.user;
        default:
            return state;
    }
}

export default GetUserDetailsReducer;