import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import cl from '../CSS/CardList.module.css'

function CardList({url, title, type, id}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                console.log(data.results)
                setLoading(false);
            });
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft - slider.clientWidth - 100;
        // console.log(slider.clientWidth);
    };

    const slideRight = () => {
        var slider = document.getElementById(id);
        slider.scrollLeft = slider.scrollLeft + slider.clientWidth - 100;
        // console.log(slider.clientWidth);
    };

    return loading ? (
        <Loading />
    ) : (
            <div className={cl.listwrapper}>
                <h2 className={cl.title} >{title}</h2>
                <div className={cl.cardlistdiv} >{
                    data?.map((ele, i) => {
                        {/* if (i > 8) {
                            return <></>
                        } */}
                        return (
                            <Card e={ele} />
                        )
                    })
                }</div>
        </div>
            
    );
}

export default CardList;