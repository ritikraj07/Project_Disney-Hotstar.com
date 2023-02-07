import React from 'react';
import Card from '../Components/Card';
import Bannercard from '../Components/Bannercard';

function Landing(props) {
    return (
        <div>
            <Bannercard/>
            {<Card />}
        </div>
    );
}

export default Landing;