import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Loading from "./Loading";
import cl from "../CSS/CardList.module.css";
import HCard from "./HCard";
function HCardList({ url, title, type, id }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                // console.log(data.results);
                setLoading(false);
            });
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById(id);
        console.log(slider);
        slider.scrollLeft = slider.scrollLeft - slider.clientWidth - 100;
        // console.log(slider.clientWidth);
    };

    const slideRight = () => {
        var slider = document.getElementById(id);
        console.log(slider);
        slider.scrollLeft = slider.scrollLeft + slider.clientWidth - 100;
        // console.log(slider.clientWidth);
    };

    return loading ? (
        <Loading />
    ) : (
        <div className={cl.listwrapper}>
            <h2 className={cl.title}>{title}</h2>
            <div className={cl.cardlistdiv} id={id}>
                {data?.map((ele, i) => {
                    return <HCard e={ele} key={i} />;
                })}
            </div>
            <div className="arrow_list">
                <div className={cl.leftarrowDiv} id="leftarrow">
                    <div className={cl.leftarrow} onClick={() => slideLeft()}>
                        <MdChevronLeft className={cl.lefticon} size={40} />
                    </div>
                </div>
                <div className={cl.rightarrowDiv} id="rightarrow">
                    <div className={cl.rightarrow} onClick={() => slideRight()}>
                        <MdChevronRight className={cl.righticon} size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HCardList;