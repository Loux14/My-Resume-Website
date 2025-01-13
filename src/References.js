import React, { useState } from 'react';
import './References.css';

function References() {
  const refs = [
    { name: 'Mr. Eric N.', role: 'Supervisor', period: 'present', place: 'Lavue.ca', contact: '**Available on demand**', language: 'FR-EN' },
    { name: 'Ms. Caroline Lafrance', role: 'Supervisor', period: '2022-2024', place: 'La Lunetterie Locale', contact: '819-500-2448', language: 'FR-EN' },
    { name: 'Dre. Laudy El-Howayek', role: 'Employer', period: '2022-2024', place: 'La Lunetterie Locale', contact: 'info@lalunetterielocale.ca', language: 'FR-EN' },
    { name: 'Ms. Emilie Baillargeon', role: 'Operations Director', period: '2021-2022', place: 'Entrepot de la Lunette', contact: '514-758-6769', language: 'FR-EN' },
    { name: 'Mr. Jean-Laurent Boulon ', role: 'Regional Manager', period: '2021-2022', place: 'Entrepot de la Lunette', contact: 'jlovar83@gmail.com', language: 'FR-EN' },
    { name: 'Ms. Othis Matunguila', role: 'Employee', period: '2021-2022', place: 'Entrepot de la Lunette', contact: '343-204-2702', language: 'FR' },
    { name: 'Ms. Katia Dumaine', role: 'Employee', period: '2021-2022', place: 'Entrepot de la Lunette', contact: '819-744-1043', language: 'FR-EN' },
    { name: 'Dre. Carolina Quintana-Giraldo', role: 'Colleague', period: '2020-2021', place: 'Clinique de Touraine', contact: 'carolinaquintanagiraldo@hotmail.com', language: 'FR-EN' },
    { name: 'Mr. Thomas Leclercq', role: 'Supervisor', period: '2020', place: 'Visique', contact: 'thomas.lcq94@gmail.com', language: 'FR-EN' },
  ];

  const [selectedRow, setSelectedRow] = useState(null);

  // Fonction pour mettre à jour l'ID de la ligne sélectionnée
  const handleRowClick = (id) => {
    if (selectedRow === id) {
      setSelectedRow(null); // Déselectionne si déjà sélectionné
    } else {
      setSelectedRow(id); // Sinon, sélectionne la ligne
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Period</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {refs.map((item) => (
            <tr
              key={item.name}
              className={selectedRow === item.name ? 'selected' : ''}
              onClick={() => handleRowClick(item.name)}
            >
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.period}</td>
              <td>{item.place}</td>
              <td className={selectedRow === item.name ? 'selectedContact' : ''}>{item.contact}</td>
              <td>{item.language}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default References;
