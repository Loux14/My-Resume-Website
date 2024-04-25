import React, {useState} from 'react';
import './References.css';

function References() {
  const refs = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
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
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {refs.map((item) => (
            <tr 
              key={item.id}
              className={selectedRow === item.id ? 'selected' : ''}
              onClick={() => handleRowClick(item.id)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default References;
