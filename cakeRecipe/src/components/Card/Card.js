import { useState } from "react";

import cardStyles from "./cardStyles";
import CardHeader from "./CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown as expandIconImg,
  faChevronUp as shrinkIconImg
} from "@fortawesome/free-solid-svg-icons";

function Card({ userImg, title, date, mainImage, description, recipe }) {
  const [expand, setExpand] = useState(false);

  function Icon({ img }) {
    return (
      <FontAwesomeIcon
        style={cardStyles.icon}
        icon={img}
        size="1x"
        onClick={() => setExpand(!expand)}
      />
    );
  }

  function toggleIcon() {
    if (!expand) {
      return <Icon img={expandIconImg} />;
    }
    return <Icon img={shrinkIconImg} />;
  }

  return (
    <div className="card" style={cardStyles.container}>
      <CardHeader userImg={userImg} title={title} date={date} />
      <section
        className="card__main-photo"
        style={cardStyles.mainPhotoContainer}
      >
        <img src={mainImage} alt="cake" style={cardStyles.mainPhoto} />
      </section>
      <section className="card__description" style={cardStyles.description}>
        <p>{description}</p>
      </section>
      <section className="card__icons" style={cardStyles.iconsContainer}>
        {toggleIcon()}
      </section>

      {expand && <p style={cardStyles.recipe}>{recipe}</p>}
    </div>
  );
}

export default Card;
