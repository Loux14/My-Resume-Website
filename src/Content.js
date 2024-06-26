import React, { useState } from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import Projects from "./Projects"
import References from './References'
import Contacts from './Contacts'
import Skills from './Skills'
import Notable from './Notable'
import Teaching from './Teaching'
import './App.css'

function Content() {
  const [selectedItem, setSelectedItem] = useState('Introduction');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Content">
      <div className="TopPanel">
      <div className="NameMenu"><a href="http://www.lucas-g.ca" rel="noopener noreferrer">Lucas G</a></div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={menuOpen ? 'show' : ''}>
          <li className={selectedItem === 'Introduction' ? 'active' : ''} onClick={() => handleItemClick('Introduction')}>Introduction</li>
          <li className={selectedItem === 'Skills' ? 'active' : ''} onClick={() => handleItemClick('Skills')}>Skills</li>
          <li className={selectedItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>Projects</li>
          <li className={selectedItem === 'Resume' ? 'active' : ''} onClick={() => handleItemClick('Resume')}>Documents</li>
          <li className={selectedItem === 'Notable' ? 'active' : ''} onClick={() => handleItemClick('Notable')}>Prizes</li>
          <li className={selectedItem === 'Teaching' ? 'active' : ''} onClick={() => handleItemClick('Teaching')}>Teaching</li>
          <li className={selectedItem === 'References' ? 'active' : ''} onClick={() => handleItemClick('References')}>References</li>
          <li className={selectedItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
        </ul>
      </div>
      <div className="MainContent">
        {selectedItem === 'Introduction' && <Introduction />}
        {selectedItem === 'Resume' && <Resume />}
        {selectedItem === 'Projects' && <Projects />}
        {selectedItem === 'Skills' && <Skills />}
        {selectedItem === 'Notable' && <Notable />}
        {selectedItem === 'Teaching' && <Teaching />}
        {selectedItem === 'References' && <References />}
        {selectedItem === 'Contact' && <Contacts />}
      </div>
    </div>
  );
}

export default Content;
