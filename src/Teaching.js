import React from "react";
import "./Teaching.css";

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
            I was offered the opportunity to take charge of two groups of
            first-year Computer Science students at the Université du Québec en
            Outaouais. Under the supervision of Myria Bouhaddi, Ph.D., I
            conducted lab sessions, where I assisted students with the following
            subjects:
          </p>
        </div>
        <br></br>

        <div className="TeachingList">
          <ul>
            <li>Affine Cipher</li>
            <li>Substitution Cipher</li>
            <li>Polybius Square Cipher</li>
            <li>Permutation Cipher</li>
            <li>Vigenere Cipher</li>
            <li>Vernam Cipher</li>
            <li>Hill Cipher</li>
            <li>Feistel Cipher</li>
            <li>RSA Encryption</li>
            <li>DES Encryption</li>
          </ul>

          <ul>
            <li>TCP / IP Protocol</li>
            <li>IDS / IPS</li>
            <li>Firewall / IPtables</li>
            <li>OCTAVE Risk Assessment</li>
            <li>MEHARI Risk Assessment</li>
            <li>VPN</li>
            <li>Kali / Virtual Machines</li>
            <li>WireShark</li>
            <li>NMap</li>
            <li>Metasploit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teaching;
