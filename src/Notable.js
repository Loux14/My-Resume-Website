import React from "react";
import "./Notable.css";

function Notable() {
  const openImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="Notable">
      {/* Section 1: CTF 2nd Place 2025 */}
      <div className="TextZoneNotable">
        <h1>2nd Place - uCTF 2025</h1>
        <h2>
          On November 28-29, 2025, I led team G0ne Ph1sh1ng at the University of Quebec in Outaouais' CTF competition, "uCTF."
        </h2>
        <div className="PhotoNotable">
          <img src="uctf1.png" alt="uCTF 2025" onClick={() => openImage("uctf1.png")} style={{ cursor: "pointer" }} />
          <img src="uctf2.png" alt="G0ne Ph1sh1ng Team" onClick={() => openImage("uctf2.png")} style={{ cursor: "pointer" }} />
          <img src="victory.jpg" alt="uCTF Competition" onClick={() => openImage("victory.jpg")} style={{ cursor: "pointer" }} />
        </div>

        <p>
          Over 24 hours, our team competed against 11 teams in various cybersecurity challenges.
          As team captain, I helped lead G0ne Ph1sh1ng to 2nd place overall, while personally
          ranking 3rd in individual points out of 40 participants.
        </p>
        <p>
          The challenges I successfully completed included SQL injection, Neo4J injection,
          reverse engineering, steganography, cryptography, social engineering, lock picking,
          and more.
        </p>
      </div>

      {/* Section 2: uHack 2023 */}
      <div className="TextZoneNotable">
        <h1>1st Place - uHack 2023 Hackathon</h1>
        <h2>
          On the weekend of March 19th, 2023, I led the winning team at UQO's
          Hackathon, "UHack."
        </h2>
        <div className="PhotoNotable">
          <img src="victory.jpg" alt="uHack23" onClick={() => openImage("victory.jpg")} style={{ cursor: "pointer" }} />
          <img src="creddowebsite.jpg" alt="creddo" onClick={() => openImage("creddowebsite.jpg")} style={{ cursor: "pointer" }} />
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
          Outaouais. I also participated in the 2024 and 2025 editions of uHack.
        </p>
        <a
          href="https://uqo.ca/nouvelles/50536"
          target="_blank"
          rel="noreferrer"
        >
          https://uqo.ca/nouvelles/50536
        </a>
      </div>

      {/* Section 3: CS Games 2024 */}
      <div className="TextZoneNotable">
        <h1>CS Games Montreal 2024</h1>
        <h2>
          I represented UQO in the Theoretical Computer Sciences event at the CS Games in Montreal in 2024.
        </h2>
        <div className="PhotoNotable">
          <img src="csgames1.jpg" alt="CS Games 2024" onClick={() => openImage("csgames1.jpg")} style={{ cursor: "pointer" }} />
        </div>

        <p>
          The CS Games is an interuniversity competition bringing together universities from
          Canada and the USA, with about 15 institutions participating. Each challenge was
          completed in pairs, matching a senior student with a beginner. I was the senior
          member of my team for the Theoretical Computer Sciences event.
        </p>
      </div>
    </div>
  );
}

export default Notable;
