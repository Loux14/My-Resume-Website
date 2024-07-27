import React from "react";
import "./Notable.css";

function Notable() {
  return (
    <div className="Notable">
      <div className="TextZoneNotable">
        <h1>First Prize - uHack 2023 Hackathon</h1>
        <h2>
          On the weekend of March 19th, 2023, I led the winning team at UQO’s
          Hackathon, “UHack.”
        </h2>
        <div className="PhotoNotable">
          <img src="victory.jpg" alt="uHack23" />
          <img src="creddowebsite.jpg" alt="creddo" />
        </div>

        <p>
          We had 2 days, in a team of 5, to develop a technological solution for
          one of three given problems. I proposed and coded an interactive
          website to help the CREDDO communicate with local cities about wind
          and solar energy possibilities on their land. Using geomatic data on
          wind and sun, and maps with roads and lands, we created a tool for
          citizens to explore alternative energy options on their property.
        </p>
        <p>
          Our project won first prize, including a 2-night stay at Dômes
          Outaouais.
        </p>
        <a
          href="https://uqo.ca/nouvelles/50536"
          target="_blank"
          rel="noreferrer"
        >
          https://uqo.ca/nouvelles/50536
        </a>
      </div>
    </div>
  );
}

export default Notable;
