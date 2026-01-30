import React from "react";
import "../../styles/Teaching.css";

function Teaching() {
  return (
    <div className="Teaching">
      <div className="TextZoneTeaching">
        <h1>Teacher Assistant</h1>
        <a
          href="https://etudier.uqo.ca/cours/description-cours/CYB1003"
          target="_blank"
          rel="noreferrer"
        >
          CYB1003 - Introduction to Cybersecurity
        </a>
        <h2>Summer 2024</h2>
        <div className="PhotoTeaching">
          <img src="cyb1003.jpg" alt="Cybersecurity" />
          <p>
            As a Teaching Assistant at Université du Québec en Outaouais, I led lab sessions for two groups of first-year Computer Science students under the supervision of Myria Bouhaddi, Ph.D.
            <br /><br />
            Topics covered included classical cryptography (Affine, Substitution, Polybius, Permutation, Vigenere, Vernam, Hill, Feistel), modern encryption (RSA, DES), network security (TCP/IP, IDS/IPS, Firewalls, VPN), risk assessment methodologies (OCTAVE, MEHARI), and hands-on tools such as Kali Linux, WireShark, NMap, and Metasploit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teaching;
