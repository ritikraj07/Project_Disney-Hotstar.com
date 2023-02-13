import { logout } from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Dropdown = () => {
const dispatch= useDispatch();
  //const logout=()=>{
    //localStorage.setItem("isAuth",false);
   // localStorage.removeItem("user");
   // ;
  
    return (
      <ul type="none">
        
          <li>
            <Link to ="/watchlist">
            watchlist
            </Link>
          </li>
          <li onClick={()=>{dispatch(logout())}} >Logout</li>
      
      </ul>
    );
  };
  
  export default Dropdown;