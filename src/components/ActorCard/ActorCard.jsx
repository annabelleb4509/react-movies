import './ActorCard.css'

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="item-card"
    >
      <div className="title">
        <h3>{actor}</h3>
      </div>
    </div>
  );
}

export default ActorCard