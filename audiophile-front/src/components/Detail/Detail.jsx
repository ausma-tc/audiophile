

function Detail({ element }) {
  return (
    <div>
      <h2>{element.Title}</h2>
      <p>Description : {element.Description}</p>
      <p>Prix : {element.Price}</p>
    </div>
  );
}

export default Detail;