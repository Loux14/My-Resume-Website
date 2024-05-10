import React from 'react';
import './Notable.css';

function Notable() {
    return (
        <div className="Introduction">
            <div className="PhotoIntro">

                <img src="photo_LucasG." alt="Lucas G" />
            </div>
            <div className="TextZoneIntro">
                <h1>uHack 2023 - Hackathon - First Prize</h1>
                <p>On the weekend of March 19th 2023, I was the leader of the winning team in UQO’s Hackathon “UHack”.</p>
                <p>We had 2 days, in a team of 5, to think and make (as much as we could) a technologic solution to help one of three problems given. I naturally took the lead of my team and proposed a website.
                    The problem to solve, was to help the CREDDO communicate with local cities about wind and solar energies possibilities on their land.
                    The ressources given were geomatic datas about wind and sun, maps with road and lands, but we had to find the other information necessary to install panels or turbines.
                    I was the one in charge of writing the website’s code.</p>
                <p>Then we created an interactive website to show each citizen the possibilities of alternatives energies on their lands.

                    That day, we each won a 2 nights stay at Dômes Outaouais.</p>
            </div>

        </div>
    );
}

export default Notable;
