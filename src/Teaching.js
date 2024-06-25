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
                    <p>I've been offered to take charge of 2 groups of first year students in Computer Science, at the Université du Québec en Outaouais.
                    Under the supervision of Myria Bouhaddi PhD, I was in charge of the lab sessions, where I was able to help the students with the following subjects :</p>
                
                </div>
                <br></br>
             
                
                <div className="TeachingList">
                <ul>            
                <li>Vigenere Cryptography</li>
                <li>Substitution Cryptography</li>
                <li>DES Cryptography</li>
                <li>Public Key Cryptography</li>
                <li>Hash Functions</li>
                <li>Firewall</li>
                <li>IDS</li>
                <li>VPN</li>
                <li>PKI</li></ul>
    
                <ul>               
                <li>Security Protocols</li>
                <li>Security Policies</li>
                <li>Security Standards</li>
                <li>Security Risks</li>
                <li>Security Management</li>
                <li>Security Audits</li>
                <li>Security Incident Management</li>
                <li>Security Incident Response</li>
                <li>Security Incident Investigation</li>
                </ul>
                </div>


                
            </div>

        </div>
    );
}

export default Teaching;
