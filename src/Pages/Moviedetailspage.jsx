import { useEffect,useState } from "react";
import Moviedetails from "../Components/Moviedetails";
import CardList from "../Components/CardList"
import { useParams } from "react-router";


function Moviedetailspage() {
    let { id } = useParams();
    const [state, setState] = useState({});
    useEffect(() => {
        getdata();
    }, [id])
 
   
        
    let getdata =async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fb3b71a956ae9826b4af1a7eb6799dd9&language=en-US`);
        const data = await res.json();
        setState(data);
        // console.log(data);
        }
    
    return (
        <div style={{position:"relative"
        }}>
            <Moviedetails data={state} />   
        <CardList
          url={
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=fb3b71a956ae9826b4af1a7eb6799dd9&language=en-US&page=1`
          }
          title={"More Like This"}
                type={"GET_LIST"}
          id={1}
        />
        </div>
    )
}
export default Moviedetailspage;