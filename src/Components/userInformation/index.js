import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {user_details} from "../Actions/GetUserDetails";

const UserInformation = () => {
    const user = useSelector((state) => state.UserDetails);
    const dispatch = useDispatch();

    useEffect(()=> user_details(dispatch), []);
    console.log('user_details',user);
return (
    <>
        <div className="row m-0">
            <div className="col-9 ps-0">
                <span className="wd-font-color mt-2" style={{"fontSize":"1.5rem"}}>User Information</span>
            </div>
            <div className="col-3 ">
                <div className="btn wd-rounded-buttons mt-1 float-end" style={{"background":"lightblue"}} onClick={()=>{return ;}}>Edit</div>
            </div>
        </div>
        <form>
            <div className="form-group">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname"
                       value={`${user.firstName}`} className="form-control" readOnly/>
            </div>
            <div className="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" value={`${user.lastName}`} className="form-control" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="mail_address">E-mail</label>
                <input type="text" id="lastname" value={`${user.email}`} className="form-control" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="type">User Type</label>
                <input type="text" id="user_type" value={`${user.type}`} className="form-control" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="text" id="lastname" value={new Date(user.dateOfBirth + " 4:00:00").toLocaleDateString(
                    undefined,
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }
                )} className="form-control" readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="PhoneNumber">Mobile Number</label>
                <input type="text" id="lastname" value={`${user.phone}`} className="form-control" readOnly/>
            </div>
        </form>
    </>
);
}
export default UserInformation;