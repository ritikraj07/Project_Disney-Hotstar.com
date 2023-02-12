import { logout } from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";


const Dropdown = () => {
const dispatch= useDispatch();
  //const logout=()=>{
    //localStorage.setItem("isAuth",false);
   // localStorage.removeItem("user");
   // ;
  
    return (
      <ul type="none">
        
          <li>
            watchlist
          </li>
          <li onClick={()=>{dispatch(logout())}} >Logout</li>
      
      </ul>
    );
  };
  
  export default Dropdown;