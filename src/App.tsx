import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addElement } from '@store/actions.store';
import { RootState } from '@store/types.store';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  const handleAddElement = () => {
    if (input.trim()) {
      dispatch(addElement(input));
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
