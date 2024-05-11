import React from 'react';
import './Notable.css';

function Notable() {
    return (
        <div className="Notable">

            <div className="TextZoneNotable">
                <h1>First Prize - uHack 2023 - Hackathon</h1>
                <h2>On the weekend of March 19th 2023, I was the leader of the winning team in UQO’s Hackathon “UHack”.</h2>
                <div className="PhotoNotable">
                    <img src="victory.jpg" alt="uHack23" />
                    <img src="creddowebsite.jpg" alt="creddo" />
                </div>
             
                <p>We had 2 days, in a team of 5, to think and make (as much as we could) a technologic solution to help one of three problems given. I naturally took the lead of my team and proposed a website.
                    The problem to solve, was to help the CREDDO communicate with local cities about wind and solar energies possibilities on their land.
                    The ressources given were geomatic datas about wind and sun, maps with road and lands, but we had to find the other information necessary to install panels or turbines.
                    I was the one in charge of writing the website’s code.</p>
                <p>Then we created an interactive website to show each citizen the possibilities of alternatives energies on their lands.

                    That day, we each won a 2 nights stay at Dômes Outaouais.</p>
                <a href="https://uqo.ca/nouvelles/50536" target="_blank" rel="noreferrer" >https://uqo.ca/nouvelles/50536</a>
            </div>

        </div>
    );
}

export default Notable;
