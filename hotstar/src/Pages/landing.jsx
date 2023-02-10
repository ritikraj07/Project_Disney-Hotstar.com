import React from 'react';
import Card from '../Components/Card';
import Bannercard from '../Components/Bannercard';
import Moviedetails from '../Components/Moviedetails';
import Moviedetailspage from './Moviedetailspage';

function Landing(props) {
    return (
        <div>
            <Moviedetailspage/>
            {/* <Moviedetails/> */}
            {/* <Bannercard />
            {<Card />} */}
        </div>
    );
}

export default Landing;