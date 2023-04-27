import { Link } from 'react-router-dom'

function Detail({ element }) {

  return (
    <div>
      <h1>Page détail</h1>
      <h2>element.Titre</h2>
      <p>Description : element.Description</p>
      <p>Prix : element.Price</p>
    </div>
  );
}

export default Detail;