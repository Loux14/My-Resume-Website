import React, { useState } from 'react';

function Content() {
  const [selectedItem, setSelectedItem] = useState('Introduction');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <main className="Content">
      <div className="TopPanel">
        <ul>
          <li className={selectedItem === 'Introduction' ? 'active' : ''} onClick={() => handleItemClick('Introduction')}>Introduction</li>
          <li className={selectedItem === 'Resume' ? 'active' : ''} onClick={() => handleItemClick('Resume')}>Resume</li>
          <li className={selectedItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>Projects</li>
          <li className={selectedItem === 'References' ? 'active' : ''} onClick={() => handleItemClick('References')}>References</li>
          <li className={selectedItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
          {/* Add other menu items here */}
        </ul>
      </div>
      <div className="MainContent">
        {/* Render content based on the selected item */}
        {selectedItem === 'Introduction' && <IntroductionContent />}
        {selectedItem === 'Resume' && <ResumeContent />}
        {selectedItem === 'Projects' && <ProjectsContent />}
        {selectedItem === 'References' && <ReferencesContent />}
        {selectedItem === 'Contact' && <ContactContent />}
        {/* Add other content components here */}
      </div>
    </main>
  );
}

// Define your content components here
const IntroductionContent = () => <div>Introduction Content</div>;
const ResumeContent = () => <div>Resume Content</div>;
const ProjectsContent = () => <div>Projects Content</div>;
const ReferencesContent = () => <div>References Content</div>;
const ContactContent = () => <div>Contact Content</div>;

export default Content;
