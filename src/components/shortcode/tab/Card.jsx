const Card = ({ item }) => {
  if (!item) return null;

  return (
    <div className="card">
      <img src={item.image} alt="card" />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <small>Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default Card;
