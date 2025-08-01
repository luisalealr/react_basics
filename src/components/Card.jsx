import style from "./Card.module.css";

const Card = ({ name, rol, imagen }) => {
  return (
    <div className={style.container}>
      <img src={imagen} alt="photo" />
      <div className={style.info}>
        <h2>{name}</h2>
        <strong>{rol}</strong>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        dicta, labore enim voluptates atque dignissimos quidem eos debitis at
        voluptatibus aspernatur nam doloribus vel error iusto quo recusandae
        deserunt! Quo?
      </p>
    </div>
  );
};

export default Card;
