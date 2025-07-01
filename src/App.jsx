import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('evaluaciones');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('evaluaciones', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (item) => {
    if (itemToEdit) {
      setItems(items.map(i => i.id === itemToEdit.id ? { ...item, id: itemToEdit.id } : i));
      setItemToEdit(null);
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id) => {
    const found = items.find(item => item.id === id);
    setItemToEdit(found);
  };

  return (
    <div className="app">
      <div className="form-container">
        <h2>Editar Evaluación</h2>
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      </div>
      <div className="list-container">
        <h3>Evaluaciones Guardadas</h3>
        {items.length === 0 ? (
          <p className="empty-msg">No hay evaluaciones guardadas aún. ¡Agrega una!</p>
        ) : (
          <List items={items} deleteItem={deleteItem} editItem={editItem} />
        )}
      </div>
    </div>
  );
}

export default App;