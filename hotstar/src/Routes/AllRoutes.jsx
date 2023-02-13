import {Route, Routes} from "react-router-dom";
import KidPage from "../Pages/KidPage";
import Landing from "../Pages/landing";
import Movies from "../Pages/Movies";
import Mymusic from "../Pages/Mymusic";
import Search from "../Pages/Search";
import Sports from "../Pages/Sports";
import Subscribe from "../Pages/Subscribe";
import Moviedetailspage from "../Pages/Moviedetailspage";
import TV from "../Pages/TV";
import Payment from "../Pages/payment";

import Confirmation from "../Pages/Confirmation";

import { Watchlist } from "../Components/watchlist";



const AllRoutes =()=>{
    return(

        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
            <Route path='/kids' element={<KidPage />} ></Route>
            {/* <Route path="/login" element={<Login />}></Route> */}
            <Route path="/sports" element={<Sports />}></Route>
            {/* <Route path="/movies" element={<Movies />}></Route> */}
            <Route path="/tvshows" element={<TV />}></Route>
             <Route path="/movies/:id" element={<Moviedetailspage />}></Route>
            {/*<Route path="/shows/:id" element={<IndividualShowPage />}></Route>
            <Route path="/disney-plus" element={<DisneyPlus />}></Route> */}
            <Route path="/search" element={<Search />}></Route>
            <Route path="/music" element={<Mymusic />} ></Route>
            <Route path ="/confirm" element={<Confirmation/>}></Route>
            <Route path ="/payment" element={<Payment/>}></Route>           
             <Route path="/Login" element={<Landing />} ></Route>
             <Route path="/watchlist" element={<Watchlist />} ></Route>
            

        </Routes>
    )
}
export {AllRoutes}