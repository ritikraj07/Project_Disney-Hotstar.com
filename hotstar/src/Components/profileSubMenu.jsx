
const Dropdown = ({dropdown}) => {

  const logout=()=>{
    localStorage.setItem("isAuth",false);
    localStorage.removeItem("user");

  }
    return (
      <ul type="none">
        
          <li>
            watchlist
          </li>
          <li onClick={logout} >Logout</li>
      
      </ul>
    );
  };
  
  export default Dropdown;