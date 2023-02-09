import {Route, Routes} from "react-router-dom";
import Landing from "../Pages/landing";

const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/shows" element={<Shows />}></Route>
            <Route path="/movies/:id" element={<IndividualMoviePage />}></Route>
            <Route path="/shows/:id" element={<IndividualShowPage />}></Route>
            <Route path="/disney-plus" element={<DisneyPlus />}></Route>
        </Routes>
    )
}