import React from "react";
import "../../styles/Introduction.css";

function Introduction() {
  return (
    <div className="Introduction">
      <div className="PhotoIntro">
        <img src="photo_LucasG.jpg" alt="Lucas G" />
      </div>
      <div className="TextZoneIntro">
        <h2>My name is Lucas, and I'm a 3rd-year Computer Science student specializing in cybersecurity.</h2>
        <p>
          After 10 years as an optician, clinic manager, and optics teacher, I
          began a full-time Bachelor's Degree in Computer Science at the
          Université du Québec en Outaouais, Gatineau (QC), in January 2023. I will graduate in April 2026 with a GPA of 4.06/4.30.
        </p>
        <div className="CertSection">
          <img src="secplus.png" alt="CompTIA Security+" className="cert-logo" />
          <p>
            I hold a CompTIA Security+ certification and actively participate in CTF competitions and hackathons to sharpen my skills. I am currently specializing in cloud security, with a focus on threat detection and incident response.
          </p>
        </div>
        <h2>What you can expect from me :</h2>
        <li>
          <b>Analytical Mind:</b> I always try to find patterns, understand how
          things work, and identify similarities to exploit them.
        </li>
        <li>
          <b>Punctuality:</b> To me, being 10 minutes early is already late.
        </li>
        <li>
          <b>Consistency:</b> I like to find the best way to perform a task and
          then consistently replicate it.
        </li>
        <li>
          <b>Open-Mindedness:</b> I enjoy interacting with others and learning
          from different perspectives. I easily accept when I'm wrong.
        </li>
        <li>
          <b>Passionate:</b> I chose computer science because I can spend my
          week in front of a screen solving problems without counting the hours.
        </li>
        <li>
          <b>Competitiveness:</b> I thrive on challenges and participate in
          every university competition I can. I'm not afraid of short deadlines.
        </li>
        <li>
          <b>Team Spirit:</b> I believe that working with great colleagues and
          enjoying quality time with teammates can make the difference between a
          simple job and a great working experience.
        </li>

        <li>
          <b>Languages:</b> 🇫🇷French (native), 🇬🇧English (fluent), 🇲🇽Spanish
          (functional)
        </li>
      </div>
    </div>
  );
}

export default Introduction;
