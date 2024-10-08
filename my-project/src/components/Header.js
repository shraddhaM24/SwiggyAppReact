import { useState , useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = (props) =>{

  const[btnName,setBtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const [mode,setMode] = useState('light');
    const toogleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
  // console.log("Header render");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty i.e [] => useEffect is called on inital render(just once)
  //if dependency array as btnName [btnName] => useEffect is called on every btnName render
  // useEffect(() => {
  //   console.log("useEffect called")
  // },[btnName]);

  return(
    <div className='header bg-white shadow-lg shadow-slate-200'>
      <div className="flex justify-between align-center">
        <div className='logo-container ml-4'>
          <img className='w-[75px]' src='data:image/jpeg;base64,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' />
        </div>
        <div className='nav-items'>
          <ul className="flex m-4 items-center">
          <li>
              {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
              onClick={toogleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
                <input type="checkbox" className="sr-only" id="darkmode-toggle" onClick={toogleMode} />
                <label for="darkmode-toggle" className="toggle">
                  <span>Toggle dark mode</span>
                </label>
            </li>
            <li className="nav-name ml-4"><Link to="/">Home</Link></li>
            <li className="nav-name ml-4"><Link to="/about">About us</Link></li>
            <li className="nav-name ml-4"><Link to="/contact">Contact us</Link></li>
            <li className="nav-name ml-4"><Link to="/grocery">Grocery</Link></li>
            <li className="nav-name ml-4 text-lg font-bold"><Link to="/cart">🛒({cartItems.length})</Link></li>
            <button className="btn-login ml-4" onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
            <li className="nav-name ml-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Header;