import { useState, useEffect } from 'react'; 

function Liste({ elements }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:1337/api/products')
      .then(response => response.json())
      .then(r => setData(r.data));
    }, []);
    
    // console.log(data);

  return (
    <ul>
      {data && data.map(element => (
        <li key={element.id}>
          {element.attributes.Title} - <button to={`/element/${element.id}`}>Voir détails</button>
        </li>
      ))}
    </ul>
  );
}

export default Liste;