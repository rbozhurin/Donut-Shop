const Donut = ({ donutImage, classes, handleClick, donutId }) => {
  if (!handleClick) {
    handleClick = (e) => {
      e.preventDefault();
    };
  }

  return (
    <img
      src={donutImage}
      alt=""
      className={classes + " drop-shadow"}
      onClick={(event) => handleClick(event)}
      data-donut-id={donutId}
    />
  );
};

export default Donut;
