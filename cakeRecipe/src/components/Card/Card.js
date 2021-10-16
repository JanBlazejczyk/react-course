import { useState } from "react";

import CardHeader from "./CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown as expandIconImg,
  faChevronUp as shrinkIconImg
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    border: "solid",
    borderRadius: "10px",
    borderColor: "#FFE5D9",
    width: "350px",
    backgroundColor: "#D8E2DC"
  },
  mainPhotoContainer: {
    height: "200px",
    marginTop: "10px"
  },
  mainPhoto: {
    width: "350px",
    height: "200px"
  },
  description: {
    height: "120px",
    textAlign: "left",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "#293241"
  },
  iconsContainer: {
    height: "30px",
    textAlign: "right",
    paddingRight: "20px"
  },
  icon: {
    cursor: "pointer"
  },
  recipe: {
    textAlign: "left",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "#293241"
  }
};

function Card({ userImg, title, date, mainImage, description, recipe }) {
  const [expand, setExpand] = useState(false);

  function Icon({ img }) {
    return (
      <FontAwesomeIcon
        style={styles.icon}
        icon={img}
        size="1x"
        onClick={() => setExpand(!expand)}
      />
    );
  }

  function toggleIcon() {
    if (!expand) {
      return <Icon img={expandIconImg} />;
    } else {
      return <Icon img={shrinkIconImg} />;
    }
  }

  return (
    <div className="card" style={styles.container}>
      <CardHeader userImg={userImg} title={title} date={date} />
      <section className="card__main-photo" style={styles.mainPhotoContainer}>
        <img src={mainImage} alt="dish" style={styles.mainPhoto} />
      </section>
      <section className="card__description" style={styles.description}>
        <p>{description}</p>
      </section>
      <section className="card__icons" style={styles.iconsContainer}>
        {toggleIcon()}
      </section>

      {expand && <p style={styles.recipe}>{recipe}</p>}
    </div>
  );
}

export default Card;
