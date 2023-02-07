import React from 'react';
import Card from '../Components/Card';
import Footer from '../Components/footer';

function Landing(props) {
    return (
        <div>
            <Card />
            {/* map header videos  */}
            <section>
                {/* map cards for Latest & Trending */}
            </section>
            <section>
                {/* map cards for Best in Spoorts */}
            </section>
            <section>
                {/* map cards for Popular Shows */}
            </section>
            <section>
                {/* map cards for Popular in Action */}
            </section>
            <section>
                {/* map cards for Popular Movies */}
            </section>
            <section>
                {/* Top Free Movies */}
            </section>
            <section>
                <Footer />
            </section>

        </div>
    );
}

export default Landing;