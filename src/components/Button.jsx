import { Link } from "react-router-dom";

const Button = ({ text, image, alt, targetUrl }) => {
  return (
    <Link to={targetUrl}>
      <button className="button">{text ? text : <img src={image} alt={alt} />}</button>
    </Link>
  );
};

export default Button;
