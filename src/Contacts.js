import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contact</h1>
      <div className="contact-info">
        <p>
          <strong>Phone</strong> <a href="tel:+18193512327"> 819 351 2327</a>
        </p>
        <p>
          <strong>Email</strong>{" "}
          <a
            href="mailto:lucas.gourlia@pm.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            lucas.gourlia@pm.me
          </a>
        </p>
        <br />
        <p>
          <strong>WebSite</strong>{" "}
          <a
            href="http://www.lucas-g.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.lucas-g.ca
          </a>
        </p>
        <p>
          <strong>LinkedIn</strong>{" "}
          <a
            href="https://www.linkedin.com/in/lucas-g-b28884306/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas G.
          </a>
        </p>
        <br />

        <p>
          <strong>GitHub</strong>{" "}
          <a
            href="https://github.com/Loux14"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loux14
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
