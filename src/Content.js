import React, { useState } from 'react';
import Introduction from './Introduction';
import Resume from './Resume';
import Projects from "./Projects"
import References from './References'
import Contacts from './Contacts'
import './App.css'


function Content() {
  const [selectedItem, setSelectedItem] = useState('Introduction');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="Content">
      <div className="TopPanel">
        <ul>
          <li className={selectedItem === 'Introduction' ? 'active' : ''} onClick={() => handleItemClick('Introduction')}>Introduction</li>
          <li className={selectedItem === 'Resume' ? 'active' : ''} onClick={() => handleItemClick('Resume')}>Resume</li>
          <li className={selectedItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>Projects</li>
          <li className={selectedItem === 'References' ? 'active' : ''} onClick={() => handleItemClick('References')}>References</li>
          <li className={selectedItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
        </ul>
      </div>
      <div className="MainContent">

        {selectedItem === 'Introduction' && <Introduction />}
        {selectedItem === 'Resume' && <Resume />}
        {selectedItem === 'Projects' && <Projects />}
        {selectedItem === 'References' && <References />}
        {selectedItem === 'Contact' && <Contacts />}

      </div>
    </div>
  );
}


export default Content;
