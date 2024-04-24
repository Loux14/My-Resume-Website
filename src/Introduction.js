import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <div className="Introduction">
      <div className="Photo">

        <img src="photo_LucasG.jpg" alt="Your Photo" />
      </div>
      <div className="TextZone">
        <h2>My name is Lucas, I’m 33 years old and I am a student
          in 2nd year in Computer Science.
        </h2>
        <p>After 10 year being an optician, a clinic manager and even an
          optics teacher, I’ve started a Computer Science Bachelor’s
          Degree in full-time at the University of Québec, Gatineau (QC)
          in January 2023, and I’m looking for a first experience.
        </p>
        <h2>
          What you can expect from me :
        </h2>
        <li>
          Analytic mind : I always try to find patterns in things, to understand 
          how things work and find similarities in things to exploit them. 
        </li>
        <li>
          Never late : to me, 10 minutes early is already late.
        </li>
        <li>
          Regularity : I like to find the best way to do a task, I try to replicate it.
        </li>
        <li>
          Open mind: I like having interaction with others, and learn from people having a
           different perspective. I easily accept when I’m wrong.
        </li>
        <li>
          Passionate : I’ve chosen computer science because I can spend my week in front of a 
          screen trying to resolve a problem, without counting hours.
        </li>
        <li>
          Competitor : I like to be challenged, this is why I’m participating at every university 
          competition I can. I’m not scared of short deadlines.
        </li>
        <li>
          Fun : I think working with nice colleagues and being able to catch quality time with teammates
           can make a difference between a simple job and great working experience.
        </li>
        <h2>What I am looking for :</h2>
        <li>Internship (4-8-12 months)</li>
        <li>Part-time job (until graduation)</li>
      </div>
      
    </div>
  );
}

export default Introduction;