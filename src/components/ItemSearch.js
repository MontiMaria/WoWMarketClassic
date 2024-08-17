import React, { useState } from 'react';

// Función para obtener datos de la API
async function fetchItemData(itemName) {
  const response = await fetch(`https://api.ejemplo.com/items?name=${itemName}`);
  const data = await response.json();
  return data;
}

// Componente de React
function ItemSearch() {
  const [itemName, setItemName] = useState('');
  const [itemData, setItemData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchItemData(itemName);
    setItemData(data);
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {itemData && (
        <div>
          <p>Precio: {itemData.price}</p>
          <p>Cantidad: {itemData.quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ItemSearch;