const DestinationCard = ({ image, city, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={city} />

      <div className="card-overlay">
        <h3>{city}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;