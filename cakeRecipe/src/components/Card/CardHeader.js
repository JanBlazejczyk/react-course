const styles = {
  container: {
    // border: "solid",
    height: "15%",
    display: "flex"
  },
  user: {
    // border: "solid",
    width: "60px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    marginTop: "10px"
  },
  title: {
    marginLeft: "15px",
    textAlign: "left"
  },
  titleDate: {
    color: "#495057"
  },
  image: {
    width: "60px",
    height: "auto",
    borderRadius: "50%"
  }
};

function CardHeader({ userImg, title, date }) {
  return (
    <div className="card__header" style={styles.container}>
      <div className="card__user-img" style={styles.user}>
        <img src={userImg} alt="User profile" style={styles.image} />
      </div>
      <div className="card__title" style={styles.title}>
        <p>
          <span className="card__title--title">{title}</span>
          <br />
          <span className="card__title--date" style={styles.titleDate}>
            {date}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardHeader;
