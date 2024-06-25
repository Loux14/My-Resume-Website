import React from 'react';
import './Teaching.css';

function Teaching() {
    return (
        <div className="Teaching">

            <div className="TextZoneTeaching">
                <h1>Teacher Assistant</h1>
                <a href="https://etudier.uqo.ca/cours/description-cours/CYB1003" target="_blank" rel="noreferrer" >CYB1003 - Introduction to Cybersecurity</a>
                <h2>Summer 2024</h2>
                <div className="PhotoTeaching">
                    <img src="cyb1003.jpg" alt="Cybersecurity" />
                    <p>I've been offered to take in charge two groups of first year students in Computer Science, at the Université du Québec en Outaouais.
                    Under the supervision of Myria Bouhaddi Ph.D, I was doing the lab sessions, where I was able to help the students with the following subjects :</p>
                
                </div>
                <br></br>
             
                
                <div className="TeachingList">
                <ul>            
                <li>Affine Cryptography</li>
                <li>Substitution Cryptography</li>
                <li>Polybe Square Cryptography</li>
                <li>Permutation Cryptography</li>
                <li>Vigenere Crypto</li>
                <li>Vernam</li>
                <li>Hill</li>
                <li>RSA</li>
                <li>Feistel</li>
                <li>DES</li>
                </ul>
    
                <ul>               
  
                <li>TCP/IP</li>
                <li>Vulnerabilities</li>
                <li>IDS/IPS</li>
                <li>Firewall ipTables</li>
                <li>OCTAVE MEHARI</li>
                <li>Access Control</li>
                <li>VPN</li>
                <li>Kali / VM</li>
                <li>WireShark Nmap</li>
                <li>Metasploit</li>
                </ul>
                </div>




                
            </div>

        </div>
    );
}

export default Teaching;
