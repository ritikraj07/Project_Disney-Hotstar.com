import { useEffect,useState } from "react";
import Moviedetails from "../Components/Moviedetails";
import Card from "../Components/Card"
function Moviedetailspage() {

    const [state, setState] = useState([]);
    useEffect(() => {
        getdata();
    },[])
        
    let getdata =async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=fb3b71a956ae9826b4af1a7eb6799dd9`);
        const data = await res.json();
        setState([...data.results]);
        console.log(data.results);
        console.log(state);
        }
    
    return (
        <div style={{position:"relative"
        }}>
            <Moviedetails />
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px"}}>
                {/* {
                    state.map((ele) => {
                        return (
                            <div style={{
                                width: "23%", border: "2px solid black",
                                margin:"20px 10px"
                            }}>
                                <img src={ele.poster_path} alt="" />
                                <h2>{state.length}</h2>
                            </div>
                        )
                    })

                    
                } */}

                {
                    state.map((ele) => { 
                        return(<Card/>)
                    })
                }

            </div>
        </div>
    )
}
export default Moviedetailspage;