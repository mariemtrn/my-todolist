import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const handleAddElement = () => {
    if (input.trim()) {
      items.push(input);
      setItems(items);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Liste des éléments</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddElement}>Ajouter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
