import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {Button, Link} from "@mui/material";
import {NavLink} from "react-router-dom";

const UpdateUserInformation=()=>{
return(
    <>
        <div className="row">
            <div className="col-2">
                <NavLink to="/profile"><IconButton children={<CloseIcon/>} style={{"color": "black"}}/></NavLink>
            </div>
            <div className="col-8">
                <span className="mt-1" style={{"fontSize":"1.5rem"}}>Edit Profile</span>
            </div>
            <div className="col-2">
                <div className="btn mt-1"  style={{"background":"lightblue"}} onClick={()=>{console.log('test');<NavLink to="/profile"></NavLink>;}}>Save</div>
            </div>
        </div>
    </>
);
}
export default UpdateUserInformation;